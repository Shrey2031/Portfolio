# Shreya Kumari — Developer Portfolio

Premium, animated developer portfolio. React + TypeScript + Vite + Tailwind v4 + Framer Motion + Lenis + React Router.

## Status: Complete (Build 5)

Every section from the brief is built: Hero, About, Skills, Projects (with case-study modals), Experience, Achievements, Services, Contact, plus loading screen, dark/light theme, custom cursor, scroll progress, and a custom 404 page.





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



