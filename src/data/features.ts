import {
  Route,
  BarChart3,
  MessagesSquare,
  Bot,
  ShieldCheck,
  Puzzle,
} from "lucide-react";
import type { Feature } from "@/types";

export const features: Feature[] = [
  {
    icon: Route,
    title: "Smart Call Routing",
    description:
      "Automatically route every call to the right agent using skills-based rules, real-time availability, and caller intent — no manual triage required.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Live dashboards surface queue health, agent performance, and SLA risk the moment it happens.",
  },
  {
    icon: MessagesSquare,
    title: "Omnichannel Inbox",
    description:
      "Voice, SMS, and chat converge into a single unified conversation timeline for every customer.",
  },
  {
    icon: Bot,
    title: "AI-Powered IVR",
    description:
      "Natural-language voice bots resolve routine requests instantly and escalate complex ones with full context.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description:
      "End-to-end encryption, SOC 2-aligned controls, and granular role-based access on every call.",
  },
  {
    icon: Puzzle,
    title: "Seamless Integrations",
    description:
      "Connect MoosePBX to the CRM, helpdesk, and workflow tools your team already runs on.",
    className: "md:col-span-2",
  },
];
