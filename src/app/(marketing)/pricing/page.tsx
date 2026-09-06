import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { PricingCard } from "@/components/ui/PricingCard";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { dialerPlans, aiBotPlans } from "@/data/pricing";
import { pricingFaqs } from "@/data/faq";
import { PhoneCall, Bot, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — Call Center Dialers & AI Voice Agents",
  description:
    "Transparent pricing for MoosePBX predictive dialers and AI voice agents at $45/agent/month. Scale your call center with zero hidden fees.",
};

export default function PricingPage() {
  return (
    <div className="bg-background">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-32 pb-20 border-b border-border">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="mx-auto max-w-4xl">
            <span className="mb-6 inline-block text-sm font-bold tracking-[0.15em] text-accent-500 uppercase">
              CALL CENTER & AI PRICING
            </span>
            <h1 className="font-display mb-8 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-[1.1]">
              Simple pricing that scales with you.
            </h1>
            <p className="font-sans mx-auto max-w-3xl text-xl leading-relaxed text-neutral-500">
              Transparent, separate pricing for Call Center & Predictive Dialers and Autonomous AI Voice Agents ($45/agent/mo).
            </p>
          </div>
        </div>
      </section>

      {/* 1. CALL CENTER & DIALER PLANS */}
      <Section className="bg-background pt-20 pb-16">
        <Container>
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#315FE8] bg-[#315FE8]/10 px-3 py-1 rounded-full mb-3">
              <PhoneCall className="size-3.5" /> Call Center & Dialer Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Call Center & Predictive Dialer Plans
            </h2>
            <p className="text-neutral-500">
              Cloud PBX, auto & predictive dialers, queue management, and live supervisor visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {dialerPlans.map((plan, index) => (
              <FadeIn key={plan.name} delay={index * 0.1} className="h-full">
                <PricingCard {...plan} className="h-full" />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* 2. AI VOICE AGENT & BOT PLANS */}
      <Section className="bg-surface-alt/50 py-20 border-t border-border">
        <Container>
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#315FE8] bg-[#315FE8]/10 px-3 py-1 rounded-full mb-3">
              <Bot className="size-3.5" /> Conversational AI Automation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 flex flex-wrap items-center justify-center gap-3">
              AI Voice Agent & AI Bot Pricing
              <span className="text-sm font-bold bg-[#2BC48A]/10 text-[#2BC48A] px-3 py-1 rounded-full border border-[#2BC48A]/20">
                $45 / Agent / Month
              </span>
            </h2>
            <p className="text-neutral-500">
              Autonomous neural voice agents with sub-500ms conversational response for inbound customer service and outbound calling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {aiBotPlans.map((plan, index) => (
              <FadeIn key={plan.name} delay={index * 0.1} className="h-full">
                <PricingCard {...plan} className="h-full" />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-background py-24 border-t border-border">
        <Container className="max-w-3xl">
          <SectionHeading 
            eyebrow="Pricing FAQ" 
            title="Common questions" 
            align="center"
          />
          <FadeIn
            delay={0.2}
            className="mt-16"
          >
            <div className="bg-card rounded-[24px] border border-border p-6 shadow-sm sm:p-10">
               <Accordion items={pricingFaqs} />
            </div>
          </FadeIn>
        </Container>
      </Section>

      <CtaBanner
        title="Still not sure which plan fits?"
        description="Talk to our team and we'll help you find the right fit for your team's call volume."
        primaryLabel="Talk to sales"
      />
    </div>
  );
}
