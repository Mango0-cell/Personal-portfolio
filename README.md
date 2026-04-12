# Personal Portfolio — Eduardo Meneses

Bilingual personal portfolio (ES/EN) built with Next.js, React 19, TypeScript, Tailwind CSS v4, and i18next.

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

## Sections

- **Hero** — Animated name reveal, photo, "available to work" badge, CV download, encrypt button
- **About** — Bento grid cards with bio, stats and feature highlights
- **Skills** — Infinite-scroll rows of tech stack pills
- **Projects** — GSAP-powered elastic card swap stack with click-to-front interaction
- **Contact** — mailto form and social links

## Tech Stack

| Technology | Role |
|---|---|
| Next.js 15 (App Router) | Framework |
| React 19 | UI library |
| TypeScript | Static typing |
| Tailwind CSS v4 | Styling |
| GSAP | Card animations (CardSwap, MagicBento) |
| motion/react | Scroll reveal & transitions |
| OGL (WebGL) | Particle background |
| Lenis | Smooth scroll |
| i18next | ES / EN internationalization |
| Lucide React | Icons |

## Project Structure

```
app/
├── layout.tsx          # Root layout & metadata
├── page.tsx            # Client-only entry (SSR disabled)
└── globals.css         # CSS variables, Tailwind, keyframes
src/
├── components/
│   ├── CardSwap.tsx    # GSAP elastic card stack animation
│   ├── DecryptedText.tsx  # Character-scramble reveal
│   ├── GradualBlur.tsx    # Edge-blur scroll overlay
│   ├── MagicBento.tsx     # GSAP particle hover bento grid
│   ├── Particles.tsx      # OGL WebGL particle background
│   ├── ScrollStack.tsx    # Lenis sticky card stack
│   ├── layout/
│   │   └── Navbar.tsx     # Floating pill nav + language toggle
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
├── utils/constants.ts  # Non-translatable data (URLs, projects, tech stack)
└── i18n.ts             # i18next config (HttpBackend)
public/
├── assets/             # Static images and CV PDF
└── locales/
    ├── en/translation.json
    └── es/translation.json
```

## Getting Started

```bash
git clone https://github.com/Mango0-cell/Personal-portfolio.git
cd Personal-portfolio
npm install
npm run dev        # http://localhost:3000
```

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Internationalization

All visible text lives in `public/locales/{en,es}/translation.json`. The language is detected automatically from the browser and can be toggled via the navbar button.

---

Made with React + Next.js + Tailwind CSS by [Eduardo Meneses](https://github.com/Mango0-cell)
