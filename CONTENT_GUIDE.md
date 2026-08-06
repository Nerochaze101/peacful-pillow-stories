# Peaceful Pillow Stories — Content Guide

A quick reference for updating every piece of content in the site without touching any complex code.

---

## 1. Hero Video

The looping background video behind the headline on the home page.

**File to replace:** `public/hero.mp4`

**How:**
1. Prepare your video (MP4, landscape orientation, 720p or 1080p, short loop of 5–15 seconds).
2. Name it `hero.mp4` and drop it into the `public/` folder, overwriting the existing file.
3. Done — the site picks it up automatically.

**Want a different filename?**
Open `src/components/HeroVideo.tsx` and change `/hero.mp4` to your new filename.

> The video only plays after the page has loaded and never slows down the initial paint. On slow connections or when "reduce motion" is enabled, the dark overlay colour shows instead.

---

## 2. Free Stories (PDFs + Cover Images)

All story data lives in one file: **`src/data/stories.ts`**

### How to add a story from your GitHub repo

1. **Upload files to GitHub.** Put the cover image and PDF in your repo (e.g. `covers/` and `pdfs/` folders).

2. **Get the raw URL** for each file — click the file in GitHub → click **Raw** → copy the URL:
   ```
   https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/covers/my-cover.jpg
   https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/pdfs/my-story.pdf
   ```

3. **Open `src/data/stories.ts`** and paste a new block inside the `stories` array:
   ```ts
   {
     slug: "your-story-slug",            // URL: /free-stories/your-story-slug
     title: "Your Story Title",
     tagline: "One short line that sells the story.",
     ageRange: "Ages 3–7",
     readingTime: "5 min read",
     coverUrl: "https://raw.githubusercontent.com/USER/REPO/main/covers/cover.jpg",
     pdfUrl:   "https://raw.githubusercontent.com/USER/REPO/main/pdfs/story.pdf",
     description:
       "A short paragraph describing the story and why it works at bedtime.",
     highlights: [
       "What your child will love",
       "The gentle lesson inside",
       "Why it works at bedtime",
     ],
   },
   ```

### How to add a story stored locally in this repo

If you prefer to keep files inside the project, put them in `public/stories/` and use a local path:
```ts
coverUrl: "/stories/my-cover.jpg",
pdfUrl:   "/stories/my-story.pdf",
```

### Field rules

| Field | Notes |
|---|---|
| `slug` | Lowercase letters, numbers, hyphens only — no spaces |
| `coverUrl` | Portrait image recommended (e.g. 800 × 1000 px) |
| `pdfUrl` | Must end in `.pdf`. Use GitHub raw URL or a local `/stories/` path |
| `ageRange` | Free text, e.g. `"Ages 3–7"` |
| `readingTime` | Free text, e.g. `"5 min read"` |

To **remove** a story: delete its entire `{ … },` block.  
To **reorder** stories: move the blocks — first in the array = first on the page.

---

## 3. Favicon

The small icon shown in the browser tab.

**File to replace:** `public/favicon.png`

Prepare a square PNG (512 × 512 px works well), name it `favicon.png`, and put it in `public/`.

---

## 4. Reviews

Open `src/routes/index.tsx` and find the `reviews` array (around line 95). Copy and fill in:

```ts
{
  rating: 5,                          // 1–5 stars
  title: "Your review headline",
  text: "The full review text.",
  author: "Customer Name",
  details: "Parent of a 5-year-old",
},
```

---

## 5. Pricing & Checkout Link

The checkout URL is set once at the top of `src/routes/index.tsx`:

```ts
const CHECKOUT = "https://selar.com/peaceful_pillow-checkout";
```

Change it there and every button on the page updates automatically.

---

## 6. Quick File Reference

```
public/
  hero.mp4              ← hero background video
  favicon.png           ← browser tab icon
  stories/
    cover-*.jpg         ← story cover images (local)
    *.pdf               ← story PDF files (local)

src/
  data/
    stories.ts          ← THE file to edit for all story cards
  routes/
    index.tsx           ← home page (headline, pricing, reviews)
    free-stories.index.tsx   ← free stories listing page
    free-stories.$slug.tsx   ← individual story reader page
  components/
    HeroVideo.tsx       ← swap src here if changing video filename
```
