"use client";

import * as React from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { sec, durations, easings } from "@/lib/motion";
import { cn } from "@/lib/utils";

export interface NumberCounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Final value to count up to. */
  to: number;
  /** Starting value. Default 0. */
  from?: number;
  /** Animation duration in ms. Default durations.cinematic. */
  durationMs?: number;
  /** Number of decimals to format. Default 0. */
  decimals?: number;
  /** Locale-aware formatting. Default true. */
  locale?: string | false;
  /** Suffix appended after the number (e.g. "%", "+", " K"). */
  suffix?: string;
}

/**
 * Odometer-style counter. Triggers when scrolled into view, plays once.
 * Respects prefers-reduced-motion (jumps to final value instantly).
 */
export function NumberCounter({
  to,
  from = 0,
  durationMs = durations.cinematic,
  decimals = 0,
  locale = "en-US",
  suffix = "",
  className,
  ...props
}: NumberCounterProps) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [value, setValue] = React.useState(from);

  React.useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(from, to, {
      duration: sec(durationMs),
      ease: easings.expoOut,
      onUpdate: (v: number) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, from, to, durationMs, reduce]);

  const formatted = locale
    ? value.toLocaleString(locale, {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
      })
    : value.toFixed(decimals);

  return (
    <span ref={ref} className={cn("font-mono tabular-nums", className)} {...props}>
      {formatted}
      {suffix}
    </span>
  );
}
