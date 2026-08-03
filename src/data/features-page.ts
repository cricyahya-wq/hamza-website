import {
  Cloud,
  Mic,
  Globe,
  GitMerge,
  BarChart,
  Voicemail,
  LayoutDashboard,
  Link,
  Smartphone,
  ShieldCheck,
  Users,
  Activity,
  Zap,
  TrendingUp,
  DollarSign,
  Headset,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface CoreFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const coreFeatures: CoreFeature[] = [
  {
    icon: Cloud,
    title: "Cloud PBX",
    description:
      "Manage your phone system from anywhere without expensive hardware.",
  },
  {
    icon: Mic,
    title: "HD Voice",
    description: "Crystal-clear audio for professional conversations.",
  },
  {
    icon: Globe,
    title: "Global Calling",
    description:
      "Reach customers worldwide with reliable international calling.",
  },
  {
    icon: GitMerge,
    title: "Smart Call Routing",
    description:
      "Automatically direct calls to the correct department or agent.",
  },
  {
    icon: BarChart,
    title: "AI Call Analytics",
    description:
      "Gain insights into call performance with AI-powered reporting.",
  },
  {
    icon: Voicemail,
    title: "Call Recording",
    description:
      "Record conversations securely for compliance and training.",
  },
  {
    icon: LayoutDashboard,
    title: "Real-Time Dashboard",
    description: "Monitor calls, queues, and agent performance live.",
  },
  {
    icon: Link,
    title: "CRM Integration",
    description:
      "Connect with Salesforce, HubSpot, Zoho CRM, Microsoft Dynamics, and other CRM platforms.",
  },
  {
    icon: Smartphone,
    title: "Mobile & Desktop Apps",
    description: "Stay connected from any device.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Secure communication with encryption and authentication.",
  },
  {
    icon: Users,
    title: "Multi-User Management",
    description: "Manage departments, users, roles, and permissions.",
  },
  {
    icon: Activity,
    title: "99.99% Uptime",
    description: "Reliable infrastructure with maximum availability.",
  },
];

export const integrations = [
  "Salesforce",
  "HubSpot",
  "Zoho CRM",
  "Microsoft Teams",
  "Slack",
  "Google Workspace",
  "Microsoft 365",
  "Zapier",
  "API Integration",
];

export const securityFeatures = [
  "End-to-End Encryption",
  "Secure SIP",
  "Multi-Factor Authentication",
  "Automatic Backups",
  "High Availability",
  "DDoS Protection",
  "Compliance Ready",
  "24/7 Infrastructure Monitoring",
];

export const whyChooseFeatures = [
  {
    icon: Zap,
    title: "Easy Setup",
    description: "Get up and running in minutes, not months.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Infrastructure",
    description: "Grow your team without worrying about system limits.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Predictable monthly costs with no hidden fees.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Bank-grade protection for your conversations.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Connect with anyone, anywhere in the world.",
  },
  {
    icon: Headset,
    title: "24/7 Expert Support",
    description: "Our dedicated team is always here to help you succeed.",
  },
];

export const comparisonData = [
  {
    feature: "Hardware Costs",
    traditional: "High upfront investment",
    moose: "Zero hardware required",
  },
  {
    feature: "Maintenance",
    traditional: "Expensive IT contracts",
    moose: "Included and automatic",
  },
  {
    feature: "Scalability",
    traditional: "Requires physical upgrades",
    moose: "Instant click-to-scale",
  },
  {
    feature: "Remote Access",
    traditional: "Complex VPNs needed",
    moose: "Work from anywhere natively",
  },
  {
    feature: "Analytics",
    traditional: "Basic call logs",
    moose: "Real-time AI reporting",
  },
  {
    feature: "Call Recording",
    traditional: "Costly add-on equipment",
    moose: "Built-in and searchable",
  },
  {
    feature: "Cloud Management",
    traditional: "No (on-premises)",
    moose: "Yes (web dashboard)",
  },
  {
    feature: "AI Features",
    traditional: "None",
    moose: "Voice agents, sentiment analysis",
  },
  {
    feature: "Updates",
    traditional: "Manual and disruptive",
    moose: "Continuous and seamless",
  },
  {
    feature: "Security",
    traditional: "Vulnerable to physical damage",
    moose: "Encrypted and geographically redundant",
  },
];
