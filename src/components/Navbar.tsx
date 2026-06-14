"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Tools", href: "/tools" },
  { label: "Thoughts", href: "/thoughts" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight"
        >
          KMP Developer
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-text transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            className="ml-4 rounded-md border border-accent px-4 py-1.5 text-sm font-medium text-accent transition-all hover:bg-accent hover:text-bg"
          >
            Contact
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-text transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-5 bg-text transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-text transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-surface border-t border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-text-muted hover:text-text transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block text-center rounded-md border border-accent px-4 py-1.5 text-sm font-medium text-accent transition-all hover:bg-accent hover:text-bg"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
