import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/effects";

export const metadata: Metadata = {
  title: "Press Kit",
  description:
    "Logos, key art, screenshots, founder photos, and fact sheet for press coverage of RedPad Games.",
};

const REPO_RAW =
  "https://raw.githubusercontent.com/Sariev-Alizhan/redpadgames/main/marketing/assets";

// `path` is the GitHub raw URL suffix for download (relative to REPO_RAW).
// `thumb` is the local /public/ path for rendering the in-page thumbnail.
const SECTIONS = [
  {
    title: "Brand",
    items: [
      {
        label: "RedPad logo (transparent PNG)",
        path: "/brand/redpad-logo.png",
        thumb: "/brand/redpad-logo.png",
      },
    ],
  },
  {
    title: "Dustland",
    items: [
      { label: "Key art — eclipse hero", path: "/games/dustland-keyart.jpg", thumb: "/hero/hero-bg.jpg" },
      { label: "Steam library hero (1920×620)", path: "/games/dustland-cover.jpg", thumb: "/games/dustland/cover.jpg" },
      { label: "Screenshot 01", path: "/games/screenshot-01.jpg", thumb: "/games/dustland/screenshot-01.jpg" },
      { label: "Screenshot 04", path: "/games/screenshot-04.jpg", thumb: "/games/dustland/screenshot-04.jpg" },
      { label: "Screenshot 09", path: "/games/screenshot-09.jpg", thumb: "/games/dustland/screenshot-09.jpg" },
      { label: "Screenshot 12", path: "/games/screenshot-12.jpg", thumb: "/games/dustland/screenshot-12.jpg" },
      { label: "Screenshot 15", path: "/games/screenshot-15.jpg", thumb: "/games/dustland/screenshot-15.jpg" },
      { label: "Screenshot 18", path: "/games/screenshot-18.jpg", thumb: "/games/dustland/screenshot-18.jpg" },
    ],
  },
  {
    title: "Wartide Worlds",
    items: [
      { label: "Key art — shaman", path: "/games/wartide-keyart.jpg", thumb: "/games/wartide-worlds/cover.jpg" },
      { label: "Bear concept art", path: "/games/wartide-bear-concept.png", thumb: "/games/wartide-worlds/concept-1.png" },
    ],
  },
  {
    title: "Founders",
    items: [
      { label: "Vildan Fazylov — Founder & CEO", path: "/team/team-vildan-fazylov.jpg", thumb: "/team/team-vildan-fazylov.jpg" },
      { label: "Yevgeniy Neverov — Founder & GPO", path: "/team/team-yevgeniy-neverov.webp", thumb: "/team/team-yevgeniy-neverov.webp" },
    ],
  },
  {
    title: "News",
    items: [
      { label: "Tencent Cloud signing — invitation card", path: "/news/tencent-signing.jpg", thumb: "/news/tencent-signing.jpg" },
    ],
  },
];

const FACT_SHEET = [
  ["Studio name", "RedPad Games (Red Pad Games AG)"],
  ["Founded", "2017 (incorporated in Zurich, 2020)"],
  ["HQ", "Zurich, Switzerland"],
  ["Dev hub", "Almaty, Kazakhstan"],
  ["Team size", "~70 specialists"],
  ["Mantra", "We build worlds."],
  ["Founders", "Vildan Fazylov (CEO) · Yevgeniy Neverov (GPO)"],
  ["Slogan (Dustland)", "Find your shadow between two suns."],
  ["Slogan (Wartide)", "War always has a reason!"],
  ["Steam (Dustland)", "https://store.steampowered.com/app/1459630/Dustland/"],
  ["Studio site", "https://redpad.games"],
  ["Contact", "press@redpad.games"],
];

export default function PressKitPage() {
  return (
    <main className="relative bg-bg pt-32 md:pt-40">
      <Container width="wide">
        <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
          Press Kit
        </p>
        <h1 className="mt-6 max-w-4xl font-display font-black tracking-[-0.04em] text-text leading-[0.95] text-[clamp(2.5rem,9vw,8rem)]">
          Assets &amp; <span className="text-accent">facts</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-body-lg text-text-muted">
          Logos, key art, official Steam screenshots, founder portraits, fact
          sheet. Everything you need for coverage. Linked from our public
          GitHub — feel free to deep-link directly.
        </p>

        {/* Fact sheet */}
        <section className="mt-16 rounded-lg border border-divider bg-bg-elevated p-8 md:p-12">
          <p className="font-mono text-caption uppercase tracking-[0.25em] text-accent">
            Fact sheet
          </p>
          <dl className="mt-6 divide-y divide-divider/40">
            {FACT_SHEET.map(([k, v]) => (
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
        </section>

        {/* Asset sections */}
        {SECTIONS.map((section) => (
          <section key={section.title} className="mt-20">
            <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
              {section.title}
            </p>
            <Reveal>
              <h2 className="mt-6 font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(1.75rem,4vw,3rem)]">
                {section.title}
              </h2>
            </Reveal>
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {section.items.map((item) => (
                <li key={item.path}>
                  <a
                    href={`${REPO_RAW}${item.path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="group block overflow-hidden rounded-md border border-divider bg-bg-elevated transition-colors hover:border-accent/40"
                    download
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-bg">
                      <Image
                        src={item.thumb}
                        alt={item.label}
                        fill
                        sizes="(max-width: 640px) 50vw, 25vw"
                        loading="lazy"
                        className="object-cover transition-transform duration-base ease-expo-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
                        Download ↓
                      </p>
                      <p className="mt-1 line-clamp-2 font-display text-body-sm tracking-tight text-text">
                        {item.label}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="mt-24 pb-32">
          <p className="text-body-sm text-text-faint">
            All assets are published under the studio&apos;s press-use license.
            Use them as-is for editorial coverage; please don&apos;t alter the
            logo lockup.
          </p>
        </section>
      </Container>
    </main>
  );
}
