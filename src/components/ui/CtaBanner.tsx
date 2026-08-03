import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { MorphingBlob } from "@/components/effects/MorphingBlob";

interface CtaBannerProps {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaBanner({
  title,
  description,
  primaryLabel = "Get a demo",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CtaBannerProps) {
  return (
    <Section className="bg-transparent">
      <Container>
        <FadeIn className="bg-[linear-gradient(to_bottom,#071923,#0C2434,#071923)] relative overflow-hidden rounded-3xl border border-neutral-800 px-8 py-16 text-center sm:px-16">
          <MorphingBlob
            className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            from="from-accent-500/25"
            to="to-primary-500/15"
          />
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-300">
              {description}
            </p>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <Button href={primaryHref} variant="cta" size="lg">
                {primaryLabel}
                <ArrowRight className="size-4" />
              </Button>
            </MagneticButton>
            {secondaryLabel && secondaryHref && (
              <Button href={secondaryHref} variant="outline" size="lg">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
