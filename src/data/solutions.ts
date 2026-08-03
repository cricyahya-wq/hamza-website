import {
  Headset,
  TrendingUp,
  Building2,
  Globe,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { Solution } from "@/types";

export const solutions: Solution[] = [
  {
    icon: Headset,
    title: "Customer Support",
    description:
      "Give support teams one queue, full context on every caller, and the routing rules to hit SLA every time.",
  },
  {
    icon: TrendingUp,
    title: "Sales & Outbound",
    description:
      "Power outbound campaigns with local presence dialing, call recording, and pipeline-ready call outcomes.",
  },
  {
    icon: Building2,
    title: "Enterprise Operations",
    description:
      "Standardize call handling across departments and offices with centralized administration and reporting.",
  },
  {
    icon: Globe,
    title: "Distributed & Remote Teams",
    description:
      "Agents can take calls from anywhere with the same routing, monitoring, and quality your office team relies on.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-Sensitive Teams",
    description:
      "Encrypted calls, granular access controls, and full audit trails for teams operating under strict compliance.",
  },
  {
    icon: Workflow,
    title: "Operations & IT",
    description:
      "Give IT a platform that's simple to provision, monitor, and integrate — without a forklift migration.",
  },
];
