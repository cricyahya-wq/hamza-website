import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$39",
    period: "/month",
    description: "For small teams getting off legacy phone systems.",
    features: [
      "Up to 10 Agents",
      "Cloud PBX & unlimited extensions",
      "Basic call routing & IVR",
      "Call recording (30-day retention)",
      "Email support",
    ],
    ctaLabel: "Get started",
    ctaHref: "/contact",
  },
  {
    name: "Growth",
    price: "$99",
    period: "/month",
    description: "For growing support and sales teams that need real insight.",
    features: [
      "Up to 50 Agents",
      "Skills-based routing & live queue monitoring",
      "Real-time analytics dashboards",
      "CRM & helpdesk integrations",
      "Call recording (1-year retention)",
      "Priority support, 24/7",
    ],
    ctaLabel: "Get started",
    ctaHref: "/contact",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large or regulated organizations with custom needs.",
    features: [
      "Unlimited agent seats",
      "AI Voice Agents & custom IVR flows",
      "Dedicated infrastructure & SLA",
      "SOC 2-aligned security controls",
      "Custom integrations & API access",
      "Dedicated customer success manager",
    ],
    ctaLabel: "Talk to sales",
    ctaHref: "/contact",
  },
];
