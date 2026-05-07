"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { NumberCounter } from "@/components/ui/NumberCounter";
import { dustlandTestResults } from "@/content/games";
import { sec, durations, easings } from "@/lib/motion";

type Result = {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  caption: string;
};

// Numbers RedPad has published. Server-load-test number is from the studio's
// own news post (2 Feb 2023). Internal closed-test metrics are clearly labelled
// as such — research pass 2 confirmed they aren't externally verifiable.
const RESULTS: ReadonlyArray<Result> = [
  {
    value: 40_000,
    suffix: "+",
    label: "Stress-test players",
    caption: "Public server-load test, 2023",
  },
  {
    value: dustlandTestResults.participants,
    label: "Closed-test participants",
    caption: "Internal data, 2024",
  },
  {
    value: Math.round(dustlandTestResults.retentionD1 * 100),
    suffix: "%",
    label: "D1 retention",
    caption: "Genre median ≈ 45% · internal",
  },
  {
    value: dustlandTestResults.cpa,
    decimals: 1,
    suffix: " $",
    label: "CPA",
    caption: "Per active player · internal",
  },
];

export function TestResultsSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="test-results"
      aria-label="Dustland public test — measurable outcomes"
      className="relative border-b border-divider bg-bg py-32 md:py-40"
    >
      <Container width="wide">
        <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
          05 / Public test results
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduce ? 0 : sec(durations.slow), ease: easings.expoOut }}
          className="mt-8 max-w-3xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,7vw,5.5rem)]"
        >
          Numbers that <span className="font-serif italic font-normal text-accent">don&apos;t lie</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: reduce ? 0 : sec(durations.slow),
            ease: easings.expoOut,
            delay: reduce ? 0 : 0.15,
          }}
          className="mt-6 max-w-2xl text-body-lg text-text-muted"
        >
          From the closed test that funded our next chapter — not vanity metrics,
          actual signal: who came back and what it cost to bring them.
        </motion.p>

        <motion.dl
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.1 },
            },
          }}
          className="mt-20 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {RESULTS.map((r) => (
            <motion.div
              key={r.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: reduce ? 0 : sec(durations.base), ease: easings.expoOut },
                },
              }}
              className="border-l border-divider pl-6"
            >
              <dt className="sr-only">{r.label}</dt>
              <dd className="font-display font-black tracking-tight leading-none text-text text-[clamp(2.5rem,5.5vw,5rem)]">
                <NumberCounter
                  to={r.value}
                  decimals={r.decimals ?? 0}
                  suffix={r.suffix ?? ""}
                />
              </dd>
              <p className="mt-4 font-mono text-caption uppercase tracking-[0.18em] text-text">
                {r.label}
              </p>
              <p className="mt-1 font-mono text-caption uppercase tracking-[0.18em] text-text-faint">
                {r.caption}
              </p>
            </motion.div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
