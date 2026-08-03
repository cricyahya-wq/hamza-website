"use client";

import { HeroGlobe } from "@/components/three/HeroGlobe";
import { HeroDashboard } from "@/components/sections/HeroDashboard";
import { useFancyEffects } from "@/hooks/useFancyEffects";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function HeroVisual() {
  const interactive = useFancyEffects();
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <div className="relative size-full flex items-center justify-center">
      {/* 3D Background Globe */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen pointer-events-none">
        <HeroGlobe interactive={interactive} reducedMotion={reducedMotion} />
      </div>
      
      {/* Foreground Dashboard UI */}
      <div className="relative z-10 w-full pointer-events-auto">
        <HeroDashboard />
      </div>
    </div>
  );
}
