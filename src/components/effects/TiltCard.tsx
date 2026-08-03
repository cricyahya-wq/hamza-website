"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { m, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useFancyEffects } from "@/hooks/useFancyEffects";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  max?: number;
}

export function TiltCard({ children, className, max = 8 }: TiltCardProps) {
  const enabled = useFancyEffects();
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const rotateX = useSpring(
    useTransform(py, [0, 1], [max, -max]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(px, [0, 1], [-max, max]),
    springConfig,
  );

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <m.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </m.div>
  );
}
