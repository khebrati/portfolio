# AGENTS.md

Instructions for AI coding agents working on this project. The goal is a personal portfolio site in the spirit of the **Sawad** Framer template: a sleek, dark, motion-forward one-pager for a creative/engineer, built around big typography, generous whitespace, and a handful of confident scroll-triggered animations.

## 1. Stack & structure

- Framework: Next.js (App Router) + TypeScript + Tailwind CSS.
- Animation: Framer Motion for scroll reveals, hover states, and count-up stats.
- Pages/routes mirror the original template's nav: `/` (home), `/projects`, `/experience`, `/tools`, `/blog` (or `/thoughts`).
- Keep one component per file under `components/`, one section per file under `components/sections/`.

## 2. Design tokens

Treat these as a starting palette — adjust to fit real content, but stay within this register (near-black canvas, warm off-white type, single muted accent).

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0B0B0C` | Page background |
| `--surface` | `#16161A` | Cards, panels |
| `--text` | `#F5F4F1` | Primary text |
| `--text-muted` | `#9A9A9F` | Secondary text, labels |
| `--accent` | `#D7FF4F` or `#C9A876` | One accent only — pick acid-lime *or* warm gold, not both |
| `--border` | `#26262B` | Hairline dividers |

- Border radius: small and consistent (4–10px). No heavy rounding — this is a precise, technical aesthetic, not a soft/playful one.
- Spacing: generous vertical rhythm between sections (96–160px desktop, 48–64px mobile). Content stays in a centered max-width container (~1200px) with consistent side padding.

## 3. Typography

- Display face: a tall, geometric sans (e.g. Neue Haas Grotesk, General Sans, Inter Tight, or Space Grotesk) used at large sizes for the hero headline and section titles — set tight line-height, often uppercase with letter-spacing for labels.
- Body face: a clean, highly legible sans (Inter, General Sans, or similar) at comfortable reading size with relaxed line-height.
- Establish a clear scale: hero headline (very large, 64–120px desktop), section titles (32–48px), body (16–18px), eyebrow/labels (12–13px, uppercase, letter-spaced).
- Section labels (e.g. "RECENT PROJECTS", "EXPERIENCE") are small, uppercase, muted-color, and act as structural eyebrows above each section heading.

## 4. Page sections (home, in order)

1. **Nav bar** — sticky, transparent-to-solid on scroll. Logo/name on the left, page links center/right, a single CTA button on the right.
2. **Hero** — large portrait or abstract visual, name + role as a massive headline, a short one-line positioning statement, and social/contact links. This is the thesis of the page — give it the most visual weight.
3. **Stats row** — 3 stat blocks (e.g. years of experience, projects completed, clients), each a large animated number with a small uppercase label beneath. Animate as a count-up on scroll into view.
4. **Capability tags** — a row of short skill/tool tags or a marquee, signaling what the person does and the tools they use.
5. **Recent projects** — a grid (2–3 columns desktop, 1 column mobile) of project cards with image, title, and short tag/category. Hover state: subtle scale or image zoom.
6. **Experience timeline** — a vertical list of roles, each with company, role/description, and date range. Use a thin connecting line or divider between entries rather than numbered markers (this is a real chronological sequence, so a timeline device is earned here).
7. **Tools/stack grid** — small cards or a grid of logos/names for software and platforms used.
8. **Writing/thoughts** — a list or grid of article cards (title, short excerpt, date, read time).
9. **Contact / "Let's work together"** — large section heading, a simple form (name, email, budget range, message), and a prominent submit button.
10. **Footer** — minimal: copyright/credit line and any final links.

## 5. Motion guidelines

- Default reveal: elements fade in and translate up ~16–24px on scroll into view, staggered slightly within a section (50–100ms between siblings).
- Stats count up from 0 to their target value once, the first time they enter the viewport.
- Hover micro-interactions on cards and links: small scale (1.02–1.05), slight brightness/border change, 150–250ms ease-out. Avoid large rotations or bouncy easing — keep it precise.
- Respect `prefers-reduced-motion`: disable scroll reveals and count-ups, keep instant state for those users.
- Don't stack multiple animation styles in one section — pick one move per section and repeat it consistently.

## 6. Content & copy tone

- Voice is confident, first-person, and concise: short headline + one supporting sentence, not paragraphs, in the hero and section intros.
- Section eyebrows are short and uppercase (1–3 words).
- Write real, specific copy for the actual person/brand this site is for — avoid generic placeholder phrasing like "passionate about creating solutions" or stock stat numbers; pull real numbers and project names from the user's content.
- Project, role, and tool entries should read like a real CV/portfolio, not template filler.

## 7. Accessibility & responsiveness

- All interactive elements need visible keyboard focus states (don't rely on hover-only affordances).
- Images need real `alt` text describing content, not filenames.
- Form fields need associated labels (visually hidden if needed) and clear validation/error messaging in plain language.
- Layout collapses to a single column under ~768px; stats and project grids stack; nav collapses to a simple menu.
- Maintain WCAG AA contrast between text and background, especially for muted/secondary text on the dark surface.

## 8. What to avoid

- Don't copy text, images, or exact layout markup from the original Sawad template — use it only as a reference for tone, structure, and motion language.
- Don't add decorative numbered markers (01/02/03) outside the experience timeline, where order is meaningful.
- Don't introduce a second accent color or a light-mode variant unless explicitly requested — the identity here is a single dark canvas with one accent.
- Don't over-animate: one signature motion idea (e.g. the stat count-up, or a hero reveal) should be the most elaborate moment; everything else stays quiet.
