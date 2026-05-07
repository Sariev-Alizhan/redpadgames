import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Force min-height to viewport. Default true. */
  fullViewport?: boolean;
  /** Apply scroll-snap-align: start (parent must set scroll-snap-type). */
  snap?: boolean;
  /** Padding density. */
  density?: "tight" | "default" | "loose";
}

const densities: Record<NonNullable<SectionProps["density"]>, string> = {
  tight: "py-16",
  default: "py-24",
  loose: "py-32",
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    { className, fullViewport = true, snap = false, density = "default", ...props },
    ref,
  ) => (
    <section
      ref={ref}
      className={cn(
        "relative w-full",
        fullViewport && "min-h-screen",
        snap && "snap-start",
        densities[density],
        className,
      )}
      {...props}
    />
  ),
);
Section.displayName = "Section";
