"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { MagneticButton } from "@/components/effects";
import { useSceneSetter } from "@/components/three/SceneController";
import { sec, durations, easings } from "@/lib/motion";
import { featuredArticle } from "@/content/news";

// Hero background uses the real Dustland page-bg key art (eclipse + character +
// ruins). User explicitly asked to drop the video loop and lead with the game's
// own art, so the same Image renders on every viewport with a kenburns drift.
const HERO_IMAGE = "/hero/hero-bg.jpg";

const MARQUEE_TOKENS = [
  "Zurich HQ",
  "Almaty Dev Hub",
  "Delaware US",
  "Grand Cayman",
  "70+ Specialists",
  "Est. 2017",
];

export function HeroSection() {
  const setScene = useSceneSetter();
  const reduce = useReducedMotion();
  const bgRef = React.useRef<HTMLDivElement>(null);

  // Hero now owns a static cinematic background — the SharedCanvas stays idle
  // here so the video loop reads cleanly. Subsequent sections (StudioStatement,
  // DustlandSection) re-enter the 3D scene as before.
  React.useEffect(() => {
    setScene({ current: "idle", progress: 0 });
  }, [setScene]);

  // Scroll parallax — desktop only, reduced-motion aware. Translates the
  // background up at 0.4× the page scroll for an inertial 'depth' feel.
  // requestAnimationFrame-batched so it stays smooth on slow CPUs.
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (reduce) return;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    let raf = 0;
    const tick = () => {
      const node = bgRef.current;
      if (!node) return;
      const offset = Math.min(window.scrollY, window.innerHeight) * 0.4;
      node.style.transform = `translate3d(0, ${offset}px, 0)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reduce]);

  return (
    <section
      id="hero"
      aria-label="Hero — RedPad Games studio"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Real Dustland key art behind the hero. Kenburns drift gives motion
          without the bandwidth cost of a video loop. Same on every viewport.
          Parent ref takes the parallax translate so kenburns animation on
          the inner Image isn't fighting two transform sources. */}
      <div ref={bgRef} className="absolute inset-0 -z-20 overflow-hidden will-change-transform">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center motion-safe:animate-kenburns"
        />
      </div>

      {/* Vignette + gradient stack */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-bg/40 via-bg/65 to-bg"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, var(--color-bg) 100%)",
        }}
      />

      {/* Content — bottom-aligned for cinematic framing.
          pb keeps the marquee strip clear (its row is ~52px tall). */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-32 pt-28 md:px-12 md:pb-40 md:pt-32 lg:px-20">
        {/* Live news pill — points at whichever article is featured in
            content/news.ts. Pulse + accent border = 'something happened today'. */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduce ? 0 : sec(durations.slow),
            ease: easings.expoOut,
          }}
          className="mb-6 self-start"
        >
          <Link
            href={`/news/${featuredArticle.slug}`}
            data-cursor="hover"
            className="group inline-flex items-center gap-3 rounded-full border border-accent/60 bg-bg/40 px-3 py-1.5 backdrop-blur transition-colors hover:border-accent hover:bg-accent/10"
          >
            <span aria-hidden className="size-1.5 rounded-full bg-accent animate-pulse-signal" />
            <span className="font-mono text-caption uppercase tracking-[0.25em] text-accent">
              New
            </span>
            <span className="hidden font-display text-body-sm tracking-tight text-text sm:inline">
              {featuredArticle.title}
            </span>
            <span className="font-display text-body-sm tracking-tight text-text sm:hidden">
              Latest news
            </span>
            <span aria-hidden className="font-mono text-caption text-text-muted transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </motion.div>

        <Tag variant="outline" className="mb-8 self-start">
          <span
            aria-hidden
            className="mr-2 inline-block size-1.5 rounded-full bg-accent animate-pulse-signal"
          />
          Independent Studio · Est. 2017
        </Tag>

        <h1 className="font-display font-black tracking-[-0.04em] text-text leading-[0.92] text-[clamp(2.75rem,11vw,12rem)]">
          <motion.span
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : sec(durations.cinematic),
              ease: easings.expoOut,
              delay: reduce ? 0 : 0.1,
            }}
            className="block"
          >
            Find your shadow
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : sec(durations.cinematic),
              ease: easings.expoOut,
              delay: reduce ? 0 : 0.35,
            }}
            className="block"
          >
            between{" "}
            <span className="text-accent">
              two suns
            </span>
            .
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduce ? 0 : sec(durations.slow),
            ease: easings.expoOut,
            delay: reduce ? 0 : 0.7,
          }}
          className="mt-8 max-w-xl text-body-lg text-text-muted md:text-xl"
        >
          A 70-strong independent studio building multiplayer worlds others
          won&apos;t dare to ship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduce ? 0 : sec(durations.slow),
            ease: easings.expoOut,
            delay: reduce ? 0 : 0.9,
          }}
          className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6"
        >
          <MagneticButton strength={8} className="w-full sm:w-auto">
            <ButtonLink
              href="/games/dustland"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Enter Dustland
            </ButtonLink>
          </MagneticButton>
          <MagneticButton strength={8} className="w-full sm:w-auto">
            <ButtonLink
              href="/about"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              The Studio
            </ButtonLink>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Footprint marquee, pinned to the section base */}
      <div className="absolute inset-x-0 bottom-0 z-10 overflow-hidden border-t border-divider/40 bg-bg/40 py-4 backdrop-blur">
        <div className="flex animate-marquee gap-12 whitespace-nowrap font-mono text-caption uppercase tracking-[0.3em] text-text-muted">
          {[...Array(2)].map((_, repeat) => (
            <span
              key={repeat}
              aria-hidden={repeat === 1}
              className="flex shrink-0 gap-12"
            >
              {MARQUEE_TOKENS.map((token) => (
                <span key={`${repeat}-${token}`} className="flex items-center gap-3">
                  <span className="size-1 rounded-full bg-accent" />
                  {token}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
