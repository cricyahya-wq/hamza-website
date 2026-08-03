import { Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/ui/ContactForm";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <Section id="contact" className="bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title="Let's talk about your contact center"
              description="Tell us about your team and we'll show you how MoosePBX fits in. No pressure, no sales script."
            />

            <FadeIn delay={0.3} className="mt-10 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 p-4">
                <div className="bg-accent-400/10 text-accent-400 flex size-11 shrink-0 items-center justify-center rounded-full">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Email us</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-accent-300 font-medium text-neutral-900"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 p-4">
                <div className="bg-accent-400/10 text-accent-400 flex size-11 shrink-0 items-center justify-center rounded-full">
                  <Clock className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Response time</p>
                  <p className="font-medium text-neutral-900">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-10">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
