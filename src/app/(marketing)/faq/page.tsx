import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/effects";
import { FaqJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about Dustland, Wartide Worlds, RPGC, and RedPad Games — release dates, platforms, beta access, system requirements.",
};

const SECTIONS = [
  {
    title: "Dustland",
    items: [
      {
        q: "Is Dustland out?",
        a: "Yes — Dustland is live in Steam Early Access since 9 December 2024. You can play it today on PC.",
      },
      {
        q: "What platforms is Dustland on?",
        a: "PC via Steam (live). PlayStation, Xbox, and mobile are planned for follow-up releases — track our news feed for dates.",
      },
      {
        q: "What are the system requirements?",
        a: "Minimum: Windows 10 64-bit, Intel Core i5-6600K, 12 GB RAM, NVIDIA GTX 1060, 50 GB storage. Recommended: i7-10700K, 32 GB RAM, RTX 2060, SSD.",
      },
      {
        q: "How do I join the closed beta?",
        a: "Beta access is at https://dustlandbeta.redpad.games. Sign up there; we run beta cycles ahead of major content updates.",
      },
      {
        q: "Is there anti-cheat?",
        a: "Yes — Easy Anti-Cheat runs on every Dustland live server.",
      },
      {
        q: "What languages does the game support?",
        a: "English and Russian on launch. We're adding more for major content updates.",
      },
      {
        q: "How big is the map?",
        a: "64 km², over 100 unique authored locations — settlements, wrecks, depots, hideouts.",
      },
      {
        q: "When is the next big update?",
        a: "Winter 2026 — RPG layer (talents, persistent character progression, faction reputation), recurring in-game events, and a major map expansion.",
      },
    ],
  },
  {
    title: "Wartide Worlds",
    items: [
      {
        q: "When does Wartide Worlds release?",
        a: "Wartide is in active development. The current build is a deeper rebuild of the original 2019 Kickstarter pitch — we'll share dates as we hit milestones.",
      },
      {
        q: "What genre is Wartide?",
        a: "MMORTS / FPS hybrid with RPG mechanics. Players seamlessly switch between strategic map control and first-person unit command, and travel between historical eras through temporal anomalies.",
      },
    ],
  },
  {
    title: "RPGC Token",
    items: [
      {
        q: "What is RPGC?",
        a: "RPGC — RedPad Games Coin — is the economic layer of the RedPad ecosystem. Ethereum-based ERC-20 token. Awarded 'Most Interesting Cryptocurrency' at Crypto Expo Dubai 2021.",
      },
      {
        q: "What can I use RPGC for?",
        a: "In-game currency across RedPad titles, player marketplace settlement, cross-game value transfer. Smart-contract audited by QuillAudits.",
      },
    ],
  },
  {
    title: "Studio",
    items: [
      {
        q: "Where is RedPad Games based?",
        a: "Headquartered in Zurich, Switzerland (Red Pad Games AG, incorporated 2020). Development hub in Almaty, Kazakhstan. US operations in Delaware. Marketplace operations in Grand Cayman.",
      },
      {
        q: "Who founded RedPad Games?",
        a: "Vildan Fazylov (Founder & CEO) and Yevgeniy Neverov (Founder & GPO). The studio originated in 2017 and was formally incorporated in Zurich in 2020.",
      },
      {
        q: "How big is the team?",
        a: "Around 70 specialists across four hubs. Veterans of EVE Online, World of Warcraft, Metro Exodus, S.T.A.L.K.E.R., and Call of Duty: MW3.",
      },
      {
        q: "Who are your partners?",
        a: "AWS and Tencent Cloud (cloud infrastructure), NVIDIA (GPU & graphics), Steam (PC distribution), Epic Games, Binance (web3), QuillAudits (smart-contract audits).",
      },
      {
        q: "How do I reach press / business?",
        a: "All inquiries route through contact@redpad.games — add a tag in the subject line ([Press], [Business], [Careers]) and we'll route internally. Faster than chasing role-specific aliases.",
      },
    ],
  },
];

// Flatten all sections into a single Q&A list for the FAQPage schema.
const ALL_QA = SECTIONS.flatMap((s) => s.items);

export default function FaqPage() {
  return (
    <main className="relative bg-bg pt-32 md:pt-40">
      <FaqJsonLd items={ALL_QA} />
      <Container width="wide">
        <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
          FAQ
        </p>
        <h1 className="mt-6 max-w-4xl font-display font-black tracking-[-0.04em] text-text leading-[0.95] text-[clamp(2.5rem,9vw,8rem)]">
          Frequently asked,{" "}
          <span className="text-accent">honestly answered</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-body-lg text-text-muted">
          Everything below is verified — no marketing spin. If something
          isn&apos;t here, write us at <a className="text-text underline underline-offset-4 hover:text-accent" href="mailto:contact@redpad.games">contact@redpad.games</a>.
        </p>

        <div className="mt-16 space-y-16 pb-32">
          {SECTIONS.map((section, i) => (
            <Reveal key={section.title} delayMs={i * 60}>
              <section>
                <h2 className="font-display font-black tracking-tight text-text leading-tight text-[clamp(1.75rem,4vw,3rem)]">
                  {section.title}
                </h2>
                <ul className="mt-8 divide-y divide-divider/40 border-t border-divider/40">
                  {section.items.map((item) => (
                    <li key={item.q}>
                      <details className="group py-5">
                        <summary
                          data-cursor="hover"
                          className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-heading-sm tracking-tight text-text transition-colors hover:text-accent"
                        >
                          <span>{item.q}</span>
                          <span
                            aria-hidden
                            className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-divider text-caption text-text-muted transition-transform group-open:rotate-45"
                          >
                            +
                          </span>
                        </summary>
                        <p className="mt-4 max-w-3xl text-body-md text-text-muted">
                          {item.a}
                        </p>
                      </details>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>

        <div className="mb-32 rounded-lg border border-accent/30 bg-accent/5 p-8 md:p-12">
          <p className="font-mono text-caption uppercase tracking-[0.25em] text-accent">
            Still need help?
          </p>
          <p className="mt-4 max-w-2xl text-body-lg text-text">
            Reach the team directly via the{" "}
            <Link href="/contacts" className="text-accent underline underline-offset-4">
              contacts page
            </Link>
            {" "}or jump into our{" "}
            <a
              href="https://discord.gg/rbh3eEV8Ka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4"
            >
              Discord
            </a>
            {" "}— a real person will reply.
          </p>
        </div>
      </Container>
    </main>
  );
}
