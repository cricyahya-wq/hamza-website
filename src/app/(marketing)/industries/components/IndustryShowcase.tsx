"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { industryShowcases } from "@/data/industries-page";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export function IndustryShowcase() {
  return (
    <div className="space-y-32">
      {industryShowcases.map((showcase, index) => {
        const isEven = index % 2 === 0;
        const Icon = showcase.icon;

        return (
          <Container key={showcase.id}>
            <div
              className={cn(
                "grid gap-12 lg:grid-cols-2 lg:gap-24",
                !isEven && "lg:grid-cols-[1fr_1fr] lg:rtl"
              )}
            >
              {/* Visual Side */}
              <FadeIn className={cn(!isEven && "lg:col-start-2")}>
                <div className="group relative h-full min-h-[400px] w-full overflow-hidden rounded-3xl bg-white border border-neutral-200">
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-20 transition-opacity duration-700 group-hover:opacity-40",
                      showcase.color
                    )}
                  />
                  <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay" />
                  
                  {/* Decorative Elements */}
                  <div className="absolute -left-1/4 top-1/4 h-1/2 w-1/2 rotate-12 rounded-[40px] bg-white/5 shadow-2xl backdrop-blur-3xl transition-transform duration-700 group-hover:rotate-45" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 shadow-2xl backdrop-blur-md ring-1 ring-white/20">
                      <Icon className="h-12 w-12 text-neutral-900" />
                    </div>
                    
                    <div className="w-full max-w-sm space-y-3">
                      {showcase.features.map((feature, i) => (
                        <div key={i} className="flex items-center justify-between rounded-xl bg-neutral-950/50 border border-neutral-200 p-4 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02]">
                          <span className="text-sm font-medium text-neutral-200">{feature}</span>
                          <CheckCircle2 className="h-4 w-4 text-accent-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Content Side */}
              <FadeIn
                className={cn("flex flex-col justify-center", !isEven && "lg:col-start-1 lg:ltr")}
                delay={0.1}
              >
                <div className={cn("max-w-xl", !isEven && "lg:ml-auto")}>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                    {showcase.title}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-neutral-600">
                    {showcase.overview}
                  </p>

                  <div className="mt-10 grid gap-8 sm:grid-cols-2">
                    <div>
                      <h3 className="font-display text-sm font-bold tracking-wider text-rose-400 uppercase">
                        Challenges
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {showcase.challenges.map((challenge, i) => (
                          <li key={i} className="flex gap-3 text-sm text-neutral-400">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500/50" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-display text-sm font-bold tracking-wider text-emerald-400 uppercase">
                        Solutions
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {showcase.solutions.map((solution, i) => (
                          <li key={i} className="flex gap-3 text-sm text-neutral-400">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/50" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 rounded-2xl bg-accent-400/5 border border-accent-400/20 p-6">
                    <h3 className="font-display text-sm font-bold text-accent-400">
                      Expected Benefits
                    </h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {showcase.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                          <CheckCircle2 className="h-4 w-4 text-accent-400" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        );
      })}
    </div>
  );
}
