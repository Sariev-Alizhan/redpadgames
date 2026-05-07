"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { MagneticButton } from "@/components/effects";
import { useSceneSetter } from "@/components/three/SceneController";
import { sec, durations, easings } from "@/lib/motion";

// Asset paths follow the brief; HeroSection falls back to the legacy still
// when the Higgsfield set isn't yet on disk so the section keeps rendering.
const VIDEO_SRC = "/hero/hero-loop.mp4";
const VIDEO_FALLBACK = "/dustland/key-loop.mp4";
const POSTER_SRC = "/hero/hero-bg.jpg";
const POSTER_FALLBACK = "/hero/sovereign-globe.png";

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
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [posterErrored, setPosterErrored] = React.useState(false);

  // Hero now owns a static cinematic background — the SharedCanvas stays idle
  // here so the video loop reads cleanly. Subsequent sections (StudioStatement,
  // DustlandSection) re-enter the 3D scene as before.
  React.useEffect(() => {
    setScene({ current: "idle", progress: 0 });
  }, [setScene]);

  // If the brief-named video 404s, fall back to the existing dustland loop.
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onError = () => {
      if (!v.src.endsWith(VIDEO_FALLBACK)) {
        v.src = VIDEO_FALLBACK;
        v.load();
        v.play().catch(() => {});
      }
    };
    v.addEventListener("error", onError);
    return () => v.removeEventListener("error", onError);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero — RedPad Games studio"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Desktop / tablet: video loop with poster fallback */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        poster={posterErrored ? POSTER_FALLBACK : POSTER_SRC}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden
        className="absolute inset-0 -z-20 hidden size-full object-cover md:block"
      />

      {/* Mobile: static image — saves battery, avoids large download on cellular */}
      <Image
        src={posterErrored ? POSTER_FALLBACK : POSTER_SRC}
        alt=""
        fill
        priority
        sizes="100vw"
        onError={() => setPosterErrored(true)}
        className="-z-20 object-cover object-center md:hidden"
      />

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

      {/* Content — bottom-aligned for cinematic framing */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-24 pt-32 md:px-12 md:pb-32 lg:px-20">
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
            <span className="font-serif italic font-normal text-accent">
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
          A 70-strong studio building multiplayer worlds others won&apos;t dare
          to ship. Dustland leads our slate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduce ? 0 : sec(durations.slow),
            ease: easings.expoOut,
            delay: reduce ? 0 : 0.9,
          }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <MagneticButton strength={20}>
            <ButtonLink
              href="/games/dustland"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Enter Dustland
            </ButtonLink>
          </MagneticButton>
          <MagneticButton strength={20}>
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
