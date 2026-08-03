"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { gsap } from "@/lib/gsap";
import { trustedCompanies } from "@/data/trusted-companies";

export function TrustedCompanies() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 28,
      ease: "none",
      repeat: -1,
    });

    const pause = () => tween.timeScale(0.15);
    const resume = () => tween.timeScale(1);

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      tween.kill();
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  const loopedCompanies = [...trustedCompanies, ...trustedCompanies];

  return (
    <section className="bg-card/40 border-y border-neutral-200 py-12">
      <Container>
        <p className="text-center text-sm font-medium tracking-wide text-neutral-400 uppercase">
          Built for teams like these
        </p>
      </Container>

      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div ref={trackRef} className="flex w-max items-center gap-16">
          {loopedCompanies.map((company, index) => (
            <span
              key={`${company.name}-${index}`}
              className="font-display shrink-0 text-2xl font-semibold whitespace-nowrap text-neutral-400 transition-colors hover:text-primary-600"
            >
              {company.name}
            </span>
          ))}
        </div>
      </div>

      <Container>
        <p className="mt-6 text-center text-xs text-neutral-400">
          Example organizations shown for illustration only.
        </p>
      </Container>
    </section>
  );
}
