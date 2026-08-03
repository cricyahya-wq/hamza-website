import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Button } from "@/components/ui/Button";

// Import the specialized features page components
import { CoreFeaturesGrid } from "./components/CoreFeaturesGrid";
import { FeatureShowcase } from "./components/FeatureShowcase";
import { IntegrationsGrid } from "./components/IntegrationsGrid";
import { SecurityReliability } from "./components/SecurityReliability";
import { WhyChoose } from "./components/WhyChoose";
import { ComparisonTable } from "./components/ComparisonTable";

export const metadata: Metadata = {
  title: "Features | Powerful Communication Tools | MoosePBX",
  description:
    "Explore the powerful features of MoosePBX. Cloud PBX, smart call routing, AI analytics, global calling, and enterprise security built for modern businesses.",
  openGraph: {
    title: "Features | Powerful Communication Tools | MoosePBX",
    description:
      "Explore the powerful features of MoosePBX. Cloud PBX, smart call routing, AI analytics, global calling, and enterprise security built for modern businesses.",
    type: "website",
  },
};

export default function FeaturesPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <PageHero
        eyebrow="Features"
        title="Powerful Features for Modern Business Communication"
        description="Empower your business with advanced VoIP, Cloud PBX, AI-powered call management, analytics, and enterprise-grade communication solutions designed for teams of every size."
        variant="accent"
        actions={
          <>
            <Button href="/pricing" variant="primary" size="lg">
              Explore Pricing
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Book a Demo
            </Button>
          </>
        }
      />

      {/* 2. CORE FEATURES GRID */}
      <Section className="bg-surface-alt relative">
        <Container>
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Everything you need in one platform"
            description="Replace your outdated phone system with a unified, cloud-native communication stack."
          />
          <div className="mt-16">
            <CoreFeaturesGrid />
          </div>
        </Container>
      </Section>

      {/* 3. FEATURE SHOWCASE */}
      <Section className="bg-surface-alt relative border-t border-neutral-200">
        <Container>
          <SectionHeading
            eyebrow="Deep Dive"
            title="Advanced tools that just work"
            description="Designed for speed, reliability, and ease of use so your team can focus on the conversation, not the software."
          />
        </Container>
        <div className="mt-20">
          <FeatureShowcase />
        </div>
      </Section>

      {/* 4. INTEGRATIONS */}
      <Section className="bg-surface-alt relative border-t border-neutral-200">
        <Container>
          <SectionHeading
            eyebrow="Integrations"
            title="Plays well with your existing stack"
            description="Connect MoosePBX to the tools your team already relies on every day."
            align="center"
          />
          <IntegrationsGrid />
        </Container>
      </Section>

      {/* 5. SECURITY & RELIABILITY */}
      <Section className="bg-white relative border-y border-neutral-200">
        <Container>
          <SectionHeading
            eyebrow="Security & Trust"
            title="Enterprise-grade protection standard"
            description="Your conversations and data are protected by industry-leading security practices and compliance frameworks."
            align="center"
          />
          <SecurityReliability />
        </Container>
      </Section>

      {/* 6. COMPARISON TABLE */}
      <Section className="bg-surface-alt relative">
        <Container>
          <SectionHeading
            eyebrow="The MoosePBX Advantage"
            title="Leave the past behind"
            description="See how a modern cloud PBX compares to the legacy systems holding your team back."
            align="center"
          />
          <ComparisonTable />
        </Container>
      </Section>

      {/* 7. WHY CHOOSE MOOSEPBX */}
      <Section className="bg-surface-alt relative border-t border-neutral-200">
        <Container>
          <SectionHeading
            eyebrow="Why MoosePBX"
            title="Built for teams that demand more"
            description="We've rethought business communication from the ground up to solve the real problems growing teams face."
          />
          <div className="mt-16">
            <WhyChoose />
          </div>
        </Container>
      </Section>

      {/* 8. FINAL CTA */}
      <CtaBanner
        title="Ready to Transform Your Business Communication?"
        description="Experience secure, scalable, and intelligent communication solutions built for modern businesses."
      />
    </>
  );
}
