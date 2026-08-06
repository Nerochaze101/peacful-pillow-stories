# Peaceful Pillow Stories

A landing page for a children's bedtime storybook subscription service.

## Stack

- **React 19** with **TanStack Start** (SSR/file-based routing)
- **Vite 8** — dev server on **port 8080**, bound to `0.0.0.0` for Replit compatibility
- **Tailwind CSS v4**
- **Bun** package manager

## Running the app

```bash
bun run dev        # development server (port 8080)
bun run build      # production build
bun run preview    # preview the production build
```

The "Start application" workflow runs `bun run dev` automatically.

## Content guide

See **`CONTENT_GUIDE.md`** in the project root for step-by-step instructions on updating:
- Hero image
- Free stories (cover images + PDFs via GitHub raw URLs)
- Favicon
- Reviews and pricing

## Key files

| File | What it controls |
|---|---|
| `public/hero.jpg` | Hero background image — replace with your own |
| `public/favicon.png` | Browser tab icon — replace with your own |
| `src/data/stories.ts` | All free story cards, PDF links, cover images |
| `src/routes/index.tsx` | Home page (headline, vault features, pricing, reviews) |
| `src/components/HeroImage.tsx` | Hero image component (change `src` if using a different filename) |

## User preferences

- Keep existing project structure (TanStack Start + Vite + Tailwind)
- Story assets (PDFs + cover images) served via GitHub raw URLs
- Hero background uses a local file in `public/`
