"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { PhoneCall, Users, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ConnectionLines } from "@/components/effects/ConnectionLines";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "queue", label: "Live Queue", icon: PhoneCall },
  { id: "agents", label: "Agent Performance", icon: Users },
  { id: "analytics", label: "Call Analytics", icon: TrendingUp },
] as const;

type TabId = (typeof tabs)[number]["id"];

const queueCalls = [
  {
    caller: "+1 (415) 555-0132",
    agent: "Grace O.",
    status: "In progress",
    duration: "04:12",
  },
  {
    caller: "+1 (312) 555-0198",
    agent: "Marcus I.",
    status: "In progress",
    duration: "01:47",
  },
  {
    caller: "+1 (646) 555-0175",
    agent: "Unassigned",
    status: "Waiting",
    duration: "00:22",
  },
  {
    caller: "+1 (206) 555-0114",
    agent: "Priya N.",
    status: "In progress",
    duration: "07:03",
  },
];

const agentStats = [
  { name: "Grace Okonkwo", initials: "GO", score: 96 },
  { name: "Marcus Ilori", initials: "MI", score: 91 },
  { name: "Priya Nandakumar", initials: "PN", score: 89 },
  { name: "Dana Whitfield", initials: "DW", score: 84 },
];

const analyticsTiles = [
  { label: "Calls today", value: "3,482" },
  { label: "Avg. wait time", value: "18s" },
  { label: "CSAT score", value: "4.8/5" },
];

export function DashboardPreview() {
  const [active, setActive] = useState<TabId>("queue");

  return (
    <Section id="dashboard" className="bg-surface-alt relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="bg-accent-500/15 absolute top-0 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-[120px]" />
      </div>
      <ConnectionLines className="opacity-60" />

      <Container>
        <SectionHeading
          eyebrow="Interactive preview"
          title="See your contact center, in real time"
          description="One dashboard for queues, agents, and analytics — no spreadsheets, no guesswork."
        />

        <FadeIn delay={0.3} className="mt-12 flex justify-center">
          <div className="bg-white inline-flex flex-wrap justify-center gap-1 rounded-full p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className="relative rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap"
                suppressHydrationWarning
              >
                {active === tab.id && (
                  <m.span
                    layoutId="dashboard-tab-pill"
                    className="bg-accent-400 absolute inset-0 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span
                  className={cn(
                    "relative z-10 flex items-center gap-2",
                    active === tab.id ? "text-primary-950" : "text-neutral-600",
                  )}
                >
                  <tab.icon className="size-4" />
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-10">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_20px_45px_rgba(2,6,23,0.08)]">
            <div className="flex items-center gap-2 border-b border-neutral-200 px-5 py-4 bg-neutral-50/50">
              <span className="size-3 rounded-full bg-red-500/70" />
              <span className="size-3 rounded-full bg-yellow-500/70" />
              <span className="size-3 rounded-full bg-green-500/70" />
              <span className="ml-4 truncate rounded-md bg-neutral-50 px-3 py-1 text-xs text-neutral-400">
                app.moosepbx.com/dashboard
              </span>
            </div>

            <div className="min-h-[22rem] p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <m.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {active === "queue" && <QueuePanel />}
                  {active === "agents" && <AgentsPanel />}
                  {active === "analytics" && <AnalyticsPanel />}
                </m.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}

function QueuePanel() {
  return (
    <div className="space-y-3">
      {queueCalls.map((call) => (
        <div
          key={call.caller}
          className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white shadow-sm px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <PhoneCall className="text-accent-400 size-4" />
            <span className="font-mono text-sm text-neutral-900">{call.caller}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-neutral-400">
            <span>{call.agent}</span>
            <span
              className={cn(
                "rounded-full px-2.5 py-1 text-xs font-medium",
                call.status === "Waiting"
                  ? "bg-amber-400/10 text-amber-300"
                  : "bg-emerald-400/10 text-emerald-300",
              )}
            >
              {call.status}
            </span>
            <span className="font-mono">{call.duration}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function AgentsPanel() {
  return (
    <div className="space-y-4">
      {agentStats.map((agent) => (
        <div key={agent.name} className="flex items-center gap-4">
          <div className="bg-primary-100 text-primary-700 flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
            {agent.initials}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-900">{agent.name}</span>
              <span className="text-neutral-400">{agent.score}%</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-neutral-100">
              <div
                className="bg-primary-500 h-full rounded-full"
                style={{ width: `${agent.score}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function AnalyticsPanel() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {analyticsTiles.map((tile) => (
          <div
            key={tile.label}
            className="rounded-xl border border-neutral-200 bg-white shadow-sm px-5 py-4"
          >
            <p className="text-2xl font-semibold text-neutral-900">{tile.value}</p>
            <p className="mt-1 text-sm text-neutral-400">{tile.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-neutral-200 bg-white shadow-sm p-5">
        <svg
          viewBox="0 0 400 120"
          className="h-28 w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="callVolumeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4cc9f0" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#4cc9f0" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,90 L40,70 L80,78 L120,50 L160,60 L200,35 L240,45 L280,25 L320,38 L360,20 L400,30 L400,120 L0,120 Z"
            fill="url(#callVolumeGradient)"
          />
          <path
            d="M0,90 L40,70 L80,78 L120,50 L160,60 L200,35 L240,45 L280,25 L320,38 L360,20 L400,30"
            fill="none"
            stroke="#4cc9f0"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
