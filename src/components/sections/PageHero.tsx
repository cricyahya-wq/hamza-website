"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { gsap, SplitText } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { AnimatedGrid } from "@/components/effects/AnimatedGrid";
import { MorphingBlob } from "@/components/effects/MorphingBlob";
import { ParticleField } from "@/components/effects/ParticleField";
import { MouseGlow } from "@/components/effects/MouseGlow";
import type { Stat } from "@/types";

const glowVariants = {
  primary: {
    blobA: ["from-primary-500/30", "to-accent-500/10"],
    blobB: ["from-accent-500/20", "to-primary-500/10"],
    glowColor: "#3f8fbb",
  },
  secondary: {
    blobA: ["from-secondary-500/30", "to-primary-500/10"],
    blobB: ["from-primary-500/20", "to-secondary-500/10"],
    glowColor: "#4b93bb",
  },
  accent: {
    blobA: ["from-accent-500/25", "to-secondary-500/10"],
    blobB: ["from-secondary-500/20", "to-accent-500/10"],
    glowColor: "#4cc9f0",
  },
} as const;

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  variant?: keyof typeof glowVariants;
  stats?: Stat[];
  actions?: ReactNode;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  variant = "primary",
  stats,
  actions,
  className,
}: PageHeroProps) {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const { blobA, blobB, glowColor } = glowVariants[variant];

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;

    const split = new SplitText(el, {
      type: "lines",
      linesClass: "hero-line",
      mask: "lines",
    });

    gsap.set(split.lines, { yPercent: 110, opacity: 0 });
    gsap.to(split.lines, {
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.1,
    });

    return () => {
      split.revert();
    };
  }, [title]);

  return (
    <section
      className={cn(
        "bg-surface-alt relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24",
        className,
      )}
    >
      <AnimatedGrid />
      <MorphingBlob
        className="-top-20 left-1/3"
        from={blobA[0]}
        to={blobA[1]}
      />
      <MorphingBlob
        className="top-24 right-1/4 size-[24rem]"
        from={blobB[0]}
        to={blobB[1]}
      />
      <ParticleField count={25} />
      <MouseGlow color={glowColor} />

      <Container className="mx-auto max-w-3xl text-center">
        <FadeIn className="flex justify-center">
          <Badge>{eyebrow}</Badge>
        </FadeIn>
        <h1
          ref={headlineRef}
          className="font-display mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
        >
          {title}
        </h1>
        {description && (
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
              {description}
            </p>
          </FadeIn>
        )}
        {actions && (
          <FadeIn
            delay={0.3}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            {actions}
          </FadeIn>
        )}
        {stats && stats.length > 0 && (
          <FadeIn
            delay={0.4}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-2 text-xs text-neutral-400 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </FadeIn>
        )}
      </Container>
    </section>
  );
}
