"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { games, type Game } from "@/content/games";
import { sec, durations, easings } from "@/lib/motion";

/**
 * Two full-bleed game cards, stacked vertically. Each card opens to the
 * detail page. Cover images expected at /public/games/<slug>-cover.jpg —
 * brand fallback shows the typographic title block when the image 404s.
 */
export function GamesSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="games"
      aria-label="Games"
      className="relative border-b border-divider bg-bg py-28 md:py-32"
    >
      <Container width="wide">
        <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
          03 · Games
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduce ? 0 : sec(durations.slow), ease: easings.expoOut }}
          className="mt-8 max-w-4xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,7vw,5.5rem)]"
        >
          Two worlds.{" "}
          <span className="font-serif italic font-normal text-accent">
            Both at full risk.
          </span>
        </motion.h2>
      </Container>

      <div className="mt-20 flex flex-col gap-10 px-6 md:px-12 lg:px-20">
        {games.map((g, idx) => (
          <GameCard key={g.slug} game={g} reverse={idx % 2 === 1} reduce={!!reduce} />
        ))}
      </div>
    </section>
  );
}

function GameCard({
  game,
  reverse,
  reduce,
}: {
  game: Game;
  reverse: boolean;
  reduce: boolean;
}) {
  const [imageErrored, setImageErrored] = React.useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduce ? 0 : sec(durations.slow), ease: easings.expoOut }}
      className={
        "group relative grid gap-8 overflow-hidden rounded-lg border border-divider bg-bg-elevated " +
        "lg:grid-cols-2 lg:gap-0"
      }
    >
      {/* Visual side — full-bleed cover */}
      <div
        className={
          "relative aspect-video overflow-hidden bg-bg lg:aspect-auto lg:min-h-[28rem] " +
          (reverse ? "lg:order-2" : "lg:order-1")
        }
      >
        {imageErrored ? (
          <div className="flex h-full items-center justify-center px-8">
            <p className="font-display font-black tracking-tighter text-text-muted/30 text-[clamp(3rem,8vw,7rem)] leading-none">
              {game.title}
            </p>
          </div>
        ) : (
          <Image
            src={game.cover}
            alt={`${game.title} key art`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            onError={() => setImageErrored(true)}
            className="object-cover object-center transition-transform duration-cinematic ease-expo-out group-hover:scale-[1.03]"
          />
        )}
        {/* Cinematic vignette across the cover */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-bg-elevated/30 to-transparent lg:bg-gradient-to-r lg:from-bg-elevated lg:via-transparent lg:to-transparent"
        />
      </div>

      {/* Copy side */}
      <div
        className={
          "flex flex-col justify-between gap-8 p-8 md:p-12 " +
          (reverse ? "lg:order-1" : "lg:order-2")
        }
      >
        <div>
          <Tag
            variant="outline"
            className={game.status === "early-access" ? "text-accent" : ""}
          >
            {game.releaseLabel}
          </Tag>
          <h3 className="mt-6 font-display font-black tracking-tight text-text leading-none text-[clamp(2.5rem,5vw,4.5rem)]">
            {game.title}
          </h3>
          <p className="mt-4 font-serif italic text-text-muted text-[clamp(1.125rem,1.6vw,1.5rem)]">
            {game.tagline}
          </p>
          <p className="mt-6 max-w-xl text-body-md text-text-muted">
            {game.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {game.platforms.map((platform) => (
              <li key={platform}>
                <Tag variant="muted">{platform}</Tag>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={`/games/${game.slug}`}
          data-cursor="hover"
          className="inline-flex items-center gap-3 self-start font-mono text-caption uppercase tracking-[0.25em] text-text transition-colors hover:text-accent"
        >
          <span>Read the brief</span>
          <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </motion.article>
  );
}
