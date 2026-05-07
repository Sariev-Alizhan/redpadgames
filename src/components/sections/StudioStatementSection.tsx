"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { NumberCounter } from "@/components/ui/NumberCounter";
import { SplitText } from "@/components/ui/SplitText";
import { useSceneSetter } from "@/components/three/SceneController";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { studioStatementProgress } from "@/lib/heroProgress";
import { sec, durations, easings } from "@/lib/motion";

const PULL_QUOTE = "For us, gamers are not clients. They are our friends — our community.";

const BODY =
  "Founded 2017. Three operational hubs, one studio. Crews include veterans of EVE Online, World of Warcraft, Metro 2033, S.T.A.L.K.E.R., and World of Tanks.";

type Stat = {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  caption: string;
};

const STATS: ReadonlyArray<Stat> = [
  { value: 9, label: "Years", caption: "Since 2017" },
  { value: 70, suffix: "+", label: "Specialists", caption: "And counting" },
  { value: 3, label: "Hubs", caption: "Zurich · Almaty · UAE" },
  { value: 1, label: "Game live", caption: "Dustland on Steam" },
];

export function StudioStatementSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const setScene = useSceneSetter();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const reduce = useReducedMotion();

  // Scene continuity: re-assert "hero-globe" on enter (so the camera keeps
  // dollying back through this section). Switch to "idle" when scrolling
  // forward past — nothing globe-shaped follows. Don't touch on leaveBack;
  // the hero above will reactivate.
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
      className="relative border-b border-divider py-32 md:py-40"
    >
      <Container width="wide">
        <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
          02 · We are RedPad
        </p>

        {/* Big editorial pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: reduce ? 0 : sec(durations.slow),
            ease: easings.expoOut,
          }}
          className="mt-8 max-w-4xl"
        >
          <p className="font-display text-display-sm tracking-tight md:text-display-md lg:text-display-lg">
            <span aria-hidden="true" className="text-accent">
              &ldquo;
            </span>
            <SplitText text={PULL_QUOTE} mode="word" stagger={50} />
            <span aria-hidden="true" className="text-accent">
              &rdquo;
            </span>
          </p>
        </motion.blockquote>

        {/* Studio claim */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: reduce ? 0 : sec(durations.slow),
            ease: easings.expoOut,
            delay: reduce ? 0 : 0.2,
          }}
          className="mt-12 max-w-2xl text-body-lg text-text-muted"
        >
          {BODY}
        </motion.p>

        {/* Stats row */}
        <motion.dl
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.1 },
            },
          }}
          className="mt-20 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4"
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
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
              className="border-l border-divider pl-6"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-display-sm tracking-tight md:text-display-md">
                <NumberCounter
                  to={s.value}
                  decimals={s.decimals ?? 0}
                  suffix={s.suffix ?? ""}
                />
              </dd>
              <p
                className="mt-3 font-mono text-caption uppercase tracking-[0.18em] text-text"
                aria-hidden="true"
              >
                {s.label}
              </p>
              <p className="mt-1 font-mono text-caption uppercase tracking-[0.18em] text-text-dim">
                {s.caption}
              </p>
            </motion.div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
