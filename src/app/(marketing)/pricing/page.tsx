import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { PricingCard } from "@/components/ui/PricingCard";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { pricingPlans } from "@/data/pricing";
import { pricingFaqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent MoosePBX pricing that scales with your team — from small support desks to enterprise call centers.",
};

export default function PricingPage() {
  return (
    <div className="bg-background">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-32 pb-24 border-b border-border">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="mx-auto max-w-4xl">
            <span className="mb-6 inline-block text-sm font-bold tracking-[0.15em] text-accent-500 uppercase">
              PRICING
            </span>
            <h1 className="font-display mb-8 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-[1.1]">
              Simple pricing that scales with you.
            </h1>
            <p className="font-sans mx-auto max-w-3xl text-xl leading-relaxed text-neutral-500">
              No setup fees, no long-term contracts. Pay per seat and change plans as your team grows.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <Section className="bg-background pt-24 pb-12">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
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
