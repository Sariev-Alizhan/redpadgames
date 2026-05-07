"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { NumberCounter } from "@/components/ui/NumberCounter";
import { useSceneSetter } from "@/components/three/SceneController";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { studioStatementProgress } from "@/lib/heroProgress";
import { sec, durations, easings } from "@/lib/motion";

type Stat = {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  caption: string;
};

const STATS: ReadonlyArray<Stat> = [
  { value: 9, label: "Years shipping", caption: "Since 2017" },
  { value: 70, suffix: "+", label: "Specialists", caption: "And growing" },
  { value: 4, label: "Hubs worldwide", caption: "Zurich · Almaty · US · Cayman" },
  { value: 1, label: "Game live", caption: "Dustland on Steam" },
];

export function StudioStatementSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const setScene = useSceneSetter();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const reduce = useReducedMotion();

  React.useEffect(() => {
    const node = sectionRef.current;
    if (!node || !isDesktop) return;

    const trigger = ScrollTrigger.create({
      trigger: node,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onEnter: () => setScene({ current: "hero-globe", progress: 0 }),
      onEnterBack: () => setScene({ current: "hero-globe", progress: 0 }),
      onLeave: () => setScene({ current: "idle", progress: 1 }),
      onUpdate: (self) => {
        studioStatementProgress.current = self.progress;
      },
    });

    return () => {
      trigger.kill();
      studioStatementProgress.current = 0;
    };
  }, [isDesktop, setScene]);

  return (
    <section
      ref={sectionRef}
      id="studio-statement"
      aria-label="We are RedPad — studio statement"
      className="relative border-b border-divider py-24 md:py-32 lg:py-40"
    >
      <Container width="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left rail — section caption sits with the headline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: reduce ? 0 : sec(durations.slow),
              ease: easings.expoOut,
            }}
            className="lg:col-span-5"
          >
            <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
              02 / We are RedPad
            </p>

            <h2 className="mt-6 font-display font-black tracking-[-0.03em] text-text leading-[0.95] text-[clamp(2.25rem,5.5vw,4.5rem)]">
              Independent.{" "}
              <span className="font-sans italic font-bold text-accent">
                Uncompromising.
              </span>{" "}
              Built to ship.
            </h2>
          </motion.div>

          {/* Right rail — body sits next to the headline so eye doesn't track far */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: reduce ? 0 : sec(durations.slow),
              ease: easings.expoOut,
              delay: reduce ? 0 : 0.15,
            }}
            className="lg:col-span-7 lg:pt-10"
          >
            <p className="text-body-lg text-text-muted md:text-xl">
              For us, gamers are not clients — they&apos;re our community.
              Veterans of EVE Online, World of Warcraft, Metro Exodus,
              S.T.A.L.K.E.R., and Call of Duty: MW3 building one studio with
              one shipping rhythm.
            </p>
            <p className="mt-6 text-body-md text-text-muted">
              Founded 2017. Incorporated in Zurich, 2020. Four operational
              hubs across Europe, Central Asia, the US, and the Caribbean.
            </p>
          </motion.div>
        </div>

        {/* Stats row — calm fade, no per-word stagger */}
        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduce ? 0 : sec(durations.slow),
            ease: easings.expoOut,
            delay: reduce ? 0 : 0.3,
          }}
          className="mt-20 grid grid-cols-2 gap-x-6 gap-y-12 border-t border-divider/40 pt-16 md:grid-cols-4 md:gap-x-8"
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display font-black tracking-tight leading-none text-text text-[clamp(2.25rem,4.5vw,4rem)]">
                <NumberCounter
                  to={s.value}
                  decimals={s.decimals ?? 0}
                  suffix={s.suffix ?? ""}
                />
              </dd>
              <p className="mt-4 font-mono text-caption uppercase tracking-[0.18em] text-text">
                {s.label}
              </p>
              <p className="mt-1 font-mono text-caption uppercase tracking-[0.18em] text-text-faint">
                {s.caption}
              </p>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
