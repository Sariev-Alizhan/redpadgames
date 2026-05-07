"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { sec, durations, easings } from "@/lib/motion";

/**
 * Lightweight reveal-on-scroll wrapper. One per element so a parent grid /
 * stack stays as native HTML; no layout impact, only opacity + Y offset.
 *
 * Uses Framer Motion's whileInView with `once: true` and `amount: 0.3` —
 * tuned to fire when about a third of the element is on screen, so users
 * scrolling fast still see the animation rather than landing on an
 * already-visible state.
 */
export function Reveal({
  children,
  delayMs = 0,
  amount = 0.3,
  className,
}: {
  children: React.ReactNode;
  delayMs?: number;
  amount?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: reduce ? 0 : sec(durations.slow),
        ease: easings.expoOut,
        delay: reduce ? 0 : delayMs / 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
