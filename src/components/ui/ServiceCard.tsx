import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { TiltCard } from "@/components/effects/TiltCard";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  const content = (
    <div className="group bg-card hover:border-secondary-400/40 hover:bg-secondary-950/30 flex items-start gap-5 rounded-2xl border border-border p-6 transition-all duration-300">
      <div className="bg-secondary-800/50 text-secondary-300 flex size-11 shrink-0 items-center justify-center rounded-xl">
        <Icon className="size-5" />
      </div>
      <div className="flex-1">
        <h3 className="font-display text-lg font-semibold text-foreground">
          {title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">
          {description}
        </p>
      </div>
      {href && (
        <ArrowUpRight className="group-hover:text-accent-400 size-5 shrink-0 text-neutral-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </div>
  );

  return (
    <TiltCard max={4} className={cn("h-full", className)}>
      {href ? (
        <Link href={href} className="block h-full">
          {content}
        </Link>
      ) : (
        content
      )}
    </TiltCard>
  );
}
