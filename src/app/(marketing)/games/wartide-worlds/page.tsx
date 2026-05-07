import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { ButtonLink } from "@/components/ui/Button";
import { MagneticButton, Reveal } from "@/components/effects";
import { games } from "@/content/games";

const wartide = games.find((g) => g.slug === "wartide-worlds")!;

const PILLARS = [
  {
    title: "Strategic command",
    body:
      "Take the bird's-eye view, draw the line, allocate the units. The map is the chess piece.",
  },
  {
    title: "First-person command",
    body:
      "Drop into any unit on the field, fight the engagement yourself. Every soldier is a potential POV.",
  },
  {
    title: "Persistent campaigns",
    body:
      "Wars don't reset. Decisions cascade across map state, faction reputation, and unit morale.",
  },
];

const KICKSTARTER_HISTORY =
  "Wartide Worlds was first announced via Kickstarter in June 2019. The current iteration is a deeper cross-genre rebuild from the ground up.";

export const metadata: Metadata = {
  title: "Wartide Worlds",
  description:
    "A cross-genre product letting players seamlessly switch between strategic map control and first-person unit command. In development at RedPad Games.",
  openGraph: { images: ["/games/wartide-worlds/cover.jpg"] },
};

export default function WartidePage() {
  return (
    <main className="relative bg-bg">
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <Image
            src="/games/wartide-worlds/cover.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center motion-safe:animate-kenburns"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-bg/40 via-bg/65 to-bg"
        />
        <Container width="wide" className="relative z-10 pb-24 pt-32 md:pb-32 md:pt-40">
          <Reveal>
            <Tag variant="outline" className="self-start">
              <span aria-hidden className="mr-2 inline-block size-1.5 rounded-full bg-accent animate-pulse-signal" />
              {wartide.releaseLabel}
            </Tag>
          </Reveal>
          <Reveal delayMs={120}>
            <h1 className="mt-8 font-display font-black tracking-[-0.04em] text-text leading-[0.9] text-[clamp(2.5rem,12vw,12rem)]">
              WARTIDE
              <br />
              <span className="text-text-muted">WORLDS</span>
            </h1>
          </Reveal>
          <Reveal delayMs={240}>
            <p className="mt-6 max-w-2xl font-serif italic text-text-muted text-[clamp(1.25rem,2.5vw,2rem)]">
              {wartide.tagline}
            </p>
          </Reveal>
          <Reveal delayMs={360}>
            <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
              <MagneticButton strength={8} className="w-full sm:w-auto">
                <ButtonLink href="/news" variant="primary" size="lg" className="w-full sm:w-auto">
                  Follow updates
                </ButtonLink>
              </MagneticButton>
              <MagneticButton strength={8} className="w-full sm:w-auto">
                <ButtonLink href="/about" variant="outline" size="lg" className="w-full sm:w-auto">
                  About the studio
                </ButtonLink>
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
                Cross-genre
              </p>
              <Reveal>
                <h2 className="mt-6 font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,5.5vw,4.5rem)]">
                  Strategy{" "}
                  <span className="font-sans italic font-bold text-accent">
                    and
                  </span>{" "}
                  shooter — without compromise.
                </h2>
              </Reveal>
            </div>
            <div className="space-y-6 text-body-lg text-text-muted lg:col-span-7 lg:pt-10">
              <p>{wartide.description}</p>
              <p>{KICKSTARTER_HISTORY}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="bg-bg-elevated py-24 md:py-32">
        <Container width="wide">
          <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
            Three pillars
          </p>
          <Reveal>
            <h2 className="mt-6 max-w-3xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,6vw,4.5rem)]">
              The map and the{" "}
              <span className="font-sans italic font-bold text-accent">
                soldier
              </span>{" "}
              in one game.
            </h2>
          </Reveal>
          <ul className="mt-16 grid auto-rows-fr gap-6 md:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delayMs={i * 80}>
                <li className="h-full rounded-lg border border-divider bg-bg p-8 transition-colors hover:border-accent/40">
                  <span className="font-mono text-caption uppercase tracking-[0.25em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-heading-md tracking-tight text-text">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-body-md text-text-muted">{pillar.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Concept gallery */}
      <section className="py-24 md:py-32">
        <Container width="wide">
          <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
            Concept art
          </p>
          <Reveal>
            <h2 className="mt-6 max-w-3xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,6vw,4.5rem)]">
              Frames from{" "}
              <span className="font-sans italic font-bold text-accent">pre-production</span>.
            </h2>
          </Reveal>
        </Container>

        <div className="mt-16 px-6 md:px-12 lg:px-20">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-divider">
              <Image
                src="/games/wartide-worlds/cover.jpg"
                alt="Wartide Worlds concept art — shaman"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-cinematic ease-expo-out hover:scale-[1.03]"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-divider">
              <Image
                src="/games/wartide-worlds/concept-1.png"
                alt="Wartide Worlds concept art — bear vs fighters"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-cinematic ease-expo-out hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden border-t border-divider py-24 md:py-32">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(225, 29, 46, 0.16), transparent 70%)",
          }}
        />
        <Container width="wide" className="text-center">
          <Reveal>
            <h2 className="mx-auto max-w-4xl font-display font-black tracking-[-0.04em] text-text leading-[0.95] text-[clamp(2.5rem,8vw,6rem)]">
              War always has{" "}
              <span className="font-sans italic font-bold text-accent">a reason</span>.
            </h2>
          </Reveal>
          <p className="mx-auto mt-6 max-w-xl text-body-lg text-text-muted">
            We&apos;ll be sharing more in the run-up to launch. Subscribe via the
            studio newsletter or follow updates on Twitter and Discord.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:gap-6">
            <MagneticButton strength={8} className="w-full sm:w-auto">
              <ButtonLink href="/news" variant="primary" size="lg" className="w-full sm:w-auto">
                Read the news
              </ButtonLink>
            </MagneticButton>
            <MagneticButton strength={8} className="w-full sm:w-auto">
              <ButtonLink href="/about" variant="outline" size="lg" className="w-full sm:w-auto">
                The studio
              </ButtonLink>
            </MagneticButton>
          </div>
        </Container>
      </section>
    </main>
  );
}
