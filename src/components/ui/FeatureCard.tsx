import type { LucideIcon } from "lucide-react";
import { TiltCard } from "@/components/effects/TiltCard";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <TiltCard className={cn("h-full", className)}>
      <div className="group bg-white hover:border-accent-400/40 hover:shadow-accent-950/40 relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div>
          <div className="bg-accent-400/10 text-accent-400 group-hover:bg-accent-400 group-hover:text-primary-950 flex size-12 items-center justify-center rounded-2xl transition-colors">
            <Icon className="size-6" />
          </div>
          <h3 className="font-display mt-5 text-xl font-semibold text-neutral-900">
            {title}
          </h3>
          <p className="mt-2 leading-relaxed text-neutral-600">{description}</p>
        </div>
      </div>
    </TiltCard>
  );
}
