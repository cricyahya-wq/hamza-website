import { LucideIcon } from "lucide-react";
import {
  Globe,
  Phone,
  Server,
  Shield,
  Zap,
  Lock,
  Headphones,
  Settings,
  Activity,
  Cloud,
  Network,
  Database
} from "lucide-react";

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  long_description: string;
  image: string;
  icon: LucideIcon;
  features: { title: string; description: string; icon: LucideIcon }[];
  benefits: { title: string; description: string }[];
  use_cases: { title: string; description: string }[];
  technical_specs: { label: string; value: string }[];
  why_choose: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  related_services: string[]; // Slugs of related services
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "voip-solutions",
    title: "VoIP Solutions",
    subtitle: "High-definition cloud voice calling with enterprise-grade reliability.",
    description: "High-definition cloud voice calling with enterprise-grade reliability, crystal-clear audio, and seamless business communication.",
    long_description: "MoosePBX VoIP Solutions transform the way your business communicates by moving your telephony to the cloud. We eliminate the need for expensive, clunky on-premise hardware, replacing it with a fully scalable, globally accessible voice network. Whether your team is centralized in a call center or distributed globally, our VoIP architecture guarantees ultra-low latency, HD audio quality, and seamless connectivity across all devices.",
    image: "/images/services/voip-solution-3d.png",
    icon: Globe,
    features: [
      { title: "HD Audio Routing", description: "Advanced wideband codecs ensure every call sounds crystal clear without jitter or lag.", icon: Headphones },
      { title: "Global Numbers", description: "Instantly provision local, toll-free, and international numbers in over 100+ countries.", icon: Globe },
      { title: "Unified Communications", description: "Seamlessly switch between desk phones, softphones, and mobile apps without dropping the call.", icon: Phone },
      { title: "Smart Call Routing", description: "Route incoming calls intelligently based on time of day, IVR selections, or agent availability.", icon: Network },
    ],
    benefits: [
      { title: "Reduce Telephony Costs", description: "Cut your monthly communication bills by up to 60% compared to traditional landlines by leveraging our global SIP network." },
      { title: "Infinite Scalability", description: "Add new users, phone numbers, and call queues instantly through our self-service portal without calling IT." },
      { title: "Business Continuity", description: "With multi-region cloud redundancy, your business phone system stays online even during local power outages." },
    ],
    use_cases: [
      { title: "Distributed Teams", description: "Allow remote employees to make and receive calls from their business number on any internet-connected device." },
      { title: "Customer Support Hubs", description: "Equip your support team with reliable voice channels integrated directly into your CRM." },
    ],
    technical_specs: [
      { label: "Supported Codecs", value: "G.711, G.722, Opus, G.729" },
      { label: "Uptime SLA", value: "99.999% Globally" },
      { label: "Latency Target", value: "< 50ms (Regional)" },
      { label: "Protocol", value: "SIP over UDP/TCP/TLS" },
    ],
    why_choose: [
      { title: "Carrier-Grade Backbone", description: "We bypass the public internet for the majority of call routing, ensuring pristine voice quality." },
      { title: "No Hardware Required", description: "Everything runs in the cloud. Just plug in your headset and start dialing." },
    ],
    faq: [
      { question: "Can I keep my existing phone numbers?", answer: "Yes, we offer seamless, free number porting (LNP) for all local and toll-free numbers." },
      { question: "What internet speed do I need?", answer: "We recommend at least 100kbps of dedicated upload and download bandwidth per concurrent call." },
      { question: "Is it compatible with desk phones?", answer: "Yes, our VoIP solutions are compatible with all major SIP-enabled desk phones (Polycom, Yealink, Cisco, etc.)." },
    ],
    related_services: ["voice-dialer", "secure-sip", "asterisk-free-switch"]
  },
  {
    slug: "voice-dialer",
    title: "Voice Dialer",
    subtitle: "Smart predictive dialer built for high-volume outbound campaigns.",
    description: "Smart predictive dialer built for outbound campaigns, contact lists, and high-volume calling.",
    long_description: "Maximize your sales team's efficiency with the MoosePBX Predictive Voice Dialer. Built for high-volume contact centers, our dialer automatically filters out busy signals, voicemails, and disconnected numbers, connecting your agents only with live prospects. With dynamic pacing algorithms, the dialer adjusts the dialing rate based on real-time agent availability and call drop metrics, ensuring compliance while maximizing talk time.",
    image: "/images/services/voice-dialer-3d.png",
    icon: Phone,
    features: [
      { title: "Predictive Pacing", description: "Machine learning algorithms adjust dialing speeds to ensure maximum agent utilization with minimal wait time.", icon: Activity },
      { title: "Answering Machine Detection (AMD)", description: "Accurately detect and skip voicemails so agents only speak to human leads.", icon: Settings },
      { title: "Local Presence", description: "Automatically display local caller IDs based on the prospect's area code to boost answer rates by 40%.", icon: Globe },
      { title: "Real-time Analytics", description: "Monitor campaign performance, drop rates, and agent efficiency in a live, customizable dashboard.", icon: Database },
    ],
    benefits: [
      { title: "300% Increase in Talk Time", description: "Eliminate manual dialing and waiting, allowing agents to spend their entire shift having meaningful conversations." },
      { title: "TCPA Compliance Tools", description: "Built-in scrubbing and time-zone rules ensure you stay compliant with regulatory dialing restrictions." },
      { title: "CRM Synchronization", description: "Automatically log call dispositions, notes, and recordings directly into Salesforce, HubSpot, or Zoho." },
    ],
    use_cases: [
      { title: "Outbound Sales Teams", description: "Rapidly burn through lead lists while ensuring agents always have someone to talk to." },
      { title: "Debt Collection", description: "Efficiently reach contacts at scale using automated dialing strategies and compliant retry logic." },
    ],
    technical_specs: [
      { label: "Dialing Modes", value: "Predictive, Power, Preview, Progressive" },
      { label: "AMD Accuracy", value: "95%+" },
      { label: "Max Calls Per Second (CPS)", value: "Up to 500 CPS per tenant" },
      { label: "Integration API", value: "RESTful JSON / Webhooks" },
    ],
    why_choose: [
      { title: "Built for Scale", description: "Whether you have 10 agents or 10,000, our dialer architecture scales instantly without lag." },
      { title: "Intelligent AMD", description: "We use the latest audio frequency analysis to distinguish humans from machines in under 2 seconds." },
    ],
    faq: [
      { question: "How does Predictive dialing differ from Power dialing?", answer: "Power dialing dials one number per available agent. Predictive dialing dials multiple numbers simultaneously based on statistical algorithms to ensure an agent is immediately connected the moment a lead answers." },
      { question: "Do you integrate with Salesforce?", answer: "Yes, we offer a native Salesforce CTI integration, allowing you to click-to-dial and log calls without leaving the CRM." },
    ],
    related_services: ["voip-solutions", "proxy-server"]
  },
  {
    slug: "asterisk-free-switch",
    title: "Asterisk-Free Switch",
    subtitle: "Scalable high-performance switching engine.",
    description: "Scalable high-performance switching engine capable of handling massive concurrent call volumes with enterprise-grade reliability.",
    long_description: "Move beyond the limitations of legacy PBX architectures. The MoosePBX Asterisk-Free Switch is a modern, high-performance softswitch designed from the ground up for massive concurrency and cloud-native deployments. By utilizing advanced asynchronous I/O and entirely bypassing traditional Asterisk bottlenecks, our switching engine delivers unparalleled call setup rates, minimal CPU overhead, and ultimate reliability for carrier-grade applications.",
    image: "/images/services/asterisk-switch-3d.png",
    icon: Server,
    features: [
      { title: "High Concurrency", description: "Handle tens of thousands of concurrent calls on a single instance without audio degradation.", icon: Zap },
      { title: "Multi-Tenant Architecture", description: "Securely partition PBX environments for different departments or downstream resellers.", icon: Cloud },
      { title: "Advanced Media Handling", description: "Direct media routing capabilities reduce latency and bandwidth by letting endpoints stream audio peer-to-peer.", icon: Network },
      { title: "Live Reloading", description: "Update dial plans and routing rules instantly without dropping active calls or restarting services.", icon: Activity },
    ],
    benefits: [
      { title: "Lower Infrastructure Costs", description: "Process 5x more calls per CPU core compared to traditional Asterisk deployments." },
      { title: "Zero Downtime Deployments", description: "Cloud-native design allows for seamless scaling and updates without interrupting active voice traffic." },
      { title: "Ultimate Customization", description: "Write complex call flows using modern programming languages instead of archaic dialplan scripts." },
    ],
    use_cases: [
      { title: "Wholesale Carriers", description: "Route massive volumes of SIP traffic across global networks with minimal delay." },
      { title: "Large Call Centers", description: "Support thousands of simultaneous agents without worrying about switch crashes or audio lag." },
    ],
    technical_specs: [
      { label: "Core Technology", value: "C/C++ & Erlang/Elixir" },
      { label: "Call Setup Rate", value: "10,000+ CPS" },
      { label: "High Availability", value: "Active-Active Clustering" },
      { label: "Supported Protocols", value: "SIP, WebRTC, RTMP" },
    ],
    why_choose: [
      { title: "Modern Codebase", description: "Free yourself from decades-old legacy code. Our switch is built for modern cloud infrastructure." },
      { title: "Enterprise Reliability", description: "Designed to handle edge cases gracefully, preventing the cascading failures common in older PBX systems." },
    ],
    faq: [
      { question: "Why avoid Asterisk?", answer: "While Asterisk is a great traditional PBX, it struggles with multi-threading and massive concurrency required by modern cloud providers. Our solution is built for horizontal scale." },
      { question: "Does it support WebRTC?", answer: "Yes, our switch natively translates SIP to WebRTC, allowing for seamless browser-to-browser or browser-to-phone communication." },
    ],
    related_services: ["kamailio-setup", "secure-sip"]
  },
  {
    slug: "proxy-server",
    title: "Proxy Server",
    subtitle: "Carrier-grade proxy server for SIP routing and load balancing.",
    description: "Carrier-grade proxy server for SIP routing, load balancing, security, and high availability.",
    long_description: "Protect and optimize your voice infrastructure with the MoosePBX Carrier-Grade Proxy Server. Sitting at the edge of your network, our proxy acts as a secure, high-speed traffic director. It inspects inbound SIP packets, shields your core PBX from attacks, and intelligently load-balances traffic across multiple backend servers to ensure 100% uptime even during massive traffic spikes.",
    image: "/images/services/proxy-server-3d.png",
    icon: Shield,
    features: [
      { title: "SIP Load Balancing", description: "Distribute incoming call traffic evenly across multiple media servers using advanced hashing algorithms.", icon: Network },
      { title: "Topology Hiding", description: "Mask your internal network architecture from the public internet to prevent targeted attacks.", icon: Shield },
      { title: "NAT Traversal", description: "Solve the infamous one-way audio problem with intelligent NAT detection and far-end media bridging.", icon: Cloud },
      { title: "DDoS Mitigation", description: "Instantly drop malformed SIP packets and rate-limit suspicious IPs before they hit your core servers.", icon: Lock },
    ],
    benefits: [
      { title: "Unbreakable Reliability", description: "If a backend server fails, the proxy instantly reroutes calls to healthy nodes, ensuring zero downtime." },
      { title: "Enhanced Security", description: "Stop SIP floods, toll fraud, and brute-force attacks at the network edge." },
      { title: "Effortless Scaling", description: "Add or remove backend PBX nodes on the fly without changing DNS or public IP addresses." },
    ],
    use_cases: [
      { title: "Multi-Server Deployments", description: "Unify a farm of PBX servers under a single public IP address for simplified management." },
      { title: "High-Security Environments", description: "Isolate sensitive internal communication infrastructure from the public internet." },
    ],
    technical_specs: [
      { label: "Throughput", value: "100,000+ Concurrent Sessions" },
      { label: "Load Balancing Algorithms", value: "Round Robin, Least Loaded, Hash-based" },
      { label: "Security", value: "Stateful Packet Inspection, SIP TLS" },
      { label: "Failover Time", value: "< 50 milliseconds" },
    ],
    why_choose: [
      { title: "Blistering Speed", description: "Because it only handles signaling (not media), our proxy routes packets in microseconds." },
      { title: "Carrier Grade", description: "Built on the same routing technologies used by Tier-1 telecom providers globally." },
    ],
    faq: [
      { question: "Does the proxy handle media (audio)?", answer: "No, our SIP proxy strictly handles signaling. Media (RTP) is either routed directly between endpoints or through a dedicated media relay (like RTPengine) to ensure maximum proxy performance." },
      { question: "Can it block toll fraud?", answer: "Yes, we implement strict rate-limiting, geo-blocking, and anomalous behavior detection to stop toll fraud in its tracks." },
    ],
    related_services: ["kamailio-setup", "voip-solutions"]
  },
  {
    slug: "secure-sip",
    title: "Secure SIP",
    subtitle: "Encrypted TLS/SRTP communication.",
    description: "Encrypted TLS/SRTP communication ensuring secure VoIP traffic and protection against eavesdropping.",
    long_description: "In an era of increasing cyber threats, unencrypted voice calls are a massive vulnerability. MoosePBX Secure SIP (SIPS) ensures that your business conversations remain completely private. By combining Transport Layer Security (TLS) for call signaling and Secure Real-time Transport Protocol (SRTP) for the audio media, we provide military-grade end-to-end encryption for every call made on your network.",
    image: "/images/services/secure-sip-3d.png",
    icon: Lock,
    features: [
      { title: "Signaling Encryption", description: "SIP over TLS prevents attackers from intercepting caller IDs, routing information, or call metadata.", icon: Lock },
      { title: "Media Encryption", description: "SRTP encrypts the actual voice packets, making eavesdropping and wiretapping mathematically impossible.", icon: Shield },
      { title: "Certificate Management", description: "Automated provisioning and renewal of SSL/TLS certificates for all your endpoints.", icon: Settings },
      { title: "Strict Cipher Suites", description: "We enforce modern cipher suites (e.g., AES-256) and reject legacy, vulnerable encryption protocols.", icon: Zap },
    ],
    benefits: [
      { title: "Regulatory Compliance", description: "Easily meet strict compliance requirements for HIPAA, GDPR, PCI-DSS, and SOC2 regarding voice data." },
      { title: "Total Privacy", description: "Protect sensitive corporate information, financial discussions, and client data from interception." },
      { title: "Fraud Prevention", description: "Encrypted signaling prevents attackers from injecting malicious SIP packets or hijacking active sessions." },
    ],
    use_cases: [
      { title: "Healthcare Providers", description: "Ensure all telehealth consultations and patient discussions are HIPAA compliant." },
      { title: "Financial Institutions", description: "Protect high-value trades, client data, and internal banking communications." },
    ],
    technical_specs: [
      { label: "Signaling Encryption", value: "TLS 1.2 / TLS 1.3" },
      { label: "Media Encryption", value: "SRTP (AES-128 / AES-256)" },
      { label: "Key Exchange", value: "SDES / DTLS-SRTP" },
      { label: "Authentication", value: "Mutual TLS (mTLS) supported" },
    ],
    why_choose: [
      { title: "No Performance Hit", description: "Our optimized cryptographic offloading ensures that encryption adds zero noticeable latency to your calls." },
      { title: "Universal Compatibility", description: "We support standard TLS/SRTP protocols ensuring compatibility with all modern softphones and hardware endpoints." },
    ],
    faq: [
      { question: "Is Secure SIP difficult to set up?", answer: "Not with MoosePBX. We handle certificate generation and provisioning automatically for supported devices." },
      { question: "Does encryption affect call quality?", answer: "No. The processing overhead for modern AES encryption is negligible, resulting in zero impact on voice latency or quality." },
    ],
    related_services: ["proxy-server", "asterisk-free-switch"]
  },
  {
    slug: "kamailio-setup",
    title: "Kamailio Setup",
    subtitle: "Enterprise SIP routing engine for large-scale deployments.",
    description: "Enterprise SIP routing engine designed for telecom providers and large-scale deployments.",
    long_description: "Kamailio is the gold standard for high-performance open-source SIP routing. MoosePBX provides expert design, deployment, and management of Kamailio-based infrastructure for carriers, ISPs, and massive contact centers. We architect resilient SIP networks capable of routing millions of calls per day, complete with advanced load balancing, least-cost routing (LCR), and carrier interconnections.",
    image: "/images/services/kamailio-setup-3d.png",
    icon: Server,
    features: [
      { title: "High-Speed Routing", description: "Process over 5,000 call setups per second on standard hardware.", icon: Zap },
      { title: "Least Cost Routing (LCR)", description: "Dynamically route outbound calls through the most cost-effective carrier based on real-time rate decks.", icon: Activity },
      { title: "WebSockets & WebRTC", description: "Native integration for WebRTC gateways, allowing browsers to connect directly to the SIP network.", icon: Globe },
      { title: "Custom scripting", description: "Implement highly complex business logic directly in the SIP routing layer.", icon: Settings },
    ],
    benefits: [
      { title: "Carrier-Level Stability", description: "Enjoy the exact same routing technology used by the world's largest telecom operators." },
      { title: "Massive Cost Savings", description: "LCR engines guarantee you always pay the absolute minimum per minute for outbound SIP termination." },
      { title: "Infinite Flexibility", description: "Because Kamailio is scriptable, we can build custom routing rules that off-the-shelf PBXs simply cannot handle." },
    ],
    use_cases: [
      { title: "SIP Trunking Providers", description: "Build out a resilient core network to offer SIP trunking services to thousands of downstream PBX systems." },
      { title: "Global Enterprises", description: "Unify disparate PBX systems across global offices into a single, cohesive routing fabric." },
    ],
    technical_specs: [
      { label: "Core Engine", value: "Kamailio (OpenSER)" },
      { label: "Database Backends", value: "PostgreSQL, MySQL, Redis, MongoDB" },
      { label: "Supported Transport", value: "UDP, TCP, TLS, SCTP, WebSockets" },
      { label: "Max Capacity", value: "Millions of active endpoints" },
    ],
    why_choose: [
      { title: "Expert Engineering", description: "Our engineers have over a decade of experience building and tuning complex Kamailio architectures." },
      { title: "Full Automation", description: "We deploy Kamailio using modern CI/CD, Ansible, and Docker, ensuring consistent, repeatable builds." },
    ],
    faq: [
      { question: "Is Kamailio a PBX?", answer: "No. Kamailio is a SIP Server (Proxy/Registrar/Router), but it does not handle media (like voicemail or IVRs) on its own. We pair it with media engines to create a complete solution." },
      { question: "Do you offer ongoing support?", answer: "Yes, we provide 24/7 monitoring, management, and emergency support for all custom Kamailio deployments." },
    ],
    related_services: ["proxy-server", "asterisk-free-switch"]
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find((s) => s.slug === slug);
}
