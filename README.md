# Samuel — Portfolio (Aura-styled)

A cinematic, dark, motion-driven portfolio built with **React 18 + TypeScript
+ Vite + Tailwind CSS + motion/react (Framer Motion) + lucide-react** —
styled after the "Aura" landing page reference (glassy liquid cards, a
shiny animated gradient headline, a macOS-style bar, and a fixed animated
backdrop) but built entirely from Samuel's real resume content.

## What's different from a copy-paste of Aura

- The background is an **original animated gradient-blob backdrop**
  (`BackgroundAura.tsx`, built with Framer Motion + CSS blur) rather than
  Aura's own background video — that video belongs to that product.
- The macOS-style bar became a **status bar** (`StatusBar.tsx`) showing a
  terminal-style prompt and a live clock.
- The inbox mockup became a **console/dashboard mockup**
  (`DashboardMockup.tsx`) — a clickable list of Samuel's real projects,
  internship, and certifications, with a detail pane on the right that
  shows the actual resume content for whichever item is selected.
- The pricing section became **"Focus Areas"** (`FocusAreas.tsx`) — same
  giant watermark + glass-card layout, but each card shows a real skill
  category and its technologies instead of a price.
- Testimonials became **"Highlights"** — factual callouts about the real
  projects and internship, not invented quotes from people who don't exist.
- Everything else (liquid-glass cards, shiny gradient text, noise-filtered
  headline, staggered motion timings) follows the same techniques as the
  reference.

## Requirements

- Node.js 18+ and npm

## Setup

```bash
cd samuel-aura-portfolio
npm install
```

## Run locally

```bash
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Editing content

- **Resume facts** (skills, projects, experience, certifications) live in
  `src/components/DashboardMockup.tsx`, `SkillsShowcase.tsx`, `About.tsx`,
  `Highlights.tsx`, and `FocusAreas.tsx` — update the arrays at the top of
  each file.
- **Resume PDF**: replace `public/Samuel_W_Resume.pdf` with an updated
  file of the same name, or update the `href` in
  `src/components/Primitives.tsx` (`ResumeButton`).
- **GitHub / LinkedIn links**: search for `github.com/Samueljacob55` and
  `linkedin.com/in/contact-samuel` across `src/components/` to update.
- **Colors / theme**: the `brand` color and font family are set in
  `tailwind.config.js`; the gradient stops used on shiny headline text are
  in `gradientStyle` inside `src/components/Primitives.tsx`.

## Project structure

```
samuel-aura-portfolio/
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── Samuel_W_Resume.pdf
├── src/
│   ├── main.tsx
│   ├── App.tsx                 → assembles all sections + backdrop + noise filter
│   ├── index.css                → Tailwind, Inter import, liquid-glass, shiny animation, c3-* focus-area CSS
│   └── components/
│       ├── Primitives.tsx         → LogoMark, ResumeButton, SectionEyebrow, icons, gradientStyle
│       ├── BackgroundAura.tsx      → animated gradient backdrop
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── StatusBar.tsx
│       ├── DashboardMockup.tsx      → interactive projects/experience/certifications console
│       ├── About.tsx
│       ├── SkillsShowcase.tsx
│       ├── ToolCloud.tsx
│       ├── Highlights.tsx
│       ├── FocusAreas.tsx            → custom c3-* CSS, watermark headline
│       ├── FinalCTA.tsx
│       └── Footer.tsx
```

## Deploying

Any static host works — run `npm run build` and deploy the `dist/` folder
to **Vercel**, **Netlify**, or **GitHub Pages**.
