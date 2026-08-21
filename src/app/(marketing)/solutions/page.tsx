import type { Metadata } from "next";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PremiumSolutions } from "./components/PremiumSolutions";

export const metadata: Metadata = {
  title: "Solutions | Premium Business Communication | MoosePBX",
  description:
    "From complete call centers and outbound dialing to secure SIP infrastructure and AI voice automation, MoosePBX brings the right technology together around your business.",
  openGraph: {
    title: "Solutions | Premium Business Communication | MoosePBX",
    description:
      "From complete call centers and outbound dialing to secure SIP infrastructure and AI voice automation, MoosePBX brings the right technology together around your business.",
    type: "website",
  },
};

export default function SolutionsPage() {
  return (
    <div className="bg-background">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-32 pb-24 border-b border-border">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="mx-auto max-w-4xl">
            <span className="mb-6 inline-block text-sm font-bold tracking-[0.15em] text-accent-400 uppercase">
              BUILT AROUND YOUR COMMUNICATION
            </span>
            <h1 className="font-display mb-8 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-[1.1]">
              Solutions That Move Every Conversation Forward.
            </h1>
            <p className="font-sans mx-auto max-w-3xl text-xl leading-relaxed text-neutral-500">
              From complete call centers and outbound dialing to secure SIP infrastructure and AI voice automation, MoosePBX brings the right technology together around your business.
            </p>
          </div>
        </div>
      </section>

      {/* PREMIUM SOLUTIONS GRID */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PremiumSolutions />
        </div>
      </section>

      {/* FINAL CTA */}
      <CtaBanner
        title="Ready to Modernize Your Business Communication?"
        description="Transform the way your business connects with customers and teams using secure, scalable, AI-powered communication solutions."
        primaryLabel="Get Started"
        secondaryLabel="Contact Sales"
        secondaryHref="/contact?reason=sales"
      />
    </div>
  );
}
