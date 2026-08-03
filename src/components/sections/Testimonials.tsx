import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-surface-alt">
      <Container>
        <SectionHeading
          eyebrow="Sample Testimonials"
          title="The impact teams can expect"
          description="These illustrative quotes reflect the kind of results MoosePBX is designed to deliver. They are sample testimonials, not statements from verified customers — contact us for real customer references."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn
              key={testimonial.name}
              delay={(index % 3) * 0.1}
              className="h-full"
            >
              <TestimonialCard {...testimonial} />
            </FadeIn>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-neutral-400">
          Sample testimonials for illustration only.
        </p>
      </Container>
    </Section>
  );
}
