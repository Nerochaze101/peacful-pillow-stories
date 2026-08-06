/* =========================================================
   FREE STORIES

   HOW TO ADD A NEW FREE STORY
   ---------------------------
   Copy the template below, paste it into the `stories` array,
   and replace the values.

   - `pdfUrl`   : a direct link to your PDF (e.g. a raw GitHub URL:
                  https://raw.githubusercontent.com/USER/REPO/main/story.pdf)
   - `coverUrl` : a direct link to the cover image
   - `slug`     : the URL of the story page -> /free-stories/your-slug

   {
     slug: "your-story-slug",
     title: "Your Story Title",
     tagline: "One short line that sells the story.",
     ageRange: "Ages 3–7",
     readingTime: "5 min read",
     coverUrl: "https://raw.githubusercontent.com/USER/REPO/main/cover.jpg",
     pdfUrl: "https://raw.githubusercontent.com/USER/REPO/main/story.pdf",
     description:
       "A short paragraph describing what happens in the story and how it helps at bedtime.",
     highlights: [
       "What your child will love",
       "The gentle lesson inside",
       "Why it works at bedtime",
     ],
   },

   ========================================================= */

import lanternCover from "@/assets/stories/story-lantern.jpg.asset.json";
import cloudCover from "@/assets/stories/story-cloud.jpg.asset.json";
import lanternPdf from "@/assets/stories/the-lantern-bunny.pdf.asset.json";
import cloudPdf from "@/assets/stories/the-cloud-that-carried-dreams.pdf.asset.json";

export type Story = {
  slug: string;
  title: string;
  tagline: string;
  ageRange: string;
  readingTime: string;
  coverUrl: string;
  pdfUrl: string;
  description: string;
  highlights: string[];
};

export const stories: Story[] = [
  {
    slug: "the-lantern-bunny",
    title: "The Lantern Bunny",
    tagline: "A tiny bunny says goodnight to the whole meadow.",
    ageRange: "Ages 3–7",
    readingTime: "4 min read",
    coverUrl: lanternCover.url,
    pdfUrl: lanternPdf.url,
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
    coverUrl: cloudCover.url,
    pdfUrl: cloudPdf.url,
    description:
      "Bo the bear finds a cloud shaped exactly like his bed and drifts past the stars, gathering one soft dream from each of them — one to keep, and one to share with someone he loves. A dreamy story about kindness and letting the day go.",
    highlights: [
      "Encourages sharing and gratitude",
      "Dreamy imagery that eases children into sleep",
      "Beautiful full-page illustrations, print friendly",
    ],
  },
];

export const getStory = (slug: string) => stories.find((s) => s.slug === slug);
