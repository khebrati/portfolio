"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

const tools = [
  "Kotlin Multiplatform",
  "Compose Multiplatform",
  "Android / Jetpack Compose",
  "C# / .NET",
  "SQL",
  "Protocol Buffers",
  "Bluetooth BLE",
  "Git",
  "Python",
  "Linux",
  "Assembly",
  "Reverse Engineering",
  "Express.js",
  "HTML / CSS / JS",
];

export default function Tools() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-text-muted">
            Toolbox
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Technologies I work with
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {tools.map((tool, i) => (
            <Reveal key={tool} delay={0.05 + i * 0.03}>
              <div className="rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-text-muted transition-all duration-200 hover:border-accent/40 hover:text-accent">
                {tool}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10">
            <Link
              href="/tools"
              className="inline-block text-sm font-medium text-text-muted hover:text-text transition-colors"
            >
              View full stack &rarr;
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
