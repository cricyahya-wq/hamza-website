import { cn } from "@/lib/utils";

interface AuroraProps {
  className?: string;
}

export function Aurora({ className }: AuroraProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-20 overflow-hidden",
        className,
      )}
    >
      <div className="bg-primary-500/25 animate-aurora-a absolute top-[-20%] left-[-10%] size-[45rem] rounded-full blur-[110px] will-change-transform" />
      <div className="bg-accent-500/20 animate-aurora-b absolute top-[-5%] right-[-15%] size-[40rem] rounded-full blur-[110px] will-change-transform" />
      <div className="bg-secondary-500/20 animate-aurora-c absolute bottom-[-25%] left-[20%] size-[38rem] rounded-full blur-[110px] will-change-transform" />
    </div>
  );
}
