"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { sec, durations, easings } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SplitMode = "word" | "char";

export interface SplitTextProps {
  text: string;
  mode?: SplitMode;
  /** Stagger between elements in ms. Default 30ms for chars, 80ms for words. */
  stagger?: number;
  /** Animate on mount. Default true. */
  animate?: boolean;
  /** Delay before the stagger starts (ms). */
  delayMs?: number;
  className?: string;
}

/**
 * Per-character or per-word animated text. Wraps each unit in a span,
 * staggers reveal via framer-motion. Respects prefers-reduced-motion
 * (collapses to no-animation).
 */
export function SplitText({
  text,
  mode = "char",
  stagger,
  animate = true,
  delayMs = 0,
  className,
}: SplitTextProps) {
  const reduce = useReducedMotion();
  const units = mode === "word" ? text.split(/(\s+)/) : Array.from(text);
  const staggerS = sec(stagger ?? (mode === "word" ? 80 : 30));

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : staggerS,
        delayChildren: reduce ? 0 : sec(delayMs),
      },
    },
  };
  const item: Variants = {
    hidden: { y: "0.6em", opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: reduce ? 0 : sec(durations.base),
        ease: easings.expoOut,
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate={animate ? "show" : "hidden"}
      className={cn("inline-block", className)}
      aria-label={text}
    >
      {units.map((unit, i) => (
        <motion.span
          key={i}
          variants={item}
          className="inline-block"
          aria-hidden="true"
          style={{ whiteSpace: unit === " " ? "pre" : undefined }}
        >
          {unit}
        </motion.span>
      ))}
    </motion.span>
  );
}
