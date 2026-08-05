import { createFileRoute } from "@tanstack/react-router";
import { Moon, Sparkles, BookOpen, Tablet, Palette, MessageCircleHeart, Check, Star } from "lucide-react";
import heroVideo from "@/assets/hero-forest.mp4.asset.json";

const CHECKOUT = "https://selar.com/peaceful_pillow-checkout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Peaceful Pillow Stories — Weekly Bedtime Storybooks" },
      {
        name: "description",
        content:
          "Beautifully illustrated, screen-free bedtime storybooks delivered to your device every week. Calm, wholesome PDF stories for kids from $3/week.",
      },
      { property: "og:title", content: "Peaceful Pillow Stories — Weekly Bedtime Storybooks" },
      {
        property: "og:description",
        content:
          "Transform bedtime into a peaceful, screen-free adventure with weekly illustrated storybooks for your child.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const vault = [
  {
    icon: BookOpen,
    title: "Weekly Storybook Drops",
    body: "Fresh, high-resolution illustrated PDF stories added to the vault every week.",
  },
  {
    icon: Tablet,
    title: "Tablet & Mobile Optimized",
    body: "Formatted to look stunning on iPads, Android tablets, smartphones, or printed out at home.",
  },
  {
    icon: Palette,
    title: "Bonus Printable Packs",
    body: "Access to coloring sheets, bedtime trackers, and calming night routines.",
  },
  {
    icon: MessageCircleHeart,
    title: "Bedtime Reflection Prompts",
    body: "Guided, cozy reflection questions at the end of each book to close out the night together.",
  },
];

const perks = [
  "Unlimited Access to Telegram Vault",
  "New Illustrated Storybooks Weekly",
  "Bonus Printable Activity Packs",
  "Cancel Anytime",
];

function CTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={CHECKOUT}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-moon inline-flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg ${className}`}
    >
      {children}
    </a>
  );
}

function Index() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 pb-20 pt-12 sm:px-8">
      {/* HERO */}
      <section className="starfield rounded-4xl px-2 py-8 text-center sm:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          <Moon className="h-3.5 w-3.5" /> Peaceful Pillow Stories
        </span>
        <h1 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
          Transform Bedtime Into a Peaceful, Screen-Free Adventure 🌙✨
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Give your child high-quality, beautifully illustrated bedtime storybooks delivered straight
          to your device every single week.
        </p>

        <div className="surface-card mx-auto mt-9 overflow-hidden p-2">
          <img
            src={heroForest}
            alt="Illustrated boy in pajamas holding a lantern in a moonlit forest with an owl and a deer"
            width={1280}
            height={800}
            className="w-full rounded-3xl"
          />
        </div>

        <div className="mt-9">
          <CTA>🔑 Claim Your Access Pass Now</CTA>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="mt-20 grid gap-6 md:grid-cols-2">
        <div className="surface-card p-8">
          <h2 className="text-2xl font-bold">The Bedtime Struggle</h2>
          <ul className="mt-5 space-y-4 text-muted-foreground">
            <li>
              Tired of scrolling endlessly for bedtime stories that are too fast-paced, loud, or
              poorly written?
            </li>
            <li>
              Looking for calm, wholesome content that helps active minds wind down naturally without
              screen overstimulation?
            </li>
          </ul>
        </div>
        <div className="surface-card border-primary/40 p-8">
          <h2 className="text-2xl font-bold text-primary">The Peaceful Solution</h2>
          <p className="mt-5 text-muted-foreground">
            Peaceful Pillow Stories brings you high-quality, tablet-ready PDF storybooks crafted
            specifically for bedtime calm. Each story features gentle animal characters, lessons in
            courage and empathy, and reflection questions designed to build sweet nighttime
            connections.
          </p>
        </div>
      </section>

      {/* VAULT */}
      <section className="mt-20">
        <h2 className="text-center text-3xl font-black sm:text-4xl">
          What's Inside the Unlimited Telegram Vault? 📚
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {vault.map((item) => (
            <div key={item.title} className="surface-card p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="mt-20">
        <h2 className="text-center text-3xl font-black sm:text-4xl">Choose Your Bedtime Pass</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="surface-card flex flex-col p-8">
            <h3 className="text-xl font-bold">Weekly Pass</h3>
            <p className="mt-3 text-4xl font-black text-primary">
              $3 <span className="text-base font-semibold text-muted-foreground">/ week</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">⚡ Flexible weekly access</p>
            <ul className="mt-6 flex-1 space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <CTA className="mt-8 w-full">Get Weekly Access — $3</CTA>
          </div>

          <div className="surface-card relative flex flex-col border-primary/60 p-8">
            <span className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-black uppercase tracking-wider text-primary-foreground">
              <Sparkles className="h-3 w-3" /> Most Popular
            </span>
            <h3 className="text-xl font-bold">14-Day Pass</h3>
            <p className="mt-3 text-4xl font-black text-primary">
              $5 <span className="text-base font-semibold text-muted-foreground">/ 14 days</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">⚡ Save 16% over weekly billing!</p>
            <ul className="mt-6 flex-1 space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <CTA className="mt-8 w-full">Get 14-Day Access — $5</CTA>
          </div>
        </div>
      </section>

      {/* REVIEW */}
      <section className="mt-20">
        <h2 className="text-center text-3xl font-black sm:text-4xl">Parent Reviews</h2>
        <figure className="surface-card mx-auto mt-8 max-w-3xl p-8 text-center">
          <div className="flex justify-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="mt-5 text-xl font-bold">
            "A complete game-changer for our bedtime routine!"
          </p>
          <blockquote className="mt-4 text-muted-foreground">
            "As a busy parent, getting my little ones to wind down at night used to be a challenge.
            The stories from Peaceful Pillow Stories are beautifully written, soothing, and packed
            with soft, gentle themes that calm their active minds. My child asks for 'just one more
            story' every single night!"
          </blockquote>
          <figcaption className="mt-5 text-sm font-semibold">
            — Sarah M., Parent of a 4-year-old
          </figcaption>
        </figure>
      </section>

      {/* FINAL CTA */}
      <section className="starfield mt-20 rounded-4xl border border-border bg-card/60 px-6 py-14 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-black sm:text-4xl">
          Ready to make bedtime the favorite part of your child's day?
        </h2>
        <div className="mt-8">
          <CTA>🚀 Unlock the Story Vault Here</CTA>
        </div>
      </section>

      <footer className="mt-12 text-center text-sm text-muted-foreground">
        © Peaceful Pillow Stories by Nerochaze. All rights reserved.
      </footer>
    </main>
  );
}
