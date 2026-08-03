import { PhoneCall, Headset, Sparkles, LineChart } from "lucide-react";
import type { Product } from "@/types";

export const products: Product[] = [
  {
    icon: PhoneCall,
    name: "Cloud PBX",
    tagline: "Your entire phone system, in the cloud.",
    description:
      "Enterprise-grade voice infrastructure with zero hardware. Provision numbers, extensions, and call flows in minutes.",
    bullets: [
      "Unlimited extensions & IVR menus",
      "Global number provisioning",
      "99.99% uptime SLA",
    ],
  },
  {
    icon: Headset,
    name: "Contact Center Suite",
    tagline: "Purpose-built for high-volume support teams.",
    description:
      "Queue management, skills-based routing, and supervisor tools that keep every customer moving toward resolution.",
    bullets: [
      "Skills-based call routing",
      "Live queue & agent monitoring",
      "Call recording & QA scoring",
    ],
  },
  {
    icon: Sparkles,
    name: "AI Voice Agents",
    tagline: "Automate the first line of support.",
    description:
      "Conversational AI handles routine calls end-to-end and hands off to a human with full context when needed.",
    bullets: [
      "Natural-language call deflection",
      "Context-aware live handoff",
      "Continuously learning from transcripts",
    ],
  },
  {
    icon: LineChart,
    name: "Analytics & Reporting",
    tagline: "Every metric that moves your business.",
    description:
      "From SLA adherence to cost-per-call, get the reporting layer leadership actually reads.",
    bullets: [
      "Real-time & historical dashboards",
      "Custom report builder",
      "Exportable executive summaries",
    ],
  },
];
