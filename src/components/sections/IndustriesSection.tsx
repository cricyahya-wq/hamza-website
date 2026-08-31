import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { IndustriesGrid } from "@/app/(marketing)/industries/components/IndustriesGrid";

export function IndustriesSection() {
  return (
    <Section id="industries" className="bg-background py-24 sm:py-32 relative overflow-hidden border-b border-border scroll-mt-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center mb-16 sm:mb-20">
          <span className="mb-4 inline-block text-sm font-semibold tracking-[0.15em] text-accent-400 uppercase">
            WHO WE SERVE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Communication Built for Every Industry.
          </h2>
          <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed max-w-3xl mx-auto">
            From healthcare and finance to retail and high-volume call centers, MoosePBX delivers the security, reliability, and custom workflows your sector requires.
          </p>
        </div>

        <IndustriesGrid />

        <div className="mt-16 text-center">
          <Button href="/industries" variant="outline-dark" size="lg" className="hover:border-accent-400">
            Explore Detailed Industry Use Cases
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
