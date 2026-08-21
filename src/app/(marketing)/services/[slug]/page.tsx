import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/ui/ContactForm";
import { getServiceBySlug, servicesData } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    return {
      title: "Service Not Found | MoosePBX",
    };
  }

  return {
    title: `${service.title} | MoosePBX Enterprise Services`,
    description: service.description,
    openGraph: {
      title: `${service.title} | MoosePBX Enterprise Services`,
      description: service.description,
      type: "website",
      images: [{ url: service.image }],
    },
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  // Get related services data
  const relatedServices = service.related_services
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean) as typeof servicesData;

  const Icon = service.icon;

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-background pt-32 pb-16 lg:pt-40 lg:pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <FadeIn>
              <div className="inline-flex items-center rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-sm font-medium text-primary-600 mb-6">
                <Icon className="h-4 w-4 mr-2" />
                Enterprise Solutions
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6 leading-[1.1]">
                {service.title}
              </h1>
              <p className="text-xl text-neutral-400 mb-8 leading-relaxed max-w-lg">
                {service.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="#contact" variant="primary" size="lg">
                  Request a Demo
                </Button>
                <Button href="#features" variant="outline" size="lg">
                  Explore Features
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative aspect-square max-w-lg mx-auto lg:max-w-none w-full">
              <div className="absolute inset-0 bg-primary-50 rounded-full blur-3xl opacity-50 transform scale-75"></div>
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-contain drop-shadow-2xl z-10"
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 2. DETAILED EXPLANATION */}
      <Section className="bg-surface-alt relative border-t border-border">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Redefining {service.title}
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                {service.long_description}
              </p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* 3. KEY FEATURES */}
      <Section id="features" className="bg-background relative">
        <Container>
          <SectionHeading
            eyebrow="Key Features"
            title="Engineered for Performance"
            description={`Discover the powerful capabilities included with our ${service.title}.`}
            align="center"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feature, idx) => {
              const FeatureIcon = feature.icon;
              return (
                <FadeIn key={idx} className="bg-surface-alt rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-xl bg-primary-50 flex items-center justify-center mb-6">
                    <FeatureIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 4. BENEFITS & USE CASES */}
      <Section className="bg-surface-alt relative border-t border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <div>
              <SectionHeading
                eyebrow="Benefits"
                title="Why it matters"
                description="The direct impact on your bottom line and operations."
              />
              <div className="mt-10 space-y-8">
                {service.benefits.map((benefit, idx) => (
                  <FadeIn key={idx} delay={idx * 0.1} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h4>
                      <p className="text-neutral-400">{benefit.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <SectionHeading
                eyebrow="Use Cases"
                title="Real-world applications"
                description="How modern businesses deploy this technology today."
              />
              <div className="mt-10 grid gap-6">
                {service.use_cases.map((useCase, idx) => (
                  <FadeIn key={idx} delay={idx * 0.1} className="bg-card rounded-xl p-6 shadow-sm border border-border">
                    <h4 className="text-lg font-bold text-foreground mb-2">{useCase.title}</h4>
                    <p className="text-neutral-400">{useCase.description}</p>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. TECH SPECS & WHY CHOOSE */}
      <Section className="bg-surface-alt relative py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Tech Specs */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Technical Specifications</h2>
              <div className="bg-neutral-800/50 rounded-2xl border border-border/50 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {service.technical_specs.map((spec, idx) => (
                      <tr key={idx} className="border-b border-border/50 last:border-0">
                        <th className="py-4 px-6 text-neutral-400 font-medium w-1/3">{spec.label}</th>
                        <td className="py-4 px-6 text-white font-semibold">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Why Choose */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Why Choose MoosePBX</h2>
              <div className="space-y-6">
                {service.why_choose.map((reason, idx) => (
                  <FadeIn key={idx} delay={idx * 0.1} className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="h-5 w-5 text-accent-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{reason.title}</h4>
                      <p className="text-neutral-400">{reason.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. FAQ */}
      <Section className="bg-background relative">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about this service."
            align="center"
          />
          <div className="max-w-3xl mx-auto mt-16 space-y-6">
            {service.faq.map((faq, idx) => (
              <FadeIn key={idx} className="bg-surface-alt rounded-xl p-6 border border-border">
                <h4 className="text-lg font-bold text-foreground mb-3">{faq.question}</h4>
                <p className="text-neutral-400">{faq.answer}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. RELATED SERVICES */}
      <Section className="bg-surface-alt relative border-t border-border">
        <Container>
          <SectionHeading
            eyebrow="Ecosystem"
            title="Related Services"
            description="Explore other enterprise solutions that pair perfectly with this service."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((rs, idx) => (
              <FadeIn key={idx} className="flex h-full">
                <Link 
                  href={`/services/${rs.slug}`}
                  className="group flex flex-col w-full bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 hover:border-primary-300"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-3">{rs.title}</h3>
                  <p className="text-neutral-400 mb-6 flex-grow">{rs.description}</p>
                  <span className="flex items-center text-sm font-bold uppercase text-primary-600 mt-auto">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8. CTA & CONTACT */}
      <CtaBanner
        title="Ready to upgrade your infrastructure?"
        description="Our engineers are standing by to architect the perfect solution for your business."
      />
      
      <Section id="contact" className="bg-background relative border-t border-border">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-neutral-400">
                Request a demo or ask a technical question about our {service.title}.
              </p>
            </div>
            <div className="bg-card rounded-3xl p-8 sm:p-12 shadow-2xl border border-border">
               <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
