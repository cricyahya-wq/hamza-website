"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { m } from "framer-motion";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80&auto=format&fit=crop",
    alt: "Professional call center agent wearing headset at computer workstation",
    caption: "Always Connected",
    wide: true,
  },
  {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80&auto=format&fit=crop",
    alt: "Smiling female customer support agent with headset and laptop",
    caption: "Happy Agents, Happier Customers",
    wide: false,
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop",
    alt: "Busy call center team working at their desks",
    caption: "Team-Scale Operations",
    wide: false,
  },
  {
    src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80&auto=format&fit=crop",
    alt: "Close-up of agent wearing professional headset",
    caption: "Crystal-Clear Calls",
    wide: false,
  },
];

export function CallCenterGallery() {
  const [heroPhoto, ...thumbPhotos] = photos;
  if (!heroPhoto) return null;
  return (
    <div className="w-full">
      {/* Section intro */}
      <FadeIn className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-400">
          Real Teams. Real Results.
        </p>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Built for call center professionals
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-neutral-400">
          From solo agents to enterprise floors — MoosePBX powers the conversations that drive your business forward.
        </p>
      </FadeIn>

      {/* Photo grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Hero wide card */}
        <FadeIn className="sm:col-span-2 lg:col-span-2" y={0}>
          <m.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-3xl border border-border shadow-xl"
          >
            <div className="relative aspect-[16/9] w-full sm:aspect-[16/9]">
              <Image
                src={heroPhoto.src}
                alt={heroPhoto.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 66vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent-400/20 px-3 py-1 text-xs font-semibold text-accent-400 backdrop-blur-sm border border-accent-400/30">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-400" />
                  {heroPhoto.caption}
                </span>
                <p className="mt-2 text-sm text-white/80 font-medium">
                  Professional agents powered by MoosePBX
                </p>
              </div>
            </div>
          </m.div>
        </FadeIn>

        {/* Stat card — replaces 4th photo on desktop */}
        <FadeIn y={0} delay={0.05} className="hidden lg:block">
          <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-xl">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-400">
                Platform Stats
              </p>
              <h3 className="font-display mt-3 text-xl font-bold text-foreground">
                Trusted by call centers globally
              </h3>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6">
              {[
                { value: "99.99%", label: "Uptime SLA" },
                { value: "< 50ms", label: "Call Latency" },
                { value: "10,000+", label: "Agents Managed" },
                { value: "24/7", label: "Expert Support" },
              ].map((stat) => (
                <div key={stat.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-sm text-neutral-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* 3 photo row */}
        {thumbPhotos.map((photo, idx) => (
          <FadeIn key={photo.src} y={0} delay={idx * 0.07 + 0.1}>
            <m.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl border border-border shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-sm font-semibold text-white">{photo.caption}</span>
                </div>
              </div>
            </m.div>
          </FadeIn>
        ))}
      </div>

      {/* Pull quote */}
      <FadeIn className="mt-12" delay={0.2}>
        <blockquote className="relative rounded-3xl border border-border bg-card p-8 sm:p-10 text-center shadow-lg">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-border bg-background px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-accent-400">
            Customer Story
          </div>
          <p className="font-display mx-auto max-w-3xl text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
            &ldquo;MoosePBX transformed our outbound operation. Our agents connect faster, our managers see everything live, and our numbers have never looked better.&rdquo;
          </p>
          <footer className="mt-6">
            <p className="text-sm font-semibold text-foreground">Sarah M.</p>
            <p className="text-sm text-neutral-400">VP of Operations, TeleReach Solutions</p>
          </footer>
        </blockquote>
      </FadeIn>
    </div>
  );
}
