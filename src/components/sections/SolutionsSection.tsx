"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PremiumSolutions } from "@/app/(marketing)/solutions/components/PremiumSolutions";

export function SolutionsSection() {
  return (
    <Section id="solutions" className="bg-background py-24 sm:py-32 relative overflow-hidden border-b border-border scroll-mt-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center mb-16 sm:mb-20">
          <span className="mb-4 inline-block text-sm font-semibold tracking-[0.15em] text-accent-400 uppercase">
            POWERFUL SOLUTIONS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Solutions That Move Every Conversation Forward.
          </h2>
          <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed max-w-3xl mx-auto">
            From complete call centers and outbound dialing to secure SIP infrastructure and AI voice automation, MoosePBX brings the right technology together around your business.
          </p>
        </div>

        <PremiumSolutions />

        <div className="mt-16 text-center">
          <Button href="/solutions" variant="outline-dark" size="lg" className="hover:border-accent-400">
            Explore All Solutions Architecture
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
