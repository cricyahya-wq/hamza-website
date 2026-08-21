import { type ReactNode } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "max-w-2xl text-left",
        className,
      )}
    >
      {eyebrow && (
        <FadeIn className={cn(align === "center" && "flex justify-center")}>
          <Badge>{eyebrow}</Badge>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2 className="font-display mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className="mt-4 text-lg text-neutral-400">{description}</p>
        </FadeIn>
      )}
    </div>
  );
}
