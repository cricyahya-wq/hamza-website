import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function Skeleton({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        "animate-shimmer rounded-lg bg-neutral-800 bg-[image:linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)] bg-[length:200%_100%]",
        className,
      )}
      {...props}
    />
  );
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          className={cn("h-3.5", index === lines - 1 ? "w-2/3" : "w-full")}
        />
      ))}
    </div>
  );
}

export function SkeletonAvatar({ className }: { className?: string }) {
  return <Skeleton className={cn("size-11 rounded-full", className)} />;
}

export function SkeletonCard() {
  return (
    <div className="bg-white space-y-4 rounded-3xl border border-neutral-200 p-6">
      <Skeleton className="size-11 rounded-xl" />
      <Skeleton className="h-5 w-1/2" />
      <SkeletonText lines={2} />
    </div>
  );
}
