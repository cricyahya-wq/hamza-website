"use client";

import { m } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { generalBenefits } from "@/data/industries-page";
import { cn } from "@/lib/utils";

export function BenefitsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {generalBenefits.map((benefit, idx) => {
        const Icon = benefit.icon;
        return (
          <FadeIn key={benefit.title} delay={idx * 0.04} className="h-full">
            <m.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "group flex h-full flex-col rounded-2xl p-6",
                "bg-surface-alt border border-border",
                "transition-all duration-300 hover:border-[#315FE8]/40 hover:bg-background hover:shadow-[0_0_20px_rgba(49,95,232,0.1)]"
              )}
            >
              <Icon className="h-6 w-6 text-[#315FE8] transition-transform duration-300 group-hover:scale-110" />
              <h3 className="font-display mt-4 text-lg font-bold text-foreground group-hover:text-[#315FE8] transition-colors">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {benefit.description}
              </p>
            </m.div>
          </FadeIn>
        );
      })}
    </div>
  );
}
