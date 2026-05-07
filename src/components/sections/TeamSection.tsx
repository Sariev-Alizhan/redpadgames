"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { founders, team, teamCredits } from "@/content/team";
import { sec, durations, easings } from "@/lib/motion";

/**
 * Team section — founder cards on top, then the rest of the studio rendered
 * as a film-credits roll (name left, role right, hairline divider). No card
 * grid: it kept showing empty cells when names wrapped to two lines. The
 * credits treatment is what AAA studios (Larian, FromSoftware, CDPR) use,
 * scales gracefully on mobile, and reads as confident editorial.
 */
export function TeamSection() {
  const reduce = useReducedMotion();

  // Split team in half for a 2-column credits layout on lg+.
  // Use Math.ceil so the left column is the longer one when odd.
  const mid = Math.ceil(team.length / 2);
  const teamLeft = team.slice(0, mid);
  const teamRight = team.slice(mid);

  return (
    <section
      id="team"
      aria-label="The team"
      className="relative border-b border-divider bg-bg py-32 md:py-40"
    >
      <Container width="wide">
        <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
          07 / The Team
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduce ? 0 : sec(durations.slow), ease: easings.expoOut }}
          className="mt-8 max-w-4xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,7vw,5.5rem)]"
        >
          Seventy specialists,{" "}
          <span className="font-sans italic font-bold text-accent">one studio</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: reduce ? 0 : sec(durations.slow),
            ease: easings.expoOut,
            delay: reduce ? 0 : 0.15,
          }}
          className="mt-6 max-w-2xl text-body-lg text-text-muted"
        >
          Veterans of the world&apos;s most demanding multiplayer franchises.
          Four hubs, one shipping rhythm.
        </motion.p>

        {/* Founder cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.2 },
            },
          }}
          className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8"
        >
          {founders.map((person) => (
            <motion.div
              key={person.name}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: reduce ? 0 : sec(durations.base), ease: easings.expoOut },
                },
              }}
              className="group relative overflow-hidden rounded-lg border border-divider bg-bg-elevated transition-colors hover:border-accent/40"
            >
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
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Studio credits — 2-col list on lg+, 1-col stacked below */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduce ? 0 : sec(durations.slow),
            ease: easings.expoOut,
            delay: reduce ? 0 : 0.2,
          }}
          className="mt-16 grid gap-x-12 gap-y-0 lg:grid-cols-2"
        >
          <CreditsList members={teamLeft} reduce={!!reduce} />
          <CreditsList members={teamRight} reduce={!!reduce} />
        </motion.div>

        {/* Pedigree row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduce ? 0 : sec(durations.slow), delay: reduce ? 0 : 0.2 }}
          className="mt-20 border-t border-divider/60 pt-10"
        >
          <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
            Shipped on
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
        </motion.div>
      </Container>
    </section>
  );
}

function CreditsList({
  members,
  reduce,
}: {
  members: ReadonlyArray<{ name: string; role: string }>;
  reduce: boolean;
}) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: reduce ? 0 : 0.04, delayChildren: 0.05 },
        },
      }}
    >
      {members.map((person) => (
        <motion.li
          key={person.name}
          variants={{
            hidden: { opacity: 0, y: 8 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: reduce ? 0 : sec(durations.base), ease: easings.expoOut },
            },
          }}
          className="group flex flex-col items-start gap-1 border-b border-divider/40 py-4 transition-colors hover:border-accent/40 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
        >
          <span className="font-display text-heading-sm font-semibold tracking-tight text-text transition-colors group-hover:text-accent">
            {person.name}
          </span>
          <span className="font-mono text-caption uppercase tracking-[0.18em] text-text-faint sm:shrink-0 sm:text-right">
            {person.role}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
