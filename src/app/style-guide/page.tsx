import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AnnouncementBar,
  Button,
  Container,
  GlassCard,
  Marquee,
  NumberCounter,
  Section,
  Sparkline,
  SplitText,
  Tag,
  VideoLoop,
} from "@/components/ui";
import { StyleGuideR3FDemo } from "./StyleGuideR3FDemo";
import { StyleGuideMotionDemo } from "./StyleGuideMotionDemo";

export const metadata: Metadata = {
  title: "Style Guide",
  robots: { index: false, follow: false },
};

const colorTokens: Array<{ token: string; hex: string; role: string }> = [
  { token: "--color-bg", hex: "#08090C", role: "Page background" },
  { token: "--color-surface", hex: "#1C1F25", role: "Cards / panels" },
  { token: "--color-surface-elevated", hex: "#2A2E36", role: "Elevated panels" },
  { token: "--color-text", hex: "#F4F5F7", role: "Primary text" },
  { token: "--color-text-muted", hex: "#9098A6", role: "Secondary text" },
  { token: "--color-text-dim", hex: "#5E6573", role: "Tertiary text" },
  { token: "--color-accent", hex: "#E1141C", role: "Brand red — CTAs, signal" },
  { token: "--color-accent-hot", hex: "#FF2230", role: "Hover state for accent" },
  { token: "--color-divider", hex: "#2A2E36", role: "Hairlines, borders" },
  { token: "--color-success", hex: "#34C77A", role: "Success states" },
  { token: "--color-warning", hex: "#F0A93E", role: "Warning states" },
  { token: "--color-danger", hex: "#E1141C", role: "Danger / destructive" },
  { token: "--color-data-cyan", hex: "#3DA9FF", role: "Data viz secondary" },
];

const typeScale: Array<{ name: string; cls: string; sample: string }> = [
  { name: "display-xl", cls: "text-display-xl font-display", sample: "Sovereign Studio" },
  { name: "display-lg", cls: "text-display-lg font-display", sample: "Almaty · Zurich" },
  { name: "display-md", cls: "text-display-md font-display", sample: "Find your shadow" },
  { name: "display-sm", cls: "text-display-sm font-display", sample: "Mission control" },
  { name: "heading-lg", cls: "text-heading-lg font-display", sample: "We are RedPad" },
  { name: "heading-md", cls: "text-heading-md font-display", sample: "Studio statement" },
  { name: "heading-sm", cls: "text-heading-sm font-display", sample: "Section title" },
  { name: "body-lg", cls: "text-body-lg", sample: "Body large — used for hero subheads." },
  { name: "body-md", cls: "text-body-md", sample: "Body medium — default page paragraph copy." },
  { name: "body-sm", cls: "text-body-sm", sample: "Body small — captions, metadata, fine print." },
  { name: "caption", cls: "text-caption font-mono uppercase tracking-[0.2em]", sample: "Caption · MONO · 12px" },
  { name: "mono-sm", cls: "text-mono-sm font-mono", sample: "telemetry · 13.6K · 65% · $8.3 CPA" },
];

