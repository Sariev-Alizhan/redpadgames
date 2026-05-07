import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "accent" | "outline" | "muted";

const variants: Record<Variant, string> = {
  default: "bg-surface text-text",
  accent: "bg-accent text-text",
  outline: "border border-divider text-text-muted",
  muted: "bg-surface text-text-muted",
};

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
}

export function Tag({ className, variant = "default", ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 font-mono text-caption uppercase tracking-[0.18em]",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
