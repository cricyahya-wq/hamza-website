"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";
import { Phone, Users, PhoneCall, Activity, Signal, CheckCircle2 } from "lucide-react";

export function HeroDialerVisual() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="size-full flex items-center justify-center lg:justify-end">
      
      {/* Wrapper that scales but limits max-width */}
      <div className="relative w-full max-w-[640px]">
        
        {/* Main Dashboard Panel */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full rounded-[20px] border border-border bg-card p-6 lg:p-8 shadow-[0_24px_64px_rgba(0,0,0,0.4)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
            <span className="font-display text-xl font-bold text-foreground tracking-tight">MOOSEPBX</span>
            <div className="flex items-center gap-2 rounded-full bg-surface-alt px-3 py-1 border border-border">
              <m.div 
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="size-2 rounded-full bg-[#2BC48A]"
              />
              <span className="text-xs font-medium text-foreground">Live System</span>
            </div>
          </div>

          {/* Top Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl bg-surface-alt p-4 border border-border">
              <div className="flex items-center gap-2 mb-1">
                <PhoneCall className="size-3.5 text-neutral-500" />
                <div className="text-neutral-500 text-xs font-medium uppercase tracking-wider">Active Calls</div>
              </div>
              <div className="text-3xl font-bold text-foreground">42</div>
            </div>
            <div className="rounded-xl bg-surface-alt p-4 border border-border">
              <div className="flex items-center gap-2 mb-1">
                <Users className="size-3.5 text-neutral-500" />
                <div className="text-neutral-500 text-xs font-medium uppercase tracking-wider">Active Agents</div>
              </div>
              <div className="text-3xl font-bold text-foreground">24</div>
            </div>
          </div>

          {/* Call Flow Signal Animation */}
          <div className="flex items-center justify-between mb-6 relative px-4">
            <div className="absolute left-8 right-8 top-[4px] h-px bg-[#2A3038] z-0" />
            <m.div 
              animate={{ left: ["6%", "94%"] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[4px] -translate-y-1/2 size-[3px] rounded-full bg-[#315FE8] shadow-[0_0_8px_#315FE8] z-10" 
            />
            {["Incoming", "Routing", "Dialer", "Agent"].map((step, i) => (
              <div key={step} className="flex flex-col items-center gap-2 relative z-10 bg-card px-2">
                <div className="size-2.5 rounded-full border border-border bg-surface-alt" />
                <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider">{step}</span>
              </div>
            ))}
          </div>

          {/* Active Call Panel */}
          <div className="rounded-xl bg-brand-darker p-5 lg:p-6 border border-border relative overflow-hidden">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="flex size-6 items-center justify-center rounded-full bg-[#315FE8]/20">
                  <Phone className="size-3 text-[#315FE8] fill-[#315FE8]" />
                </div>
                <span className="text-xs font-semibold text-[#315FE8] uppercase tracking-widest">Active Call</span>
              </div>
              <div className="flex items-center gap-2 bg-surface-alt rounded-md px-2 py-1 border border-border">
                <span className="text-sm font-mono font-medium text-foreground">04:32</span>
                <m.div 
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="size-1.5 rounded-full bg-[#2BC48A]"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
              <div className="min-w-0">
                <div className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-2 truncate">+1 (800) 245-••••</div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-[#2BC48A] shrink-0" />
                    Connected
                  </span>
                  <span className="h-3 w-px bg-foreground/10 shrink-0" />
                  <span className="truncate">Quality: <span className="text-foreground font-medium">Excellent</span></span>
                </div>
              </div>
              
              {/* Small End Call Button */}
              <button className="shrink-0 flex items-center justify-center gap-2 rounded-lg bg-[#E45B5B]/10 hover:bg-[#E45B5B]/20 border border-[#E45B5B]/20 px-4 py-2.5 text-sm font-semibold text-[#E45B5B] transition-colors">
                <Phone className="size-4 rotate-[135deg]" />
                End Call
              </button>
            </div>
            
            {/* Subtle Waveform */}
            <div className="mt-6 flex items-end justify-between gap-0.5 h-12 opacity-30 relative z-0">
              {[...Array(48)].map((_, i) => (
                <m.div 
                  key={i}
                  animate={{ height: [`${Math.max(10, Math.random() * 40)}%`, `${Math.max(30, Math.random() * 100)}%`, `${Math.max(10, Math.random() * 40)}%`] }}
                  transition={{ 
                    duration: 2 + Math.random() * 1.5, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: Math.random() * -2
                  }}
                  className="flex-1 max-w-[4px] sm:max-w-[6px] bg-[#315FE8] rounded-t-sm"
                />
              ))}
            </div>
          </div>
        </m.div>

        {/* Floating Card 1: Answer Rate */}
        <m.div
          initial={{ opacity: 0, x: 20, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute -right-4 lg:-right-8 top-8 lg:top-12 z-20 hidden md:flex flex-col gap-1 rounded-xl border border-border bg-card p-4 shadow-[0_12px_24px_rgba(0,0,0,0.3)]"
        >
          <m.div 
             animate={{ y: [-2, 2, -2] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-1">
              <Activity className="size-4 text-accent-400" />
              <div className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Answer Rate</div>
            </div>
            <div className="text-2xl font-bold text-foreground">98.4%</div>
          </m.div>
        </m.div>

        {/* Floating Card 2: Calls Today */}
        <m.div
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute -left-4 lg:-left-8 bottom-12 lg:bottom-20 z-20 hidden md:flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-[0_12px_24px_rgba(0,0,0,0.3)]"
        >
          <m.div 
             animate={{ y: [2, -2, 2] }}
             transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
             className="flex items-center gap-4"
          >
            <div className="flex size-10 items-center justify-center rounded-lg bg-brand-darker border border-border">
              <Signal className="size-5 text-accent-400" />
            </div>
            <div>
              <div className="text-xl font-bold text-foreground">12,842</div>
              <div className="flex items-center gap-1.5">
                <div className="text-xs font-medium text-[#2BC48A]">+18%</div>
                <div className="text-xs text-neutral-400">vs last week</div>
              </div>
            </div>
          </m.div>
        </m.div>

      </div>
    </div>
  );
}
