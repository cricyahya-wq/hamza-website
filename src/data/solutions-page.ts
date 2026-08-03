import {
  Cloud,
  Phone,
  Headset,
  Network,
  BrainCircuit,
  Link,
  Laptop,
  MapPin,
  BarChart,
  ShieldCheck,
  TrendingDown,
  SmilePlus,
  Zap,
  MonitorSmartphone,
  Activity,
  Globe,
  DollarSign,
  LifeBuoy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SolutionCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const solutionsGrid: SolutionCard[] = [
  {
    icon: Cloud,
    title: "Cloud PBX",
    description: "Replace traditional phone systems with a secure cloud-based communication platform.",
  },
  {
    icon: Phone,
    title: "Business Phone System",
    description: "Professional phone system with extensions, voicemail, HD voice, and call forwarding.",
  },
  {
    icon: Headset,
    title: "Call Center Solution",
    description: "Complete solution for inbound and outbound customer support teams.",
  },
  {
    icon: Network,
    title: "SIP Trunking",
    description: "Reduce communication costs with secure internet-based calling.",
  },
  {
    icon: BrainCircuit,
    title: "AI Communication",
    description: "AI-powered analytics, transcription, reporting, and conversation insights.",
  },
  {
    icon: Link,
    title: "CRM Integration",
    description: "Connect MoosePBX with Salesforce, HubSpot, Zoho CRM, and other CRM platforms.",
  },
  {
    icon: Laptop,
    title: "Remote Workforce",
    description: "Enable employees to communicate securely from anywhere.",
  },
  {
    icon: MapPin,
    title: "Multi-Location Business",
    description: "Manage communication across multiple offices from a single platform.",
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Real-time dashboards, performance reports, and business insights.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "End-to-end encryption, secure authentication, and compliance.",
  },
];

export interface DetailedSolution {
  id: string;
  title: string;
  problem: string;
  solution: string;
  benefits: string[];
  features: string[];
  icon: LucideIcon;
  color: string;
}

export const detailedSolutions: DetailedSolution[] = [
  {
    id: "cloud-pbx",
    title: "Cloud PBX",
    problem:
      "Legacy on-premises PBX systems are expensive to maintain, hard to scale, and tie your workforce to physical desk phones in a single office.",
    solution:
      "MoosePBX transitions your entire phone system to the cloud, eliminating hardware costs and IT maintenance while providing a central dashboard to manage users globally.",
    benefits: [
      "Zero hardware maintenance",
      "Scale instantly as you grow",
      "Work from any device",
    ],
    features: ["Web Dashboard", "Instant Number Provisioning", "Softphones"],
    icon: Cloud,
    color: "from-blue-500 to-indigo-700",
  },
  {
    id: "call-center",
    title: "Call Center Solution",
    problem:
      "Customer support teams struggle with dropped calls, lack of queue visibility, and disconnected data, leading to poor customer experiences and high agent churn.",
    solution:
      "A complete inbound and outbound contact center platform that intelligently routes calls, tracks metrics in real-time, and provides agents with contextual caller data.",
    benefits: [
      "Improve First Contact Resolution",
      "Reduce customer wait times",
      "Boost agent productivity",
    ],
    features: ["Skills-based Routing", "Live Wallboards", "Call Recording"],
    icon: Headset,
    color: "from-accent-400 to-primary-600",
  },
  {
    id: "remote-workforce",
    title: "Remote Workforce",
    problem:
      "Distributed teams often use a patchwork of personal cell phones and disparate apps, resulting in an unprofessional image and security vulnerabilities.",
    solution:
      "MoosePBX unifies your remote workforce. Employees use their business number from our mobile or desktop app, keeping work and personal communication separate while maintaining a cohesive brand presence.",
    benefits: [
      "Maintain professional caller ID",
      "Secure corporate data",
      "Unify team communication",
    ],
    features: ["Mobile App (iOS/Android)", "Desktop App", "Team Messaging"],
    icon: Laptop,
    color: "from-emerald-500 to-teal-700",
  },
  {
    id: "ai-communication",
    title: "AI Communication",
    problem:
      "Quality assurance requires manual review of hours of call recordings, meaning 99% of conversations go unaudited and valuable business insights are lost.",
    solution:
      "Our AI automatically transcribes calls, detects customer sentiment, and generates concise summaries, allowing managers to instantly identify coaching opportunities and market trends.",
    benefits: [
      "Automated QA scoring",
      "Real-time coaching alerts",
      "Identify churn risks early",
    ],
    features: ["Auto-Transcription", "Sentiment Analysis", "AI Summaries"],
    icon: BrainCircuit,
    color: "from-purple-500 to-pink-700",
  },
  {
    id: "sip-trunking",
    title: "SIP Trunking",
    problem:
      "Businesses paying for traditional PRI lines suffer from high per-minute costs, lack of flexibility, and geographic restrictions on phone numbers.",
    solution:
      "MoosePBX SIP Trunking routes your calls over the internet with bank-grade security, instantly reducing telecom costs while allowing you to establish a local presence anywhere in the world.",
    benefits: [
      "Cut telecom bills by up to 50%",
      "Unlimited concurrent calls",
      "Global number porting",
    ],
    features: ["Elastic Capacity", "Secure SIP/TLS", "Global Coverage"],
    icon: Network,
    color: "from-orange-500 to-red-700",
  },
  {
    id: "crm-integration",
    title: "CRM Integration",
    problem:
      "Sales and support agents waste hours manually logging calls and searching for customer records while the customer is waiting on hold.",
    solution:
      "MoosePBX integrates deeply with your CRM. Incoming calls automatically pop up the caller's CRM record, and all call logs, recordings, and notes are synced back to the CRM instantly.",
    benefits: [
      "Eliminate manual data entry",
      "Personalize customer interactions",
      "Accelerate sales cycles",
    ],
    features: ["Screen Pops", "Auto-Logging", "Click-to-Dial"],
    icon: Link,
    color: "from-rose-500 to-rose-700",
  },
];

export const solutionsBenefits = [
  {
    icon: TrendingDown,
    title: "Reduce Communication Costs",
    description: "Eliminate hardware costs and lower your monthly telecom bills.",
  },
  {
    icon: SmilePlus,
    title: "Improve Customer Experience",
    description: "Intelligent routing ensures customers reach the right agent faster.",
  },
  {
    icon: Zap,
    title: "Increase Productivity",
    description: "Automate manual tasks and integrate with your existing workflow.",
  },
  {
    icon: Cloud,
    title: "Scale Without Hardware",
    description: "Add users, numbers, and locations instantly from the cloud.",
  },
  {
    icon: MonitorSmartphone,
    title: "Work From Anywhere",
    description: "Stay connected whether in the office, at home, or on the go.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Protect your data with end-to-end encryption and compliance.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Insights",
    description: "Unlock the hidden value in your voice conversations.",
  },
  {
    icon: Activity,
    title: "99.99% Uptime",
    description: "Rely on our globally distributed, redundant network architecture.",
  },
];

export const solutionsSuccess = [
  {
    quote:
      "MoosePBX fundamentally changed our operations. By moving to their cloud solution and integrating with Salesforce, our sales team increased their output by 50% while our overall telephony costs dropped significantly.",
    author: "David Chen",
    role: "Director of Sales",
    company: "TechFlow Enterprise",
    industry: "Software",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=800",
    stats: [
      { value: "40%", label: "Lower Communication Costs" },
      { value: "30%", label: "Faster Customer Response" },
      { value: "99.99%", label: "Platform Uptime" },
      { value: "50%", label: "Increase in Team Productivity" },
    ],
  },
];

export const whyChooseSolutions = [
  {
    icon: Cloud,
    title: "Cloud-Based Infrastructure",
    description: "Built natively for the cloud for maximum scalability and speed.",
  },
  {
    icon: Zap,
    title: "Easy Deployment",
    description: "Migrate your entire team in hours, not weeks.",
  },
  {
    icon: DollarSign,
    title: "Flexible Pricing",
    description: "Predictable, transparent plans that scale with your growth.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Bank-grade encryption and strict access controls.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Establish a local presence in over 100 countries.",
  },
  {
    icon: LifeBuoy,
    title: "24/7 Expert Support",
    description: "Our dedicated engineers are always on standby to assist you.",
  },
];
