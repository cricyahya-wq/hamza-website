"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { Cloud, GitMerge, BarChart, Voicemail } from "lucide-react";

const showcaseData = [
  {
    title: "Cloud PBX",
    description:
      "Eliminate expensive on-premises hardware and IT maintenance contracts. With MoosePBX's Cloud PBX, you can manage your entire phone system from a single web dashboard. Provision new numbers instantly, add users with a click, and allow your team to work from anywhere with an internet connection while maintaining professional business caller ID.",
    icon: Cloud,
    image: "/images/feature-cloud-pbx.jpg",
    imageAlt: "Cloud PBX dashboard showing extensions and user status",
  },
  {
    title: "Smart Call Routing",
    description:
      "Never lose a lead to voicemail again. Build intelligent routing flows that direct calls based on department, time of day, business hours, and language preferences. Use our drag-and-drop IVR builder to create custom greetings and menus that ensure every caller reaches the most qualified available agent immediately.",
    icon: GitMerge,
    image: "/images/feature-call-routing.jpg",
    imageAlt: "Visual IVR call flow builder with drag-and-drop nodes",
  },
  {
    title: "AI Analytics",
    description:
      "Stop guessing and start optimizing. Our AI-powered analytics engine transcribes calls, detects sentiment, and highlights trends automatically. View real-time dashboards to monitor queue depths and agent availability, or dig into historical reports to identify peak calling times and coaching opportunities.",
    icon: BarChart,
    image: "/images/feature-ai-analytics.jpg",
    imageAlt: "AI analytics dashboard with call volume charts and sentiment analysis",
  },
  {
    title: "Call Recording",
    description:
      "Ensure compliance, improve quality assurance, and streamline employee training with secure, automatic call recording. Recordings are encrypted at rest, securely stored in the cloud, and easily searchable by date, agent, or phone number. Access them instantly from your dashboard whenever you need them.",
    icon: Voicemail,
    image: "/images/feature-call-recording.jpg",
    imageAlt: "Call recording dashboard with waveform player and transcript",
  },
];

export function FeatureShowcase() {
  return (
    <div className="space-y-24 sm:space-y-32">
      {showcaseData.map((item, index) => {
        const isEven = index % 2 === 0;
        const Icon = item.icon;

        return (
          <Container key={item.title}>
            <div
              className={cn(
                "grid items-center gap-12 lg:grid-cols-2 lg:gap-24",
                !isEven && "lg:grid-cols-[1fr_1fr] lg:rtl"
              )}
            >
              {/* Image Side */}
              <FadeIn
                className={cn(!isEven && "lg:col-start-2")}
                y={0}
              >
                <div className="group relative aspect-square overflow-hidden rounded-3xl sm:aspect-[4/3] lg:aspect-square shadow-2xl border border-border">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Subtle overlay for polish */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </FadeIn>

              {/* Content Side */}
              <FadeIn
                className={cn(!isEven && "lg:col-start-1 lg:ltr")}
                y={0}
                delay={0.1}
              >
                <div className={cn("max-w-xl", !isEven && "lg:ml-auto")}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-400/10 border border-accent-400/20">
                    <Icon className="h-6 w-6 text-accent-400" />
                  </div>
                  <h2 className="font-display mt-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    {item.title}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-neutral-400">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            </div>
          </Container>
        );
      })}
    </div>
  );
}