export default function StyleGuidePage() {
  // Hidden in production unless explicitly enabled.
  const isDev = process.env.NODE_ENV === "development";
  const allowed = isDev || process.env.STYLE_GUIDE_ENABLED === "1";
  if (!allowed) notFound();

  return (
    <main className="pb-32">
      <AnnouncementBar
        label="DEV"
        body="Style guide — hidden in production. Use STYLE_GUIDE_ENABLED=1 to expose."
        dismissKey="style-guide-banner-seen"
        dismissible
      />

      <Container width="wide" className="pt-16">
        <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
          /style-guide · Direction 02
        </p>
        <h1 className="mt-2 font-display text-display-md tracking-tight">Design system</h1>
        <p className="mt-4 max-w-2xl text-body-lg text-text-muted">
          Every token, primitive, and motion atom we ship is documented on this page.
          If a section needs something that isn&rsquo;t here, we add it here first.
        </p>
      </Container>

      {/* Color tokens */}
      <Section fullViewport={false} density="tight" id="tokens" aria-label="Color tokens">
        <Container width="wide">
          <SectionHeading no="01" title="Color tokens" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {colorTokens.map((c) => (
              <div
                key={c.token}
                className="flex flex-col gap-2 rounded-md border border-divider bg-surface p-3"
              >
                <div
                  className="h-16 w-full rounded-sm"
                  style={{ backgroundColor: c.hex }}
                  aria-hidden="true"
                />
                <div className="flex items-baseline justify-between gap-2 font-mono text-mono-sm">
                  <span className="text-text">{c.token}</span>
                  <span className="text-text-muted">{c.hex}</span>
                </div>
                <p className="text-body-sm text-text-muted">{c.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Typography */}
      <Section fullViewport={false} density="tight" id="typography" aria-label="Typography scale">
        <Container width="wide">
          <SectionHeading no="02" title="Typography" />
          <div className="space-y-6">
            {typeScale.map((t) => (
              <div
                key={t.name}
                className="flex flex-col gap-2 border-b border-divider pb-6 last:border-b-0"
              >
                <p className="font-mono text-caption uppercase tracking-[0.2em] text-text-muted">
                  {t.name}
                </p>
                <p className={t.cls}>{t.sample}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Buttons */}
      <Section fullViewport={false} density="tight" id="buttons" aria-label="Buttons">
        <Container width="wide">
          <SectionHeading no="03" title="Buttons · 3 variants × 3 sizes" />
          <div className="space-y-4">
            {(["primary", "ghost", "outline"] as const).map((v) => (
              <div key={v} className="flex flex-wrap items-center gap-3">
                <span className="w-20 font-mono text-caption uppercase tracking-[0.2em] text-text-muted">
                  {v}
                </span>
                {(["sm", "md", "lg"] as const).map((s) => (
                  <Button key={s} variant={v} size={s}>
                    Read more →
                  </Button>
                ))}
                <Button variant={v} size="md" disabled>
                  Disabled
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tags */}
      <Section fullViewport={false} density="tight" id="tags" aria-label="Tags">
        <Container width="wide">
          <SectionHeading no="04" title="Tags" />
          <div className="flex flex-wrap gap-3">
            <Tag variant="default">Default</Tag>
            <Tag variant="accent">Now signed</Tag>
            <Tag variant="outline">Early access</Tag>
            <Tag variant="muted">UNREAL ENGINE</Tag>
          </div>
        </Container>
      </Section>

      {/* Cards */}
      <Section fullViewport={false} density="tight" id="cards" aria-label="Glass cards">
        <Container width="wide">
          <SectionHeading no="05" title="GlassCard" />
          <div className="grid gap-4 md:grid-cols-3">
            <GlassCard className="p-6">
              <p className="font-mono text-caption uppercase tracking-[0.2em] text-text-muted">
                /press
              </p>
              <h3 className="mt-2 font-display text-heading-md">RedPad × Tencent Cloud</h3>
              <p className="mt-3 text-body-sm text-text-muted">
                Today&rsquo;s partnership announcement. The signing inaugurates a new chapter for
                the studio&rsquo;s multiplatform ambition.
              </p>
            </GlassCard>
            <GlassCard elevated className="p-6">
              <p className="font-mono text-caption uppercase tracking-[0.2em] text-text-muted">
                Elevated
              </p>
              <h3 className="mt-2 font-display text-heading-md">Dustland</h3>
              <p className="mt-3 text-body-sm text-text-muted">
                Steam Early Access since December 2024. 13.6 K beta participants.
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <p className="font-mono text-caption uppercase tracking-[0.2em] text-text-muted">
                Hover me
              </p>
              <h3 className="mt-2 font-display text-heading-md">Hover state</h3>
              <p className="mt-3 text-body-sm text-text-muted">
                Border accents on hover. Subtle backdrop blur over surface.
              </p>
            </GlassCard>
          </div>
        </Container>
      </Section>

      {/* Marquee */}
      <Section fullViewport={false} density="tight" id="marquee" aria-label="Marquee">
        <Container width="wide">
          <SectionHeading no="06" title="Marquee · partner logo wall" />
          <div className="rounded-md border border-divider bg-surface py-6">
            <Marquee>
              {[
                "TENCENT",
                "BINANCE",
                "XSOLLA",
                "NVIDIA",
                "AWS",
                "STEAM",
                "UNIGEM",
                "TTM GROUP",
                "ALLCORRECT",
              ].map((label) => (
                <span
                  key={label}
                  className="font-display text-heading-md tracking-tight text-text-muted"
                >
                  {label}
                </span>
              ))}
            </Marquee>
          </div>
        </Container>
      </Section>

      {/* SplitText */}
      <Section fullViewport={false} density="tight" id="splittext" aria-label="SplitText">
        <Container width="wide">
          <SectionHeading no="07" title="SplitText" />
          <div className="space-y-6">
            <SplitText
              text="Find your shadow between two suns."
              mode="char"
              className="font-display text-display-sm tracking-tight"
            />
            <SplitText
              text="Do what others are afraid of."
              mode="word"
              stagger={120}
              className="font-display text-display-md tracking-tight text-accent"
            />
          </div>
        </Container>
      </Section>

      {/* Video loop */}
      <Section fullViewport={false} density="tight" id="video" aria-label="Video loop">
        <Container width="wide">
          <SectionHeading no="08" title="VideoLoop · poster fallback" />
          <VideoLoop poster="/window.svg" className="max-w-2xl" />
          <p className="mt-3 font-mono text-caption uppercase tracking-[0.2em] text-text-muted">
            (no src — renders the poster placeholder)
          </p>
        </Container>
      </Section>

      {/* Counters + Sparklines */}
      <Section fullViewport={false} density="tight" id="counters" aria-label="Counters and sparklines">
        <Container width="wide">
          <SectionHeading no="09" title="NumberCounter · Sparkline" />
          <div className="grid gap-6 md:grid-cols-3">
            <Stat label="Beta participants" value={13600} suffix="+" />
            <Stat label="D1 retention" value={65} suffix="%" />
            <Stat label="Cost per acquisition" value={8.3} decimals={1} prefix="$" />
          </div>
          <div className="mt-8 space-y-3">
            <p className="font-mono text-caption uppercase tracking-[0.2em] text-text-muted">
              Sparkline · accent stroke
            </p>
            <Sparkline
              values={[10, 18, 12, 24, 22, 36, 30, 48, 44, 62, 70, 64, 82, 80, 95]}
              className="h-10 w-64 text-accent"
            />
          </div>
        </Container>
      </Section>

      {/* Motion */}
      <Section fullViewport={false} density="tight" id="motion" aria-label="Motion">
        <Container width="wide">
          <SectionHeading no="10" title="Motion atoms" />
          <StyleGuideMotionDemo />
        </Container>
      </Section>

      {/* R3F */}
      <Section fullViewport={false} density="tight" id="r3f" aria-label="R3F primitive">
        <Container width="wide">
          <SectionHeading no="11" title="R3F primitive · ShardCluster" />
          <StyleGuideR3FDemo />
        </Container>
      </Section>
    </main>
  );
}

function SectionHeading({ no, title }: { no: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
        {no} · {title}
      </p>
      <h2 className="mt-2 font-display text-heading-lg tracking-tight">{title}</h2>
    </div>
  );
}

function Stat({
  label,
  value,
  decimals,
  prefix,
  suffix,
}: {
  label: string;
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div className="rounded-md border border-divider bg-surface p-4">
      <p className="font-mono text-caption uppercase tracking-[0.2em] text-text-muted">{label}</p>
      <p className="mt-2 flex items-baseline gap-1 font-display text-display-sm tracking-tight">
        {prefix ? <span>{prefix}</span> : null}
        <NumberCounter to={value} decimals={decimals} suffix={suffix ?? ""} />
      </p>
    </div>
  );
}
