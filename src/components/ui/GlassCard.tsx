import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
}

export function GlassCard({ className, elevated = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-lg border border-divider/80 backdrop-blur-md",
        "bg-surface/60 supports-[backdrop-filter]:bg-surface/40",
        elevated ? "shadow-lg" : "shadow-md",
        "transition-colors duration-base ease-standard hover:border-accent/40",
        className,
      )}
      {...props}
    />
  );
}
