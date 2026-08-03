import {
  Route,
  BarChart3,
  MessagesSquare,
  Bot,
  ShieldCheck,
  Puzzle,
  Mic,
  Globe2,
  Users,
  Smartphone,
} from "lucide-react";
import type { Feature } from "@/types";

export const allFeatures: Feature[] = [
  {
    icon: Route,
    title: "Smart Call Routing",
    description:
      "Route every call using skills-based rules, real-time availability, and caller intent.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Live dashboards surface queue health, agent performance, and SLA risk as it happens.",
  },
  {
    icon: MessagesSquare,
    title: "Omnichannel Inbox",
    description:
      "Voice, SMS, and chat converge into a single unified conversation timeline.",
  },
  {
    icon: Bot,
    title: "AI-Powered IVR",
    description:
      "Natural-language voice bots resolve routine requests and escalate with full context.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description:
      "End-to-end encryption and SOC 2-aligned controls on every call and recording.",
  },
  {
    icon: Puzzle,
    title: "Seamless Integrations",
    description:
      "Connect to the CRM, helpdesk, and workflow tools your team already runs on.",
  },
  {
    icon: Mic,
    title: "Call Recording & QA",
    description:
      "Record, transcribe, and score calls automatically against your quality rubric.",
  },
  {
    icon: Globe2,
    title: "Global Number Coverage",
    description:
      "Provision local, toll-free, and international numbers in minutes, in over 60 countries.",
  },
  {
    icon: Users,
    title: "Workforce Management",
    description:
      "Forecast staffing needs and manage schedules against real call volume patterns.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description:
      "Agents can take calls, view queues, and check performance from anywhere.",
  },
];
