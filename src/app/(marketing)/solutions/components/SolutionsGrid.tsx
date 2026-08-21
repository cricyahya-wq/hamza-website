"use client";

import { m } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { solutionsGrid } from "@/data/solutions-page";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function SolutionsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {solutionsGrid.map((solution, idx) => {
        const Icon = solution.icon;
        return (
          <FadeIn key={solution.title} delay={idx * 0.04} className="h-full">
            <m.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-3xl",
                "bg-card border border-border p-6",
                "hover:border-accent-400/40 hover:shadow-2xl hover:shadow-accent-400/5",
                "transition-all duration-300"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400/0 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:from-accent-400/5 group-hover:opacity-100" />
              
              <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-card border border-border transition-colors group-hover:border-accent-400/30 group-hover:bg-accent-400/10">
                <Icon className="h-6 w-6 text-neutral-400 transition-colors group-hover:text-accent-400" />
              </div>
              
              <h3 className="font-display relative z-10 text-lg font-bold text-foreground group-hover:text-accent-100 transition-colors">
                {solution.title}
              </h3>
              
              <p className="relative z-10 mt-2 flex-1 text-sm leading-relaxed text-neutral-400">
                {solution.description}
              </p>

              <div className="relative z-10 mt-6 flex items-center gap-2 text-sm font-semibold text-accent-400 opacity-80 transition-opacity group-hover:opacity-100">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </m.div>
          </FadeIn>
        );
      })}
    </div>
  );
}
