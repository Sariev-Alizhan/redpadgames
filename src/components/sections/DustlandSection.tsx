"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { VideoLoop } from "@/components/ui/VideoLoop";
import { useSceneSetter } from "@/components/three/SceneController";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { dustlandProgress } from "@/lib/heroProgress";
import { sec, durations, easings } from "@/lib/motion";

const STEAM_URL = "https://store.steampowered.com/app/1459630/Dustland/";

const STATUS_PILLS = [
  "Looter shooter · Extraction",
  "PC · Steam",
  "Early Access · Dec 2024",
] as const;

type Pillar = {
  id: string;
  title: string;
  body: string;
  Icon: React.FC<{ className?: string }>;
};

const PILLARS: ReadonlyArray<Pillar> = [
  {
    id: "seasons",
    title: "Multi-season living world",
    body: "Ten chapters of story. Four factions vying for the map. Each season recomposes the world.",
    Icon: SeasonIcon,
  },
  {
    id: "extraction",
    title: "Extraction with weight",
    body: "Every mission is real risk. Customize on the fly. Survive — or lose what you carried.",
    Icon: ExtractionIcon,
  },
  {
    id: "horizon",
    title: "One world, ten-year horizon",
    body: "PC today. Consoles, mobile and VR ahead. Built to last a decade, not a launch quarter.",
    Icon: HorizonIcon,
  },
];

export function DustlandSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const setScene = useSceneSetter();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const reduce = useReducedMotion();

  // Scene continuity: own the dustland-inset scene while in view. On
  // forward leave switch to idle — the next section is non-3D (Partners
  // in 5f). Don't touch on leaveBack — studio-statement reactivates.
  React.useEffect(() => {
    const node = sectionRef.current;
    if (!node || !isDesktop) return;

    const trigger = ScrollTrigger.create({
      trigger: node,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onEnter: () => setScene({ current: "dustland-inset", progress: 0 }),
      onEnterBack: () => setScene({ current: "dustland-inset", progress: 0 }),
      onLeave: () => setScene({ current: "idle", progress: 1 }),
      onUpdate: (self) => {
        dustlandProgress.current = self.progress;
      },
    });

    return () => {
      trigger.kill();
      dustlandProgress.current = 0;
    };
  }, [isDesktop, setScene]);

  return (
    <section
      ref={sectionRef}
      id="dustland"
      data-mood="dustland"
      aria-label="Dustland — flagship game"
      className="relative isolate overflow-hidden"
      style={{
        // Section-scoped backdrop override: deeper black than the global bg.
        backgroundColor: "#04050a",
      }}
    >
      {/* Background video loop — full-bleed, behind everything */}
      <div className="absolute inset-0 -z-10">
        <VideoLoop
          src="/dustland/key-loop.mp4"
          poster="/dustland/poster.png"
          withControls
          ariaLabel="Dustland — atmospheric environment loop"
          className="absolute inset-0 h-full w-full"
        />
        {/* Static fallback layer for slow video load */}
        <Image
          src="/dustland/poster.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-50 pointer-events-none -z-10"
          priority={false}
        />
        {/* Content readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" aria-hidden="true" />
        {/* Red vignette edges — section mood */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(120, 12, 16, 0.35) 100%)",
          }}
        />
        {/* Film grain overlay */}
        <div className="dustland-grain absolute inset-0 pointer-events-none" aria-hidden="true" />
      </div>

      <Container width="wide" className="relative z-10 py-32 md:py-40">
        {/* Section caption + lockup */}
        <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
          03 · Games — Dustland
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: reduce ? 0 : sec(durations.slow),
            ease: easings.expoOut,
          }}
          className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <h2 className="font-display text-display-md tracking-tight md:text-display-lg lg:text-display-xl">
            Dustland
          </h2>

          <ul className="flex flex-wrap gap-2">
            {STATUS_PILLS.map((p) => (
              <li key={p}>
                <Tag variant="outline">{p}</Tag>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: reduce ? 0 : sec(durations.slow),
            ease: easings.expoOut,
            delay: reduce ? 0 : 0.15,
          }}
          className="mt-12 max-w-2xl text-body-lg text-text-muted"
        >
          Forty years after the science catastrophe, the survivors live underground in
          the unfinished Yanmei seed bank. Every drop into the dust is a contract — and
          a chance to lose what you found.
        </motion.p>

        {/* Three USP pillars */}
        <motion.dl
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: reduce ? 0 : 0.15, delayChildren: 0.2 },
            },
          }}
          className="mt-20 grid gap-10 md:grid-cols-3"
        >
          {PILLARS.map(({ id, title, body, Icon }) => (
            <motion.div
              key={id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: reduce ? 0 : sec(durations.base),
                    ease: easings.expoOut,
                  },
                },
              }}
              className="group rounded-lg border border-divider bg-bg/50 p-6 backdrop-blur-md transition-colors duration-base ease-standard hover:border-accent/40"
            >
              <Icon className="size-8 text-accent" />
              <dt className="mt-6 font-display text-heading-md tracking-tight text-text">
                {title}
              </dt>
              <dd className="mt-3 text-body-md text-text-muted">{body}</dd>
            </motion.div>
          ))}
        </motion.dl>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: reduce ? 0 : sec(durations.slow),
            ease: easings.expoOut,
            delay: reduce ? 0 : 0.4,
          }}
          className="mt-16 flex flex-wrap gap-3"
        >
          <ButtonLink href={STEAM_URL} variant="primary" size="lg" external>
            <span>Play on Steam</span>
            <ExternalIcon className="ml-2 size-4" />
          </ButtonLink>
          <ButtonLink href="/games/dustland" variant="outline" size="lg">
            Read the brief
          </ButtonLink>
        </motion.div>
      </Container>
    </section>
  );
}

/* ── Pillar icons (inline SVGs, brand-tinted, geometric) ────────────── */

function SeasonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="16" cy="16" r="9" />
      <circle cx="16" cy="7" r="1.5" fill="currentColor" />
      <circle cx="25" cy="16" r="1.5" fill="currentColor" />
      <circle cx="16" cy="25" r="1.5" fill="currentColor" />
      <circle cx="7" cy="16" r="1.5" fill="currentColor" />
      <path d="M16 11.5 L18 16 L16 20.5 L14 16 Z" fill="currentColor" />
    </svg>
  );
}

function ExtractionIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="10" width="20" height="16" rx="1.5" />
      <path d="M16 22 V6" />
      <path d="M11 11 L16 6 L21 11" />
    </svg>
  );
}

function HorizonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 22 L29 22" strokeDasharray="3 2" />
      <circle cx="9" cy="22" r="2" fill="currentColor" />
      <circle cx="16" cy="22" r="1.5" />
      <circle cx="23" cy="22" r="1.5" />
      <path d="M3 12 L29 12" strokeDasharray="1 3" opacity="0.4" />
    </svg>
  );
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 4h6v6" strokeLinecap="round" />
      <path d="M20 4 L10 14" strokeLinecap="round" />
      <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" strokeLinecap="round" />
    </svg>
  );
}
