"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

const roles = [
  {
    company: "Nikted (Medical Device Manufacturer)",
    role: "Multi-platform Developer",
    period: "09/2023 — 03/2026",
    description:
      "Developed multi-platform products for Android, Windows, and iOS using Kotlin Multiplatform (KMP). Designed and implemented relational databases using SQL for medical-grade applications. Built a BLE communication stack with Google's Protocol Buffers.",
  },
  {
    company: "Freelance",
    role: "English Teacher",
    period: "Summer 2023",
    description:
      "Worked as a private English tutor for four months, helping students improve their language skills through structured one-on-one sessions.",
  },
];

export default function Experience() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-text-muted">
            Experience
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Where I&apos;ve worked
          </h2>
        </Reveal>

        <div className="mt-12 space-y-0">
          {roles.map((role, i) => (
            <Reveal key={role.company} delay={0.1 + i * 0.1}>
              <div className="relative border-l border-border pl-8 pb-12 last:pb-0">
                <div className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border border-accent bg-bg" />
                <span className="text-xs uppercase tracking-widest text-accent">
                  {role.period}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold tracking-tight">
                  {role.role}
                </h3>
                <p className="mt-0.5 text-sm text-text-muted">{role.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {role.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10">
            <Link
              href="/experience"
              className="inline-block text-sm font-medium text-text-muted hover:text-text transition-colors"
            >
              Full experience &rarr;
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
