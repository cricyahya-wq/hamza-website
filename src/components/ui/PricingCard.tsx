import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/effects/TiltCard";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
  className?: string;
}

export function PricingCard({
  name,
  price,
  period = "/month",
  description,
  features,
  ctaLabel,
  ctaHref,
  popular = false,
  className,
}: PricingCardProps) {
  return (
    <TiltCard max={5} className={cn("h-full", className)}>
      <div
        className={cn(
          "relative flex h-full flex-col rounded-3xl border p-8",
          popular
            ? "border-accent-400/50 from-accent-950/60 to-card shadow-accent-950/40 bg-gradient-to-b shadow-xl"
            : "bg-white border-neutral-200",
        )}
      >
        {popular && (
          <span className="bg-accent-400 text-primary-950 absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold">
            Most popular
          </span>
        )}

        <h3 className="font-display text-xl font-semibold text-neutral-900">
          {name}
        </h3>
        <p className="mt-2 text-sm text-neutral-400">{description}</p>

        <div className="mt-6 flex items-baseline gap-1">
          <span className="font-display text-4xl font-bold text-neutral-900">
            {price}
          </span>
          {price !== "Custom" && (
            <span className="text-sm text-neutral-400">{period}</span>
          )}
        </div>

        <ul className="mt-8 flex-1 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check className="text-accent-400 mt-0.5 size-5 shrink-0" />
              <span className="text-sm text-neutral-700">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          href={ctaHref}
          variant={popular ? "cta" : "secondary"}
          size="md"
          className="mt-8 w-full"
        >
          {ctaLabel}
        </Button>
      </div>
    </TiltCard>
  );
}
