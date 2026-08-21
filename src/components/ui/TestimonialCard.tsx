import { Quote } from "lucide-react";
import { TiltCard } from "@/components/effects/TiltCard";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

interface TestimonialCardProps extends Testimonial {
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  title,
  company,
  initials,
  className,
}: TestimonialCardProps) {
  return (
    <TiltCard className={cn("h-full", className)}>
      <figure className="bg-card hover:shadow-primary-950/40 flex h-full flex-col rounded-3xl border border-border p-8 transition-shadow duration-300 hover:shadow-lg">
        <Quote className="text-accent-400/40 size-8" />
        <blockquote className="mt-4 flex-1 leading-relaxed text-neutral-400">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3">
          <div className="from-primary-500 to-accent-400 flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-semibold text-foreground">
            {initials}
          </div>
          <div>
            <p className="font-medium text-foreground">{name}</p>
            <p className="text-sm text-neutral-400">
              {title}, {company}
            </p>
          </div>
        </figcaption>
      </figure>
    </TiltCard>
  );
}
