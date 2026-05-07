import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { MagneticButton, Reveal } from "@/components/effects";

export const metadata: Metadata = {
  title: "RPGC Token",
  description:
    "RPGC — RedPad Games Coin. Token for gamers from gamers. Ethereum-based, awarded Most Interesting Cryptocurrency at Crypto Expo Dubai 2021.",
  openGraph: { images: ["/token/crystal.jpg"] },
};

const UTILITY = [
  {
    title: "In-game currency",
    body: "Use RPGC across RedPad titles for items, cosmetics, and access to season content.",
  },
  {
    title: "Player marketplace",
    body: "Trade game assets peer-to-peer with full ownership — backed by smart-contract escrow.",
  },
  {
    title: "Cross-game value",
    body: "Carry value between RedPad ecosystem games. One wallet, one slate.",
  },
  {
    title: "Audited & secure",
    body: "Smart-contract audits by QuillAudits. Crowe handles fiat-side advisory.",
  },
];

const FACTS = [
  ["Symbol", "RPGC"],
  ["Name", "RedPad Games Coin"],
  ["Tagline", "Token for gamers from gamers."],
  ["Chain", "Ethereum (ERC-20, decentralized, open-source)"],
  ["Award", "Most Interesting Cryptocurrency — Crypto Expo Dubai 2021"],
  ["Studio", "RedPad Games AG (Zurich, Switzerland)"],
  ["Audit partner", "QuillAudits"],
  ["Advisory", "Crowe"],
];

export default function TokenPage() {
  return (
    <main className="relative bg-bg">
      {/* Hero */}
      <section className="relative isolate flex min-h-[80svh] flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <Image
            src="/token/crystal.jpg"
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
              RPGC · RedPad Games Coin
            </p>
          </Reveal>
          <Reveal delayMs={120}>
            <h1 className="mt-6 max-w-5xl font-display font-black tracking-[-0.04em] text-text leading-[0.92] text-[clamp(3rem,12vw,12rem)]">
              <span className="text-accent">RPGC</span>
            </h1>
          </Reveal>
          <Reveal delayMs={240}>
            <p className="mt-8 max-w-2xl text-body-lg text-text-muted md:text-xl">
              The economic layer of the RedPad ecosystem. Token for gamers
              from gamers. Ethereum-based. Awarded &quot;Most Interesting
              Cryptocurrency&quot; at Crypto Expo Dubai 2021.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* What is RPGC */}
      <section className="border-y border-divider py-24 md:py-32">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
                What it is
              </p>
              <Reveal>
                <h2 className="mt-6 font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,5.5vw,4.5rem)]">
                  An economy{" "}
                  <span className="text-accent">players own</span>.
                </h2>
              </Reveal>
            </div>
            <div className="space-y-6 text-body-lg text-text-muted lg:col-span-7 lg:pt-10">
              <p>
                RPGC is the token at the center of the RedPad ecosystem. It
                pays for items in Dustland, settles the player marketplace,
                and travels between ecosystem games. Smart-contract audited
                by QuillAudits, decentralized, open-source.
              </p>
              <p>
                The studio launched the token publicly at Crypto Expo Dubai
                2021 — RedPad was a Platinum sponsor and RPGC took home
                &quot;Most Interesting Cryptocurrency&quot;.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Utility */}
      <section className="bg-bg-elevated py-24 md:py-32">
        <Container width="wide">
          <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
            Utility
          </p>
          <Reveal>
            <h2 className="mt-6 max-w-3xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,6vw,4.5rem)]">
              Four practical uses,{" "}
              <span className="text-accent">no abstractions</span>.
            </h2>
          </Reveal>
          <ul className="mt-16 grid auto-rows-fr gap-6 md:grid-cols-2">
            {UTILITY.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 80}>
                <li className="h-full rounded-lg border border-divider bg-bg p-8 transition-colors hover:border-accent/40">
                  <span className="font-mono text-caption uppercase tracking-[0.25em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-heading-md tracking-tight text-text">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-body-md text-text-muted">{item.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Fact sheet */}
      <section className="py-24 md:py-32">
        <Container width="wide">
          <div className="rounded-lg border border-divider bg-bg-elevated p-8 md:p-12">
            <p className="font-mono text-caption uppercase tracking-[0.25em] text-accent">
              Token fact sheet
            </p>
            <dl className="mt-6 divide-y divide-divider/40">
              {FACTS.map(([k, v]) => (
                <div
                  key={k}
                  className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <dt className="font-mono text-caption uppercase tracking-[0.18em] text-text-faint">
                    {k}
                  </dt>
                  <dd className="text-body-md text-text">{v}</dd>
                </div>
              ))}
            </dl>
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
            <h2 className="mx-auto max-w-4xl font-display font-black tracking-[-0.04em] text-text leading-[0.95] text-[clamp(2.5rem,8vw,6rem)]">
              Want the{" "}
              <span className="text-accent">deep dive</span>?
            </h2>
          </Reveal>
          <p className="mx-auto mt-6 max-w-xl text-body-lg text-text-muted">
            The whitepaper is in revision for the 2026 release. In the meantime,
            our news feed and community channels carry the live updates.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:gap-6">
            <MagneticButton strength={8} className="w-full sm:w-auto">
              <ButtonLink
                href="https://t.me/redpadgames"
                variant="primary"
                size="lg"
                external
                className="w-full sm:w-auto"
              >
                Join Telegram
              </ButtonLink>
            </MagneticButton>
            <MagneticButton strength={8} className="w-full sm:w-auto">
              <ButtonLink href="/news" variant="outline" size="lg" className="w-full sm:w-auto">
                Read the news
              </ButtonLink>
            </MagneticButton>
          </div>
        </Container>
      </section>
    </main>
  );
}
