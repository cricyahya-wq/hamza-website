import type { Metadata } from "next";
import { ArrowLeft, SearchX } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-background relative flex flex-1 items-center overflow-hidden pt-32 pb-20 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-accent-500/15 absolute top-1/4 left-1/2 size-96 -translate-x-1/2 rounded-full blur-[120px]" />
        </div>

        <Container className="text-center">
          <FadeIn className="flex justify-center">
            <div className="bg-card text-accent-400 flex size-16 items-center justify-center rounded-2xl border border-neutral-800">
              <SearchX className="size-8" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-display mt-8 text-7xl font-bold tracking-tight text-white sm:text-8xl">
              404
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-display mt-4 text-2xl font-semibold text-white sm:text-3xl">
              This page took a wrong turn
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mx-auto mt-4 max-w-md text-neutral-400">
              The page you&apos;re looking for doesn&apos;t exist or may have
              moved.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.4}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Button href="/" variant="cta" size="lg">
              <ArrowLeft className="size-4" />
              Back to home
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact us
            </Button>
          </FadeIn>
        </Container>
      </main>
      <Footer />
    </>
  );
}
