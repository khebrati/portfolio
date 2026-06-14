"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

const posts = [
  {
    title: "Building a BLE Communication Stack with KMP",
    excerpt: "Lessons learned from implementing cross-platform Bluetooth Low Energy communication for medical devices.",
    date: "Mar 2026",
    readTime: "6 min read",
  },
  {
    title: "Custom Git Workflows for Hardware-Software Teams",
    excerpt: "How we designed a branching strategy that works for firmware, mobile apps, and backend in one repository.",
    date: "Jan 2026",
    readTime: "8 min read",
  },
];

export default function Thoughts() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-text-muted">
            Writing
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Thoughts &amp; notes
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={0.1 + i * 0.1}>
              <div className="group rounded-lg border border-border bg-surface p-6 transition-all duration-200 hover:scale-[1.02] hover:border-accent/40">
                <div className="flex items-center gap-3 text-xs text-text-muted">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-text-muted" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {post.excerpt}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10">
            <Link
              href="/thoughts"
              className="inline-block text-sm font-medium text-text-muted hover:text-text transition-colors"
            >
              All posts &rarr;
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
