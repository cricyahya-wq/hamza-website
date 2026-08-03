import {
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Home,
  Truck,
  Landmark,
  Building2,
  Code,
  Landmark as GovtIcon,
  Headset,
  Briefcase,
  TrendingDown,
  SmilePlus,
  MonitorSmartphone,
  BrainCircuit,
  ShieldCheck,
  Server,
  LifeBuoy,
  Cloud,
  Zap,
  Globe,
  DollarSign,
  Activity,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface IndustryCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const industriesGrid: IndustryCard[] = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Secure, HIPAA-compliant patient communication.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Connect staff, students, and parents seamlessly.",
  },
  {
    icon: Landmark,
    title: "Banking & Finance",
    description: "Compliant, encrypted calls for financial institutions.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    description: "Manage high call volumes and customer support.",
  },
  {
    icon: Home, // Using Home for Hospitality/Real Estate, will customize
    title: "Hospitality",
    description: "Enhance guest experience and internal coordination.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Keep mobile agents connected with clients anywhere.",
  },
  {
    icon: Briefcase,
    title: "Manufacturing",
    description: "Bridge the gap between the factory floor and the office.",
  },
  {
    icon: Truck,
    title: "Logistics & Transportation",
    description: "Real-time dispatch and fleet communication.",
  },
  {
    icon: Code,
    title: "IT & Software",
    description: "Enable global collaboration and technical support.",
  },
  {
    icon: GovtIcon,
    title: "Government",
    description: "Secure and reliable public service communication.",
  },
  {
    icon: Headset,
    title: "Call Centers",
    description: "Advanced routing, IVR, and analytics at scale.",
  },
  {
    icon: Users,
    title: "SMBs",
    description: "Affordable, scalable cloud PBX for growing teams.",
  },
];

export interface IndustryShowcase {
  id: string;
  title: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  features: string[];
  benefits: string[];
  icon: LucideIcon;
  color: string;
}

export const industryShowcases: IndustryShowcase[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    overview:
      "Healthcare organizations require secure, reliable, and compliant communication to manage patient care, appointments, and multi-location operations without compromising sensitive data.",
    challenges: [
      "Securing patient communication (HIPAA compliance)",
      "Managing high volumes of appointment calls",
      "Connecting multiple clinics and hospitals",
    ],
    solutions: [
      "End-to-end encrypted voice and messaging",
      "Automated IVR for appointment routing",
      "Unified system across all locations",
    ],
    features: ["Secure SIP", "Call Recording (Compliant)", "Smart IVR"],
    benefits: [
      "Reduced missed appointments",
      "Guaranteed data privacy",
      "Faster patient response times",
    ],
    icon: HeartPulse,
    color: "from-rose-500 to-rose-700",
  },
  {
    id: "retail",
    title: "Retail & E-Commerce",
    overview:
      "Retailers need to deliver exceptional customer service, manage multi-store communications, and handle seasonal spikes in call volume efficiently.",
    challenges: [
      "Inconsistent customer service experiences",
      "Disconnected store locations",
      "Overwhelming seasonal call volumes",
    ],
    solutions: [
      "Centralized call routing for all branches",
      "AI voice agents to handle basic inquiries",
      "CRM integration for personalized support",
    ],
    features: ["AI Voice Agents", "CRM Integration", "Skills-based Routing"],
    benefits: [
      "Improved customer satisfaction",
      "Lower operational costs during peaks",
      "Unified brand experience",
    ],
    icon: ShoppingBag,
    color: "from-amber-500 to-orange-700",
  },
  {
    id: "finance",
    title: "Banking & Finance",
    overview:
      "Financial institutions operate under strict regulatory scrutiny and require absolute security, auditability, and reliability in all client communications.",
    challenges: [
      "Strict compliance and audit requirements",
      "Protecting sensitive financial data",
      "Providing VIP customer support",
    ],
    solutions: [
      "Mandatory, secure call recording with retention policies",
      "Bank-grade encryption on all channels",
      "Priority routing for high-value clients",
    ],
    features: ["Call Recording", "End-to-End Encryption", "Priority Queues"],
    benefits: [
      "Simplified compliance audits",
      "Zero data breaches",
      "Higher client retention",
    ],
    icon: Landmark,
    color: "from-emerald-500 to-teal-700",
  },
  {
    id: "logistics",
    title: "Logistics & Transportation",
    overview:
      "Logistics companies rely on real-time communication between dispatchers, drivers, and customers to ensure on-time deliveries and efficient fleet management.",
    challenges: [
      "Coordinating a mobile workforce",
      "Updating customers on delivery status",
      "Managing complex dispatch operations",
    ],
    solutions: [
      "Mobile apps that keep drivers connected to the PBX",
      "Automated SMS/Voice delivery updates",
      "Real-time dashboards for dispatchers",
    ],
    features: ["Mobile App", "Automated Notifications", "Live Dashboard"],
    benefits: [
      "Fewer missed deliveries",
      "Faster dispatch coordination",
      "Improved driver safety and connectivity",
    ],
    icon: Truck,
    color: "from-blue-500 to-indigo-700",
  },
  {
    id: "call-centers",
    title: "Call Centers",
    overview:
      "High-volume call centers demand advanced routing, deep analytics, and automation tools to maintain SLAs and keep agent productivity high.",
    challenges: [
      "High agent turnover and training time",
      "Meeting strict SLA metrics",
      "Lack of real-time visibility into queues",
    ],
    solutions: [
      "AI analytics and live coaching tools",
      "Predictive routing and automated callbacks",
      "Customizable real-time wallboards",
    ],
    features: ["AI Analytics", "Live Dashboards", "Automated Callbacks"],
    benefits: [
      "Reduced Average Handle Time (AHT)",
      "Higher First Contact Resolution (FCR)",
      "Lower agent churn",
    ],
    icon: Headset,
    color: "from-accent-400 to-accent-600",
  },
];

