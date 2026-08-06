/* =========================================================
   FREE STORIES DATA
   =================

   HOW TO ADD A NEW FREE STORY
   ---------------------------
   1. Upload your cover image and PDF to your GitHub repo.
   2. Get the raw URL for each file:
        https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/covers/cover.jpg
        https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/pdfs/story.pdf
   3. Copy the template below, paste it into the `stories` array, and fill in the values.

   TEMPLATE — copy everything between the dashes:
   ------------------------------------------------
   {
     slug: "your-story-slug",            // becomes the URL: /free-stories/your-story-slug
     title: "Your Story Title",
     tagline: "One short line that sells the story.",
     ageRange: "Ages 3–7",
     readingTime: "5 min read",
     coverUrl: "https://raw.githubusercontent.com/USER/REPO/main/covers/cover.jpg",
     pdfUrl:   "https://raw.githubusercontent.com/USER/REPO/main/pdfs/story.pdf",
     description:
       "A short paragraph describing what happens in the story and how it helps at bedtime.",
     highlights: [
       "What your child will love",
       "The gentle lesson inside",
       "Why it works at bedtime",
     ],
   },
   ------------------------------------------------

   TIPS
   ----
   - `slug` must be lowercase letters, numbers, and hyphens only (no spaces).
   - `coverUrl` should be a JPG/PNG, ideally portrait/tall (e.g. 1024 × 1280 px).
   - `pdfUrl` must be a direct link to the .pdf file (GitHub raw URL works great).
   - You can have as many stories in the array as you like.
   - To REMOVE a story, delete its entire { ... } block from the array.
   - To REORDER stories, move the blocks around — the first entry appears first on the page.

   ========================================================= */

export type Story = {
  slug: string;
  title: string;
  tagline: string;
  ageRange: string;
  readingTime: string;
  /** Direct URL to the cover image (JPG, PNG, or WebP). */
  coverUrl: string;
  /** Direct URL to the PDF file. */
  pdfUrl: string;
  description: string;
  highlights: string[];
};

// ─── ADD / EDIT YOUR STORIES BELOW ───────────────────────────────────────────

export const stories: Story[] = [
  {
    slug: "the-lantern-bunny",
    title: "The Lantern Bunny",
    tagline: "A tiny bunny says goodnight to the whole meadow.",
    ageRange: "Ages 3–7",
    readingTime: "4 min read",
    // 👇 Replace with your own GitHub raw image URL, e.g.:
    //    https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/covers/lantern-bunny.jpg
    coverUrl: "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/covers/story-lantern.jpg",
    // 👇 Replace with your own GitHub raw PDF URL, e.g.:
    //    https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/pdfs/the-lantern-bunny.pdf
    pdfUrl: "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/pdfs/the-lantern-bunny.pdf",
    description:
      "When the moon slips over the hills, Pip the bunny lights his little lantern and wanders out to say goodnight to everyone he loves — the sleepy beetles, the tall grass, and the pond that holds the moon in its lap. A slow, warm story built to bring a busy mind down to a whisper.",
    highlights: [
      "Gentle repetition that settles racing thoughts",
      "A soft goodnight ritual your child can copy",
      "Ends with a calming bedtime reflection question",
    ],
  },
  {
    slug: "the-cloud-that-carried-dreams",
    title: "The Cloud That Carried Dreams",
    tagline: "A little bear collects one dream from every star.",
    ageRange: "Ages 4–8",
    readingTime: "5 min read",
    // 👇 Replace with your GitHub raw image URL
    coverUrl: "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/covers/story-cloud.jpg",
    // 👇 Replace with your GitHub raw PDF URL
    pdfUrl: "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/pdfs/the-cloud-that-carried-dreams.pdf",
    description:
      "Bo the bear finds a cloud shaped exactly like his bed and drifts past the stars, gathering one soft dream from each of them — one to keep, and one to share with someone he loves. A dreamy story about kindness and letting the day go.",
    highlights: [
      "Encourages sharing and gratitude",
      "Dreamy imagery that eases children into sleep",
      "Beautiful full-page illustrations, print friendly",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────

export const getStory = (slug: string) => stories.find((s) => s.slug === slug);
