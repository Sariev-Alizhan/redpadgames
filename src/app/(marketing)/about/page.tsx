import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { MagneticButton, Reveal } from "@/components/effects";
import { founders, team, teamCredits } from "@/content/team";
import { footprint } from "@/content/footprint";

export const metadata: Metadata = {
  title: "About",
  description:
    "RedPad Games — independent studio, Zurich HQ, founded 2017. We build worlds. Founders Vildan Fazylov and Yevgeniy Neverov, ~70 specialists across four hubs.",
  openGraph: { images: ["/games/dustland/cover.jpg"] },
};

const TIMELINE = [
  { year: "2017", title: "Studio originated", body: "Vildan Fazylov founds RedPad Games with the conviction that the next-generation multiplayer worlds wouldn't come from established AAA capitals." },
  { year: "2019", title: "Wartide Worlds Kickstarter", body: "First public announcement of Wartide Worlds — June 11, 2019." },
  { year: "2020", title: "Incorporated in Zurich", body: "Red Pad Games AG formally registered in Switzerland." },
  { year: "2021", title: "Crypto Expo Dubai — Platinum sponsor", body: "RPGC token wins 'Most Interesting Cryptocurrency' at CED 2021." },
  { year: "2023", title: "Dustland 40,000+ stress test", body: "First public server-load test draws over forty thousand concurrent players." },
  { year: "2024", title: "Dustland Early Access", body: "Live on Steam since 9 December 2024 — three factions, 64 km², 350+ items." },
  { year: "2026", title: "Tencent Cloud partnership", body: "Strategic cloud-infrastructure partnership signed in Dubai, May 7. APAC + MENA capacity for Dustland live ops." },
];

