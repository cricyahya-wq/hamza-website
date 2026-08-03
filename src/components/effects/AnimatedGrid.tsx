import { cn } from "@/lib/utils";

interface AnimatedGridProps {
  className?: string;
}

export function AnimatedGrid({ className }: AnimatedGridProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "animate-grid-pan pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,#0d243833_1px,transparent_1px),linear-gradient(to_bottom,#0d243833_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)] bg-[size:64px_64px]",
        className,
      )}
    />
  );
}
