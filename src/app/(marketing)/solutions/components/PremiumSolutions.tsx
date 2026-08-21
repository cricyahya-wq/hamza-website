"use client";

import React, { useState } from "react";
import { m } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Cpu, Mic, Network, Code, Server, ArrowDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Card = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) => {
  return (
    <Link href={href} className={cn("group block outline-none", className)}>
      <m.div
        whileHover={{ y: -3, scale: 1.01 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative flex h-full flex-col overflow-hidden rounded-[20px] bg-surface-alt border border-border p-8 transition-all duration-300 hover:border-[#315FE8]/40 hover:shadow-[0_16px_40px_-12px_rgba(49,95,232,0.15)]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-card/0 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:from-card/80 group-hover:opacity-100" />
        <div className="relative z-10 h-full flex flex-col">
          {children}
        </div>
      </m.div>
    </Link>
  );
};

const Eyebrow = ({ text }: { text: string }) => (
  <div className="mb-3 text-xs font-bold tracking-[0.15em] text-accent-400 uppercase transition-colors">
    {text}
  </div>
);

const Title = ({ text }: { text: string }) => (
  <h3 className="mb-4 text-2xl font-bold text-foreground transition-colors group-hover:text-[#315FE8]">
    {text}
  </h3>
);

const Description = ({ text }: { text: string }) => (
  <p className="mb-8 text-neutral-500 leading-relaxed max-w-lg">{text}</p>
);

const CTA = ({ text }: { text: string }) => (
  <div className="mt-auto pt-6 flex items-center gap-2 text-sm font-bold text-[#315FE8]">
    {text}
    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  </div>
);

// --- Visualizations ---

const CallCenterVisual = () => (
  <div className="relative mt-8 h-64 w-full rounded-[16px] border border-border bg-brand-darker p-4 sm:p-6 flex flex-col transition-all duration-300 group-hover:border-[#315FE8]/40 group-hover:bg-card shadow-md group-hover:-translate-y-1">
    <div className="flex items-center justify-between border-b border-border pb-4">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded bg-surface-alt border border-border flex items-center justify-center">
          <Phone className="h-3 w-3 text-[#315FE8]" />
        </div>
        <span className="font-bold text-foreground text-sm tracking-wide">MOOSEPBX</span>
      </div>
      <div className="flex items-center gap-2 bg-surface-alt border border-border px-2 py-1 rounded-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2BC48A] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2BC48A]"></span>
        </span>
        <span className="text-[10px] font-bold text-neutral-500 uppercase">SYSTEM ACTIVE</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-6">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-bold uppercase text-neutral-400">Active Agents</span>
        <span className="text-2xl font-bold text-foreground group-hover:text-[#315FE8] transition-colors">24</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-bold uppercase text-neutral-400">Active Calls</span>
        <span className="text-2xl font-bold text-foreground">42</span>
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <span className="text-[10px] font-bold uppercase text-neutral-400">Campaign</span>
        <span className="text-sm font-bold text-[#315FE8]">Sales Q3</span>
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <span className="text-[10px] font-bold uppercase text-neutral-400">Answer Rate</span>
        <span className="text-xl font-bold text-[#2BC48A]">98.4%</span>
      </div>
      <div className="col-span-2 flex flex-col gap-1 mt-2">
        <span className="text-[10px] font-bold uppercase text-neutral-400">Calls Today</span>
        <span className="text-xl font-bold text-foreground">12,842</span>
        <div className="h-1.5 w-full bg-[#2A3038] rounded-full mt-2 overflow-hidden">
          <div className="h-full bg-[#315FE8] w-[75%] transition-all duration-1000 group-hover:w-[85%]"></div>
        </div>
      </div>
    </div>
  </div>
);

const OutboundVisual = () => (
  <div className="relative mt-8 flex flex-col gap-4 transition-all duration-300 group-hover:-translate-y-1">
    <div className="flex flex-wrap gap-2">
      {["Auto Dialer", "Predictive Dialer", "Custom Dialer", "ViciDialer"].map((chip) => (
        <span key={chip} className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-border bg-surface-alt text-neutral-500 transition-colors group-hover:border-[#315FE8]/30 group-hover:text-[#315FE8]">
          {chip}
        </span>
      ))}
    </div>
    <div className="mt-4 rounded-[16px] border border-border bg-brand-darker p-5 transition-all duration-300 group-hover:bg-card group-hover:border-[#315FE8]/30 shadow-md">
      <div className="flex justify-between items-end mb-4">
        <div>
          <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mb-1">Campaign</div>
          <div className="text-foreground font-bold">Sales Q3</div>
        </div>
        <div className="h-8 w-8 rounded-full border-2 border-[#315FE8] border-t-transparent animate-spin-slow" style={{ animationDuration: '3s' }}></div>
      </div>
      <div className="grid grid-cols-3 gap-2 border-t border-border pt-4">
        <div>
          <div className="text-[10px] text-neutral-400 font-bold uppercase">Contacts</div>
          <div className="text-sm font-bold text-foreground">12,842</div>
        </div>
        <div>
          <div className="text-[10px] text-neutral-400 font-bold uppercase">Agents</div>
          <div className="text-sm font-bold text-foreground">24</div>
        </div>
        <div>
          <div className="text-[10px] text-neutral-400 font-bold uppercase">Calls</div>
          <div className="text-sm font-bold text-[#315FE8]">8,420</div>
        </div>
      </div>
    </div>
  </div>
);

const VoipVisual = () => (
  <div className="relative mt-8 h-48 flex flex-col items-center justify-center bg-brand-darker rounded-[16px] border border-border transition-all duration-300 group-hover:bg-card group-hover:border-[#315FE8]/40 shadow-md group-hover:-translate-y-1">
    <div className="flex flex-col items-center justify-center w-full max-w-[200px]">
      <div className="w-full flex items-center justify-between px-4 py-2 bg-surface-alt rounded-lg border border-border z-10 transition-colors group-hover:border-[#315FE8]/50 shadow-sm">
        <span className="text-[10px] font-bold uppercase text-foreground">OFFICE</span>
        <Phone className="h-3 w-3 text-[#315FE8]" />
      </div>
      
      <div className="h-6 w-0.5 bg-gradient-to-b from-[#2A3038] to-transparent group-hover:from-[#315FE8]/50 transition-colors"></div>
      
      <div className="w-full flex items-center justify-between px-4 py-2 bg-surface-alt rounded-lg border border-border z-10 transition-colors group-hover:border-[#315FE8]/50 shadow-sm">
        <span className="text-[10px] font-bold uppercase text-neutral-500">PBX / SIP Trunking</span>
        <Network className="h-3 w-3 text-neutral-500" />
      </div>

      <div className="h-6 w-0.5 bg-gradient-to-b from-[#2A3038] to-transparent group-hover:from-[#315FE8]/50 transition-colors"></div>

      <div className="w-full flex items-center justify-between px-4 py-2 bg-surface-alt rounded-lg border border-border z-10 transition-colors group-hover:border-[#315FE8]/50 shadow-sm">
        <span className="text-[10px] font-bold uppercase text-foreground">CUSTOMERS</span>
        <div className="flex -space-x-1">
           <div className="h-4 w-4 rounded-full bg-card border border-[#315FE8]"></div>
           <div className="h-4 w-4 rounded-full bg-surface-alt border border-border"></div>
        </div>
      </div>
    </div>
  </div>
);

const InfrastructureVisual = () => (
  <div className="relative mt-8 rounded-[16px] border border-border bg-brand-darker p-6 h-48 overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:bg-card group-hover:border-[#315FE8]/40 shadow-md group-hover:-translate-y-1">
    <div className="flex flex-col items-center w-full z-10">
      <div className="text-[10px] font-bold tracking-widest text-[#315FE8] mb-2 uppercase">SIP TRAFFIC</div>
      <ArrowDown className="h-3 w-3 text-neutral-400 mb-2 group-hover:text-[#315FE8] group-hover:translate-y-1 transition-all" />
      
      <div className="w-full max-w-[180px] bg-surface-alt border border-border rounded-lg p-2 text-center mb-2 shadow-sm group-hover:border-[#315FE8]/50 transition-colors">
        <span className="text-[11px] font-bold text-foreground">HAProxy</span>
      </div>

      <ArrowDown className="h-3 w-3 text-neutral-400 mb-2 group-hover:text-[#315FE8] group-hover:translate-y-1 transition-all" />

      <div className="flex gap-2 w-full max-w-[180px]">
         <div className="flex-1 bg-surface-alt border border-border rounded-lg py-2 text-center transition-colors group-hover:border-[#315FE8]/50 shadow-sm">
            <span className="text-[11px] font-bold text-foreground">Kamailio</span>
         </div>
         <div className="flex-1 bg-surface-alt border border-border rounded-lg py-2 text-center transition-colors group-hover:border-[#315FE8]/50 shadow-sm">
            <span className="text-[11px] font-bold text-foreground">OpenSIPS</span>
         </div>
      </div>
    </div>
  </div>
);

const AIVisual = () => (
  <div className="relative mt-8 rounded-[16px] border border-border bg-brand-darker p-6 h-48 flex flex-col justify-between transition-all duration-300 group-hover:bg-card group-hover:border-[#315FE8]/40 shadow-md group-hover:-translate-y-1">
    <div className="flex justify-between items-center">
       <span className="text-[11px] font-bold uppercase text-foreground flex items-center gap-2"><Mic className="w-3 h-3 text-[#315FE8]" /> AI Voice Agent</span>
       <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse"></div><span className="text-[9px] font-bold uppercase text-neutral-400">Listening</span></div>
          <div className="flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-[#315FE8]"></div><span className="text-[9px] font-bold uppercase text-neutral-400">Processing</span></div>
          <div className="flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-[#2A3038]"></div><span className="text-[9px] font-bold uppercase text-neutral-400">Responding</span></div>
       </div>
    </div>
    <div className="flex items-center justify-center h-16 gap-1 group-hover:gap-1.5 transition-all">
       {[1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
          <div 
             key={i} 
             className="w-1 bg-[#315FE8] rounded-full transition-all duration-300"
             style={{ 
               height: `${Math.max(10, Math.sin(i) * 30 + 30)}%`,
               opacity: Math.max(0.3, Math.sin(i)),
               transformOrigin: 'center'
             }}
          ></div>
       ))}
    </div>
    <div className="w-full text-center text-[10px] font-bold uppercase text-neutral-400">
      Processing customer intent...
    </div>
  </div>
);

const CustomPlatformVisual = () => (
  <div className="relative mt-8 rounded-[16px] border border-border bg-card h-64 overflow-hidden flex transition-all duration-300 group-hover:border-[#315FE8]/40 shadow-md group-hover:-translate-y-1">
    <div className="w-1/3 border-r border-border bg-brand-darker p-4 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-6">
        <Code className="h-4 w-4 text-[#315FE8]" />
        <span className="text-[10px] font-bold text-foreground tracking-widest uppercase">CUSTOM UI</span>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {["Campaigns", "Agents", "Calls", "Analytics"].map((item, idx) => (
          <div key={item} className={cn("px-2 py-1.5 rounded-md text-[10px] font-bold transition-colors uppercase", idx === 0 ? "bg-[#2A3038] text-foreground" : "text-neutral-400 group-hover:text-foreground hover:bg-[#2A3038]")}>
            {item}
          </div>
        ))}
      </div>
    </div>
    <div className="w-2/3 p-4 bg-card">
      <div className="h-4 w-1/2 bg-[#2A3038] rounded-md mb-4"></div>
      <div className="h-24 w-full border border-border rounded-lg bg-brand-darker mb-2 p-3">
         <div className="h-2 w-full bg-[#2A3038] rounded mb-3"></div>
         <div className="h-2 w-3/4 bg-[#2A3038] rounded mb-3"></div>
         <div className="h-2 w-5/6 bg-[#2A3038] rounded"></div>
      </div>
      <div className="flex gap-2 mt-4">
         <div className="h-12 w-1/2 border border-border rounded-lg bg-brand-darker"></div>
         <div className="h-12 w-1/2 border border-border rounded-lg bg-brand-darker"></div>
      </div>
    </div>
  </div>
);

const SignatureAnimation = () => {
  const nodes = ["Customer", "SIP", "Routing", "Dialer", "Agent", "Analytics"];
  return (
    <div className="relative w-full h-[140px] sm:h-[180px] rounded-2xl bg-background border border-border flex flex-col justify-center px-4 sm:px-12 overflow-hidden shadow-xl mb-16">
      <div className="absolute inset-0 bg-gradient-to-r from-card/0 via-[#315FE8]/5 to-card/0 pointer-events-none" />
      
      {/* The Line */}
      <div className="absolute left-8 right-8 sm:left-16 sm:right-16 top-1/2 -translate-y-1/2 h-px bg-[#2A3038] z-0" />
      
      {/* The Signal */}
      <m.div
        animate={{ left: ["4%", "96%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-400 shadow-[0_0_12px_#C8A96B] z-20"
      />
      
      {/* Nodes */}
      <div className="relative z-10 flex justify-between items-center w-full">
        {nodes.map((node, i) => {
          // Calculate the approximate timing for the signal to pass this node
          // The easing is easeInOut, which makes it non-linear, but we can approximate the peak.
          const delay = (i / (nodes.length - 1)) * 6;
          return (
            <div key={node} className="flex flex-col items-center gap-3">
               <div className="w-3 h-3 rounded-full border-2 border-border bg-surface-alt relative transition-colors duration-300 flex items-center justify-center">
                  <m.div 
                     animate={{ opacity: [0, 1, 0] }}
                     transition={{ duration: 6, repeat: Infinity, delay: delay - 0.5, ease: "linear" }}
                     className="absolute inset-[-4px] bg-[#315FE8] rounded-full blur-[4px] z-0"
                  />
                  <m.div 
                     animate={{ backgroundColor: ["#12161B", "#315FE8", "#12161B"] }}
                     transition={{ duration: 6, repeat: Infinity, delay: delay - 0.5, ease: "linear" }}
                     className="absolute inset-0 rounded-full z-10"
                  />
               </div>
               <m.span 
                 animate={{ color: ["#A7ADB5", "#F5F5F2", "#A7ADB5"] }}
                 transition={{ duration: 6, repeat: Infinity, delay: delay - 0.5, ease: "linear" }}
                 className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider"
               >
                 {node}
               </m.span>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export function PremiumSolutions() {
  return (
    <div className="w-full">
      <SignatureAnimation />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto w-full">
        
        {/* 01 / CALL CENTER */}
        <div className="md:col-span-2">
          <Card href="/services/voip-solutions">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 h-full">
              <div className="flex-1 flex flex-col justify-center">
                <Eyebrow text="01 / CALL CENTER" />
                <Title text="Complete Call Center" />
                <Description text="Build a complete inbound and outbound communication operation with the tools your agents need to connect, manage, and scale conversations." />
                <CTA text="Explore Call Center" />
              </div>
              <div className="flex-1 w-full lg:mt-0 mt-4 flex items-center">
                <CallCenterVisual />
              </div>
            </div>
          </Card>
        </div>

        {/* 02 / OUTBOUND */}
        <div className="md:col-span-1 lg:col-span-1">
          <Card href="/services/custom-development">
            <Eyebrow text="02 / OUTBOUND" />
            <Title text="Outbound Sales & Dialing" />
            <Description text="Give sales teams smarter dialing workflows with auto dialing, predictive dialing, custom dialers, and ViciDialer." />
            <OutboundVisual />
            <CTA text="Explore Outbound" />
          </Card>
        </div>

        {/* 03 / BUSINESS VOIP */}
        <div className="md:col-span-1 lg:col-span-1">
          <Card href="/services/voip-solutions">
            <Eyebrow text="03 / BUSINESS COMMUNICATION" />
            <Title text="Business VoIP & PBX" />
            <Description text="Connect teams with reliable business calling, PBX capabilities, SIP trunking, and modern VoIP infrastructure." />
            <VoipVisual />
            <CTA text="Explore Business VoIP" />
          </Card>
        </div>

        {/* 04 / INFRASTRUCTURE */}
        <div className="md:col-span-1 lg:col-span-1">
          <Card href="/services/secure-sip">
            <Eyebrow text="04 / INFRASTRUCTURE" />
            <Title text="Secure SIP Infrastructure" />
            <Description text="Build resilient communication infrastructure with secure routing, SIP proxies, load balancing, and high-availability architecture." />
            <InfrastructureVisual />
            <CTA text="Explore Secure SIP" />
          </Card>
        </div>

        {/* 05 / AI & AUTOMATION */}
        <div className="md:col-span-1 lg:col-span-1">
          <Card href="/services/ai-automation">
            <Eyebrow text="05 / AI & AUTOMATION" />
            <Title text="AI Voice Automation" />
            <Description text="Connect customers with intelligent AI voice agents and custom AI bots that automate communication workflows." />
            <AIVisual />
            <CTA text="Explore AI Solutions" />
          </Card>
        </div>

        {/* 06 / CUSTOM DEVELOPMENT */}
        <div className="md:col-span-2">
          <Card href="/services/custom-development">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 h-full">
              <div className="flex-1 flex flex-col justify-center">
                <Eyebrow text="06 / CUSTOM DEVELOPMENT" />
                <Title text="Custom Communication Platform" />
                <Description text="Build custom dialer applications, communication software, and web platforms around the exact needs of your business." />
                <CTA text="Build Your Platform" />
              </div>
              <div className="flex-1 w-full lg:mt-0 mt-4 flex items-center">
                <CustomPlatformVisual />
              </div>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}
