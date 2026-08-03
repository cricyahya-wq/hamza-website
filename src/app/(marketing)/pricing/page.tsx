import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { PricingCard } from "@/components/ui/PricingCard";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { pricingPlans } from "@/data/pricing";
import { pricingFaqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent MoosePBX pricing that scales with your team — from small support desks to enterprise call centers.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple pricing that scales with you"
        description="No setup fees, no long-term contracts. Pay per seat and change plans as your team grows."
        variant="primary"
      />

      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <FadeIn key={plan.name} delay={index * 0.1} className="h-full">
                <PricingCard {...plan} className="h-full" />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-card/30">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Pricing FAQ" title="Common questions" />
          <FadeIn
            delay={0.2}
            className="bg-white mt-12 rounded-3xl border border-neutral-200 p-6 shadow-sm sm:p-10"
          >
            <Accordion items={pricingFaqs} />
          </FadeIn>
        </Container>
      </Section>

      <CtaBanner
        title="Still not sure which plan fits?"
        description="Talk to our team and we'll help you find the right fit for your team's call volume."
        primaryLabel="Talk to sales"
      />
    </>
  );
}
