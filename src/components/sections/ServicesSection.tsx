"use client";

import { useRef, useState, useEffect } from "react";
import { m, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Shield, X, Code2, Users, GitBranch, Phone, List, Mic, Activity, BarChart, Database, PhoneCall, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

// --- Visualizations ---

function VoIPVisual() {
  return (
    <div className="w-full h-full min-h-[260px] lg:min-h-[300px] rounded-xl bg-card border border-border p-5 relative overflow-hidden flex items-center justify-center transition-all duration-300">
      <div className="flex flex-col items-center gap-1.5 relative z-10 scale-95 sm:scale-100">
         <m.div 
           animate={{ top: ["5%", "95%"], opacity: [0, 1, 1, 0] }}
           transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
           className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#315FE8] shadow-[0_0_6px_#315FE8] z-20"
         />
         <div className="px-4 py-1.5 rounded bg-card border border-border text-[10px] text-neutral-500 font-medium uppercase tracking-widest relative z-10 transition-colors group-hover:border-[#315FE8]/30">Caller</div>
         <div className="w-px h-3 bg-[#DCE2E7]" />
         <div className="px-4 py-1.5 rounded bg-card border border-border text-[10px] text-neutral-500 font-medium uppercase tracking-widest relative z-10 transition-colors group-hover:border-[#315FE8]/30">PBX</div>
         <div className="w-px h-3 bg-[#DCE2E7]" />
         <div className="flex gap-2 relative z-10">
           <div className="px-3 py-1.5 rounded bg-card border border-border text-[10px] text-neutral-500 font-medium uppercase tracking-widest transition-colors group-hover:border-[#315FE8]/30">Auto Dialer</div>
           <div className="px-3 py-1.5 rounded bg-[#315FE8] border border-[#315FE8] text-[10px] text-[#FFFFFF] font-bold uppercase tracking-widest shadow-sm">Predictive Dialer</div>
         </div>
         <div className="w-px h-3 bg-[#DCE2E7]" />
         <div className="px-4 py-1.5 rounded bg-card border border-border text-[10px] text-foreground font-bold uppercase tracking-widest relative z-10 transition-colors group-hover:border-[#315FE8]/30">ViciDialer</div>
         <div className="w-px h-3 bg-[#DCE2E7]" />
         <div className="px-4 py-1.5 rounded bg-card border border-border text-[10px] text-neutral-500 font-medium uppercase tracking-widest flex items-center gap-2 relative z-10 transition-colors group-hover:border-[#315FE8]/30">Agent <span className="size-1.5 bg-[#2BC48A] rounded-full" /></div>
      </div>
      
      <div className="absolute right-5 top-5 bg-card p-2.5 rounded-lg border border-border flex flex-col gap-2 z-10 hidden sm:flex">
         <div className="flex items-center gap-2 text-[9px] text-neutral-500 font-medium uppercase tracking-wider"><span className="size-1.5 bg-[#2BC48A] rounded-full" /> Agents Online</div>
         <div className="flex items-center gap-2 text-[9px] text-neutral-500 font-medium uppercase tracking-wider"><span className="size-1.5 bg-[#315FE8] rounded-full" /> Calls Active</div>
         <div className="flex items-center gap-2 text-[9px] text-neutral-500 font-medium uppercase tracking-wider"><span className="size-1.5 bg-[#2BC48A] rounded-full" /> SIP Connected</div>
      </div>
    </div>
  )
}

function AIVisual() {
  const [phase, setPhase] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPhase(p => (p + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full min-h-[260px] lg:min-h-[300px] rounded-xl bg-card border border-border p-5 relative overflow-hidden flex items-center justify-center transition-all duration-300">
      <div className="flex flex-col items-center gap-3 relative z-10">
         <div className="text-[11px] text-neutral-500 font-bold uppercase tracking-widest">Customer</div>
         <div className="w-px h-5 bg-[#DCE2E7]" />
         
         <div className="px-5 py-3 rounded-xl bg-card border border-border flex flex-col items-center gap-3 transition-colors group-hover:border-[#315FE8]/30 shadow-sm">
            <div className="text-[11px] text-foreground font-bold uppercase tracking-widest">AI Voice Agent</div>
            <div className="flex items-center gap-1 h-4 opacity-80">
              {[...Array(16)].map((_, i) => (
                <m.div 
                  key={i} 
                  animate={{ 
                    height: phase === 0 ? `${Math.max(30, Math.random() * 60 + 20)}%` : 
                            phase === 1 ? `${Math.max(20, Math.sin(i) * 30 + 50)}%` : 
                            `${Math.max(30, Math.random() * 80 + 20)}%`,
                    opacity: phase === 1 ? 0.5 : 1
                  }} 
                  transition={{ duration: 0.5 }} 
                  className="w-1 bg-[#315FE8] rounded-full" 
                />
              ))}
            </div>
         </div>

         <div className="w-px h-5 bg-[#DCE2E7]" />
         <div className="flex items-center gap-6">
            <div className="text-[10px] text-neutral-500 font-medium uppercase tracking-widest">Understands</div>
            <div className="text-[10px] text-accent-500 font-bold uppercase tracking-widest">Responds</div>
         </div>
      </div>
      
      <div className="absolute right-5 bottom-5 flex flex-col gap-2 text-[10px] font-medium uppercase tracking-wider z-10 transition-colors">
         <div className={cn("flex items-center gap-2 transition-colors", phase === 0 ? "text-foreground" : "text-neutral-500")}><span className={cn("size-1.5 rounded-full", phase === 0 ? "bg-[#2BC48A]" : "bg-[#DCE2E7]")} /> Listening...</div>
         <div className={cn("flex items-center gap-2 transition-colors", phase === 1 ? "text-foreground" : "text-neutral-500")}><span className={cn("size-1.5 rounded-full", phase === 1 ? "bg-[#315FE8]" : "bg-[#DCE2E7]")} /> Understanding...</div>
         <div className={cn("flex items-center gap-2 transition-colors", phase === 2 ? "text-foreground" : "text-neutral-500")}><span className={cn("size-1.5 rounded-full", phase === 2 ? "bg-[#315FE8]" : "bg-[#DCE2E7]")} /> Responding...</div>
      </div>
    </div>
  )
}

function SecureSIPVisual() {
  return (
    <div className="w-full h-full min-h-[260px] lg:min-h-[300px] rounded-xl bg-card border border-border p-5 relative overflow-hidden flex items-center justify-center transition-all duration-300">
       <div className="flex flex-col items-center gap-2 relative z-10">
         <m.div 
           animate={{ top: ["10%", "90%"], opacity: [0, 1, 1, 0] }}
           transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
           className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#2BC48A] shadow-[0_0_6px_#2BC48A] z-20"
         />
         <div className="text-[11px] text-accent-500 font-bold uppercase tracking-widest mb-1">SIP Traffic</div>
         <div className="w-px h-5 bg-[#DCE2E7]" />
         <div className="px-4 py-2 rounded bg-card border border-border text-[11px] text-neutral-500 font-medium uppercase tracking-widest relative z-10 transition-colors group-hover:border-[#315FE8]/30">Load Balancer</div>
         <div className="w-px h-5 bg-[#DCE2E7]" />
         <div className="px-4 py-2.5 rounded bg-[#315FE8] border border-[#315FE8] text-[11px] text-[#FFFFFF] font-bold tracking-widest flex items-center gap-2 relative z-10 shadow-sm">
            Kamailio / OpenSIPS
         </div>
         <div className="w-px h-5 bg-[#DCE2E7]" />
         <div className="text-[11px] text-[#2BC48A] font-medium flex items-center gap-1.5 uppercase tracking-widest"><Shield className="size-3.5" /> Secure Call Routing</div>
         <div className="w-px h-5 bg-[#DCE2E7]" />
         <div className="px-4 py-2 rounded bg-card border border-border text-[11px] text-neutral-500 font-medium uppercase tracking-widest relative z-10 transition-colors group-hover:border-[#315FE8]/30">PBX / SIP Servers</div>
       </div>

       <div className="absolute left-5 bottom-5 flex flex-col gap-2 z-10 hidden sm:flex">
         <div className="flex items-center gap-2 text-[10px] text-neutral-500 font-medium uppercase tracking-wider"><span className="size-1.5 bg-[#315FE8] rounded-full" /> SIP Secure</div>
         <div className="flex items-center gap-2 text-[10px] text-neutral-500 font-medium uppercase tracking-wider"><span className="size-1.5 bg-[#315FE8] rounded-full" /> Traffic Routed</div>
         <div className="flex items-center gap-2 text-[10px] text-neutral-500 font-medium uppercase tracking-wider"><span className="size-1.5 bg-[#2BC48A] rounded-full" /> High Availability</div>
       </div>
    </div>
  )
}

function DevelopmentVisual() {
  return (
    <div className="w-full h-full min-h-[260px] lg:min-h-[300px] rounded-xl bg-card border border-border p-5 lg:p-8 relative overflow-hidden transition-all duration-300 flex items-center justify-center">
       <div className="w-full max-w-[340px] h-full max-h-[180px] border border-border rounded-xl bg-card overflow-hidden flex flex-col relative z-10 shadow-sm transition-colors group-hover:border-[#315FE8]/30 group-hover:shadow-md">
         {/* Topbar */}
         <div className="h-10 border-b border-border flex items-center px-4 bg-card">
            <div className="text-[10px] font-bold text-foreground tracking-widest uppercase">MoosePBX Development</div>
         </div>
         {/* Sidebar & Content */}
         <div className="flex flex-1">
            <div className="w-1/3 border-r border-border p-3 flex flex-col gap-3 bg-surface-alt">
              <div className="h-2 w-3/4 bg-[#DCE2E7] rounded-full" />
              <div className="h-2 w-1/2 bg-[#DCE2E7] rounded-full" />
              <div className="h-2 w-2/3 bg-[#DCE2E7] rounded-full" />
            </div>
            <div className="flex-1 p-5 flex flex-col justify-between">
               <div>
                  <div className="text-xs font-bold text-foreground mb-4 tracking-wide">Dialer Application</div>
                  <div className="grid grid-cols-2 gap-2">
                     <div className="bg-card border border-border px-2 py-1.5 rounded-md text-[9px] text-neutral-500 font-medium tracking-wider transition-colors group-hover:bg-neutral-500/10">Campaigns</div>
                     <div className="bg-card border border-border px-2 py-1.5 rounded-md text-[9px] text-neutral-500 font-medium tracking-wider transition-colors group-hover:bg-neutral-500/10">Agents</div>
                     <div className="bg-card border border-border px-2 py-1.5 rounded-md text-[9px] text-neutral-500 font-medium tracking-wider transition-colors group-hover:bg-neutral-500/10">Calls</div>
                     <div className="bg-card border border-border px-2 py-1.5 rounded-md text-[9px] text-neutral-500 font-medium tracking-wider transition-colors group-hover:bg-neutral-500/10">Analytics</div>
                  </div>
               </div>
               <div className="mt-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="size-1.5 bg-[#315FE8] rounded-full animate-pulse" />
                    <span className="text-[9px] text-[#315FE8] font-bold uppercase tracking-widest">Dev Active</span>
                  </div>
                  <m.div 
                    animate={{ width: ["40%", "80%", "40%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="h-1.5 bg-[#DCE2E7] rounded-full"
                  />
               </div>
            </div>
         </div>
       </div>
    </div>
  )
}


// --- Data & Types ---

export type SubServiceDetail = {
  id: string;
  title: string;
  overview: string;
  features: string[];
  benefits: string;
  idealFor: string;
};

export type ServiceCategory = {
  id: string;
  number: string;
  categoryName: string;
  title: string;
  description: string;
  cta: string;
  tags: SubServiceDetail[];
  visual: React.ReactNode;
};

const createGenericDetail = (title: string): SubServiceDetail => ({
  id: title.toLowerCase().replace(/\s+/g, '-'),
  title,
  overview: `Professional ${title} designed to elevate your business communication and streamline operations.`,
  features: ["Custom Configuration", "Scalable Infrastructure", "Secure Integration", "24/7 Monitoring", "Advanced Reporting"],
  benefits: "Improves operational efficiency, reduces communication costs, and provides a reliable foundation for growth.",
  idealFor: "Businesses of all sizes looking to upgrade their communication technology."
});

const services: ServiceCategory[] = [
  {
    id: "voip-solutions",
    number: "01",
    categoryName: "VOIP SOLUTIONS",
    title: "VoIP Solutions",
    description: "Complete communication infrastructure for businesses that need reliable, scalable, and feature-rich calling.",
    cta: "Explore VoIP Solutions",
    tags: [
      {
        id: "complete-call-center",
        title: "Complete Call Center Solution",
        overview: "A comprehensive call center platform that brings together agents, calls, dialers, customer communication, monitoring, reporting, and management into one unified interface.",
        features: ["Agent Management", "Call Routing", "IVR", "Call Queues", "Call Recording", "Live Monitoring", "Reporting & Analytics", "CRM Integration", "Dialer Integration", "Customer Management"],
        benefits: "Centralizes all communication channels, significantly improves agent productivity, provides deep actionable insights, and enhances the overall customer experience.",
        idealFor: "Large-scale customer support teams, enterprise sales departments, and organizations requiring a unified communication hub."
      },
      {
        id: "pbx",
        title: "PBX",
        overview: "A Private Branch Exchange (PBX) is a business phone system that manages internal and external calls from a centralized platform. It allows organizations to connect employees, route calls, manage extensions, and handle business communication efficiently.",
        features: ["Extensions", "Call Routing", "IVR", "Call Transfer", "Call Queues", "Voicemail", "Call Recording", "SIP Integration", "Call Management", "Internal Communication"],
        benefits: "Reduces telecommunication costs, seamlessly connects remote and in-office teams, and provides a professional calling experience for clients.",
        idealFor: "Call centers, customer support teams, sales teams, and businesses that need centralized business communication."
      },
      {
        id: "auto-dialer",
        title: "Auto Dialer",
        overview: "An automated dialing system that automatically places outbound calls for agents, seamlessly connecting answered calls to available representatives without manual dialing.",
        features: ["Automatic Call Initiation", "Agent Assignment", "Call Scheduling", "Contact Lists", "Call Disposition", "Retry Management", "Call Statistics", "Agent Productivity", "Campaign Management"],
        benefits: "Eliminates manual dialing downtime, dramatically increases agent talk time, and optimizes outbound campaign performance.",
        idealFor: "Outbound sales teams, lead generation agencies, and telemarketing operations aiming to maximize connection rates."
      },
      {
        id: "predictive-dialer",
        title: "Predictive Dialer",
        overview: "An advanced dialing system that uses algorithms to predict agent availability, automatically calling multiple numbers simultaneously to ensure agents are always connected to live calls.",
        features: ["Predictive Calling", "Agent Availability Detection", "Campaign Management", "Call Queues", "Call Retry Logic", "Real-Time Monitoring", "Call Statistics", "Agent Productivity", "Campaign Reports"],
        benefits: "Maximizes agent utilization by filtering out busy signals, voicemails, and disconnected numbers, resulting in unmatched outbound efficiency.",
        idealFor: "High-volume outbound call centers, debt collection agencies, and massive sales campaigns."
      },
      {
        id: "custom-dialer",
        title: "Custom Dialer",
        overview: "A bespoke dialer platform developed specifically around your company's unique workflow, integrations, and operational requirements.",
        features: ["Custom UI", "Custom Calling Logic", "CRM Integration", "Custom Campaigns", "Agent Management", "Call Recording", "Reporting", "API Integration", "Custom Workflows"],
        benefits: "Adapts perfectly to your existing processes, provides unique competitive advantages, and scales seamlessly with your business model.",
        idealFor: "Enterprises with highly specialized workflows, custom CRM environments, or unique compliance requirements."
      },
      {
        id: "vicidialer",
        title: "ViciDialer",
        overview: "An enterprise-grade, open-source contact center suite capable of handling massive inbound and outbound call-center operations simultaneously.",
        features: ["Inbound Calling", "Outbound Calling", "Campaign Management", "Agent Management", "Call Recording", "Call Queues", "Reporting", "Call Monitoring", "Lead Management"],
        benefits: "Provides robust, cost-effective infrastructure for blended call centers with extensive customizability and massive scaling capabilities.",
        idealFor: "Blended call centers, BPO organizations, and massive customer service operations."
      },
      {
        id: "sip-trunking",
        title: "SIP Trunking",
        overview: "A modern telecom solution that connects business phone systems to the public telephone network through internet-based communication rather than traditional physical lines.",
        features: ["Internet-Based Calling", "Scalable Channels", "Call Routing", "PBX Integration", "Number Management", "Cost Efficiency", "High Availability", "SIP Security"],
        benefits: "Drastically cuts telecom expenses, allows instant scaling of call capacity, and provides crystal-clear global connectivity.",
        idealFor: "Growing businesses, global enterprises, and organizations looking to modernize their phone infrastructure."
      },
      {
        id: "livekit",
        title: "LiveKit",
        overview: "An advanced real-time communication infrastructure designed to support ultra-low latency audio, video, and real-time data experiences.",
        features: ["Real-Time Audio", "Real-Time Video", "WebRTC", "Live Communication", "Scalable Infrastructure", "API Integration", "Custom Applications", "Real-Time Events"],
        benefits: "Enables flawless real-time interaction, scales dynamically to handle massive audiences, and integrates easily into modern applications.",
        idealFor: "Developers, modern SaaS platforms, and businesses building custom voice or video applications."
      }
    ],
    visual: <VoIPVisual />
  },
  {
    id: "ai-automation",
    number: "02",
    categoryName: "AI & AUTOMATION",
    title: "AI & Automation",
    description: "Bring intelligent automation to your communication workflows with custom AI bots and voice agents.",
    cta: "Explore AI Solutions",
    tags: [
      createGenericDetail("AI Bot Integration"),
      createGenericDetail("Custom AI Bot Integration"),
      createGenericDetail("AI Voice Agent")
    ],
    visual: <AIVisual />
  },
  {
    id: "secure-sip",
    number: "03",
    categoryName: "SECURE SIP",
    title: "Secure SIP",
    description: "Secure and resilient SIP infrastructure engineered for reliable routing, high availability, and scalable communication.",
    cta: "Explore Secure SIP",
    tags: [
      createGenericDetail("Kamailio Proxy"),
      createGenericDetail("OpenSIPS"),
      createGenericDetail("Secure Call Routing"),
      createGenericDetail("HAProxy"),
      createGenericDetail("Load Balancing")
    ],
    visual: <SecureSIPVisual />
  },
  {
    id: "development",
    number: "04",
    categoryName: "DEVELOPMENT",
    title: "Custom Dialer & Software Development",
    description: "Purpose-built dialers, applications, and digital platforms engineered around your exact business workflow.",
    cta: "Build Your Solution",
    tags: [
      createGenericDetail("Custom Dialer Applications"),
      createGenericDetail("Software Development"),
      createGenericDetail("Web Development")
    ],
    visual: <DevelopmentVisual />
  }
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [selectedFeature, setSelectedFeature] = useState<SubServiceDetail | null>(null);

  useEffect(() => {
    if (selectedFeature) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedFeature]);

  return (
    <>
      <section id="services" className="bg-background pt-24 pb-32 sm:pt-32 sm:pb-40 relative overflow-hidden border-b border-border">
        
        <Container className="relative z-10 max-w-[1280px]">
          {/* Header */}
          <div className="mx-auto max-w-4xl text-center mb-16 sm:mb-24">
            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="font-semibold tracking-[0.15em] text-accent-500 text-sm uppercase">
                OUR SOLUTIONS
              </span>
            </m.div>

            <m.h2 
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8"
            >
              Complete Communication.<br className="hidden sm:block"/> Built Your Way.
            </m.h2>

            <m.p 
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-neutral-500 leading-relaxed max-w-3xl mx-auto"
            >
              From complete call center platforms and secure SIP infrastructure to custom dialers, software, and AI voice agents — MoosePBX builds the technology behind modern communication.
            </m.p>
          </div>

          {/* Grid */}
          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            
            {services.map((service, index) => {
               const isFeatured = service.id === "voip-solutions" || service.id === "development"; 
               
               return (
                 <m.div 
                   key={service.id}
                   initial={{ opacity: 0, y: 20 }}
                   animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                   transition={{ duration: 0.6, delay: 0.15 + (index * 0.07), ease: [0.22, 1, 0.36, 1] }}
                   className={cn(isFeatured ? "lg:col-span-2" : "col-span-1")}
                 >
                   <div 
                     className="group relative flex flex-col w-full h-full bg-card rounded-[16px] border border-border p-6 sm:p-8 lg:p-10 transition-all duration-300 ease-out hover:border-primary-500/50 shadow-sm hover:shadow-[0_8px_30px_rgba(49,95,232,0.12)] text-left"
                   >
                     <div className={cn("flex flex-col gap-8 h-full w-full", isFeatured && "lg:flex-row lg:items-center lg:gap-12")}>
                       
                       {/* Content side */}
                       <div className="flex-1 flex flex-col h-full w-full min-w-0">
                         <div className="mb-4">
                           <span className="text-[11px] font-bold tracking-[0.15em] text-neutral-500 uppercase">
                             {service.number} / {service.categoryName}
                           </span>
                         </div>
                         <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">{service.title}</h3>
                         <p className="text-neutral-500 text-lg leading-relaxed mb-8 flex-1">
                           {service.description}
                         </p>

                         {/* Sub-service tags */}
                         <div className="flex flex-wrap gap-2 mb-10">
                            {service.tags.map(tag => (
                               <button 
                                 key={tag.id}
                                 onClick={() => setSelectedFeature(tag)}
                                 className="px-3 py-1.5 rounded bg-card border border-border text-xs font-medium text-neutral-500 transition-colors duration-300 hover:bg-neutral-500/10 hover:text-foreground cursor-pointer z-10"
                               >
                                 {tag.title}
                               </button>
                            ))}
                         </div>

                         <div className="flex items-center text-[#315FE8] font-bold mt-auto group/cta">
                           {service.cta}
                           <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover/cta:translate-x-1.5" />
                         </div>
                       </div>

                       {/* Visual side */}
                       <div className={cn("w-full flex-shrink-0 mt-2 lg:mt-0", isFeatured ? "lg:w-[45%]" : "")}>
                          {service.visual}
                       </div>

                     </div>
                   </div>
                 </m.div>
               )
            })}
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {selectedFeature && (
          <FeatureDetailPopup
            feature={selectedFeature}
            onClose={() => setSelectedFeature(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// ── FEATURE DETAIL POPUP COMPONENT ──

type FeatureDetailPopupProps = {
  feature: SubServiceDetail;
  onClose: () => void;
};

const getFeatureIcon = (featureName: string) => {
  const name = featureName.toLowerCase();
  if (name.includes('agent') || name.includes('user')) return Users;
  if (name.includes('rout') || name.includes('transfer') || name.includes('logic')) return GitBranch;
  if (name.includes('ivr') || name.includes('menu') || name.includes('voice')) return Phone;
  if (name.includes('queue') || name.includes('list')) return List;
  if (name.includes('record')) return Mic;
  if (name.includes('monitor') || name.includes('live')) return Activity;
  if (name.includes('report') || name.includes('analytic') || name.includes('stat')) return BarChart;
  if (name.includes('crm') || name.includes('data') || name.includes('integration') || name.includes('api')) return Database;
  if (name.includes('dial') || name.includes('call') || name.includes('telephony')) return PhoneCall;
  if (name.includes('web') || name.includes('internet')) return Code2;
  if (name.includes('security') || name.includes('secure')) return Shield;
  return CheckCircle2;
};

const getFeatureDescription = (featureName: string) => {
  const map: Record<string, string> = {
    // Complete Call Center
    "Agent Management": "Manage agents, availability, skills, roles, and real-time calling activity.",
    "Call Routing": "Direct incoming calls to the most appropriate agent, department, or queue based on predefined rules.",
    "IVR": "Create multi-level automated voice menus to guide callers and handle standard inquiries without human intervention.",
    "Call Queues": "Organize incoming calls into prioritized lines and distribute them efficiently to available representatives.",
    "Call Recording": "Automatically capture and store conversations for quality assurance, training, and compliance purposes.",
    "Live Monitoring": "Monitor active calls, agent states, and queue health in real time with whisper and barge-in capabilities.",
    "Reporting & Analytics": "Track critical KPIs, connection rates, and agent performance to generate actionable operational insights.",
    "CRM Integration": "Seamlessly sync caller data, automatically log call histories, and trigger screen-pops in your existing CRM.",
    "Dialer Integration": "Connect automated outbound dialing systems to maximize agent talk time and streamline campaigns.",
    "Customer Management": "Maintain detailed profiles, interaction histories, and notes for every caller to provide personalized support.",

    // PBX specific
    "Extensions": "Assign unique internal numbers to employees for instant communication.",
    "Call Transfer": "Seamlessly hand off active calls with warm or blind transfers.",
    "Voicemail": "Capture missed calls and automatically deliver voicemail-to-email transcriptions.",
    "SIP Integration": "Connect existing hardware phones and softphones seamlessly using standard SIP protocols.",
    "Call Management": "Put calls on hold, park calls, and manage multi-party conferences with enterprise-grade controls.",
    "Internal Communication": "Enable free, instant, and high-quality voice communication between all employees.",

    // Auto Dialer specific
    "Automatic Call Initiation": "Eliminate manual dialing by having the system automatically dial numbers from uploaded contact lists.",
    "Agent Assignment": "Instantly route successfully answered outbound calls to the next available agent with zero delay.",
    "Call Scheduling": "Program specific times and time zones for campaigns to run, ensuring maximum answer rates.",
    "Contact Lists": "Easily import, segment, and scrub massive databases of leads and customer contact information.",
    "Call Disposition": "Allow agents to quickly tag and categorize the outcome of every call with customized wrap-up codes.",
    "Retry Management": "Automatically reschedule busy signals, no-answers, and dropped calls based on intelligent retry logic.",
    "Call Statistics": "View real-time connection rates, drop rates, and campaign progression in a centralized dashboard.",
    "Agent Productivity": "Track individual metrics such as average talk time, wrap-up time, and total calls handled.",
    "Campaign Management": "Design, launch, pause, and analyze multiple concurrent inbound and outbound calling campaigns.",

    // Predictive Dialer
    "Predictive Calling": "Utilize advanced statistical algorithms to dial multiple numbers per agent, predicting exactly when they will be free.",
    "Agent Availability Detection": "Analyze live agent states to ensure calls are only bridged when a representative is ready to speak.",
    "Call Retry Logic": "Intelligently manage answering machines, busy signals, and disconnected numbers without wasting agent time.",
    "Campaign Reports": "Generate comprehensive reports detailing the success and ROI of specific dialing campaigns.",

    // Custom Dialer
    "Custom UI": "Develop a bespoke user interface tailored precisely to how your team operates and visualizes data.",
    "Custom Calling Logic": "Implement highly specialized routing, dialing, and connection algorithms unique to your business model.",
    "Custom Campaigns": "Build specialized campaign types with unique rulesets, integrations, and automated triggers.",
    "API Integration": "Connect your dialer natively to external software, custom databases, and third-party webhooks.",
    "Custom Workflows": "Automate complex multi-step processes involving calls, SMS, emails, and CRM updates.",

    // ViciDialer
    "Inbound Calling": "Handle massive volumes of incoming customer service or sales calls with enterprise-grade stability.",
    "Outbound Calling": "Execute high-volume outbound telemarketing or collection campaigns with industry-leading efficiency.",
    "Call Monitoring": "Listen to live calls silently, coach agents via whisper mode, or take over calls when necessary.",
    "Lead Management": "Track the complete lifecycle of a lead from import and dialing to final disposition and conversion.",

    // SIP Trunking
    "Internet-Based Calling": "Route voice traffic securely over your internet connection, eliminating physical phone lines.",
    "Scalable Channels": "Instantly add or remove call capacity (SIP channels) on demand without physical hardware changes.",
    "PBX Integration": "Connect seamlessly with existing IP-PBX systems like Asterisk, FreeSWITCH, or 3CX.",
    "Number Management": "Easily purchase, port, and route local, toll-free, and international DID numbers globally.",
    "Cost Efficiency": "Drastically reduce local and international calling costs compared to traditional legacy telecom providers.",
    "High Availability": "Ensure maximum uptime with geographically redundant SIP servers and automatic failover routing.",
    "SIP Security": "Protect your voice traffic with IP authentication, TLS/SRTP encryption, and advanced anti-fraud monitoring.",

    // LiveKit
    "Real-Time Audio": "Deliver ultra-low latency, crystal-clear audio streams for interactive voice applications.",
    "Real-Time Video": "Stream high-definition video with adaptive bitrates optimized for any network condition.",
    "WebRTC": "Leverage modern web standards for seamless browser-to-browser communication without plugins.",
    "Live Communication": "Build interactive spaces, virtual classrooms, or telehealth applications with instant interaction.",
    "Scalable Infrastructure": "Automatically scale backend resources to handle massive influxes of concurrent users globally.",
    "Custom Applications": "Embed powerful voice and video capabilities directly into your own proprietary software.",
    "Real-Time Events": "Synchronize metadata, chat messages, and application state instantly alongside your streams.",

    // General
    "Custom Configuration": "Tailor the system settings, limits, and behaviors exactly to your operational needs.",
    "Secure Integration": "Connect with your existing infrastructure using secure, authenticated, and encrypted channels.",
    "24/7 Monitoring": "Ensure peace of mind with round-the-clock automated health checks and proactive alerting.",
    "Advanced Reporting": "Dive deep into technical metrics, usage statistics, and historical logs with powerful analytics tools.",
  };
  return map[featureName] || `Advanced ${featureName.toLowerCase()} capabilities designed to streamline operations.`;
};

const getBusinessImpacts = (id: string) => {
  switch (id) {
    case 'complete-call-center':
      return [
        { title: "Unified Operations", desc: "Centralize all agents, calls, and data into a single platform." },
        { title: "Higher Productivity", desc: "Reduce manual work and keep agents focused on customers." },
        { title: "Deep Visibility", desc: "Monitor all operations and KPIs in real time." },
        { title: "Better Experience", desc: "Deliver faster, more professional customer support." },
      ];
    case 'pbx':
      return [
        { title: "Cost Reduction", desc: "Eliminate expensive legacy phone lines and hardware." },
        { title: "Professional Image", desc: "Present a unified, corporate voice to all callers." },
        { title: "Remote Work", desc: "Connect remote employees seamlessly to the central system." },
        { title: "Easy Management", desc: "Manage extensions, routes, and voicemails from a web dashboard." },
      ];
    case 'auto-dialer':
      return [
        { title: "Eliminate Downtime", desc: "Remove manual dialing to maximize active talk time." },
        { title: "Higher Conversion", desc: "Reach more leads and prospects in less time." },
        { title: "Consistent Output", desc: "Ensure agents maintain a steady, predictable call volume." },
        { title: "Campaign Control", desc: "Easily segment and target specific lead lists for better ROI." },
      ];
    case 'predictive-dialer':
      return [
        { title: "Maximum Utilization", desc: "Algorithms ensure agents are always on a live call." },
        { title: "Filter Inefficiencies", desc: "Automatically drop busy signals, voicemails, and bad numbers." },
        { title: "Massive Scaling", desc: "Handle thousands of concurrent outbound calls effortlessly." },
        { title: "Data-Driven ROI", desc: "Analyze answer rates and adjust pacing for optimal performance." },
      ];
    case 'custom-dialer':
      return [
        { title: "Perfect Fit", desc: "Software that adapts to your process, not the other way around." },
        { title: "Unique Advantage", desc: "Implement proprietary calling logic your competitors can't buy." },
        { title: "Seamless Integration", desc: "Connect flawlessly with your bespoke internal systems." },
        { title: "Unrestricted Growth", desc: "Scale and modify your architecture exactly as you see fit." },
      ];
    case 'vicidialer':
      return [
        { title: "Enterprise Scaling", desc: "Support massive blended call center operations cost-effectively." },
        { title: "Open Source Power", desc: "Leverage a proven, globally utilized open-source foundation." },
        { title: "Total Flexibility", desc: "Customize every aspect of inbound and outbound routing." },
        { title: "Proven Reliability", desc: "Rely on an architecture trusted by thousands of BPOs." },
      ];
    case 'sip-trunking':
      return [
        { title: "Telecom Savings", desc: "Slash long-distance and international calling costs dramatically." },
        { title: "Instant Scalability", desc: "Add concurrent calling capacity instantly via software." },
        { title: "Global Reach", desc: "Provision local numbers from over 60+ countries instantly." },
        { title: "Maximum Uptime", desc: "Benefit from redundant routing and automatic failover." },
      ];
    case 'livekit':
      return [
        { title: "Ultra-Low Latency", desc: "Deliver sub-50ms audio/video for natural conversations." },
        { title: "Modern Architecture", desc: "Build on a robust WebRTC foundation designed for the future." },
        { title: "Global Edge Network", desc: "Connect users automatically to the nearest optimized server." },
        { title: "Developer Velocity", desc: "Integrate powerful communication SDKs in hours, not months." },
      ];
    default:
      return [
        { title: "Higher Productivity", desc: "Streamline workflows and increase operational efficiency." },
        { title: "Better Visibility", desc: "Monitor infrastructure and performance in real time." },
        { title: "Scalable Operations", desc: "Support growing teams, users, and connection volumes." },
        { title: "Secure Infrastructure", desc: "Ensure your data and communications remain protected." },
      ];
  }
};

function SystemVisual({ title }: { title: string }) {
  return (
    <div className="w-full h-full min-h-[220px] flex flex-col items-center justify-center p-6 bg-neutral-500/5 rounded-xl border border-border">
      <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest mb-2">Network / Caller</div>
      <div className="w-px h-6 bg-border relative overflow-hidden">
         <m.div 
           animate={{ y: ["-100%", "200%"] }}
           transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
           className="absolute top-0 left-0 w-full h-1/2 bg-[#315FE8]" 
         />
      </div>
      <div className="px-5 py-2.5 bg-card border border-[#315FE8]/30 rounded-lg text-xs font-bold text-foreground shadow-sm z-10 mb-2 text-center max-w-[220px] truncate">
         {title}
      </div>
      <div className="w-px h-4 bg-border" />
      <div className="w-full max-w-[240px] h-px bg-border" />
      <div className="w-full max-w-[240px] flex justify-between px-6">
         <div className="w-px h-4 bg-border" />
         <div className="w-px h-4 bg-border" />
         <div className="w-px h-4 bg-border" />
      </div>
      <div className="w-full max-w-[280px] flex justify-between gap-2 z-10">
         <div className="flex-1 text-center py-1.5 bg-card border border-border rounded text-[10px] font-medium text-neutral-500 shadow-sm truncate px-1">Agents</div>
         <div className="flex-1 text-center py-1.5 bg-card border border-border rounded text-[10px] font-medium text-neutral-500 shadow-sm truncate px-1">Systems</div>
         <div className="flex-1 text-center py-1.5 bg-card border border-border rounded text-[10px] font-medium text-neutral-500 shadow-sm truncate px-1">Data</div>
      </div>
    </div>
  );
}

function FeatureDetailPopup({ feature, onClose }: FeatureDetailPopupProps) {
  return (
    <>
      <style>{`
        .custom-popup-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-popup-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-popup-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(150, 150, 150, 0.2);
          border-radius: 10px;
        }
        .custom-popup-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(150, 150, 150, 0.4);
        }
        /* Dark mode subtle adjust if needed, but the rgba fits both */
      `}</style>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Dimming overlay */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10"
        />

        <m.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative z-20 w-full sm:max-w-4xl lg:w-[960px] bg-card border border-border sm:rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] lg:max-h-[85vh]"
          style={{ display: 'grid', gridTemplateRows: 'auto minmax(0, 1fr) auto' }}
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-border px-6 py-5 md:px-10 md:py-8 bg-card relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#315FE8] to-transparent opacity-50" />
            
            <div className="pr-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-bold tracking-[0.2em] text-accent-500 uppercase">
                  01 / VOIP SOLUTIONS
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#315FE8]/10 text-[#315FE8] text-[9px] font-bold tracking-widest uppercase border border-[#315FE8]/20">
                  VOIP SOLUTION
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-neutral-500 leading-relaxed max-w-2xl line-clamp-2 md:line-clamp-none">
                {feature.overview}
              </p>
            </div>
            
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-neutral-500/5 text-neutral-500 hover:text-foreground hover:bg-neutral-500/10 transition-colors border border-transparent hover:border-border mt-1 md:mt-0 flex-shrink-0"
              aria-label="Close"
            >
              <X className="size-4 md:size-5" />
            </button>
          </div>

          {/* Scrollable content */}
          <div 
            className="overflow-y-auto custom-popup-scrollbar px-6 py-8 md:px-10 space-y-10" 
            style={{ minHeight: 0 }}
          >
            {/* Hero Two Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
               {/* Left */}
               <div>
                  <h4 className="text-[11px] font-bold tracking-[0.12em] text-foreground uppercase border-b border-border pb-3 mb-5">
                    What It Does
                  </h4>
                  <p className="text-neutral-500 text-[15px] leading-relaxed mb-6">
                    {feature.overview}
                  </p>
                  <div className="flex flex-wrap gap-2">
                     {feature.features.slice(0, 3).map(f => (
                       <div key={f} className="px-2.5 py-1.5 rounded-md bg-surface-alt border border-border text-[10px] font-semibold text-neutral-500 uppercase tracking-widest">
                         {f}
                       </div>
                     ))}
                  </div>
               </div>
               
               {/* Right */}
               <div className="h-full">
                  <SystemVisual title={feature.title} />
               </div>
            </div>

            {/* Key Capabilities */}
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.12em] text-foreground uppercase border-b border-border pb-3 mb-6">
                Key Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {feature.features.map(f => {
                  const Icon = getFeatureIcon(f);
                  return (
                    <div key={f} className="p-4 sm:p-5 rounded-xl border border-border bg-surface-alt/50 flex flex-col gap-3 transition-colors hover:border-[#315FE8]/30">
                      <div className="size-8 rounded-lg bg-card border border-border flex items-center justify-center text-[#315FE8] shadow-sm">
                         <Icon className="size-4" />
                      </div>
                      <div>
                         <div className="text-sm font-bold text-foreground mb-1">{f}</div>
                         <div className="text-[13px] text-neutral-500 leading-relaxed">
                           {getFeatureDescription(f)}
                         </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Business Impact */}
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.12em] text-foreground uppercase border-b border-border pb-3 mb-6">
                Business Impact
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 {getBusinessImpacts(feature.id).map((impact, i) => (
                    <div key={i} className="flex flex-col gap-2">
                       <div className="text-sm font-bold text-foreground flex items-center gap-2">
                         <span className="size-1.5 rounded-full bg-[#2BC48A]" />
                         {impact.title}
                       </div>
                       <div className="text-[13px] text-neutral-500 leading-relaxed">
                         {impact.desc}
                       </div>
                    </div>
                 ))}
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-border px-6 py-4 md:px-10 bg-card gap-4">
             <div className="text-xs text-neutral-500 font-medium">
               Built for modern call-center operations.
             </div>
             <button onClick={onClose} className="group flex items-center gap-2 text-sm font-bold text-[#315FE8] hover:text-[#3F6FF0] transition-colors">
               Explore Solution <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
             </button>
          </div>
        </m.div>
      </div>
    </>
  );
}

