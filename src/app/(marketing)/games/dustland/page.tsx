import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { ButtonLink } from "@/components/ui/Button";
import { MagneticButton, Reveal, TrailerModal } from "@/components/effects";
import { games, dustlandTestResults, dustlandRoadmap } from "@/content/games";
import { VideoGameJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

const dustland = games.find((g) => g.slug === "dustland")!;

const STEAM_URL = "https://store.steampowered.com/app/1459630/Dustland/";
const BETA_URL = "https://dustlandbeta.redpad.games/";
const TRAILER_YOUTUBE_ID = "RafZ1RX3xQ4";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://redpad-website.vercel.app");

// Source-of-truth: store.steampowered.com/app/1459630/ + redpad.games/games/dustland.
// Numbers and platform claims are taken directly from the Steam listing.
const FEATURES = [
  {
    title: "Three factions, seasonal goals",
    body:
      "Three factions vie for control. Each season the objectives rotate; the map state inherits last season's outcome.",
  },
  {
    title: "5 weapon types · custom assembly",
    body:
      "Five weapon classes with a unique part-by-part assembly system — pick the receiver, attach the rest, tune for the fight.",
  },
  {
    title: "50+ missions · 350+ items",
    body:
      "Missions rotate types — extraction, escort, hold, scavenge — across 350+ findable items. Carry it out or die with it.",
  },
  {
    title: "Sandstorm map events",
    body:
      "Dynamic sandstorms reshape the playable area in real time. Routes and sightlines you trusted last raid are gone.",
  },
  {
    title: "64 km² · 100+ locations",
    body:
      "A 64 square-kilometre wasteland with over a hundred unique authored locations — settlements, wrecks, depots, hideouts.",
  },
  {
    title: "Squad up · Easy Anti-Cheat",
    body:
      "Voice and text squad chat. Easy Anti-Cheat across all live servers. Mature content, English and Russian on launch.",
  },
];

const PLATFORMS = [
  "PC · Steam (live)",
  "PlayStation (planned)",
  "Xbox (planned)",
  "Mobile (planned)",
];

export const metadata: Metadata = {
  title: "Dustland",
  description:
    "An immersive multiplayer survival shooter set in a layered post-apocalyptic world. Live in early access on Steam.",
  openGraph: { images: ["/games/dustland/cover.jpg"] },
};

export default function DustlandPage() {
  return (
    <main className="relative bg-bg">
      <VideoGameJsonLd
        game={dustland}
        siteUrl={SITE_URL}
        trailerUrl={`https://www.youtube.com/embed/${TRAILER_YOUTUBE_ID}`}
        // Snapshot from Steam app 1459630 ('Mixed', 69% positive across
        // 101+ reviews ≈ 3.45/5). Refresh when reviewing the page or
        // post-launch QA pass.
        rating={{ value: 3.45, count: 101 }}
      />
      <BreadcrumbJsonLd
        siteUrl={SITE_URL}
        items={[
          { name: "Home", url: "/" },
          { name: "Games", url: "/games" },
          { name: "Dustland", url: "/games/dustland" },
        ]}
      />
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <Image
            src="/games/dustland/cover.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center motion-safe:animate-kenburns"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-bg/30 via-bg/60 to-bg"
        />
        <Container width="wide" className="relative z-10 pb-24 pt-32 md:pb-32 md:pt-40">
          <Reveal>
            <Tag variant="outline" className="self-start">
              <span aria-hidden className="mr-2 inline-block size-1.5 rounded-full bg-accent animate-pulse-signal" />
              {dustland.releaseLabel}
            </Tag>
          </Reveal>
          <Reveal delayMs={120}>
            <h1 className="mt-8 font-display font-black tracking-[-0.04em] text-text leading-[0.9] text-[clamp(3.5rem,16vw,18rem)]">
              DUSTLAND
            </h1>
          </Reveal>
          <Reveal delayMs={240}>
            <p className="mt-6 max-w-2xl text-text-muted text-[clamp(1.25rem,2.5vw,2rem)]">
              {dustland.tagline}
            </p>
          </Reveal>
          <Reveal delayMs={360}>
            <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
              <MagneticButton strength={8} className="w-full sm:w-auto">
                <ButtonLink href={STEAM_URL} variant="primary" size="lg" external className="w-full sm:w-auto">
                  Play on Steam
                </ButtonLink>
              </MagneticButton>
              <MagneticButton strength={8} className="w-full sm:w-auto">
                <TrailerModal
                  youtubeId={TRAILER_YOUTUBE_ID}
                  variant="outline"
                  className="w-full sm:w-auto"
                />
              </MagneticButton>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Concept */}
      <section className="border-y border-divider py-24 md:py-32">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
                Concept
              </p>
              <Reveal>
                <h2 className="mt-6 font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,5.5vw,4.5rem)]">
                  A world that{" "}
                  <span className="text-accent">remembers</span>{" "}
                  every choice you make.
                </h2>
              </Reveal>
            </div>
            <div className="space-y-6 text-body-lg text-text-muted lg:col-span-7 lg:pt-10">
              <p>{dustland.description}</p>
              <p>
                Forty years after the collapse, the surface is a contract. Drop in
                with a loadout, leave with what you can carry — or don&apos;t leave at all.
                The map is alive: temperature shifts, faction control, weather, routes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="bg-bg-elevated py-24 md:py-32">
        <Container width="wide">
          <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
            What makes Dustland Dustland
          </p>
          <Reveal>
            <h2 className="mt-6 max-w-3xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,6vw,4.5rem)]">
              Six pillars,{" "}
              <span className="text-accent">
                one feedback loop
              </span>.
            </h2>
          </Reveal>
          <ul className="mt-16 grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delayMs={i * 60}>
                <li className="h-full rounded-lg border border-divider bg-bg p-8 transition-colors hover:border-accent/40">
                  <span className="font-mono text-caption uppercase tracking-[0.25em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-heading-md tracking-tight text-text">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-body-md text-text-muted">{feature.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Gallery — horizontal-scroll on mobile, grid on desktop */}
      <section className="py-24 md:py-32">
        <Container width="wide">
          <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
            Gameplay
          </p>
          <Reveal>
            <h2 className="mt-6 max-w-3xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,6vw,4.5rem)]">
              Eighteen frames from{" "}
              <span className="text-accent">live build</span>.
            </h2>
          </Reveal>
        </Container>

        <div className="mt-16 snap-x snap-mandatory overflow-x-auto pb-8 [scrollbar-width:thin]">
          <ul className="flex gap-4 px-6 md:px-12 lg:px-20">
            {(dustland.gallery ?? []).map((src, i) => (
              <li
                key={src}
                // snap-start clean-pages each screenshot when the user
                // flicks/scrolls horizontally on touch / trackpad.
                className="relative aspect-video w-[80vw] shrink-0 snap-start overflow-hidden rounded-lg border border-divider sm:w-[60vw] md:w-[44vw] lg:w-[32vw]"
              >
                <Image
                  src={src}
                  alt={`Dustland gameplay screenshot ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 80vw, 32vw"
                  // Eager-load only the first two frames; the rest lazy-load
                  // so 18 screenshots don't all hit the network on first paint.
                  loading={i < 2 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-cinematic ease-expo-out hover:scale-[1.03]"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Roadmap */}
      <section className="border-y border-divider py-24 md:py-32">
        <Container width="wide">
          <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
            Roadmap
          </p>
          <Reveal>
            <h2 className="mt-6 max-w-3xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,6vw,4.5rem)]">
              A ten-year{" "}
              <span className="text-accent">horizon</span>.
            </h2>
          </Reveal>
          <ol className="mt-16 grid auto-rows-fr gap-6 lg:grid-cols-3">
            {dustlandRoadmap.map((step, i) => (
              <Reveal key={step.period} delayMs={i * 80}>
                <li className="h-full rounded-lg border border-divider bg-bg-elevated p-8">
                  <span className="font-mono text-caption uppercase tracking-[0.25em] text-accent">
                    {String(i + 1).padStart(2, "0")} / {step.period}
                  </span>
                  <h3 className="mt-4 font-display text-heading-md tracking-tight text-text">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-body-md text-text-muted">{step.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Public test footnote */}
      <section className="py-24 md:py-32">
        <Container width="wide">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
                Public stress test, 2023
              </p>
              <p className="mt-4 font-display font-black tracking-tight text-text leading-none text-[clamp(2.5rem,5vw,4.5rem)]">
                40,000<span className="text-accent">+</span>
              </p>
              <p className="mt-3 text-body-md text-text-muted">
                Concurrent participants in the studio&apos;s first publicly
                announced Dustland load test.
              </p>
            </div>
            <div>
              <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
                Closed test, internal
              </p>
              <p className="mt-4 font-display font-black tracking-tight text-text leading-none text-[clamp(2.5rem,5vw,4.5rem)]">
                {dustlandTestResults.participants.toLocaleString("en-US")}
              </p>
              <p className="mt-3 text-body-md text-text-muted">
                Players in the next-stage closed test that underwrote the
                season-three roadmap.
              </p>
            </div>
            <div>
              <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
                Platforms
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {PLATFORMS.map((p) => (
                  <li key={p}>
                    <Tag variant="muted">{p}</Tag>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-body-md text-text-muted">
                Live on Steam today. Console, mobile, and VR planned across
                the season-three to season-five window.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden border-t border-divider py-24 md:py-32">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(225, 29, 46, 0.18), transparent 70%)",
          }}
        />
        <Container width="wide" className="text-center">
          <Reveal>
            <h2 className="mx-auto max-w-4xl font-display font-black tracking-[-0.04em] text-text leading-[0.95] text-[clamp(2.5rem,8vw,7rem)]">
              Step into{" "}
              <span className="text-accent">the dust</span>.
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:gap-6">
            <MagneticButton strength={8} className="w-full sm:w-auto">
              <ButtonLink href={STEAM_URL} variant="primary" size="lg" external className="w-full sm:w-auto">
                Play on Steam
              </ButtonLink>
            </MagneticButton>
            <MagneticButton strength={8} className="w-full sm:w-auto">
              <ButtonLink href={BETA_URL} variant="outline" size="lg" external className="w-full sm:w-auto">
                Beta access
              </ButtonLink>
            </MagneticButton>
          </div>
        </Container>
      </section>
    </main>
  );
}
