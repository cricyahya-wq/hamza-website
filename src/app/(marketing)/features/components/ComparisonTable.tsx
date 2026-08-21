"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { comparisonData } from "@/data/features-page";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ComparisonTable() {
  return (
    <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-3xl bg-card border border-border shadow-2xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-card">
              <th className="p-6 font-display text-base font-bold text-foreground">Feature</th>
              <th className="p-6 font-display text-base font-bold text-neutral-400">
                Traditional PBX
              </th>
              <th className="bg-accent-400/5 p-6 font-display text-base font-bold text-accent-400">
                MoosePBX
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800">
            {comparisonData.map((row, idx) => (
              <tr
                key={row.feature}
                className="transition-colors hover:bg-neutral-900/30"
              >
                <td className="p-6 font-medium text-foreground">{row.feature}</td>
                <td className="p-6 text-neutral-400">
                  <div className="flex items-center gap-3">
                    <X className="h-4 w-4 shrink-0 text-neutral-400" />
                    <span>{row.traditional}</span>
                  </div>
                </td>
                <td className="bg-accent-400/5 p-6 text-primary-600">
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-accent-400" />
                    <span className="font-medium">{row.moose}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
