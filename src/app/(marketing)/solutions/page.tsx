import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Button } from "@/components/ui/Button";

// Specialized Solutions page components
import { SolutionsGrid } from "./components/SolutionsGrid";
import { SolutionShowcase } from "./components/SolutionShowcase";
import { SolutionsBenefits } from "./components/SolutionsBenefits";
import { SolutionsSuccess } from "./components/SolutionsSuccess";
import { WhyChooseSolutions } from "./components/WhyChooseSolutions";

export const metadata: Metadata = {
  title: "Solutions | Intelligent Business Communication | MoosePBX",
  description:
    "Discover how MoosePBX solves real-world business communication challenges through intelligent, scalable, and secure VoIP solutions.",
  openGraph: {
    title: "Solutions | Intelligent Business Communication | MoosePBX",
    description:
      "Discover how MoosePBX solves real-world business communication challenges through intelligent, scalable, and secure VoIP solutions.",
    type: "website",
  },
};

export default function SolutionsPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <PageHero
        eyebrow="Solutions"
        title="Business Communication Solutions That Scale With You"
        description="Discover intelligent communication solutions designed to improve collaboration, reduce costs, enhance customer experience, and help your business grow."
        variant="primary"
        actions={
          <>
            <Button href="/pricing" variant="primary" size="lg">
              Explore Pricing
            </Button>
            <Button href="/contact?reason=sales" variant="outline" size="lg">
              Book a Demo
            </Button>
          </>
        }
      />

      {/* 2. SOLUTIONS OVERVIEW GRID */}
      <Section className="bg-surface-alt relative">
        <Container>
          <SectionHeading
            eyebrow="Overview"
            title="Comprehensive communication tools"
            description="Replace disjointed legacy systems with a single unified platform built for modern teams."
            align="center"
          />
          <div className="mt-16">
            <SolutionsGrid />
          </div>
        </Container>
      </Section>

      {/* 3. DETAILED SOLUTION SHOWCASE */}
      <Section className="bg-surface-alt relative border-t border-neutral-200">
        <Container>
          <SectionHeading
            eyebrow="Business Value"
            title="Solving your biggest communication challenges"
            description="We focus on delivering measurable business outcomes, not just technical features."
          />
        </Container>
        <div className="mt-20">
          <SolutionShowcase />
        </div>
      </Section>

      {/* 4. BENEFITS ACROSS ALL SOLUTIONS */}
      <Section className="bg-white relative border-t border-neutral-200">
        <Container>
          <SectionHeading
            eyebrow="Core Benefits"
            title="The MoosePBX advantage"
            description="No matter how you deploy our platform, these fundamental benefits are built into every solution."
            align="center"
          />
          <div className="mt-16">
            <SolutionsBenefits />
          </div>
        </Container>
      </Section>

      {/* 5. CUSTOMER SUCCESS HIGHLIGHTS */}
      <Section className="bg-surface-alt relative">
        <Container>
          <SectionHeading
            eyebrow="Customer Success"
            title="Proven impact"
            description="See how growing businesses are using MoosePBX solutions to transform their operations."
          />
          <div className="mt-16">
            <SolutionsSuccess />
          </div>
        </Container>
      </Section>

      {/* 6. WHY BUSINESSES CHOOSE MOOSEPBX */}
      <Section className="bg-surface-alt relative border-t border-neutral-200">
        <Container>
          <SectionHeading
            eyebrow="The Difference"
            title="Why businesses trust us"
            description="We combine enterprise-grade reliability with the agility and ease of use of a modern startup."
            align="center"
          />
          <div className="mt-16">
            <WhyChooseSolutions />
          </div>
        </Container>
      </Section>

      {/* 7. FINAL CTA */}
      <CtaBanner
        title="Ready to Modernize Your Business Communication?"
        description="Transform the way your business connects with customers and teams using secure, scalable, AI-powered communication solutions."
        primaryLabel="Get Started"
        secondaryLabel="Contact Sales"
        secondaryHref="/contact?reason=sales"
      />
    </>
  );
}
