import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Clock, Moon } from "lucide-react";

import { stories } from "@/data/stories";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/free-stories/")({
  head: () => ({
    meta: [
      { title: "Free Bedtime Stories — Peaceful Pillow Stories" },
      {
        name: "description",
        content:
          "Read and download free illustrated bedtime story PDFs for kids. Calm, screen-free stories you can read tonight — no signup needed.",
      },
      { property: "og:title", content: "Free Bedtime Stories — Peaceful Pillow Stories" },
      {
        property: "og:description",
        content:
          "Download free illustrated bedtime story PDFs for your child. Calm, gentle and ready to read tonight.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FreeStories,
});

function FreeStories() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 pb-20 pt-12 sm:px-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-bold text-primary/80 hover:text-primary"
      >
        <Moon className="h-4 w-4" /> Peaceful Pillow Stories
      </Link>

      <header className="mt-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-primary">
          <BookOpen className="h-3.5 w-3.5" /> Free Stories
        </span>
        <h1 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
          Free bedtime stories you can read tonight 🌙
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          A little taste of the vault. Preview each story, then open or download the
          full illustrated PDF — no signup, no screens after lights out.
        </p>
      </header>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        {stories.map((story, i) => (
          <Reveal key={story.slug} delay={i * 120}>
            <Link
              to="/free-stories/$slug"
              params={{ slug: story.slug }}
              className="surface-card hover-lift block h-full overflow-hidden"
            >
              <img
                src={story.coverUrl}
                alt={`Cover illustration for ${story.title}`}
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-black text-primary">{story.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{story.tagline}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-bold text-primary/80">
                  <span className="rounded-full bg-secondary px-3 py-1">
                    {story.ageRange}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {story.readingTime}
                  </span>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-primary">
                  Read the story <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
