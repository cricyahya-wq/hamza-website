"use client";

import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Mic, Activity, CheckCircle2, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// --- Data ---
const featureCategories = [
  {
    id: "dialer",
    number: "01",
    title: "Dialer & Campaign Control",
    shortDesc: "Smart outbound calling",
    description: "Build, manage, and optimize outbound campaigns with powerful dialing tools.",
    features: [
      "Auto Dialer", "Predictive Dialer", "Custom Dialer", 
      "Campaign Management", "Call Queues", "Agent Management"
    ]
  },
  {
    id: "call-management",
    number: "02",
    title: "Call Management",
    shortDesc: "Control every conversation",
    description: "Control every conversation with flexible routing and professional call handling.",
    features: [
      "Inbound Calling", "Outbound Calling", "Call Routing", 
      "IVR", "Call Transfer", "SIP Trunking"
    ]
  },
  {
    id: "operations",
    number: "03",
    title: "Real-Time Operations",
    shortDesc: "See your operation live",
    description: "See what's happening across your call center with real-time visibility and operational insights.",
    features: [
      "Live Agent Status", "Active Call Monitoring", "Call Analytics", 
      "Answer Rate", "Campaign Performance", "Real-Time Dashboard"
    ]
  },
  {
    id: "ai",
    number: "04",
    title: "AI & Automation",
    shortDesc: "Intelligent communication",
    description: "Automate communication workflows with intelligent bots and AI-powered voice interactions.",
    features: [
      "AI Voice Agents", "AI Bot Integration", "Custom AI Workflows", 
      "Automated Conversations", "Intelligent Call Handling"
    ]
  }
];

// --- Visualizations ---

