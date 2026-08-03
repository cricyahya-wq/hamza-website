import { cn } from "@/lib/utils";

interface MorphingBlobProps {
  className?: string;
  from?: string;
  to?: string;
}

export function MorphingBlob({
  className,
  from = "from-accent-500/30",
  to = "to-primary-500/20",
}: MorphingBlobProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "animate-morph pointer-events-none absolute -z-20 size-[28rem] bg-gradient-to-br blur-[80px] will-change-[border-radius,transform]",
        from,
        to,
        className,
      )}
    />
  );
}
