import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/data/faq";

export function FAQ() {
  return (
    <Section id="faq" className="bg-background">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Can't find the answer you're looking for? Reach out to our team."
        />

        <FadeIn
          delay={0.3}
          className="bg-card mt-12 rounded-3xl border border-border p-6 shadow-sm sm:p-10"
        >
          <Accordion items={faqs} />
        </FadeIn>
      </Container>
    </Section>
  );
}
