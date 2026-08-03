import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { TiltCard } from "@/components/effects/TiltCard";
import { products } from "@/data/products";

export function Products() {
  return (
    <Section id="products" className="bg-card/30">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="One platform, four ways to transform your call center"
          description="Mix and match modules as your team grows, all running on the same reliable core."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {products.map((product, index) => (
            <FadeIn key={product.name} delay={index * 0.1} className="h-full">
              <TiltCard className="h-full">
                <div className="bg-white hover:shadow-primary-950/40 flex h-full flex-col rounded-3xl border border-neutral-200 p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-10">
                  <div className="from-secondary-600 to-accent-400 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br text-neutral-900">
                    <product.icon className="size-7" />
                  </div>
                  <h3 className="font-display mt-6 text-2xl font-semibold text-neutral-900">
                    {product.name}
                  </h3>
                  <p className="text-accent-400 mt-1 font-medium">
                    {product.tagline}
                  </p>
                  <p className="mt-4 leading-relaxed text-neutral-600">
                    {product.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {product.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <Check className="text-accent-400 mt-0.5 size-5 shrink-0" />
                        <span className="text-neutral-600">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
