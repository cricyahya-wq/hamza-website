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
    <div className="bg-background">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-32 pb-24 border-b border-border bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface-alt via-background to-background"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="mx-auto max-w-4xl">
            <span className="mb-6 inline-block text-sm font-semibold tracking-wider text-accent-400 uppercase">
              INDUSTRIES
            </span>
            <h1 className="font-display mb-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Communication Solutions Built for Every Industry.
            </h1>
            <p className="font-sans mx-auto max-w-3xl text-lg leading-relaxed text-neutral-500">
              From healthcare to retail, MoosePBX helps organizations improve communication, increase productivity, reduce operational costs, and deliver exceptional customer experiences.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
               <Button href="/solutions" variant="primary" size="lg">
                 Explore Solutions
               </Button>
               <Button href="/contact" variant="outline" size="lg" className="border-border text-foreground hover:bg-surface-alt">
                 Contact Sales
               </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRIES OVERVIEW GRID */}
      <Section className="bg-background relative">
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
      <Section className="bg-background relative border-t border-border">
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
      <Section className="bg-background relative border-t border-border">
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
      <Section className="bg-background relative border-t border-border">
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
      <Section className="bg-background relative border-t border-border">
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
    </div>
  );
}
