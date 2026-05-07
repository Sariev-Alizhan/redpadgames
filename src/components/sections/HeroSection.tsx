"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SplitText } from "@/components/ui/SplitText";
import { Tag } from "@/components/ui/Tag";
import { useSceneSetter } from "@/components/three/SceneController";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { heroProgress } from "@/lib/heroProgress";
import { sec, durations, easings } from "@/lib/motion";

const HEADLINE = "Do what others are afraid of.";
const SUBHEAD =
  "A 70-strong studio with HQ in Zurich, dev hub in Almaty, and cluster in the UAE. We build multiplayer worlds — Dustland leads our slate.";

export function HeroSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const setScene = useSceneSetter();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const reduce = useReducedMotion();

  // Scene state + scroll progress wiring.
  // Hero owns scene activation on enter; we DO NOT switch to "idle" on
  // forward leave — the next section (StudioStatementSection) keeps the
  // globe mounted and continues the camera dolly. We do switch to "idle"
  // when scrolling above the hero (leaveBack), since nothing's above.
  React.useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (!isDesktop) {
      setScene({ current: "idle", progress: 0 });
      heroProgress.current = 0;
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: node,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onEnter: () => setScene({ current: "hero-globe", progress: 0 }),
      onEnterBack: () => setScene({ current: "hero-globe", progress: 0 }),
      onLeaveBack: () => setScene({ current: "idle", progress: 0 }),
      onUpdate: (self) => {
        heroProgress.current = self.progress;
      },
    });

    return () => {
      trigger.kill();
      heroProgress.current = 0;
    };
  }, [isDesktop, setScene]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Hero — RedPad Games studio"
      className="relative isolate flex min-h-screen items-center overflow-hidden"
    >
      {/* Mobile / no-3D fallback: static Direction 02 hero still */}
      <div className="absolute inset-0 -z-10 lg:hidden">
        <Image
          src="/hero/sovereign-globe.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/40" />
      </div>

      <Container width="wide" className="relative z-10 py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Tag variant="outline" className="mb-8">
              <span
                className="mr-2 inline-block size-1.5 rounded-full bg-accent animate-pulse-signal"
                aria-hidden="true"
              />
              Independent studio · Est. 2017
            </Tag>

            <h1 className="font-display text-display-md tracking-tight md:text-display-lg lg:text-display-xl">
              <SplitText text={HEADLINE} mode="word" stagger={70} delayMs={100} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduce ? 0 : sec(durations.slow),
                ease: easings.expoOut,
                delay: reduce ? 0 : 0.7,
              }}
              className="mt-8 max-w-xl text-body-lg text-text-muted"
            >
              {SUBHEAD}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduce ? 0 : sec(durations.slow),
                ease: easings.expoOut,
                delay: reduce ? 0 : 0.95,
              }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <ButtonLink href="/games/dustland" variant="primary" size="lg">
                Explore Dustland
              </ButtonLink>
              <ButtonLink href="/press" variant="outline" size="lg">
                Partner with us
              </ButtonLink>
            </motion.div>

            {/* Operational footprint mono-row — parallel structure (location + role) */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: reduce ? 0 : sec(durations.slow),
                delay: reduce ? 0 : 1.2,
              }}
              className="mt-16 flex flex-wrap gap-x-10 gap-y-4 font-mono text-mono-sm text-text"
            >
              <li>Zurich HQ</li>
              <li>Almaty Dev</li>
              <li>UAE Cluster</li>
              <li>70+ specialists</li>
            </motion.ul>
          </div>

          <div className="hidden lg:col-span-5 lg:block" aria-hidden="true" />
        </div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduce ? 0 : sec(durations.slow), delay: reduce ? 0 : 1.5 }}
        className="pointer-events-none absolute inset-x-0 bottom-10 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-mono text-caption uppercase tracking-[0.3em] text-text-muted">
          Scroll
        </span>
        <motion.span
          aria-hidden="true"
          animate={reduce ? undefined : { y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-px bg-text-muted"
        />
      </motion.div>
    </section>
  );
}
