import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — VoIP Insights & Resources | MoosePBX",
  description:
    "Expert articles on VoIP, PBX, call center strategy, AI communication, SIP trunking, and business telephony — from the MoosePBX team.",
  openGraph: {
    title: "Blog — VoIP Insights & Resources | MoosePBX",
    description:
      "Expert articles on VoIP, PBX, call center strategy, AI communication, SIP trunking, and business telephony.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights & Resources"
        title="Stay ahead in business communication"
        description="Expert articles on VoIP, PBX, call center strategy, AI communication, SIP trunking, and the latest innovations in business telephony."
        variant="accent"
      />

      <Section className="bg-surface-alt">
        <Container>
          <BlogGrid posts={blogPosts} />
        </Container>
      </Section>

      <CtaBanner
        title="Ready to modernize your communications?"
        description="Book a demo and see how MoosePBX fits into your team's workflow."
      />
    </>
  );
}
