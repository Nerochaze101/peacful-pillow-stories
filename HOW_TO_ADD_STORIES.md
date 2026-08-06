# How to Add a New Free Story from GitHub

Follow these steps every time you want to publish a new bedtime story on the site.

---

## What you need before you start

- Your story as a **PDF file** (any size; smaller is better for fast loading)
- A **cover image** for the story (JPG or PNG, portrait orientation recommended — e.g. 800 × 1000 px)
- A GitHub account with a repository to host the files

---

## Step 1 — Upload files to GitHub

1. Open your GitHub repository (create one if you don't have one yet).
2. Upload the cover image into a folder called `covers/`, e.g.:
   ```
   covers/my-new-story.jpg
   ```
3. Upload the PDF into a folder called `pdfs/`, e.g.:
   ```
   pdfs/my-new-story.pdf
   ```
4. Commit the files.

---

## Step 2 — Get the GitHub Raw URLs

GitHub Raw URLs are direct links to your files that the browser can load.

1. In your repo, click the file (e.g. `covers/my-new-story.jpg`).
2. Click the **Raw** button at the top right of the file preview.
3. Copy the URL from your browser address bar. It will look like:
   ```
   https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/covers/my-new-story.jpg
   ```
4. Do the same for the PDF file:
   ```
   https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/pdfs/my-new-story.pdf
   ```

---

## Step 3 — Add the story to the site

Open **`src/data/stories.ts`** in the Replit editor.

Find the `stories` array near the bottom of the file. It looks like this:

```ts
export const stories: Story[] = [
  { ... },   // existing story
  { ... },   // existing story
];
```

**Add a new block** before the closing `]`. Copy this template and fill in your values:

```ts
  {
    slug: "your-story-slug",
    title: "Your Story Title",
    tagline: "One short line that sells the story.",
    ageRange: "Ages 3–7",
    readingTime: "5 min read",
    coverUrl: "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/covers/my-new-story.jpg",
    pdfUrl:   "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/pdfs/my-new-story.pdf",
    description:
      "A short paragraph about what happens in the story and why it works at bedtime.",
    highlights: [
      "What your child will love about it",
      "The gentle lesson inside",
      "Why it calms them at bedtime",
    ],
  },
```

### Field guide

| Field | What to put here |
|---|---|
| `slug` | URL-safe name — lowercase letters, numbers, hyphens only, no spaces. E.g. `"the-sleepy-owl"` |
| `title` | The story's full title |
| `tagline` | One short, enticing line shown on the story card |
| `ageRange` | E.g. `"Ages 3–7"` |
| `readingTime` | E.g. `"5 min read"` |
| `coverUrl` | GitHub raw URL for the cover image |
| `pdfUrl` | GitHub raw URL for the PDF |
| `description` | 2–3 sentences shown on the story detail page |
| `highlights` | 3 bullet points — what makes this story special |

---

## Step 4 — Save and check

1. Save `src/data/stories.ts`.
2. The dev server hot-reloads automatically — your new story card appears on `/free-stories` within seconds.
3. Click the card to confirm the cover image loads and the PDF opens inline.

---

## Removing or reordering stories

- **Remove**: Delete the entire `{ ... },` block for that story.
- **Reorder**: Move the `{ ... },` blocks — the first block in the array appears first on the page.

---

## Quick reference: file locations

```
src/
  data/
    stories.ts          ← THE only file you edit to add/remove stories

public/
  hero.mp4              ← Hero background video (replace to change the hero)
  favicon.png           ← Browser tab icon (replace to change the icon)
  stories/
    cover-*.jpg         ← Sample cover images (served locally)
    *.pdf               ← Sample PDF stories (served locally)
```

For locally-served files (in `public/stories/`), use a path like `/stories/my-cover.jpg` instead of a GitHub URL.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Cover image doesn't load | Make sure the GitHub raw URL ends in `.jpg` or `.png` and the file is committed (not just staged) |
| PDF shows blank / 404 | Double-check the GitHub raw URL. It must start with `https://raw.githubusercontent.com/` |
| Story doesn't appear | Check that the `slug` has no spaces or uppercase letters |
| Changes don't show | Save the file and wait 2–3 seconds for the hot-reload |
