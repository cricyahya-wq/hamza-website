"use client";

import dynamic from "next/dynamic";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const HeroDialerVisual = dynamic(
  () =>
    import("@/components/sections/HeroDialerVisual").then((mod) => mod.HeroDialerVisual),
  { ssr: false },
);

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background min-h-[90vh] flex items-center border-b border-border scroll-mt-24">
      <Container className="relative z-10 grid items-center gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] max-w-[1400px]">
        <div className="min-w-0 flex flex-col items-start lg:pr-8">
          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <span className="font-semibold tracking-[0.15em] text-accent-400 text-sm uppercase">
              The modern call center platform
            </span>
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold tracking-tight text-foreground text-5xl sm:text-6xl lg:text-[72px] leading-[1.05]"
          >
            Power Every Call.<br />
            Scale Operations.
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-[540px] text-lg leading-relaxed text-neutral-500"
          >
            Powerful dialer and telecom infrastructure built to help teams connect faster, manage conversations smarter, and scale with confidence.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row w-full sm:w-auto"
          >
            <Button href="#contact" variant="primary" size="lg" className="group w-full sm:w-auto justify-center transition-all hover:-translate-y-[1px] hover:shadow-lg">
              Get a live demo
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button href="#features" variant="outline-dark" size="lg" className="w-full sm:w-auto justify-center transition-all hover:border-foreground/40">
              See how it works
            </Button>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-500"
          >
            <span className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-accent-400 font-bold">✓</span> Enterprise-ready
            </span>
            <span className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-accent-400 font-bold">✓</span> Fast deployment
            </span>
            <span className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-accent-400 font-bold">✓</span> Secure infrastructure
            </span>
          </m.div>
        </div>

        <div className="relative min-w-0 w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-auto lg:h-[600px] flex items-center justify-center lg:justify-end">
          <m.div 
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <HeroDialerVisual />
          </m.div>
        </div>
      </Container>
    </section>
  );
}
