# Peaceful Pillow Stories — Content Guide

A quick reference for updating every piece of content in the site without touching any complex code.

---

## 1. Hero Image

The large background image behind the headline on the home page.

**File to replace:** `public/hero.jpg`

**How:**
1. Prepare your image (JPEG recommended, landscape orientation, at least **1280 × 720 px**).
2. Name it `hero.jpg` and drop it into the `public/` folder, overwriting the placeholder.
3. Done — the site picks it up automatically.

**Want to use a different filename or format?**
Open `src/components/HeroImage.tsx` and change the `src` prop:
```tsx
src="/your-image-name.png"   // ← change this line
```

---

## 2. Free Stories (PDFs + Cover Images)

All story data lives in one file: **`src/data/stories.ts`**

### How to add a new story

1. **Upload your files to GitHub.** Put the cover image and PDF in your repo (e.g. in `covers/` and `pdfs/` folders).

2. **Get the raw URL** for each file. In GitHub, click the file → click **Raw** → copy the URL from your browser. It will look like:
   ```
   https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/covers/my-cover.jpg
   https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/pdfs/my-story.pdf
   ```

3. **Open `src/data/stories.ts`** and find the `stories` array near the bottom.

4. **Copy this template** and paste it inside the `[` `]` array (after the last `},`):
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

5. Fill in every field and save.

### Rules
| Field | Notes |
|---|---|
| `slug` | Lowercase letters, numbers, hyphens only. No spaces. |
| `coverUrl` | Portrait image recommended (e.g. 1024 × 1280 px). |
| `pdfUrl` | Must end in `.pdf`. Use a GitHub Raw URL. |
| `ageRange` | Free text, e.g. `"Ages 3–7"` |
| `readingTime` | Free text, e.g. `"5 min read"` |

### How to remove a story
Delete the entire `{ … },` block for that story from the array.

### How to reorder stories
Move the `{ … },` blocks — the first one in the array appears first on the page.

---

## 3. Updating Existing Story URLs

The two starter stories currently have placeholder GitHub URLs. Replace them as soon as you upload the actual files:

Open `src/data/stories.ts` and look for these comments:
```ts
// 👇 Replace with your own GitHub raw image URL
coverUrl: "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/..."
// 👇 Replace with your own GitHub raw PDF URL
pdfUrl:   "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/..."
```

---

## 4. Favicon

The small icon shown in the browser tab.

**File to replace:** `public/favicon.png`

**How:**
1. Create a square image, ideally **512 × 512 px** (PNG with transparency works best).
2. Name it `favicon.png` and put it in `public/`, overwriting the placeholder.
3. Done.

> The `public/favicon.ico` file is still there for legacy browser support. You can ignore it or replace it too.

---

## 5. Reviews

Open `src/routes/index.tsx` and find the `reviews` array near the top of the file (around line 95). The inline comment shows exactly what fields to fill in:

```ts
{
  rating: 5,                          // 1–5 stars
  title: "Your review headline",
  text: "The full review text.",
  author: "Customer Name",
  details: "Parent of a 5-year-old",
},
```

Add as many reviews as you like; they appear in a two-column grid.

---

## 6. Pricing & Checkout Link

The checkout URL is set once at the top of `src/routes/index.tsx`:

```ts
const CHECKOUT = "https://selar.com/peaceful_pillow-checkout";
```

Change the URL there and every button on the page updates automatically.

Pricing text (the dollar amounts and labels) is inside the same file in the **Pricing** section — search for `$3` or `$5` to find them.

---

## 7. Where Files Live (Quick Reference)

```
public/
  hero.jpg          ← hero background image (upload yours here)
  favicon.png       ← browser tab icon (upload yours here)

src/
  data/
    stories.ts      ← all story cards, PDFs, cover images, descriptions
  routes/
    index.tsx       ← home page (hero text, vault features, pricing, reviews)
    free-stories.index.tsx   ← free stories listing page
    free-stories.$slug.tsx   ← individual story reader page
  components/
    HeroImage.tsx   ← swaps the hero image source
```
