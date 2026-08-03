"use client";

import { useEffect, useRef } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";
import { useFancyEffects } from "@/hooks/useFancyEffects";
import { cn } from "@/lib/utils";

const GLOW_SIZE = 576;

interface MouseGlowProps {
  className?: string;
  color?: string;
}

export function MouseGlow({ className, color = "#4cc9f0" }: MouseGlowProps) {
  const enabled = useFancyEffects();
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-GLOW_SIZE);
  const y = useMotionValue(-GLOW_SIZE);
  const springX = useSpring(x, { damping: 35, stiffness: 220, mass: 0.6 });
  const springY = useSpring(y, { damping: 35, stiffness: 220, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;
    const el = containerRef.current;
    if (!el) return;

    const onMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      x.set(event.clientX - rect.left - GLOW_SIZE / 2);
      y.set(event.clientY - rect.top - GLOW_SIZE / 2);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <m.div
        className="absolute rounded-full blur-[90px] will-change-transform"
        style={{
          x: springX,
          y: springY,
          width: GLOW_SIZE,
          height: GLOW_SIZE,
          background: `radial-gradient(circle, ${color}22, transparent 70%)`,
        }}
      />
    </div>
  );
}
