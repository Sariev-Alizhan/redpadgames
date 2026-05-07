"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { founders, team, teamCredits } from "@/content/team";
import { sec, durations, easings } from "@/lib/motion";

/**
 * Asymmetric team grid. Founders lead with large typographic tiles; the rest
 * fill a denser grid below. Pedigree row at the bottom names the franchises
 * the studio has shipped on. Portraits will drop in once the team shoot is
 * delivered (paths reserved on TeamMember.portrait).
 */
export function TeamSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="team"
      aria-label="The team"
      className="relative border-b border-divider bg-bg py-32 md:py-40"
    >
      <Container width="wide">
        <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
          06 · The Team
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduce ? 0 : sec(durations.slow), ease: easings.expoOut }}
          className="mt-8 max-w-4xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,7vw,5.5rem)]"
        >
          Seventy specialists,{" "}
          <span className="font-serif italic font-normal text-accent">one studio</span>.
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

        {/* Founders row */}
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
          className="mt-20 grid gap-6 md:grid-cols-2"
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
              className="group relative overflow-hidden rounded-lg border border-divider bg-bg-elevated p-8 transition-colors hover:border-accent/40"
            >
              <span className="font-mono text-caption uppercase tracking-[0.25em] text-accent">
                Founder
              </span>
              <p className="mt-6 font-display font-black tracking-tight text-text text-[clamp(1.75rem,3.5vw,3rem)] leading-tight">
                {person.name}
              </p>
              <p className="mt-3 text-body-md text-text-muted">{person.role}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Asymmetric grid for team — 2 cols mobile, 3 sm, 4 lg, larger first row to break monotony */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: reduce ? 0 : 0.05, delayChildren: 0.1 },
            },
          }}
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {team.map((person, idx) => (
            <motion.li
              key={person.name}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: reduce ? 0 : sec(durations.base), ease: easings.expoOut },
                },
              }}
              className={
                "group rounded-md border border-divider bg-bg-elevated p-5 transition-colors hover:border-accent/40 " +
                // Break the monotony: every 5th tile is a tall accent.
                (idx % 5 === 0 ? "sm:row-span-2 sm:bg-bg-elevated/80" : "")
              }
            >
              <p className="font-display text-heading-sm tracking-tight text-text">
                {person.name}
              </p>
              <p className="mt-2 font-mono text-caption uppercase tracking-[0.18em] text-text-faint">
                {person.role}
              </p>
            </motion.li>
          ))}
        </motion.ul>

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
