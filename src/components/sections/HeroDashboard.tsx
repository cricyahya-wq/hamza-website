"use client";

import { m } from "framer-motion";
import { Bot, Cloud, Headset, type LucideIcon, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingChipProps {
  icon: LucideIcon;
  className?: string;
  duration?: number;
  delay?: number;
}

function FloatingChip({
  icon: Icon,
  className,
  duration = 5,
  delay = 0,
}: FloatingChipProps) {
  return (
    <m.div
      className={cn(
        "absolute hidden items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/30 backdrop-blur-md lg:flex",
        "size-12 text-accent-300",
        className,
      )}
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <Icon className="size-5" />
    </m.div>
  );
}

export function HeroDashboard() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <FloatingChip icon={Phone} className="top-4 left-0" delay={0} />
      <FloatingChip
        icon={Headset}
        className="top-1/3 right-0"
        duration={6}
        delay={0.6}
      />
      <FloatingChip
        icon={Cloud}
        className="bottom-10 left-4"
        duration={5.5}
        delay={1.1}
      />
      <FloatingChip icon={Bot} className="right-6 bottom-0" duration={6.5} delay={0.3} />
    </div>
  );
}
