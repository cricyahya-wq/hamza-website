"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { integrations } from "@/data/features-page";

export function IntegrationsGrid() {
  return (
    <div className="mx-auto mt-16 max-w-5xl">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {integrations.map((integration, idx) => (
          <FadeIn key={integration} delay={idx * 0.05} className="h-full">
            <div className="group flex h-24 items-center justify-center rounded-2xl bg-white border border-neutral-200 transition-all hover:border-accent-400/40 hover:bg-accent-400/5">
              <span className="font-display font-medium text-neutral-600 group-hover:text-white transition-colors">
                {integration}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