export default function AboutPage() {
  return (
    <main className="relative bg-bg">
      {/* Hero */}
      <section className="relative isolate flex min-h-[80svh] flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <Image
            src="/studio/workspace.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center motion-safe:animate-kenburns"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-bg/30 via-bg/65 to-bg"
        />
        <Container width="wide" className="relative z-10 pb-24 pt-32 md:pb-32 md:pt-40">
          <Reveal>
            <p className="font-mono text-caption uppercase tracking-[0.3em] text-text-faint">
              About RedPad Games
            </p>
          </Reveal>
          <Reveal delayMs={120}>
            <h1 className="mt-6 max-w-5xl font-display font-black tracking-[-0.04em] text-text leading-[0.92] text-[clamp(3rem,11vw,11rem)]">
              We build <span className="text-accent">worlds.</span>
            </h1>
          </Reveal>
          <Reveal delayMs={240}>
            <p className="mt-8 max-w-2xl text-body-lg text-text-muted md:text-xl">
              Independent studio. Zurich HQ. Almaty dev hub. ~70 specialists.
              Veterans of EVE Online, World of Warcraft, Metro Exodus,
              S.T.A.L.K.E.R., and Call of Duty: MW3. Building the multiplayer
              worlds we&apos;d want to play in ten years.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Mission split */}
      <section className="border-y border-divider py-24 md:py-32">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
                Mission
              </p>
              <Reveal>
                <h2 className="mt-6 font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,5.5vw,4.5rem)]">
                  The worlds others{" "}
                  <span className="text-accent">won&apos;t dare to ship</span>.
                </h2>
              </Reveal>
            </div>
            <div className="space-y-6 text-body-lg text-text-muted lg:col-span-7 lg:pt-10">
              <p>
                RedPad Games builds high-immersion multiplayer worlds —
                survival, strategy, and the in-between. We integrate complex
                high-load systems, ship them, and live on the live ops they
                produce.
              </p>
              <p>
                Backed by external investment and strategic infrastructure
                partnerships with AWS and Tencent Cloud, distribution through
                Steam, audited by Crowe and QuillAudits. We don&apos;t optimise
                for the calmest path. We optimise for ten-year horizons.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-bg-elevated py-24 md:py-32">
        <Container width="wide">
          <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
            History
          </p>
          <Reveal>
            <h2 className="mt-6 max-w-3xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,6vw,4.5rem)]">
              Nine years of{" "}
              <span className="text-accent">shipping decisions</span>.
            </h2>
          </Reveal>
          <ol className="mt-16 space-y-8 md:space-y-10">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year} delayMs={i * 60}>
                <li className="grid gap-4 border-l-2 border-divider pl-6 md:grid-cols-12 md:gap-8 md:border-l-0 md:border-t md:pl-0 md:pt-8">
                  <div className="md:col-span-3">
                    <p className="font-display font-black text-text text-[clamp(2rem,4vw,3.5rem)] leading-none tabular-nums">
                      {item.year}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="font-display text-heading-md tracking-tight text-text">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-body-md text-text-muted">
                      {item.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Founders */}
      <section className="py-24 md:py-32">
        <Container width="wide">
          <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
            Leadership
          </p>
          <Reveal>
            <h2 className="mt-6 max-w-3xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,6vw,4.5rem)]">
              The founders.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
            {founders.map((person) => (
              <Reveal key={person.name}>
                <div className="group relative overflow-hidden rounded-lg border border-divider bg-bg-elevated transition-colors hover:border-accent/40">
                  {person.portrait ? (
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg">
                      <Image
                        src={person.portrait}
                        alt={person.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover object-top transition-transform duration-cinematic ease-expo-out group-hover:scale-[1.04]"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-bg-elevated/40 to-transparent"
                      />
                    </div>
                  ) : null}
                  <div className="p-8 md:p-10">
                    <span className="font-mono text-caption uppercase tracking-[0.25em] text-accent">
                      Founder
                    </span>
                    <p className="mt-6 font-display font-black tracking-tight text-text leading-tight text-[clamp(1.75rem,3.5vw,2.75rem)]">
                      {person.name}
                    </p>
                    <p className="mt-3 text-body-md text-text-muted">{person.role}</p>
                    {person.name === "Vildan Fazylov" ? (
                      <p className="mt-4 max-w-md text-body-md text-text-muted">
                        Programming engineer with credits on AAA titles
                        including EVE Online. Conceived Wartide Worlds in 2019,
                        leads RedPad&apos;s AAA-MMO ambitions including Dustland.
                      </p>
                    ) : (
                      <p className="mt-4 max-w-md text-body-md text-text-muted">
                        10+ years across IT and marketing — account management,
                        project management, cross-industry product roles. Joined
                        Vildan full-time in 2019.
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Team credits row */}
      <section className="border-y border-divider bg-bg-elevated py-24 md:py-32">
        <Container width="wide">
          <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
            The team
          </p>
          <Reveal>
            <h2 className="mt-6 max-w-3xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,6vw,4.5rem)]">
              {team.length + founders.length} specialists,{" "}
              <span className="text-accent">one studio</span>.
            </h2>
          </Reveal>
          <p className="mt-6 max-w-2xl text-body-lg text-text-muted">
            Engineering, level design, 3D art, narrative, ops, marketing, web3.
            Four hubs. One shipping rhythm.
          </p>
          <div className="mt-12 border-t border-divider/60 pt-10">
            <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
              Members have shipped on
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-10 gap-y-3">
              {teamCredits.map((credit) => (
                <li
                  key={credit}
                  className="font-display text-heading-sm tracking-tight text-text-muted"
                >
                  {credit}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Hubs */}
      <section className="py-24 md:py-32">
        <Container width="wide">
          <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
            Footprint
          </p>
          <Reveal>
            <h2 className="mt-6 max-w-3xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,6vw,4.5rem)]">
              Four entities.{" "}
              <span className="text-accent">One studio</span>.
            </h2>
          </Reveal>
          <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {footprint.map((entity) => (
              <Reveal key={entity.city}>
                <li className="h-full rounded-lg border border-divider bg-bg-elevated p-6 transition-colors hover:border-accent/40">
                  <div className="flex items-center gap-2 font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
                    <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                    {entity.countryCode}
                  </div>
                  <p className="mt-4 font-display text-heading-md tracking-tight text-text">
                    {entity.city}
                  </p>
                  <p className="mt-2 font-mono text-caption uppercase tracking-[0.18em] text-accent">
                    {entity.role}
                  </p>
                  <p className="mt-2 text-body-sm text-text-muted">{entity.entity}</p>
                </li>
              </Reveal>
            ))}
          </ul>
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
          <p className="mx-auto mt-6 max-w-xl text-body-lg text-text-muted">
            Dustland is live in Steam Early Access. Wartide Worlds is in
            development. Press, partners, and players welcome.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:gap-6">
            <MagneticButton strength={8} className="w-full sm:w-auto">
              <ButtonLink href="/games/dustland" variant="primary" size="lg" className="w-full sm:w-auto">
                Enter Dustland
              </ButtonLink>
            </MagneticButton>
            <MagneticButton strength={8} className="w-full sm:w-auto">
              <Link
                href="/contacts"
                className="inline-flex h-12 items-center justify-center rounded-md border border-divider px-6 font-display text-body-lg tracking-tight text-text transition-colors hover:border-accent hover:text-accent"
              >
                Contact us
              </Link>
            </MagneticButton>
          </div>
        </Container>
      </section>
    </main>
  );
}
