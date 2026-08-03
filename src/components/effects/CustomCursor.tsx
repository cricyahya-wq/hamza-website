"use client";

import { useEffect, useState } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";
import { useFancyEffects } from "@/hooks/useFancyEffects";

export function CustomCursor() {
  const enabled = useFancyEffects();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.5 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setHovering(
        !!target?.closest(
          "a, button, [role='button'], input, textarea, select",
        ),
      );
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <m.div
        aria-hidden
        className="bg-accent-400 pointer-events-none fixed top-0 left-0 z-[999] size-2 rounded-full"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      <m.div
        aria-hidden
        className="border-accent-400/50 pointer-events-none fixed top-0 left-0 z-[999] rounded-full border"
        animate={{
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32,
          opacity: hovering ? 0.9 : 0.5,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
