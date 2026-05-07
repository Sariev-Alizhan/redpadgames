"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { dustlandRoadmap } from "@/content/games";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { sec, durations, easings } from "@/lib/motion";

/**
 * Horizontal pin-scroll roadmap on desktop, plain vertical list on mobile.
 * The pin lasts (cards − 1) viewport heights so each card snaps into the
 * frame as the user scrolls. ScrollTrigger.matchMedia ensures the timeline
 * is torn down cleanly when crossing the breakpoint or unmounting.
 */
export function DustlandRoadmapSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const reduce = useReducedMotion();

  React.useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || !isDesktop || reduce) return;

    const cards = track.children.length;
    // Pin for (cards - 1) screen-heights so each card lands one-by-one.
    const distance = (cards - 1) * window.innerWidth * 0.8;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -(track.scrollWidth - section.offsetWidth + 96),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top top",
          end: () => `+=${distance}`,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [isDesktop, reduce]);

  return (
    <section
      ref={sectionRef}
      id="dustland-roadmap"
      aria-label="Dustland public roadmap"
      className="relative border-b border-divider bg-bg py-24 md:py-32 lg:overflow-hidden lg:py-0"
    >
      <Container width="wide" className="lg:pt-32">
        <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
          04 / Dustland Roadmap
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduce ? 0 : sec(durations.slow), ease: easings.expoOut }}
          className="mt-8 max-w-4xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,7vw,5.5rem)]"
        >
          A ten-year{" "}
          <span className="font-sans italic font-bold text-accent">horizon</span>.
        </motion.h2>
      </Container>

      {/* Mobile: vertical list. Desktop: horizontal pin-scroll. */}
      <div className="mt-16 lg:mt-24">
        <div
          ref={trackRef}
          className="flex flex-col gap-6 px-6 pb-12 md:px-12 lg:flex-row lg:gap-10 lg:px-20 lg:pb-32 lg:will-change-transform"
        >
          {dustlandRoadmap.map((step, idx) => (
            <article
              key={step.period}
              className="relative shrink-0 rounded-lg border border-divider bg-bg-elevated p-8 md:p-10 lg:w-[clamp(20rem,32vw,30rem)]"
            >
              <span className="font-mono text-caption uppercase tracking-[0.25em] text-accent">
                {String(idx + 1).padStart(2, "0")} · {step.period}
              </span>
              <h3 className="mt-4 font-display font-black tracking-tight text-text leading-tight text-[clamp(1.75rem,3vw,2.75rem)]">
                {step.title}
              </h3>
              <p className="mt-4 max-w-md text-body-md text-text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
