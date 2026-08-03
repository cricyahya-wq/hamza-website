import type { Metadata } from "next";
import { Mail, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/ui/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the MoosePBX team — ask a question, book a demo, or talk to sales about your call center.",
};

const infoCards = [
  {
    icon: Mail,
    label: "Email us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Usually within 24 hours",
  },
  {
    icon: MessageCircle,
    label: "Sales & demos",
    value: "Ask about a personalized walkthrough",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's get your team set up"
        description="Tell us a bit about your call volume and workflow — we'll follow up with next steps."
        variant="accent"
      />

      <Section className="bg-surface-alt">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <FadeIn className="space-y-4">
            {infoCards.map((card) => (
              <div
                key={card.label}
                className="flex items-center gap-4 rounded-2xl border border-neutral-200 p-4"
              >
                <div className="bg-accent-400/10 text-accent-400 flex size-11 shrink-0 items-center justify-center rounded-full">
                  <card.icon className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">{card.label}</p>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="hover:text-accent-300 font-medium text-neutral-900"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="font-medium text-neutral-900">{card.value}</p>
                  )}
                </div>
              </div>
            ))}
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-10">
              <ContactForm />
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
