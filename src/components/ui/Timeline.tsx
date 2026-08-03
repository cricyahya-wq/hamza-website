"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export interface TimelineStep {
  icon?: ReactNode;
  title: string;
  description: string;
}

export function Timeline({ steps }: { steps: TimelineStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const fill = fillRef.current;
    if (!container || !fill) return;

    gsap.set(fill, { scaleY: 0, transformOrigin: "top" });

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top 75%",
      end: "bottom 65%",
      scrub: 0.6,
      onUpdate: (self) => {
        gsap.set(fill, { scaleY: self.progress });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [steps]);

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute top-0 bottom-0 left-5 w-px bg-neutral-800" />
      <div
        ref={fillRef}
        className="bg-accent-400 absolute top-0 left-5 w-px will-change-transform"
        style={{ height: "100%" }}
      />
      <div className="space-y-10">
        {steps.map((step, index) => (
          <FadeIn
            key={step.title}
            delay={index * 0.1}
            className="relative pl-16"
          >
            <div className="border-accent-400/30 bg-white text-accent-400 absolute left-0 flex size-10 items-center justify-center rounded-full border">
              {step.icon ?? (
                <span className="font-display text-sm font-semibold">
                  {index + 1}
                </span>
              )}
            </div>
            <h3 className="font-display text-lg font-semibold text-neutral-900">
              {step.title}
            </h3>
            <p className="mt-1.5 leading-relaxed text-neutral-600">
              {step.description}
            </p>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
