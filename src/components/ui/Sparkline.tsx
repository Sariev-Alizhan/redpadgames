import * as React from "react";
import { cn } from "@/lib/utils";

export interface SparklineProps {
  values: ReadonlyArray<number>;
  /** Stroke color. Default currentColor. */
  stroke?: string;
  /** Stroke width in SVG user units. Default 1.6. */
  strokeWidth?: number;
  /** Aspect ratio width / height. Default 4. */
  ratio?: number;
  className?: string;
  ariaLabel?: string;
}

/** Tiny SVG sparkline. Server-renderable (no client JS). */
export function Sparkline({
  values,
  stroke = "currentColor",
  strokeWidth = 1.6,
  ratio = 4,
  className,
  ariaLabel,
}: SparklineProps) {
  if (values.length < 2) {
    return (
      <svg
        viewBox={`0 0 ${100 * ratio} 100`}
        className={cn("h-6 w-24", className)}
        aria-hidden="true"
      />
    );
  }
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const step = (100 * ratio) / (values.length - 1);
  const points = values
    .map((v, i) => `${i * step},${100 - ((v - min) / span) * 100}`)
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${100 * ratio} 100`}
      preserveAspectRatio="none"
      className={cn("h-6 w-24", className)}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : "true"}
    >
      <polyline
        points={points}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
