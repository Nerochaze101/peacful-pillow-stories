# Peaceful Pillow Stories

A landing page for a children's bedtime storybook subscription service.

## Stack

- **React 19** with **TanStack Start** (SSR / file-based routing)
- **Vite 8** — dev server on **port 8080**, bound to `0.0.0.0` for Replit compatibility
- **Tailwind CSS v4**
- **Bun** package manager

## Running the app

```bash
bun run dev        # development server (port 8080)
bun run build      # production build
bun run preview    # preview the production build
```

The **Start application** workflow runs `bun run dev` automatically.

## Content guide

See **`CONTENT_GUIDE.md`** for step-by-step instructions on updating the hero video, stories, favicon, reviews, and pricing.

For adding new free stories from GitHub, see **`HOW_TO_ADD_STORIES.md`**.

## Key files

| File | What it controls |
|---|---|
| `public/hero.mp4` | Hero background video |
| `public/favicon.png` | Browser tab icon |
| `public/stories/` | Local story cover images and PDFs |
| `src/data/stories.ts` | All free story cards — the only file to edit for stories |
| `src/routes/index.tsx` | Home page (headline, pricing, reviews) |
| `src/components/HeroVideo.tsx` | Hero video component |

## User preferences

- Keep existing TanStack Start + Vite + Tailwind structure
- Story assets served via local `public/stories/` paths or GitHub raw URLs
- Hero background uses `public/hero.mp4`
- Dev server must bind to `0.0.0.0:8080` (Replit requires IPv4)
