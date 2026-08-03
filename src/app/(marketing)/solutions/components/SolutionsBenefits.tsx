"use client";

import { m } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { solutionsBenefits } from "@/data/solutions-page";
import { cn } from "@/lib/utils";

export function SolutionsBenefits() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {solutionsBenefits.map((benefit, idx) => {
        const Icon = benefit.icon;
        return (
          <FadeIn key={benefit.title} delay={idx * 0.04} className="h-full">
            <m.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "group flex h-full flex-col rounded-2xl p-6",
                "bg-white border border-neutral-200",
                "transition-all duration-300 hover:border-accent-400/40 hover:bg-neutral-900"
              )}
            >
              <Icon className="h-6 w-6 text-accent-400 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="font-display mt-4 text-lg font-bold text-neutral-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {benefit.description}
              </p>
            </m.div>
          </FadeIn>
        );
      })}
    </div>
  );
}
