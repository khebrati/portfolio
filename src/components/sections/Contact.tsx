"use client";

import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-text-muted">
              Get in touch
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Let&apos;s work together
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-text-muted leading-relaxed">
              I&apos;m currently open to freelance work and full-time
              opportunities. If you have a project in mind, I&apos;d love to
              hear about it.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            className="mt-12 mx-auto max-w-lg space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-text placeholder-text-muted outline-none transition-colors focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-text placeholder-text-muted outline-none transition-colors focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="budget" className="sr-only">
                Budget range
              </label>
              <select
                id="budget"
                className="w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-text-muted outline-none transition-colors focus:border-accent"
              >
                <option value="">Budget range</option>
                <option value="<5k">&lt; $5,000</option>
                <option value="5k-15k">$5,000 — $15,000</option>
                <option value="15k+">$15,000+</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about your project"
                className="w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-text placeholder-text-muted outline-none transition-colors focus:border-accent resize-y"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-accent px-6 py-3 text-sm font-semibold text-bg transition-all hover:brightness-110"
            >
              Send message
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 text-center text-sm text-text-muted">
            <p>
              Or reach out directly at{" "}
              <a
                href="mailto:khebrati@gmail.com"
                className="text-accent hover:underline"
              >
                khebrati@gmail.com
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
