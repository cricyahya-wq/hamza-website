"use client";

import { useMediaQuery } from "./useMediaQuery";

/**
 * Gates cursor-driven / decorative effects (tilt, magnetic buttons, custom
 * cursor, mouse glow) behind a fine pointer and no reduced-motion preference,
 * so touchscreens and accessibility settings get a calmer, cheaper experience.
 */
export function useFancyEffects() {
  const hasFinePointer = useMediaQuery("(pointer: fine)");
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
  );

  return hasFinePointer && !prefersReducedMotion;
}
