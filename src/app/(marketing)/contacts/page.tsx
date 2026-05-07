import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { Reveal } from "@/components/effects";
import { footprint } from "@/content/footprint";

export const metadata: Metadata = {
  title: "Contacts",
  description:
    "Press, business, careers, and player support — every way to reach RedPad Games.",
};

const CONTACT_LANES = [
  {
    label: "General",
    email: "contact@redpad.games",
    blurb: "Anything that doesn't fit a more specific lane.",
  },
  {
    label: "Press / Media",
    email: "press@redpad.games",
    blurb: "Interviews, reviews, asset requests. We aim to respond within 48 hours.",
  },
  {
    label: "Business / Partnerships",
    email: "biz@redpad.games",
    blurb: "Publishing, distribution, infrastructure, sponsorship.",
  },
  {
    label: "Careers",
    email: "careers@redpad.games",
    blurb: "Open roles + speculative applications welcome.",
  },
];

export default function ContactsPage() {
  return (
    <main className="relative bg-bg pt-32 md:pt-40">
      <Container width="wide">
        <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
          Contacts
        </p>
        <h1 className="mt-6 max-w-4xl font-display font-black tracking-[-0.04em] text-text leading-[0.95] text-[clamp(2.5rem,9vw,8rem)]">
          Let&apos;s talk.
        </h1>
        <p className="mt-6 max-w-2xl text-body-lg text-text-muted">
          Press, business, careers, players. Pick the lane and write — we read
          everything.
        </p>

        {/* Lanes */}
        <section className="mt-16">
          <ul className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {CONTACT_LANES.map((lane, i) => (
              <Reveal key={lane.label} delayMs={i * 80}>
                <li className="rounded-lg border border-divider bg-bg-elevated p-8 transition-colors hover:border-accent/40">
                  <p className="font-mono text-caption uppercase tracking-[0.25em] text-accent">
                    {lane.label}
                  </p>
                  <a
                    href={`mailto:${lane.email}`}
                    data-cursor="hover"
                    className="mt-4 inline-block font-display font-black tracking-tight text-text transition-colors hover:text-accent text-[clamp(1.25rem,2.5vw,2rem)]"
                  >
                    {lane.email}
                  </a>
                  <p className="mt-3 text-body-md text-text-muted">{lane.blurb}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Office addresses */}
        <section className="mt-24">
          <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
            Offices
          </p>
          <Reveal>
            <h2 className="mt-6 max-w-3xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2rem,5vw,4rem)]">
              Four hubs.{" "}
              <span className="text-accent">One studio</span>.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {footprint.map((entity) => (
              <Reveal key={entity.city}>
                <li className="rounded-lg border border-divider bg-bg-elevated p-6">
                  <p className="font-mono text-caption uppercase tracking-[0.25em] text-accent">
                    {entity.role}
                  </p>
                  <p className="mt-4 font-display text-heading-md tracking-tight text-text">
                    {entity.city}
                  </p>
                  <p className="mt-1 text-body-sm text-text-muted">
                    {entity.country}
                  </p>
                  <p className="mt-3 text-body-sm text-text-muted">
                    {entity.entity}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Social grid */}
        <section className="mt-24 pb-32">
          <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
            Communities
          </p>
          <Reveal>
            <h2 className="mt-6 max-w-3xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2rem,5vw,4rem)]">
              Find us where you{" "}
              <span className="text-accent">already are</span>.
            </h2>
          </Reveal>
          <div className="mt-10">
            <SocialIcons variant="lg" />
          </div>
        </section>
      </Container>
    </main>
  );
}
