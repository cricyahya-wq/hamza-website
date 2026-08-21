import type { Metadata } from "next";
import { ShieldCheck, Sparkles, Heart, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Timeline, type TimelineStep } from "@/components/ui/Timeline";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "MoosePBX was founded to make call center software simpler, faster, and more affordable. Learn about our mission, our team, and how far we've come.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Reliability first",
    description:
      "Calls don't get to fail. We build and monitor for uptime like every call matters, because it does.",
  },
  {
    icon: Sparkles,
    title: "Radical simplicity",
    description:
      "Powerful doesn't have to mean complicated. We cut features that add complexity without adding value.",
  },
  {
    icon: Heart,
    title: "Customer obsession",
    description:
      "Every roadmap decision starts with a support ticket, a sales call, or a churn conversation.",
  },
  {
    icon: Rocket,
    title: "Move deliberately, fast",
    description:
      "We ship often, but never at the cost of the reliability our customers depend on.",
  },
];

const milestones: TimelineStep[] = [
  {
    title: "2019 — Founded",
    description:
      "MoosePBX started with a simple idea: call center software shouldn't require a six-month implementation.",
  },
  {
    title: "2020 — First 1,000 customers",
    description:
      "Support and sales teams across a dozen industries moved off legacy PBX hardware onto MoosePBX.",
  },
  {
    title: "2021 — Series A",
    description:
      "Raised our Series A to expand our global carrier network and double down on reliability.",
  },
  {
    title: "2023 — Real-time analytics launched",
    description:
      "Shipped live queue monitoring and analytics dashboards, replacing spreadsheets for hundreds of teams.",
  },
  {
    title: "2025 — AI Voice Agents",
    description:
      "Launched conversational AI that resolves routine calls end-to-end and hands off with full context.",
  },
  {
    title: "2026 — 500M+ calls routed annually",
    description:
      "MoosePBX now routes more than 500 million calls a year for customers around the world.",
  },
];

const leadership = [
  { name: "Elena Kowalski", title: "CEO & Co-Founder", initials: "EK" },
  { name: "Marcus Webb", title: "CTO & Co-Founder", initials: "MW" },
  { name: "Sarah Kim", title: "VP of Product", initials: "SK" },
  { name: "David Chen", title: "VP of Customer Success", initials: "DC" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MoosePBX"
        title="Built to make call centers simpler"
        description={siteConfig.description}
        variant="secondary"
      />

      <Section className="bg-surface-alt">
        <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <FadeIn>
            <span className="text-accent-400 text-sm font-semibold tracking-wide uppercase">
              Our story
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Legacy phone systems weren&apos;t built for how teams work today
            </h2>
            <p className="mt-6 leading-relaxed text-neutral-400">
              We started MoosePBX after watching support and sales teams get
              buried in hardware contracts, six-month implementations, and phone
              systems that couldn&apos;t tell them anything about what was
              actually happening on their calls.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-400">
              Today, MoosePBX gives teams of every size a call center platform
              that&apos;s live in weeks, gets more reliable every year, and
              tells you exactly where to focus next.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="bg-card rounded-3xl border border-border p-10">
              <p className="font-display text-2xl leading-snug font-semibold text-foreground">
                &ldquo;{siteConfig.mission}&rdquo;
              </p>
              <p className="mt-6 text-sm text-neutral-400">
                {siteConfig.name} mission statement
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="bg-background/30">
        <Container>
          <SectionHeading
            eyebrow="Values"
            title="What we optimize for"
            description="The principles behind every product decision we make."
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.08} className="h-full">
                <FeatureCard
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  className="h-full"
                />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-alt">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Our journey" title="How we got here" />
          <div className="mt-16">
            <Timeline steps={milestones} />
          </div>
        </Container>
      </Section>

      <Section className="bg-background/30">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="The team behind MoosePBX"
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person, index) => (
              <FadeIn key={person.name} delay={index * 0.08}>
                <div className="bg-card rounded-2xl border border-border p-6 text-center">
                  <div className="from-primary-500 to-accent-400 mx-auto flex size-16 items-center justify-center rounded-full bg-gradient-to-br text-lg font-semibold text-foreground">
                    {person.initials}
                  </div>
                  <p className="font-display mt-4 font-semibold text-foreground">
                    {person.name}
                  </p>
                  <p className="mt-1 text-sm text-neutral-400">
                    {person.title}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner
        title="Come see what we're building"
        description="Talk to our team about how MoosePBX can fit into your call center."
        primaryLabel="Get a demo"
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
    </>
  );
}
