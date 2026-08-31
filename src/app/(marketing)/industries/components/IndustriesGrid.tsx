"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { industriesGrid, type IndustryCard } from "@/data/industries-page";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { IndustryDetailPopup } from "./IndustryDetailPopup";

export function IndustriesGrid() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryCard | null>(null);

  useEffect(() => {
    if (selectedIndustry) {
      document.body.style.overflow = "hidden";
      if (typeof window !== "undefined" && window.__lenis) {
        window.__lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && window.__lenis) {
        window.__lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && window.__lenis) {
        window.__lenis.start();
      }
    };
  }, [selectedIndustry]);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {industriesGrid.map((industry, idx) => {
          const Icon = industry.icon;
          return (
            <FadeIn key={industry.title} delay={idx * 0.04} className="h-full">
              <m.div
                onClick={() => setSelectedIndustry(industry)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={cn(
                  "cursor-pointer group relative flex h-full flex-col overflow-hidden rounded-3xl",
                  "bg-surface-alt border border-border p-6",
                  "hover:border-[#315FE8]/40 hover:shadow-2xl hover:shadow-[#315FE8]/10",
                  "transition-all duration-300"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#315FE8]/0 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:from-[#315FE8]/5 group-hover:opacity-100" />
                
                <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-background border border-border transition-colors group-hover:border-[#315FE8]/30 group-hover:bg-[#315FE8]/10">
                  <Icon className="h-6 w-6 text-neutral-500 transition-colors group-hover:text-[#315FE8]" />
                </div>
                
                <h3 className="font-display relative z-10 text-lg font-bold text-foreground group-hover:text-[#315FE8] transition-colors">
                  {industry.title}
                </h3>
                
                <p className="relative z-10 mt-2 flex-1 text-sm leading-relaxed text-neutral-500">
                  {industry.description}
                </p>

                <div className="relative z-10 mt-6 flex items-center gap-2 text-sm font-semibold text-[#315FE8] opacity-80 transition-opacity group-hover:opacity-100">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </m.div>
            </FadeIn>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedIndustry && (
          <IndustryDetailPopup 
            industry={selectedIndustry} 
            onClose={() => setSelectedIndustry(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}

