"use client";

import { useState } from "react";
import { ArrowRight, Bot, PhoneCall, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { PricingCard } from "@/components/ui/PricingCard";
import { Button } from "@/components/ui/Button";
import { dialerPlans, aiBotPlans } from "@/data/pricing";
import { cn } from "@/lib/utils";

type PricingCategory = "all" | "dialer" | "ai";

export function PricingSection() {
  const [category, setCategory] = useState<PricingCategory>("all");

  return (
    <Section id="pricing" className="bg-background py-24 sm:py-32 relative overflow-hidden border-b border-border scroll-mt-20">
      <Container>
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
          <span className="mb-4 inline-block text-sm font-semibold tracking-[0.15em] text-accent-500 uppercase">
            CALL CENTER & AI PRICING
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Transparent Pricing for Dialers & AI Voice Bots.
          </h2>
          <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed max-w-3xl mx-auto">
            Choose standalone predictive dialer seats, deploy autonomous AI voice agents at $45/agent/month, or blend both into a single high-velocity contact center.
          </p>

          {/* CATEGORY SWITCHER TABS */}
          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-surface-alt p-1.5 border border-border">
            <button
              onClick={() => setCategory("all")}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer",
                category === "all"
                  ? "bg-card text-foreground shadow-sm border border-border"
                  : "text-neutral-500 hover:text-foreground"
              )}
            >
              All Pricing
            </button>
            <button
              onClick={() => setCategory("dialer")}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer",
                category === "dialer"
                  ? "bg-card text-foreground shadow-sm border border-border"
                  : "text-neutral-500 hover:text-foreground"
              )}
            >
              <PhoneCall className="size-4 text-[#315FE8]" />
              Call Center & Dialer Plans
            </button>
            <button
              onClick={() => setCategory("ai")}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer",
                category === "ai"
                  ? "bg-[#315FE8] text-white shadow-sm"
                  : "text-neutral-500 hover:text-foreground"
              )}
            >
              <Bot className="size-4" />
              AI Voice Agent & Bot ($45/month)
            </button>
          </div>
        </div>

        {/* --- 1. CALL CENTER & DIALER PLANS --- */}
        {(category === "all" || category === "dialer") && (
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-border">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#315FE8] mb-1">
                  <PhoneCall className="size-4" />
                  <span>Telephony & Outbound Dialing</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Call Center & Predictive Dialer Plans
                </h3>
              </div>
              <p className="text-sm text-neutral-500 max-w-md">
                Seat-based cloud PBX, auto dialers, skills-based routing, and real-time agent supervisor controls.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {dialerPlans.map((plan, index) => (
                <FadeIn key={plan.name} delay={index * 0.1} className="h-full">
                  <PricingCard {...plan} className="h-full" />
                </FadeIn>
              ))}
            </div>
          </div>
        )}

        {/* DIVIDER WHEN VIEWING ALL */}
        {category === "all" && (
          <div className="relative my-20">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-6 text-sm font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-2 border border-border rounded-full py-1.5">
                <Sparkles className="size-4 text-[#315FE8]" />
                Or Deploy Intelligent AI Voice Automation
              </span>
            </div>
          </div>
        )}

        {/* --- 2. AI VOICE AGENT & BOT PLANS --- */}
        {(category === "all" || category === "ai") && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-border">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#315FE8] mb-1">
                  <Bot className="size-4" />
                  <span>Conversational AI Automation</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground flex flex-wrap items-center gap-3">
                  AI Voice Agent & AI Bot Pricing
                  <span className="text-sm font-bold bg-[#2BC48A]/10 text-[#2BC48A] px-3 py-1 rounded-full border border-[#2BC48A]/20">
                    $45 / Agent / Month
                  </span>
                </h3>
              </div>
              <p className="text-sm text-neutral-500 max-w-md">
                Autonomous voice agents with sub-500ms conversational response for 24/7 inbound support and high-velocity outbound calls.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {aiBotPlans.map((plan, index) => (
                <FadeIn key={plan.name} delay={index * 0.1} className="h-full">
                  <PricingCard {...plan} className="h-full" />
                </FadeIn>
              ))}
            </div>

            {/* AI Callout Banner */}
            <FadeIn delay={0.2} className="mt-12 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-[#315FE8]/30 bg-gradient-to-r from-[#315FE8]/10 via-card to-[#315FE8]/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-xl bg-[#315FE8]/10 border border-[#315FE8]/20 flex items-center justify-center shrink-0">
                    <Sparkles className="size-6 text-[#315FE8]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground mb-1">
                      Blended Human & AI Call Center Setup
                    </h4>
                    <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                      AI Voice Agents can be deployed completely standalone or bundled directly with MoosePBX Predictive Dialers to qualify leads, handle after-hours FAQs, and transfer calls smoothly to live agents.
                    </p>
                  </div>
                </div>
                <Button href="/contact?reason=ai-bot" variant="primary" size="md" className="shrink-0 whitespace-nowrap">
                  Get Started with AI
                  <ArrowRight className="ml-1.5 size-4" />
                </Button>
              </div>
            </FadeIn>
          </div>
        )}

        {/* BOTTOM CTA */}
        <div className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/pricing" variant="outline-dark" size="lg" className="hover:border-accent-400">
            View Detailed Plan Comparison & FAQ
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
