import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/effects";
import { games } from "@/content/games";

export const metadata: Metadata = {
  title: "Games",
  description:
    "RedPad Games' slate — Dustland (live in early access) and Wartide Worlds (in development).",
};

export default function GamesIndexPage() {
  return (
    <main className="relative bg-bg pt-32 md:pt-40">
      <Container width="wide">
        <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
          The Slate
        </p>
        <h1 className="mt-6 max-w-4xl font-display font-black tracking-[-0.04em] text-text leading-[0.95] text-[clamp(2.5rem,9vw,8rem)]">
          Two worlds.{" "}
          <span className="font-sans italic font-bold text-accent">
            Both at full risk
          </span>
          .
        </h1>
        <p className="mt-6 max-w-2xl text-body-lg text-text-muted">
          Dustland leads our slate — a multiplayer survival shooter live in
          early access on Steam. Wartide Worlds follows: a strategy / FPS hybrid
          targeting Q3 2026.
        </p>
      </Container>

      <div className="mt-20 flex flex-col gap-10 px-6 pb-32 md:px-12 lg:px-20">
        {games.map((game, i) => (
          <Reveal key={game.slug}>
            <Link
              href={`/games/${game.slug}`}
              data-cursor="hover"
              className={
                "group relative grid gap-8 overflow-hidden rounded-lg border border-divider bg-bg-elevated transition-colors hover:border-accent/40 lg:grid-cols-2 lg:gap-0"
              }
            >
              <div
                className={
                  "relative aspect-video overflow-hidden bg-bg lg:aspect-auto lg:min-h-[28rem] " +
                  (i % 2 === 1 ? "lg:order-2" : "lg:order-1")
                }
              >
                <Image
                  src={game.cover}
                  alt={`${game.title} key art`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-cinematic ease-expo-out group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-bg-elevated/30 to-transparent lg:bg-gradient-to-r lg:from-bg-elevated lg:via-transparent lg:to-transparent"
                />
              </div>

              <div
                className={
                  "flex flex-col justify-between gap-8 p-8 md:p-12 " +
                  (i % 2 === 1 ? "lg:order-1" : "lg:order-2")
                }
              >
                <div>
                  <Tag variant="outline" className={game.status === "early-access" ? "text-accent" : ""}>
                    {game.releaseLabel}
                  </Tag>
                  <h2 className="mt-6 font-display font-black tracking-tight text-text leading-none text-[clamp(2.5rem,5vw,4.5rem)]">
                    {game.title}
                  </h2>
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

                <span className="inline-flex items-center gap-3 self-start font-mono text-caption uppercase tracking-[0.25em] text-text transition-colors group-hover:text-accent">
                  <span>Read the brief</span>
                  <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
