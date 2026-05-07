import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { MagneticButton, Reveal } from "@/components/effects";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build with us. RedPad Games is an independent multiplayer studio in Zurich, Almaty, Delaware, and Grand Cayman. Speculative applications welcome.",
};

const PILLARS = [
  {
    title: "Independent",
    body:
      "We don't optimize for the calmest path. We optimize for the worlds we'd want to play in ten years.",
  },
  {
    title: "Specific",
    body:
      "Veterans of EVE, WoW, Metro, S.T.A.L.K.E.R., CoD: MW3. We hire for craft, not buzzwords.",
  },
  {
    title: "Multi-hub",
    body:
      "Zurich (HQ), Almaty (dev), Delaware (US ops), Grand Cayman (marketplace). Remote-friendly within reasonable time-zone overlap.",
  },
  {
    title: "Shipping",
    body:
      "Dustland is live in Steam Early Access since 9 December 2024. We move at ship-velocity, not powerpoint-velocity.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Apply",
    body:
      "Email careers@redpad.games with your CV / portfolio and a short note on why this slate matches what you want to build. We read every message.",
  },
  {
    step: "02",
    title: "Intro call",
    body:
      "30-minute video call with the relevant lead. We talk about your past work and how you operate.",
  },
  {
    step: "03",
    title: "Craft test",
    body:
      "A short, paid task that mirrors the actual work — a slice of code, a level fragment, a design doc. Bounded scope, real feedback.",
  },
  {
    step: "04",
    title: "Final + offer",
    body:
      "Conversation with founders / department head. Offer + start date.",
  },
];

const BENEFITS = [
  "Remote-first within compatible time zones",
  "Hardware budget — pick your own gear",
  "Annual learning budget",
  "Generous PTO + flexible holidays",
  "Health insurance (entity-dependent)",
  "RPGC token equity for long-term hires",
];

export default function CareersPage() {
  return (
    <main className="relative bg-bg">
      {/* Hero */}
      <section className="relative isolate flex min-h-[70svh] flex-col justify-end overflow-hidden">
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
              Careers
            </p>
          </Reveal>
          <Reveal delayMs={120}>
            <h1 className="mt-6 max-w-5xl font-display font-black tracking-[-0.04em] text-text leading-[0.92] text-[clamp(3rem,11vw,11rem)]">
              Build <span className="text-accent">with us</span>.
            </h1>
          </Reveal>
          <Reveal delayMs={240}>
            <p className="mt-8 max-w-2xl text-body-lg text-text-muted md:text-xl">
              We don&apos;t have a public job-board open right now — but we
              hire continuously across engineering, level design, 3D art,
              narrative, and ops. Speculative applications are welcome.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Why pillars */}
      <section className="border-y border-divider py-24 md:py-32">
        <Container width="wide">
          <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
            Why RedPad
          </p>
          <Reveal>
            <h2 className="mt-6 max-w-3xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,6vw,4.5rem)]">
              Four reasons{" "}
              <span className="text-accent">people stay</span>.
            </h2>
          </Reveal>
          <ul className="mt-16 grid auto-rows-fr gap-6 md:grid-cols-2">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delayMs={i * 60}>
                <li className="h-full rounded-lg border border-divider bg-bg-elevated p-8 transition-colors hover:border-accent/40">
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

      {/* Process */}
      <section className="bg-bg-elevated py-24 md:py-32">
        <Container width="wide">
          <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
            How we hire
          </p>
          <Reveal>
            <h2 className="mt-6 max-w-3xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,6vw,4.5rem)]">
              Four steps,{" "}
              <span className="text-accent">no surprises</span>.
            </h2>
          </Reveal>
          <ol className="mt-16 grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step) => (
              <Reveal key={step.step}>
                <li className="h-full rounded-lg border border-divider bg-bg p-6">
                  <span className="font-mono text-caption uppercase tracking-[0.25em] text-accent">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-display text-heading-md tracking-tight text-text">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-body-sm text-text-muted">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-32">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
                Benefits
              </p>
              <Reveal>
                <h2 className="mt-6 font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,5.5vw,4.5rem)]">
                  Standard{" "}
                  <span className="text-accent">studio kit</span>.
                </h2>
              </Reveal>
            </div>
            <ul className="grid gap-3 lg:col-span-7 lg:pt-10">
              {BENEFITS.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-md border border-divider bg-bg-elevated px-5 py-4 text-body-md text-text-muted"
                >
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
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
              Don&apos;t see your{" "}
              <span className="text-accent">role</span>?
            </h2>
          </Reveal>
          <p className="mx-auto mt-6 max-w-xl text-body-lg text-text-muted">
            Email us anyway. We&apos;ve hired off speculative applications
            before. Tell us what you&apos;d build here.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:gap-6">
            <MagneticButton strength={8} className="w-full sm:w-auto">
              <ButtonLink
                href="mailto:careers@redpad.games"
                variant="primary"
                size="lg"
                external
                className="w-full sm:w-auto"
              >
                careers@redpad.games
              </ButtonLink>
            </MagneticButton>
            <MagneticButton strength={8} className="w-full sm:w-auto">
              <ButtonLink href="/about" variant="outline" size="lg" className="w-full sm:w-auto">
                About the studio
              </ButtonLink>
            </MagneticButton>
          </div>
        </Container>
      </section>
    </main>
  );
}
