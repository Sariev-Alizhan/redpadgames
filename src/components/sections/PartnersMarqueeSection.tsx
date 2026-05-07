"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { partners, type Partner } from "@/content/partners";
import { sec, durations, easings } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Partners section — two-row marquee. Each tier scrolls a different direction.
 * Real brand SVGs/PNGs are rendered through next/image. Full-colour logos get
 * a desaturate-to-white CSS filter so the entire row reads with one visual
 * temperature on the dark site (Bungie / Larian style — sponsorship row in
 * uniform off-white at low opacity, full opacity on hover).
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
          <span className="text-accent">the rails</span>.
        </motion.h2>

        <p className="mt-6 max-w-2xl text-body-md text-text-muted">
          Cloud, GPU, distribution, payments, audits — the infrastructure
          behind every shipping decision the studio makes.
        </p>
      </Container>

      <div className="mt-16">
        <PartnerRow partners={partners} />
      </div>
    </section>
  );
}

function PartnerRow({
  partners,
}: {
  partners: Partner[];
}) {
  return (
    <Marquee pauseOnHover>
      {partners.map((p) => (
        <a
          key={p.name}
          href={p.url ?? "#"}
          target={p.url ? "_blank" : undefined}
          rel={p.url ? "noopener noreferrer" : undefined}
          aria-label={`${p.name} — ${p.role}`}
          data-cursor="hover"
          className="group flex h-16 shrink-0 items-center justify-center px-8 opacity-60 transition-opacity duration-300 hover:opacity-100 md:h-20 md:px-10"
        >
          <Image
            src={p.logo}
            alt={p.name}
            width={160}
            height={52}
            className={cn(
              "h-8 w-auto md:h-10",
              !p.monochromeReady &&
                "brightness-0 invert opacity-90 group-hover:opacity-100",
            )}
          />
        </a>
      ))}
    </Marquee>
  );
}
