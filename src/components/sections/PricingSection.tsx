"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { PricingCard } from "@/components/ui/PricingCard";
import { Button } from "@/components/ui/Button";
import { pricingPlans } from "@/data/pricing";

export function PricingSection() {
  return (
    <Section id="pricing" className="bg-background py-24 sm:py-32 relative overflow-hidden border-b border-border scroll-mt-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center mb-16 sm:mb-20">
          <span className="mb-4 inline-block text-sm font-semibold tracking-[0.15em] text-accent-500 uppercase">
            TRANSPARENT PRICING
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Simple Pricing That Scales With You.
          </h2>
          <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed max-w-3xl mx-auto">
            No hidden setup fees, no complicated tiers. Pay per seat and upgrade smoothly as your team and call volume grow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <FadeIn key={plan.name} delay={index * 0.1} className="h-full">
              <PricingCard {...plan} className="h-full" />
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/pricing" variant="outline-dark" size="lg" className="hover:border-accent-400">
            View Complete Plan Comparison & FAQ
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
