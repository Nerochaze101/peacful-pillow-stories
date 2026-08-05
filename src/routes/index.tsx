import { createFileRoute } from "@tanstack/react-router";
import { Moon, Sparkles, BookOpen, Tablet, Palette, MessageCircleHeart, Check, Star } from "lucide-react";
import heroVideo from "@/assets/hero-forest.mp4.asset.json";
import { Reveal } from "@/components/Reveal";


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
      <section className="relative -mx-5 overflow-hidden rounded-4xl sm:-mx-8">
        <video
          src={heroVideo.url}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          aria-label="Animated bedtime story clip of a boy in a moonlit forest"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--background)_35%,transparent),color-mix(in_oklab,var(--background)_75%,transparent))]" />
        <div className="starfield relative flex min-h-[80vh] flex-col items-center justify-center px-6 py-20 text-center sm:px-10">
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground backdrop-blur-sm">
            <Moon className="h-3.5 w-3.5" /> Peaceful Pillow Stories
          </span>
          <h1
            className="animate-fade-in mt-6 text-4xl font-black leading-tight drop-shadow-lg sm:text-6xl"
            style={{ animationDelay: "120ms", animationFillMode: "backwards" }}
          >
            Transform Bedtime Into a Peaceful, Screen-Free Adventure 🌙✨
          </h1>
          <p
            className="animate-fade-in mx-auto mt-5 max-w-2xl text-lg text-foreground/85"
            style={{ animationDelay: "260ms", animationFillMode: "backwards" }}
          >
            Give your child high-quality, beautifully illustrated bedtime storybooks delivered
            straight to your device every single week.
          </p>
          <div
            className="animate-fade-in mt-10"
            style={{ animationDelay: "400ms", animationFillMode: "backwards" }}
          >
            <CTA className="float-slow">🔑 Claim Your Access Pass Now</CTA>
          </div>
        </div>
      </section>


      {/* PROBLEM / SOLUTION */}
      <section className="mt-20 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="surface-card hover-lift h-full p-8">
            <h2 className="text-2xl font-bold">The Bedtime Struggle</h2>
            <ul className="mt-5 space-y-4 text-muted-foreground">
              <li>
                Tired of scrolling endlessly for bedtime stories that are too fast-paced, loud, or
                poorly written?
              </li>
              <li>
                Looking for calm, wholesome content that helps active minds wind down naturally
                without screen overstimulation?
              </li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="surface-card hover-lift h-full border-primary/40 p-8">
            <h2 className="text-2xl font-bold text-primary">The Peaceful Solution</h2>
            <p className="mt-5 text-muted-foreground">
              Peaceful Pillow Stories brings you high-quality, tablet-ready PDF storybooks crafted
              specifically for bedtime calm. Each story features gentle animal characters, lessons in
              courage and empathy, and reflection questions designed to build sweet nighttime
              connections.
            </p>
          </div>
        </Reveal>
      </section>

      {/* VAULT */}
      <section className="mt-20">
        <Reveal>
          <h2 className="text-center text-3xl font-black sm:text-4xl">
            What's Inside the Unlimited Telegram Vault? 📚
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {vault.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="surface-card hover-lift h-full p-7">
                <div className="float-slow flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="mt-20">
        <Reveal>
          <h2 className="text-center text-3xl font-black sm:text-4xl">Choose Your Bedtime Pass</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="surface-card hover-lift flex h-full flex-col p-8">
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
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-card hover-lift relative flex h-full flex-col border-primary/60 p-8">
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
          </Reveal>
        </div>
      </section>

      {/* REVIEW */}
      <section className="mt-20">
        <Reveal>
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
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <Reveal>
        <section className="starfield mt-20 rounded-4xl border border-border bg-card/60 px-6 py-14 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-black sm:text-4xl">
            Ready to make bedtime the favorite part of your child's day?
          </h2>
          <div className="mt-8">
            <CTA className="float-slow">🚀 Unlock the Story Vault Here</CTA>
          </div>
        </section>
      </Reveal>


      <footer className="mt-12 text-center text-sm text-muted-foreground">
        © Peaceful Pillow Stories by Nerochaze. All rights reserved.
      </footer>
    </main>
  );
}
