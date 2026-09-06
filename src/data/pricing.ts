import type { PricingPlan } from "@/types";

export const dialerPlans: PricingPlan[] = [
  {
    name: "Starter Dialer",
    price: "$39",
    period: "/month",
    description: "For small teams getting started with cloud PBX and essential dialing tools.",
    features: [
      "Up to 10 Agents",
      "Cloud PBX & unlimited extensions",
      "Auto dialer & smart queues",
      "Basic call routing & IVR",
      "Call recording (30-day retention)",
      "Email & community support",
    ],
    ctaLabel: "Get started",
    ctaHref: "/contact?plan=starter-dialer",
  },
  {
    name: "Growth Predictive Dialer",
    price: "$99",
    period: "/month",
    description: "For high-velocity outbound sales and active customer service teams.",
    features: [
      "Up to 50 Agents",
      "Predictive & Power Auto Dialer",
      "Skills-based routing & live queue monitoring",
      "Real-time analytics dashboards",
      "CRM & helpdesk integrations",
      "Call recording (1-year retention)",
      "Priority 24/7 technical support",
    ],
    ctaLabel: "Get started",
    ctaHref: "/contact?plan=growth-dialer",
    popular: true,
  },
  {
    name: "Enterprise Dialer",
    price: "Custom",
    description: "For large contact centers needing high-capacity SIP and dedicated clusters.",
    features: [
      "Unlimited agent seats",
      "High-capacity load-balanced SIP trunks",
      "Dedicated Kamailio & SIP servers",
      "Custom dialer logic & API workflows",
      "Dedicated infrastructure & 99.99% SLA",
      "Dedicated customer success manager",
    ],
    ctaLabel: "Talk to sales",
    ctaHref: "/contact?plan=enterprise-dialer",
  },
];

export const aiBotPlans: PricingPlan[] = [
  {
    name: "AI Voice Agent",
    price: "$45",
    period: "/agent /month",
    description: "Autonomous conversational AI voice bot for handling inbound and outbound calls.",
    features: [
      "Full AI Voice Bot & Virtual Agent",
      "$45 per agent seat / month",
      "Sub-500ms conversational response",
      "Inbound FAQ & smart qualification",
      "Outbound AI smart calling campaigns",
      "Context-aware live human agent handoff",
      "Real-time transcription & sentiment analysis",
      "CRM integration & webhook automation",
    ],
    ctaLabel: "Deploy AI Voice Agent",
    ctaHref: "/contact?plan=ai-voice-agent",
    badge: "Popular AI Bot",
    badgeColor: "bg-[#315FE8]",
    popular: true,
  },
  {
    name: "Enterprise AI Bot",
    price: "Custom",
    description: "Custom-trained LLM voice agents with proprietary knowledge bases and specialized telephony flows.",
    features: [
      "Custom fine-tuned LLM voice models",
      "Proprietary knowledge base RAG integration",
      "Multi-lingual neural voice synthesis",
      "High-concurrency parallel AI call streams",
      "HIPAA & SOC 2 compliance guardrails",
      "Dedicated AI telephony engineer support",
    ],
    ctaLabel: "Talk to AI Specialists",
    ctaHref: "/contact?plan=enterprise-ai-bot",
  },
];

export const pricingPlans: PricingPlan[] = [...dialerPlans, ...aiBotPlans];
