import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { cn } from "@/lib/utils";
import { features } from "@/data/features";

export function Features() {
  return (
    <Section id="features" className="bg-surface-alt">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything your contact center needs, in one platform"
          description="MoosePBX brings routing, analytics, and AI automation together so your team can focus on customers, not tooling."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-flow-dense md:auto-rows-[13rem] md:grid-cols-3">
          {features.map((feature, index) => (
            <FadeIn
              key={feature.title}
              delay={index * 0.08}
              className={cn("h-full", feature.className)}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="h-full"
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
