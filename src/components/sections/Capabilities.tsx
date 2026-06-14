"use client";

import Reveal from "@/components/Reveal";

const tags = [
  "Kotlin Multiplatform (KMP)",
  "SQL",
  "Android / Jetpack Compose",
  "C# / .NET",
  "Assembly / Reverse Engineering",
  "Git",
  "Linux / Python",
  "Bluetooth BLE",
  "Protocol Buffers",
  "Web Development (HTML, CSS, JS)",
  "Express.js",
  "System Programming",
  "Networking",
];

export default function Capabilities() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-8 text-xs uppercase tracking-[0.2em] text-text-muted">
            Capabilities
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-accent hover:text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