const DialerVisual = () => {
  return (
    <div className="h-full w-full rounded-2xl bg-brand-darker border border-border p-6 shadow-sm flex flex-col justify-between">
      <div className="flex justify-between items-center border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-surface-alt border border-border flex items-center justify-center">
            <Phone className="h-3 w-3 text-[#315FE8]" />
          </div>
          <span className="font-bold text-foreground text-sm tracking-wide">MOOSEPBX</span>
        </div>
        <div className="text-xs text-neutral-500 uppercase tracking-wider">
          Campaign: <span className="text-foreground font-semibold">Sales Q3</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-surface-alt p-4 rounded-xl border border-border">
          <div className="text-[10px] text-neutral-400 uppercase tracking-wider mb-1">Calls Today</div>
          <div className="text-2xl font-bold text-foreground">12,842</div>
        </div>
        <div className="bg-surface-alt p-4 rounded-xl border border-border">
          <div className="text-[10px] text-neutral-400 uppercase tracking-wider mb-1">Connected</div>
          <div className="text-2xl font-bold text-[#315FE8]">8,420</div>
        </div>
        <div className="bg-surface-alt p-4 rounded-xl border border-border">
          <div className="text-[10px] text-neutral-400 uppercase tracking-wider mb-1">Agents Online</div>
          <div className="text-2xl font-bold text-foreground">24</div>
        </div>
        <div className="bg-surface-alt p-4 rounded-xl border border-border">
          <div className="text-[10px] text-neutral-400 uppercase tracking-wider mb-1">Answer Rate</div>
          <div className="text-2xl font-bold text-[#2BC48A]">98.4%</div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[11px] text-neutral-500 uppercase tracking-wider">Campaign Progress</span>
          <div className="flex items-center gap-1.5">
            <m.div 
               animate={{ opacity: [1, 0.4, 1] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               className="h-1.5 w-1.5 rounded-full bg-[#2BC48A]" 
            />
            <span className="text-[10px] text-[#2BC48A] font-medium tracking-wide">Running</span>
          </div>
        </div>
        <div className="h-1.5 w-full bg-[#2A3038] rounded-full overflow-hidden">
          <m.div 
            initial={{ width: "30%" }}
            animate={{ width: ["30%", "85%", "30%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="h-full bg-[#315FE8] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

const CallFlowVisual = () => {
  return (
    <div className="h-full w-full rounded-2xl bg-brand-darker border border-border p-6 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="flex flex-col items-center z-10 w-full max-w-[280px] relative">
        <m.div 
           animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
           transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
           className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#315FE8] shadow-[0_0_8px_#315FE8] z-20"
        />

        <div className="w-full bg-surface-alt border border-border rounded-lg p-3 text-center shadow-sm transition-colors hover:border-[#315FE8]/30">
          <div className="text-[10px] text-neutral-500 mb-1">INCOMING CALL</div>
          <div className="text-sm font-semibold text-foreground">Caller: +1 (800) 245-••••</div>
        </div>

        <div className="h-6 w-px bg-[#2A3038] my-1" />

        <div className="w-2/3 bg-background border border-border rounded-lg p-2 text-center relative z-10">
          <div className="text-xs font-medium text-foreground">IVR</div>
        </div>

        <div className="h-6 w-px bg-[#2A3038] my-1" />

        <div className="w-full bg-surface-alt border border-border rounded-lg p-3 text-center transition-colors hover:border-[#315FE8]/30 relative overflow-hidden shadow-sm">
           <m.div 
             animate={{ x: ["-100%", "200%"] }}
             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             className="absolute inset-0 bg-gradient-to-r from-transparent via-[#315FE8]/10 to-transparent w-full"
           />
          <div className="text-sm font-medium text-[#315FE8] relative z-10">Call Routing</div>
        </div>

        <div className="h-6 w-px bg-[#2A3038] my-1" />

        <div className="w-full bg-surface-alt border border-border rounded-lg p-3 flex justify-between items-center shadow-sm relative z-10">
          <div>
            <div className="text-[10px] text-neutral-500">Route: <span className="text-foreground font-medium">Sales</span></div>
          </div>
          <div className="flex items-center gap-1.5 bg-[#2BC48A]/10 px-2 py-1 rounded border border-[#2BC48A]/20">
             <div className="h-1.5 w-1.5 rounded-full bg-[#2BC48A]"></div>
             <span className="text-[10px] text-[#2BC48A] font-medium tracking-wide">Connected</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const OperationsVisual = () => {
  return (
    <div className="h-full w-full rounded-2xl bg-brand-darker border border-border p-6 flex flex-col justify-between">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-[10px] text-neutral-400 uppercase tracking-wider mb-1">Active Agents</div>
          <div className="text-3xl font-bold text-foreground flex items-center gap-2">
            24
            <Activity className="h-4 w-4 text-[#315FE8] opacity-50" />
          </div>
        </div>
        <div>
          <div className="text-[10px] text-neutral-400 uppercase tracking-wider mb-1">Active Calls</div>
          <div className="text-3xl font-bold text-foreground">42</div>
        </div>
        <div>
          <div className="text-[10px] text-neutral-400 uppercase tracking-wider mb-1">Waiting</div>
          <div className="text-3xl font-bold text-accent-400">08</div>
        </div>
        <div>
          <div className="text-[10px] text-neutral-400 uppercase tracking-wider mb-1">Answer Rate</div>
          <div className="text-3xl font-bold text-[#2BC48A]">98.4%</div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-border flex-1 flex flex-col">
        <div className="text-[11px] text-neutral-500 uppercase tracking-wider mb-4 flex items-center gap-2">
          <m.div 
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-[#2BC48A]" 
          />
          Live Volume
        </div>
        <div className="flex-1 flex items-end gap-1.5">
          {[35, 45, 30, 60, 50, 70, 80, 65, 55, 90, 75, 85, 60, 70].map((h, i) => (
            <m.div 
              key={i} 
              animate={{ height: [`${h}%`, `${Math.min(100, h + 20)}%`, `${h}%`] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
              className="flex-1 bg-surface-alt hover:bg-[#315FE8] rounded-t-sm transition-colors duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const AIVoiceVisual = () => {
  const [phase, setPhase] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPhase(p => (p + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full rounded-2xl bg-brand-darker border border-border p-6 flex flex-col justify-between">
      <div className="flex justify-between items-center pb-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Mic className="h-4 w-4 text-[#315FE8]" />
          <span className="font-bold text-foreground text-sm">AI VOICE AGENT</span>
        </div>
        <div className="flex items-center gap-1.5 bg-surface-alt border border-border px-2 py-1 rounded">
           <m.div 
             animate={{ opacity: [1, 0.4, 1] }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             className="h-1.5 w-1.5 rounded-full bg-[#315FE8]" 
           />
           <span className="text-[10px] text-[#315FE8] font-semibold tracking-wide">ACTIVE</span>
        </div>
      </div>

      <div className="bg-surface-alt border border-border rounded-xl p-4 mt-6 transition-colors hover:border-[#315FE8]/30">
        <div className="text-[10px] text-neutral-400 uppercase tracking-wider mb-1">Caller</div>
        <div className="text-foreground font-medium">+1 (800) 245-••••</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center mt-6">
        <div className="text-[10px] text-neutral-400 uppercase tracking-wider mb-6 w-full flex justify-between">
           <span>AI STATUS</span>
           <span className="text-[#315FE8] font-medium transition-all duration-300">
             {phase === 0 && "Listening..."}
             {phase === 1 && "Understanding..."}
             {phase === 2 && "Responding..."}
           </span>
        </div>
        
        <div className="flex items-center justify-center h-16 gap-1 w-full">
           {[...Array(24)].map((_, i) => (
              <m.div 
                 key={i} 
                 animate={{ 
                   height: phase === 0 ? `${Math.max(15, Math.random() * 40 + 10)}%` : 
                           phase === 1 ? `${Math.max(10, Math.sin(i) * 20 + 20)}%` : 
                           `${Math.max(15, Math.random() * 80 + 20)}%`,
                   opacity: phase === 1 ? 0.4 : 1
                 }}
                 transition={{ duration: 0.5 }}
                 className="w-1.5 bg-[#315FE8] rounded-full"
              />
           ))}
        </div>
      </div>
    </div>
  );
};

export function Features() {
  const [activeTab, setActiveTab] = useState(featureCategories[0]!.id);

  const activeCategory = featureCategories.find(c => c.id === activeTab) ?? featureCategories[0]!;

  return (
    <Section id="features" className="bg-background py-24 relative overflow-hidden border-b border-border">
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="mb-4 inline-block text-sm font-semibold tracking-[0.15em] uppercase text-accent-400">
            POWERFUL BY DESIGN
          </span>
          <h2 className="font-display mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything Your Call Center Needs to Perform.
          </h2>
          <p className="font-sans text-lg leading-relaxed text-neutral-500">
            Powerful dialing, call management, real-time visibility, and AI automation — designed to help teams connect faster and operate smarter.
          </p>
        </div>

        {/* INTERACTIVE SHOWCASE */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[600px] lg:min-h-[500px]">
          
          {/* LEFT: FEATURE MENU */}
          <div className="lg:w-5/12 flex flex-col gap-3 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 snap-x scrollbar-hide">
            <div className="flex lg:flex-col gap-3 min-w-max lg:min-w-0 px-1">
              {featureCategories.map((category) => {
                const isActive = activeTab === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={cn(
                      "snap-center flex-shrink-0 text-left w-64 sm:w-72 lg:w-full rounded-[16px] p-5 border transition-all duration-300 group outline-none",
                      isActive 
                        ? "bg-surface-alt border-border" 
                        : "bg-transparent border-transparent hover:border-border hover:bg-surface-alt"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <span className={cn(
                        "text-sm font-bold mt-0.5 transition-colors",
                        isActive ? "text-accent-400" : "text-neutral-400"
                      )}>
                        {category.number}
                      </span>
                      <div>
                        <div className={cn(
                          "font-bold text-lg mb-1 transition-colors",
                          isActive ? "text-foreground" : "text-neutral-500 group-hover:text-foreground"
                        )}>
                          {category.title}
                        </div>
                        <div className={cn(
                          "text-sm transition-colors",
                          isActive ? "text-neutral-500" : "text-neutral-400"
                        )}>
                          {category.shortDesc}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: PRODUCT UI */}
          <div className="lg:w-7/12 bg-surface-alt border border-border rounded-[24px] p-5 sm:p-6 lg:p-10 shadow-lg relative overflow-hidden flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">{activeCategory.title}</h3>
              <p className="text-neutral-500">{activeCategory.description}</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-2 mb-8">
               {activeCategory.features.map(f => (
                 <div key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#315FE8]" />
                    <span className="text-sm text-foreground">{f}</span>
                 </div>
               ))}
            </div>

            <div className="flex-1 relative bg-brand-darker rounded-[16px] border border-border overflow-hidden min-h-[300px]">
              <AnimatePresence mode="wait">
                <m.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 p-4"
                >
                  {activeCategory.id === "dialer" && <DialerVisual />}
                  {activeCategory.id === "call-management" && <CallFlowVisual />}
                  {activeCategory.id === "operations" && <OperationsVisual />}
                  {activeCategory.id === "ai" && <AIVoiceVisual />}
                </m.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* CAPABILITY HIGHLIGHTS */}
        <div className="mt-20 pt-10 border-t border-border flex flex-wrap justify-center gap-x-8 gap-y-4">
           {["Built for high-volume calling", "Real-time visibility", "Flexible SIP architecture", "AI-ready communication"].map(highlight => (
              <div key={highlight} className="flex items-center gap-2">
                 <div className="h-1.5 w-1.5 rounded-full bg-[#315FE8]"></div>
                 <span className="text-sm font-medium text-neutral-500">{highlight}</span>
              </div>
           ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button href="/contact?reason=sales" variant="primary" size="lg">
            See MoosePBX in Action
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="mt-4 text-sm text-neutral-400">Explore the platform built for modern call centers.</p>
        </div>

      </Container>
    </Section>
  );
}
