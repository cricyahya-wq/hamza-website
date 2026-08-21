import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
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
    <div className={cn("h-full group", className)}>
      <div
        className={cn(
          "relative flex h-full flex-col rounded-[24px] border p-8 transition-all duration-300",
          popular
            ? "border-[#315FE8] bg-card shadow-[0_24px_48px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1"
            : "border-border bg-card shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#315FE8]/30 hover:bg-card"
        )}
      >
        {popular && (
          <span className="bg-[#A98B52] text-white absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold tracking-wide uppercase">
            Most popular
          </span>
        )}

        <h3 className="font-display text-2xl font-bold text-foreground">
          {name}
        </h3>
        <p className="mt-2 text-sm text-neutral-500 font-medium leading-relaxed">{description}</p>

        <div className="mt-8 flex items-baseline gap-1 pb-8 border-b border-border">
          <span className="font-display text-5xl font-bold text-foreground">
            {price}
          </span>
          {price !== "Custom" && (
            <span className="text-sm font-bold text-neutral-500 uppercase tracking-wider ml-1">{period}</span>
          )}
        </div>

        <ul className="mt-8 flex-1 space-y-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check className="text-[#315FE8] mt-0.5 h-5 w-5 shrink-0" strokeWidth={3} />
              <span className="text-sm font-medium text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          href={ctaHref}
          variant={popular ? "primary" : "outline"}
          size="lg"
          className="mt-10 w-full"
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
