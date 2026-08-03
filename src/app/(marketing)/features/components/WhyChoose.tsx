"use client";

import { m } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { whyChooseFeatures } from "@/data/features-page";

export function WhyChoose() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {whyChooseFeatures.map((feature, idx) => {
        const Icon = feature.icon;
        return (
          <FadeIn key={feature.title} delay={idx * 0.05} className="h-full">
            <m.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group flex h-full flex-col rounded-3xl bg-white border border-neutral-200 p-8 transition-colors hover:border-accent-400/30 hover:bg-neutral-900"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-neutral-200 transition-colors group-hover:border-accent-400/30 group-hover:bg-accent-400/10">
                <Icon className="h-6 w-6 text-neutral-400 transition-colors group-hover:text-accent-400" />
              </div>
              <h3 className="font-display mt-6 text-xl font-bold text-neutral-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {feature.description}
              </p>
            </m.div>
          </FadeIn>
        );
      })}
    </div>
  );
}