export const generalBenefits = [
  {
    icon: TrendingDown,
    title: "Reduce Communication Costs",
    description: "Save up to 40% compared to traditional on-premises PBX systems.",
  },
  {
    icon: SmilePlus,
    title: "Improve Customer Experience",
    description: "Ensure every caller reaches the right person instantly.",
  },
  {
    icon: MonitorSmartphone,
    title: "Work From Anywhere",
    description: "Full PBX functionality on desktop, desk phones, and mobile apps.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Insights",
    description: "Transcribe calls and detect sentiment automatically.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "End-to-end encryption and compliance-ready infrastructure.",
  },
  {
    icon: Cloud,
    title: "Scalable Infrastructure",
    description: "Add or remove users instantly with a few clicks.",
  },
  {
    icon: Activity,
    title: "High Availability",
    description: "99.99% uptime guaranteed with global data center redundancy.",
  },
  {
    icon: LifeBuoy,
    title: "24/7 Expert Support",
    description: "Our dedicated support team is available around the clock.",
  },
];

export const customerSuccess = {
  quote:
    "Switching to MoosePBX reduced our telephony costs by 40% while dramatically improving our agent response times. The AI analytics alone have transformed how we train our team.",
  author: "Sarah Jenkins",
  role: "VP of Operations",
  company: "Global Logistics Co.",
  industry: "Logistics",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=800",
  stats: [
    { value: "40%", label: "Lower Communication Costs" },
    { value: "99.99%", label: "Uptime Achieved" },
    { value: "60%", label: "Faster Response Times" },
    { value: "30%", label: "Increased Productivity" },
  ],
};

export const whyChooseMoosepbx = [
  {
    icon: Cloud,
    title: "Cloud-Based",
    description: "No hardware to maintain or upgrade. Always up to date.",
  },
  {
    icon: Zap,
    title: "Easy Deployment",
    description: "Go live in days, not months. Seamless onboarding process.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Built from the ground up to protect your business data.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Local numbers and reliable calling across 100+ countries.",
  },
  {
    icon: DollarSign,
    title: "Flexible Pricing",
    description: "Pay only for what you need with scalable, transparent plans.",
  },
  {
    icon: LifeBuoy,
    title: "Dedicated Support",
    description: "Get help when you need it from our telecommunications experts.",
  },
];
