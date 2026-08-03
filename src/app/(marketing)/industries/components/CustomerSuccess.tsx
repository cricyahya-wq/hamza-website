"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { customerSuccess } from "@/data/industries-page";
import { Quote } from "lucide-react";
import Image from "next/image";

export function CustomerSuccess() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-neutral-200">
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay" />
      <div className="absolute -left-1/4 -top-1/4 h-1/2 w-1/2 rounded-full bg-accent-500/10 blur-[120px]" />
      <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-primary-500/10 blur-[120px]" />

      <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-2 lg:gap-20 lg:p-20">
        <FadeIn>
          <div className="flex h-full flex-col justify-center">
            <Quote className="h-12 w-12 text-accent-400 opacity-50" />
            <blockquote className="mt-8">
              <p className="font-display text-2xl font-medium leading-relaxed text-neutral-900 sm:text-3xl">
                "{customerSuccess.quote}"
              </p>
            </blockquote>
            <div className="mt-10 flex items-center gap-5">
              <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-neutral-800">
                <Image
                  src={customerSuccess.image}
                  alt={customerSuccess.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display font-bold text-neutral-900">
                  {customerSuccess.author}
                </p>
                <p className="text-sm text-neutral-400">
                  {customerSuccess.role}, {customerSuccess.company}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="lg:border-l lg:border-neutral-800 lg:pl-20">
          <div className="flex h-full flex-col justify-center">
            <h3 className="font-display text-lg font-bold text-neutral-900">
              Business Impact
            </h3>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {customerSuccess.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="font-display text-4xl font-bold text-accent-400">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-neutral-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
