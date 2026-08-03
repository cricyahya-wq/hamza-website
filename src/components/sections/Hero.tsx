"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { m } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { gsap, ScrollTrigger, SplitText } from "@/lib/gsap";
import { siteConfig } from "@/config/site";
import { AnimatedGrid } from "@/components/effects/AnimatedGrid";
import { Aurora } from "@/components/effects/Aurora";
import { ParticleField } from "@/components/effects/ParticleField";
import { MouseGlow } from "@/components/effects/MouseGlow";
import { MagneticButton } from "@/components/effects/MagneticButton";

const HeroVisual = dynamic(
  () =>
    import("@/components/sections/HeroVisual").then((mod) => mod.HeroVisual),
  { ssr: false },
);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

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
      duration: 1,
      stagger: 0.12,
      ease: "power3.out",
      delay: 0.15,
    });

    return () => {
      split.revert();
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const parallax = parallaxRef.current;
    if (!section || !parallax) return;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      scrub: 0.6,
      onUpdate: (self) => {
        gsap.set(parallax, { yPercent: self.progress * 18 });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[linear-gradient(to_bottom,#071923,#0C2434,#071923)]"
    >
      <div ref={parallaxRef} className="will-change-transform">
        <AnimatedGrid />
        <Aurora />
      </div>
      
      {/* Subtle radial blue glow behind illustration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 h-[800px] w-[800px] rounded-full bg-primary-600/10 blur-[120px] pointer-events-none" />

      <ParticleField count={20} />
      <MouseGlow />

      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <h1 className="font-display text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-[5.5rem] lg:leading-none">
              MOOSEPBX
            </h1>
          </m.div>

          <h2
            ref={headlineRef}
            className="mt-6 text-2xl font-medium tracking-tight text-white/90 sm:text-3xl lg:text-4xl"
          >
            Call center software that scales with your business
          </h2>

          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            {siteConfig.tagline}
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton>
              <Button href="#contact" variant="cta" size="lg">
                Get a demo
                <ArrowRight className="size-4" />
              </Button>
            </MagneticButton>
            <Button href="#products" variant="cta" size="lg">
              Explore products
            </Button>
          </m.div>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 text-sm text-white/50"
          >
            No credit card required &middot; Live in as little as 2 weeks
          </m.p>
        </div>

        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden aspect-square w-full lg:block"
        >
          <HeroVisual />
        </m.div>
      </Container>
    </section>
  );
}
