"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { securityFeatures } from "@/data/features-page";
import { CheckCircle2 } from "lucide-react";

export function SecurityReliability() {
  return (
    <div className="mx-auto mt-16 max-w-5xl">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {securityFeatures.map((feature, idx) => (
          <FadeIn key={feature} delay={idx * 0.05} className="h-full">
            <div className="flex h-full items-start gap-4 rounded-2xl bg-white border border-neutral-200 p-6 transition-colors hover:border-accent-400/30">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-400" />
              <span className="text-sm font-medium leading-tight text-neutral-200">
                {feature}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
