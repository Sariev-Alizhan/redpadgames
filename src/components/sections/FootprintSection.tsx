"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { footprint } from "@/content/footprint";
import { sec, durations, easings } from "@/lib/motion";

/**
 * Operational footprint. Equirectangular map placed behind percentage-coord
 * pins (lat/lng → x/y), with a pulse animation on each. On mobile and reduced-
 * motion the map collapses to a clean vertical list — the brief is explicit
 * that the map is desktop polish, not load-bearing UX.
 */
export function FootprintSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="footprint"
      aria-label="Operational footprint"
      className="relative border-b border-divider bg-bg-elevated py-32 md:py-40"
    >
      <Container width="wide">
        <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
          07 · Footprint
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduce ? 0 : sec(durations.slow), ease: easings.expoOut }}
          className="mt-8 max-w-4xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,7vw,5.5rem)]"
        >
          Four hubs.{" "}
          <span className="font-serif italic font-normal text-accent">
            One studio.
          </span>
        </motion.h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* List view — primary on mobile, sidecar on desktop */}
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.1 },
              },
            }}
            className="lg:col-span-5"
          >
            {footprint.map((entity) => (
              <motion.li
                key={entity.city}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: reduce ? 0 : sec(durations.base),
                      ease: easings.expoOut,
                    },
                  },
                }}
                className="border-t border-divider/60 py-5 first:border-t-0"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-display text-heading-md tracking-tight text-text">
                    {entity.city}
                  </p>
                  <span className="font-mono text-caption uppercase tracking-[0.18em] text-text-faint">
                    {entity.countryCode}
                  </span>
                </div>
                <p className="mt-2 font-mono text-caption uppercase tracking-[0.18em] text-accent">
                  {entity.role}
                </p>
                <p className="mt-1 text-body-sm text-text-muted">{entity.entity}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Map placeholder — desktop only. Pins use lat/lng → percentage coords. */}
          <div
            aria-hidden
            className="hidden lg:col-span-7 lg:block"
          >
            <FootprintMap />
          </div>
        </div>
      </Container>
    </section>
  );
}

function FootprintMap() {
  // Equirectangular projection: lng (-180..180) → x (0..100), lat (90..-90) → y (0..100)
  const project = ([lat, lng]: [number, number]) => ({
    left: ((lng + 180) / 360) * 100,
    top: ((90 - lat) / 180) * 100,
  });

  return (
    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg border border-divider bg-bg/60">
      {/* Grid backdrop */}
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 100 50"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
            <path
              d="M 5 0 L 0 0 0 5"
              fill="none"
              stroke="var(--color-grid-line)"
              strokeWidth="0.15"
            />
          </pattern>
        </defs>
        <rect width="100" height="50" fill="url(#grid)" />
        {/* Equator + prime meridian */}
        <line x1="0" y1="25" x2="100" y2="25" stroke="var(--color-grid-line)" strokeWidth="0.2" />
        <line x1="50" y1="0" x2="50" y2="50" stroke="var(--color-grid-line)" strokeWidth="0.2" />
      </svg>

      {/* Pins */}
      {footprint.map((entity) => {
        const { left, top } = project(entity.coords);
        return (
          <div
            key={entity.city}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${left}%`, top: `${top}%` }}
          >
            <span className="relative block">
              <span
                className="absolute -inset-2 rounded-full bg-accent/30 animate-pulse-signal"
                aria-hidden
              />
              <span className="relative block size-2 rounded-full bg-accent shadow-glow" />
            </span>
            <span className="ml-3 mt-1 inline-block whitespace-nowrap font-mono text-caption uppercase tracking-[0.18em] text-text">
              {entity.city}
            </span>
          </div>
        );
      })}
    </div>
  );
}
