import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Button } from "@/components/ui/Button";

// Specialized Industries page components
import { IndustriesGrid } from "./components/IndustriesGrid";
import { IndustryShowcase } from "./components/IndustryShowcase";
import { BenefitsGrid } from "./components/BenefitsGrid";
import { CustomerSuccess } from "./components/CustomerSuccess";
import { WhyChooseIndustries } from "./components/WhyChooseIndustries";

export const metadata: Metadata = {
  title: "Industries | MoosePBX Solutions",
  description:
    "Discover how MoosePBX provides tailored communication and VoIP solutions for healthcare, education, retail, finance, and other industries.",
  openGraph: {
    title: "Industries | MoosePBX Solutions",
    description:
      "Discover how MoosePBX provides tailored communication and VoIP solutions for healthcare, education, retail, finance, and other industries.",
    type: "website",
  },
};

export default function IndustriesPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <PageHero
        eyebrow="Industries"
        title="Communication Solutions Built for Every Industry"
        description="From healthcare to retail, MoosePBX helps organizations improve communication, increase productivity, reduce operational costs, and deliver exceptional customer experiences."
        variant="secondary"
        actions={
          <>
            <Button href="/solutions" variant="primary" size="lg">
              Explore Solutions
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Sales
            </Button>
          </>
        }
      />

      {/* 2. INDUSTRIES OVERVIEW GRID */}
      <Section className="bg-white relative">
        <Container>
          <SectionHeading
            eyebrow="Who We Serve"
            title="Purpose-built for your business"
            description="Our platform adapts to the unique regulatory, operational, and customer service needs of your specific industry."
            align="center"
          />
          <div className="mt-16">
            <IndustriesGrid />
          </div>
        </Container>
      </Section>

      {/* 3. INDIVIDUAL INDUSTRY SHOWCASE */}
      <Section className="bg-white relative border-t border-neutral-200">
        <Container>
          <SectionHeading
            eyebrow="Deep Dive"
            title="Solving real industry challenges"
            description="See exactly how our platform addresses the communication bottlenecks holding your organization back."
          />
        </Container>
        <div className="mt-20">
          <IndustryShowcase />
        </div>
      </Section>

      {/* 4. BENEFITS ACROSS ALL INDUSTRIES */}
      <Section className="bg-white relative border-t border-neutral-200">
        <Container>
          <SectionHeading
            eyebrow="Universal Benefits"
            title="The MoosePBX standard"
            description="No matter what industry you operate in, these fundamental benefits come standard with every deployment."
            align="center"
          />
          <div className="mt-16">
            <BenefitsGrid />
          </div>
        </Container>
      </Section>

      {/* 5. CUSTOMER SUCCESS HIGHLIGHTS */}
      <Section className="bg-white relative">
        <Container>
          <SectionHeading
            eyebrow="Customer Success"
            title="Proven in the real world"
            description="Don't just take our word for it. See the impact MoosePBX has on actual business metrics."
          />
          <div className="mt-16">
            <CustomerSuccess />
          </div>
        </Container>
      </Section>

      {/* 6. WHY BUSINESSES CHOOSE MOOSEPBX */}
      <Section className="bg-white relative border-t border-neutral-200">
        <Container>
          <SectionHeading
            eyebrow="The MoosePBX Difference"
            title="Why businesses choose us"
            description="We combine enterprise-grade reliability with the agility and ease of use of a modern startup."
            align="center"
          />
          <div className="mt-16">
            <WhyChooseIndustries />
          </div>
        </Container>
      </Section>

      {/* 7. FINAL CTA */}
      <CtaBanner
        title="Ready to Transform Communication in Your Industry?"
        description="Discover how MoosePBX can streamline operations, improve customer engagement, and help your business grow."
        primaryLabel="Request a Demo"
        secondaryLabel="Contact Sales"
        secondaryHref="/contact?reason=sales"
      />
    </>
  );
}
