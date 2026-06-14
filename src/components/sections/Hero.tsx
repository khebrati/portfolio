"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90dvh] items-center pt-24">
      <div className="mx-auto max-w-6xl w-full px-6">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-text-muted">
            Computer Engineer
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-6xl sm:text-8xl md:text-[7rem] leading-[0.95] font-bold tracking-tight">
            Erfan
            <br />
            Khebrati
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
            Computer engineer with 2.5 years of experience building
            cross-platform mobile applications and backend systems for
            the medical device industry.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-bg transition-all hover:brightness-110"
            >
              Let&apos;s work together
            </a>
            <Link
              href="https://github.com/khebrati"
              className="text-sm font-medium text-text-muted hover:text-text transition-colors"
            >
              GitHub &rarr;
            </Link>
            <Link
              href="https://linkedin.com/in/mohammad-erfan-khebrati"
              className="text-sm font-medium text-text-muted hover:text-text transition-colors"
            >
              LinkedIn &rarr;
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
