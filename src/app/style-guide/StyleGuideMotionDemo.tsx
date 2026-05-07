"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { sec, durations, easings } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

/**
 * Interactive motion demo for /style-guide.
 * Demonstrates: hover micro, section reveal stagger, page-style
 * red sweep wipe — all using motion tokens from src/lib/motion.ts.
 */
export function StyleGuideMotionDemo() {
  const reduce = useReducedMotion();
  const [revealKey, setRevealKey] = React.useState(0);
  const [sweeping, setSweeping] = React.useState(false);

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {/* Hover micro */}
      <div>
        <p className="mb-3 font-mono text-caption uppercase tracking-[0.2em] text-text-muted">
          Hover micro · duration-fast
        </p>
        <motion.button
          type="button"
          whileHover={{ scale: reduce ? 1 : 1.04 }}
          whileTap={{ scale: reduce ? 1 : 0.97 }}
          transition={{ duration: sec(durations.fast), ease: easings.standard }}
          className="h-32 w-full rounded-md border border-divider bg-surface text-text hover:border-accent"
        >
          Hover me
        </motion.button>
      </div>

      {/* Section reveal */}
      <div>
        <p className="mb-3 font-mono text-caption uppercase tracking-[0.2em] text-text-muted">
          Reveal stagger · duration-base
        </p>
        <motion.div
          key={revealKey}
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: reduce ? 0 : 0.05 } },
          }}
          className="grid grid-cols-3 gap-2"
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: reduce ? 0 : sec(durations.base), ease: easings.expoOut },
                },
              }}
              className="aspect-square rounded-sm bg-accent/80"
            />
          ))}
        </motion.div>
        <Button
          size="sm"
          variant="ghost"
          className="mt-2"
          onClick={() => setRevealKey((k) => k + 1)}
        >
          Replay ⟳
        </Button>
      </div>

      {/* Sweep wipe */}
      <div>
        <p className="mb-3 font-mono text-caption uppercase tracking-[0.2em] text-text-muted">
          Sweep wipe · duration-slow
        </p>
        <div className="relative h-32 w-full overflow-hidden rounded-md border border-divider bg-surface">
          <motion.div
            initial={false}
            animate={{ x: sweeping ? "100%" : "-100%" }}
            transition={{
              duration: reduce ? 0 : sec(durations.slow),
              ease: easings.standard,
            }}
            className="absolute inset-y-0 left-0 w-full bg-accent"
          />
          <span className="absolute inset-0 flex items-center justify-center font-display text-body-md mix-blend-difference">
            Direction 02 signature
          </span>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="mt-2"
          onClick={() => setSweeping((v) => !v)}
        >
          Trigger sweep
        </Button>
      </div>
    </div>
  );
}
