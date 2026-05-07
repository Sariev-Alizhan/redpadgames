"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { tierOnePartners, tierTwoPartners } from "@/content/partners";
import { sec, durations, easings } from "@/lib/motion";

/**
 * Two-row partner marquee. Tier 1 scrolls one direction, tier 2 the other.
 * Logos are typographic by default — when /public/partners/<slug>.svg lands,
 * swap the inner span for an <Image>. This avoids broken-image rendering when
 * the SVG asset hasn't been provisioned yet.
 */
export function PartnersMarqueeSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="partners"
      aria-label="Strategic partners"
      className="relative border-b border-divider bg-bg-elevated py-28 md:py-32"
    >
      <Container width="wide">
        <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
          06 / Partners
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduce ? 0 : sec(durations.slow), ease: easings.expoOut }}
          className="mt-8 max-w-4xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2rem,6vw,4.5rem)]"
        >
          Built with the people who built{" "}
          <span className="font-serif italic font-normal text-accent">the rails</span>.
        </motion.h2>
      </Container>

      <div className="mt-20 flex flex-col gap-6">
        <PartnerRow names={tierOnePartners.map((p) => p.name)} reverse={false} accent />
        <PartnerRow names={tierTwoPartners.map((p) => p.name)} reverse />
      </div>
    </section>
  );
}

function PartnerRow({
  names,
  reverse,
  accent,
}: {
  names: string[];
  reverse?: boolean;
  accent?: boolean;
}) {
  return (
    <Marquee reverse={reverse} pauseOnHover>
      {names.map((name) => (
        <span
          key={name}
          className={
            "shrink-0 font-display font-bold uppercase tracking-[0.18em] text-text-muted text-[clamp(1.75rem,3vw,2.75rem)] transition-colors hover:text-text " +
            (accent ? "" : "opacity-80")
          }
        >
          {name}
        </span>
      ))}
    </Marquee>
  );
}
