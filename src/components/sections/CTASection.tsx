"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { MagneticButton } from "@/components/effects";
import { sec, durations, easings } from "@/lib/motion";

const STEAM_URL = "https://store.steampowered.com/app/1459630/Dustland/";

/**
 * Pre-footer CTA. Pairs the loudest action on the site (Play on Steam) with
 * the full social roster — community is the secondary action when the user
 * isn't ready to buy yet.
 */
export function CTASection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="cta"
      aria-label="Play Dustland or join the community"
      className="relative isolate overflow-hidden border-b border-divider bg-bg py-32 md:py-40"
    >
      {/* Backdrop accent — subtle red wash for emphasis */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(225, 20, 28, 0.18), transparent 70%)",
        }}
      />

      <Container width="wide" className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduce ? 0 : sec(durations.slow), ease: easings.expoOut }}
          className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted"
        >
          Two ways in
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: reduce ? 0 : sec(durations.cinematic),
            ease: easings.expoOut,
            delay: reduce ? 0 : 0.1,
          }}
          className="mx-auto mt-8 max-w-5xl font-display font-black tracking-[-0.04em] text-text leading-[0.95] text-[clamp(2.5rem,9vw,8.5rem)]"
        >
          Step into{" "}
          <span className="font-serif italic font-normal text-accent">
            the dust
          </span>
          .
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: reduce ? 0 : sec(durations.slow),
            ease: easings.expoOut,
            delay: reduce ? 0 : 0.4,
          }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton strength={28}>
            <ButtonLink
              href={STEAM_URL}
              variant="primary"
              size="lg"
              external
              className="text-base sm:text-body-lg"
            >
              Play on Steam
            </ButtonLink>
          </MagneticButton>
          <MagneticButton strength={28}>
            <ButtonLink href="/games/dustland" variant="outline" size="lg">
              Read the brief
            </ButtonLink>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: reduce ? 0 : sec(durations.slow),
            ease: easings.expoOut,
            delay: reduce ? 0 : 0.6,
          }}
          className="mt-16 flex flex-col items-center gap-6"
        >
          <p className="font-mono text-caption uppercase tracking-[0.3em] text-text-faint">
            or join the community
          </p>
          <SocialIcons variant="lg" className="justify-center" />
        </motion.div>
      </Container>
    </section>
  );
}
