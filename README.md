# Shreya Kumari — Developer Portfolio

Premium, animated developer portfolio. React + TypeScript + Vite + Tailwind v4 + Framer Motion + Lenis + React Router.

## Status: Complete (Build 5)

Every section from the brief is built: Hero, About, Skills, Projects (with case-study modals), Experience, Achievements, Services, Contact, plus loading screen, dark/light theme, custom cursor, scroll progress, and a custom 404 page.

Testimonials was intentionally skipped — add it later once you have quotes to include (from Zyngate, hackathon teammates, etc.) rather than shipping placeholder text.
Certifications was also skipped for the same reason — no fabricated cert cards.

## Before you deploy — 3 things to finish

1. **Formspree endpoint**: in `src/components/sections/contact/Contact.tsx`, replace
   `FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"` with your real form ID from formspree.io (free tier is enough).
2. **Resume file**: add a real `resume.pdf` to the `public/` folder — the Hero's "Resume" button downloads `/resume.pdf`.
3. **LinkedIn URL**: `src/data/profile.ts` has a placeholder LinkedIn link — swap in your real profile URL.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## Edit your content in one place

Everything personal lives in `src/data/`:

- `profile.ts` — name, tagline, contact links, resume path, terminal commands, stats
- `nav.ts` — nav bar links
- `about.ts` — intro, education, timeline, strengths
- `skills.ts` — skill categories and proficiency tiers
- `projects.ts` — full case-study content for each project
- `experience.ts` — internships
- `achievements.ts` — stats, hackathons, coursework, GitHub username
- `services.ts` — service offerings

## Structure

```
src/
  pages/        Home (assembles all sections), NotFound (404)
  components/
    layout/     Navbar, Footer, LoadingScreen, ScrollProgress, CustomCursor
    hero/       Hero, TerminalWindow, HeroBackground, ScrollIndicator
    sections/   about/, skills/, projects/, experience/, achievements/, services/, contact/
    ui/         StatusBadge, SocialLinks, ThemeToggle, TierDots (small reusable pieces)
  hooks/        useLenis, useTypewriter, useTheme
  data/         all editable content
  index.css     design tokens + global styles
```

## Design system

- **Colors:** ink-950/900/850/800 (surfaces), fog-100/300/500 (text), amber-400 (primary accent), teal-400 (secondary/status), rose-400 (used sparingly)
- **Type:** Fraunces (display/headlines), JetBrains Mono (labels, code, timestamps), Inter (body)
- **Motif:** the site reads like a build log — status badges (`● deployed`), terminal command labels (`$ cat skills.json`) instead of generic numbering

## Deploying

Any static host works (Vercel, Netlify, Render Static Site, GitHub Pages). Build command: `npm run build`. Output directory: `dist`. Since this uses React Router, configure your host's rewrite rule so all paths serve `index.html` (same fix you already used on Render for CampusHub — `/*` → `/index.html`).

