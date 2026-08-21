"use client";

import { m } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { whyChooseMoosepbx } from "@/data/industries-page";

export function WhyChooseIndustries() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {whyChooseMoosepbx.map((feature, idx) => {
        const Icon = feature.icon;
        return (
          <FadeIn key={feature.title} delay={idx * 0.04} className="h-full">
            <m.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group flex h-full flex-col rounded-3xl bg-surface-alt border border-border p-8 transition-colors hover:border-[#315FE8]/40 hover:bg-background"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background border border-border transition-colors group-hover:border-[#315FE8]/30 group-hover:bg-[#315FE8]/10">
                <Icon className="h-6 w-6 text-neutral-500 transition-colors group-hover:text-[#315FE8]" />
              </div>
              <h3 className="font-display mt-6 text-xl font-bold text-foreground group-hover:text-[#315FE8] transition-colors">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                {feature.description}
              </p>
            </m.div>
          </FadeIn>
        );
      })}
    </div>
  );
}
