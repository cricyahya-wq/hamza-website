"use client";

import { ArrowRight, Bot, Sparkles } from "lucide-react";
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
            CALL CENTER PRICING
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Transparent Call Center Plans That Scale.
          </h2>
          <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed max-w-3xl mx-auto">
            No hidden setup fees or rigid tiers. Flexible pricing for cloud PBX, high-volume dialers, and conversational AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <FadeIn key={plan.name} delay={index * 0.1} className="h-full">
              <PricingCard {...plan} className="h-full" />
            </FadeIn>
          ))}
        </div>

        {/* AI Voice Agent & Bot Highlight Banner */}
        <FadeIn delay={0.3} className="mt-12 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-[#315FE8]/30 bg-gradient-to-r from-[#315FE8]/10 via-card to-[#315FE8]/5 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-xl bg-[#315FE8]/10 border border-[#315FE8]/20 flex items-center justify-center shrink-0">
                <Bot className="size-6 text-[#315FE8]" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#315FE8] bg-[#315FE8]/10 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Sparkles className="size-3" /> AI Voice Agent & AI Bot
                  </span>
                  <span className="text-xs font-bold text-[#2BC48A] bg-[#2BC48A]/10 px-2.5 py-0.5 rounded-full">
                    $45 / Agent / Month
                  </span>
                </div>
                <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                  Automate incoming customer inquiries and high-velocity outbound calls. Intelligent AI bots with sub-500ms voice response, smart IVR, and seamless human agent transfer for <strong>$45 per agent seat / month</strong>.
                </p>
              </div>
            </div>
            <Button href="/contact?reason=ai-bot" variant="primary" size="md" className="shrink-0 whitespace-nowrap">
              Deploy AI Voice Agent
              <ArrowRight className="ml-1.5 size-4" />
            </Button>
          </div>
        </FadeIn>

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
