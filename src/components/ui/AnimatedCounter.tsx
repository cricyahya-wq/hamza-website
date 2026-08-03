"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const decimals = value % 1 !== 0 ? 2 : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const counter = { val: 0 };
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          val: value,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${prefix}${counter.val.toFixed(decimals)}${suffix}`;
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [value, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
