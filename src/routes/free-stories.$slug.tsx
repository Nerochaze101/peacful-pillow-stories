import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Clock, Download, FileText } from "lucide-react";

import { getStory, stories } from "@/data/stories";
import { PdfPreview } from "@/components/PdfPreview";

export const Route = createFileRoute("/free-stories/$slug")({
  loader: ({ params }) => {
    const story = getStory(params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Story not found — Peaceful Pillow Stories" }, { name: "robots", content: "noindex" }],
      };
    }
    const { story } = loaderData;
    return {
      meta: [
        { title: `${story.title} — Free Bedtime Story PDF` },
        { name: "description", content: story.tagline },
        { property: "og:title", content: `${story.title} — Free Bedtime Story PDF` },
        { property: "og:description", content: story.tagline },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: StoryPage,
});

function StoryPage() {
  const { story } = Route.useLoaderData();
  const others = stories.filter((s) => s.slug !== story.slug);

  return (
    <main className="mx-auto w-full max-w-5xl px-5 pb-20 pt-12 sm:px-8">
      <Link
        to="/free-stories"
        className="inline-flex items-center gap-2 text-sm font-bold text-primary/80 hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> All free stories
      </Link>

      <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_1.2fr] md:items-start">
        <img
          src={story.coverUrl}
          alt={`Cover illustration for ${story.title}`}
          width={1024}
          height={1280}
          className="w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
        />

        <div className="min-w-0">
          <h1 className="text-3xl font-black leading-tight sm:text-4xl">{story.title}</h1>
          <p className="mt-3 text-lg text-primary/80">{story.tagline}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-bold text-primary/80">
            <span className="rounded-full bg-secondary px-3 py-1">{story.ageRange}</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {story.readingTime}
            </span>
            <span className="rounded-full bg-secondary px-3 py-1">Free PDF</span>
          </div>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {story.description}
          </p>

          <ul className="mt-6 space-y-3">
            {story.highlights.map((h: string) => (
              <li key={h} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={story.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-moon inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base"
            >
              <FileText className="h-5 w-5" /> Open the PDF
            </a>
            <a
              href={story.pdfUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-base font-extrabold text-primary transition-colors hover:bg-secondary"
            >
              <Download className="h-5 w-5" /> Download
            </a>
          </div>
        </div>
      </div>

      {/* PDF PREVIEW */}
      <section className="mt-14">
        <h2 className="text-2xl font-black">Read it right here</h2>
        <div className="surface-card mt-4 overflow-hidden p-2">
          <PdfPreview pdfUrl={story.pdfUrl} title={story.title} />
        </div>
      </section>


      {others.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-black">More free stories</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/free-stories/$slug"
                params={{ slug: s.slug }}
                className="surface-card hover-lift flex items-center gap-4 p-4"
              >
                <img
                  src={s.coverUrl}
                  alt={`Cover illustration for ${s.title}`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-20 w-16 shrink-0 rounded-xl object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate font-black text-primary">{s.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
