"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

const projects = [
  {
    title: "AudioSense",
    category: "KMP / Compose Multiplatform",
    description:
      "Cross-platform hearing-test (audiometry) app for Android & iOS built with Kotlin Multiplatform and Compose Multiplatform. Features Material 3 UI, headphone calibration, ambient noise detection, and visual audiogram results.",
    link: "https://github.com/khebrati/audiosense",
  },
  {
    title: "Medical Device Communication Stack",
    category: "KMP / BLE",
    description:
      "Multi-platform Bluetooth Low Energy communication stack using Google's Protocol Buffers for a medical device manufacturer.",
  },

];

export default function Projects() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-text-muted">
            Recent Projects
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Selected work
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={0.1 + i * 0.05}>
              <div className="group rounded-lg border border-border bg-surface p-6 transition-all duration-200 hover:scale-[1.02] hover:border-accent/40">
                <span className="text-xs uppercase tracking-widest text-accent">
                  {project.category}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                      {project.title} ↗
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {project.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-block text-sm font-medium text-text-muted hover:text-text transition-colors"
            >
              View all projects &rarr;
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
