import { createFileRoute } from "@tanstack/react-router";
import {
  Moon,
  Sparkles,
  BookOpen,
  Tablet,
  Palette,
  MessageCircleHeart,
  Check,
  Star,
} from "lucide-react";
import heroVideo from "@/assets/hero-forest.mp4.asset.json";
import { Reveal } from "@/components/Reveal";

const CHECKOUT = "https://selar.com/peaceful_pillow-checkout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Peaceful Pillow Stories — Weekly Bedtime Storybooks",
      },
      {
        name: "description",
        content:
          "Beautifully illustrated, screen-free bedtime storybooks delivered to your device every week. Calm, wholesome PDF stories for kids from $3/week.",
      },
      {
        property: "og:title",
        content: "Peaceful Pillow Stories — Weekly Bedtime Storybooks",
      },
      {
        property: "og:description",
        content:
          "Transform bedtime into a peaceful, screen-free adventure with weekly illustrated storybooks for your child.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
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

/* =========================================================
   REVIEWS

   To add a new review, copy this:

   {
     rating: 4,
     title: "Your review headline",
     text: "Your full review text goes here.",
     author: "Customer Name",
     details: "Parent of a 5-year-old",
   },

   ========================================================= */

const reviews = [
  {
    rating: 5,
    title: "A complete game-changer for our bedtime routine!",
    text: "As a busy parent, getting my little ones to wind down at night used to be a challenge. The stories from Peaceful Pillow Stories are beautifully written, soothing, and packed with soft, gentle themes that calm their active minds. My child asks for 'just one more story' every single night!",
    author: "Sarah M.",
    details: "Parent of a 4-year-old",
  },
  {
    rating: 4,
    title: "A lovely addition to our bedtime routine",
    text: "The stories are calm, beautifully illustrated, and easy to read together. My daughter especially enjoys the gentle animal characters and the little reflection questions at the end. It has made bedtime feel much more relaxed for both of us.",
    author: "Emily R.",
    details: "Parent of a 5-year-old",
  },
];

function CTA({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
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

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative -mx-5 overflow-hidden rounded-4xl sm:-mx-8">

        {/* BACKGROUND VIDEO (poster-first, mobile-optimized) */}
        <HeroVideo />

        {/* DARK / DREAMY OVERLAY */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--background)_25%,transparent),color-mix(in_oklab,var(--background)_80%,transparent))]" />

        {/* =====================================================
            ANIMATED NIGHT SKY
            ===================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* Large floating moon */}
          <div
            className="absolute right-[7%] top-[10%] opacity-60"
            style={{
              animation: "moonFloat 8s ease-in-out infinite",
            }}
          >
            <Moon className="h-16 w-16 fill-current text-primary/40 sm:h-24 sm:w-24" />
          </div>

          {/* Small floating moon */}
          <div
            className="absolute left-[7%] top-[22%] opacity-40"
            style={{
              animation: "moonFloatReverse 10s ease-in-out infinite",
            }}
          >
            <Moon className="h-8 w-8 fill-current text-primary/50 sm:h-12 sm:w-12" />
          </div>

          {/* Twinkling stars */}
          <span
            className="absolute left-[12%] top-[14%] h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_currentColor]"
            style={{
              animation: "twinkle 2.5s ease-in-out infinite",
            }}
          />

          <span
            className="absolute left-[24%] top-[31%] h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_currentColor]"
            style={{
              animation: "twinkle 3.2s ease-in-out infinite 0.5s",
            }}
          />

          <span
            className="absolute left-[39%] top-[12%] h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_14px_currentColor]"
            style={{
              animation: "twinkle 2.8s ease-in-out infinite 1s",
            }}
          />

          <span
            className="absolute left-[53%] top-[24%] h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_currentColor]"
            style={{
              animation: "twinkle 3.5s ease-in-out infinite 0.8s",
            }}
          />

          <span
            className="absolute right-[31%] top-[14%] h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_currentColor]"
            style={{
              animation: "twinkle 2.4s ease-in-out infinite 1.2s",
            }}
          />

          <span
            className="absolute right-[19%] top-[35%] h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_currentColor]"
            style={{
              animation: "twinkle 3s ease-in-out infinite 0.3s",
            }}
          />

          <span
            className="absolute right-[8%] top-[27%] h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_14px_currentColor]"
            style={{
              animation: "twinkle 2.7s ease-in-out infinite 1.5s",
            }}
          />

          <span
            className="absolute left-[5%] top-[48%] h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_currentColor]"
            style={{
              animation: "twinkle 3.8s ease-in-out infinite 0.4s",
            }}
          />

          <span
            className="absolute left-[18%] top-[58%] h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_currentColor]"
            style={{
              animation: "twinkle 2.6s ease-in-out infinite 1.3s",
            }}
          />

          <span
            className="absolute right-[13%] top-[55%] h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_currentColor]"
            style={{
              animation: "twinkle 3.4s ease-in-out infinite 0.7s",
            }}
          />

          <span
            className="absolute right-[37%] top-[65%] h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_currentColor]"
            style={{
              animation: "twinkle 2.9s ease-in-out infinite 1.1s",
            }}
          />

          {/* Four-point decorative stars */}
          <Star
            className="absolute left-[16%] top-[20%] h-5 w-5 text-primary/60"
            style={{
              animation: "starFloat 5s ease-in-out infinite",
            }}
          />

          <Star
            className="absolute right-[15%] top-[17%] h-6 w-6 text-primary/50"
            style={{
              animation: "starFloat 6s ease-in-out infinite 1s",
            }}
          />

          <Star
            className="absolute left-[8%] top-[65%] h-4 w-4 text-primary/50"
            style={{
              animation: "starFloat 5.5s ease-in-out infinite 1.5s",
            }}
          />

          <Star
            className="absolute right-[7%] top-[70%] h-5 w-5 text-primary/50"
            style={{
              animation: "starFloat 6.5s ease-in-out infinite 0.5s",
            }}
          />

          {/* Drifting tiny stars */}
          <span
            className="absolute left-[30%] top-[18%] text-xs text-primary/70"
            style={{
              animation: "drift 7s ease-in-out infinite",
            }}
          >
            ✦
          </span>

          <span
            className="absolute left-[67%] top-[18%] text-sm text-primary/60"
            style={{
              animation: "drift 8s ease-in-out infinite 1s",
            }}
          >
            ✦
          </span>

          <span
            className="absolute left-[45%] top-[55%] text-xs text-primary/50"
            style={{
              animation: "drift 6s ease-in-out infinite 2s",
            }}
          >
            ✧
          </span>

          <span
            className="absolute right-[27%] top-[50%] text-sm text-primary/60"
            style={{
              animation: "drift 7.5s ease-in-out infinite 1.5s",
            }}
          >
            ✦
          </span>

          {/* Soft atmospheric glow */}
          <div
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
            style={{
              animation: "glowPulse 6s ease-in-out infinite",
            }}
          />
        </div>

        {/* =====================================================
            HERO CONTENT
            ===================================================== */}

        <div className="starfield relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-5 py-20 text-center sm:px-10">

          {/* =====================================================
              LARGE CURVED STORYBOOK BRAND
              ===================================================== */}

          <div
            className="animate-fade-in relative flex w-full justify-center"
            style={{
              animationDelay: "0ms",
              animationFillMode: "backwards",
            }}
          >
            <svg
              viewBox="0 0 700 170"
              className="h-auto w-[360px] overflow-visible sm:w-[500px] md:w-[580px]"
              role="img"
              aria-label="Peaceful Pillow Stories"
            >
              <defs>
                <path
                  id="storybookCurve"
                  d="M 70,115 Q 350,5 630,115"
                  fill="none"
                />
              </defs>

              {/* Decorative left moon */}
              <Moon
                x="20"
                y="85"
                width="38"
                height="38"
                className="text-primary"
              />

              {/* Decorative right moon */}
              <Moon
                x="642"
                y="85"
                width="38"
                height="38"
                className="text-primary"
              />

              {/* Main curved brand text */}
              <text
                fill="currentColor"
                className="text-primary"
                style={{
                  fontFamily:
                    "Georgia, 'Times New Roman', serif",
                  fontSize: "47px",
                  fontWeight: 700,
                  fontStyle: "italic",
                  letterSpacing: "1.5px",
                  filter:
                    "drop-shadow(0px 2px 5px rgba(0,0,0,0.18))",
                }}
              >
                <textPath
                  href="#storybookCurve"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  Peaceful Pillow Stories
                </textPath>
              </text>

              {/* Small decorative stars around the brand */}
              <text
                x="92"
                y="65"
                fill="currentColor"
                className="text-primary"
                style={{ fontSize: "20px" }}
              >
                ✦
              </text>

              <text
                x="595"
                y="65"
                fill="currentColor"
                className="text-primary"
                style={{ fontSize: "20px" }}
              >
                ✦
              </text>

              <text
                x="340"
                y="145"
                fill="currentColor"
                className="text-primary"
                style={{ fontSize: "14px" }}
              >
                ✦
              </text>
            </svg>
          </div>

          {/* MAIN HEADLINE */}

          <h1
            className="animate-fade-in mt-2 max-w-4xl text-4xl font-black leading-tight drop-shadow-lg sm:mt-0 sm:text-6xl"
            style={{
              animationDelay: "180ms",
              animationFillMode: "backwards",
            }}
          >
            Transform Bedtime Into a Peaceful, Screen-Free Adventure 🌙✨
          </h1>

          {/* SUBTITLE */}

          <p
            className="animate-fade-in mx-auto mt-5 max-w-2xl text-lg text-foreground/85"
            style={{
              animationDelay: "300ms",
              animationFillMode: "backwards",
            }}
          >
            Give your child high-quality, beautifully illustrated bedtime
            storybooks delivered straight to your device every single week.
          </p>

          {/* CTA */}

          <div
            className="animate-fade-in mt-10"
            style={{
              animationDelay: "440ms",
              animationFillMode: "backwards",
            }}
          >
            <CTA className="float-slow">
              🔑 Claim Your Access Pass Now
            </CTA>
          </div>
        </div>

        {/* =====================================================
            ANIMATIONS
            ===================================================== */}

        <style>
          {`
            @keyframes twinkle {
              0%, 100% {
                opacity: 0.2;
                transform: scale(0.7);
              }

              50% {
                opacity: 1;
                transform: scale(1.35);
              }
            }

            @keyframes moonFloat {
              0%, 100% {
                transform: translate3d(0, 0, 0) rotate(-5deg);
              }

              50% {
                transform: translate3d(-12px, -15px, 0) rotate(5deg);
              }
            }

            @keyframes moonFloatReverse {
              0%, 100% {
                transform: translate3d(0, 0, 0) rotate(5deg);
              }

              50% {
                transform: translate3d(12px, -12px, 0) rotate(-5deg);
              }
            }

            @keyframes starFloat {
              0%, 100% {
                opacity: 0.35;
                transform: translateY(0) rotate(0deg) scale(0.9);
              }

              50% {
                opacity: 0.9;
                transform: translateY(-12px) rotate(20deg) scale(1.15);
              }
            }

            @keyframes drift {
              0%, 100% {
                opacity: 0.25;
                transform: translate3d(0, 0, 0);
              }

              50% {
                opacity: 0.9;
                transform: translate3d(10px, -15px, 0);
              }
            }

            @keyframes glowPulse {
              0%, 100% {
                opacity: 0.25;
                transform: translate(-50%, -50%) scale(0.9);
              }

              50% {
                opacity: 0.55;
                transform: translate(-50%, -50%) scale(1.15);
              }
            }

            @media (prefers-reduced-motion: reduce) {
              *,
              *::before,
              *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                scroll-behavior: auto !important;
              }
            }
          `}
        </style>
      </section>

      {/* =====================================================
          PROBLEM / SOLUTION
          ===================================================== */}

      <section className="mt-20 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="surface-card hover-lift h-full p-8">
            <h2 className="text-2xl font-bold">
              The Bedtime Struggle
            </h2>

            <ul className="mt-5 space-y-4 text-muted-foreground">
              <li>
                Tired of scrolling endlessly for bedtime stories that are too
                fast-paced, loud, or poorly written?
              </li>

              <li>
                Looking for calm, wholesome content that helps active minds
                wind down naturally without screen overstimulation?
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-card hover-lift h-full border-primary/40 p-8">
            <h2 className="text-2xl font-bold text-primary">
              The Peaceful Solution
            </h2>

            <p className="mt-5 text-muted-foreground">
              Peaceful Pillow Stories brings you high-quality, tablet-ready
              PDF storybooks crafted specifically for bedtime calm. Each story
              features gentle animal characters, lessons in courage and
              empathy, and reflection questions designed to build sweet
              nighttime connections.
            </p>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          VAULT
          ===================================================== */}

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

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================
          PRICING
          ===================================================== */}

      <section className="mt-20">
        <Reveal>
          <h2 className="text-center text-3xl font-black sm:text-4xl">
            Choose Your Bedtime Pass
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="surface-card hover-lift flex h-full flex-col p-8">
              <h3 className="text-xl font-bold">
                Weekly Pass
              </h3>

              <p className="mt-3 text-4xl font-black text-primary">
                $3{" "}
                <span className="text-base font-semibold text-muted-foreground">
                  / week
                </span>
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                ⚡ Flexible weekly access
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {perks.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-sm"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <CTA className="mt-8 w-full">
                Get Weekly Access — $3
              </CTA>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-card hover-lift relative flex h-full flex-col border-primary/60 p-8">
              <span className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-black uppercase tracking-wider text-primary-foreground">
                <Sparkles className="h-3 w-3" />
                Most Popular
              </span>

              <h3 className="text-xl font-bold">
                14-Day Pass
              </h3>

              <p className="mt-3 text-4xl font-black text-primary">
                $5{" "}
                <span className="text-base font-semibold text-muted-foreground">
                  / 14 days
                </span>
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                ⚡ Save 16% over weekly billing!
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {perks.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-sm"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <CTA className="mt-8 w-full">
                Get 14-Day Access — $5
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          REVIEWS
          ===================================================== */}

      <section className="mt-20">
        <Reveal>
          <h2 className="text-center text-3xl font-black sm:text-4xl">
            Parent Reviews
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {reviews.map((review, i) => (
            <Reveal
              key={`${review.author}-${i}`}
              delay={i * 100}
            >
              <figure className="surface-card h-full p-8 text-center">
                {/* STAR RATING */}

                <div
                  className="flex justify-center gap-1 text-primary"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map(
                    (_, starIndex) => (
                      <Star
                        key={starIndex}
                        className={`h-5 w-5 ${
                          starIndex < review.rating
                            ? "fill-current"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ),
                  )}
                </div>

                {/* REVIEW TITLE */}

                <p className="mt-5 text-xl font-bold">
                  "{review.title}"
                </p>

                {/* REVIEW TEXT */}

                <blockquote className="mt-4 text-muted-foreground">
                  "{review.text}"
                </blockquote>

                {/* REVIEW AUTHOR */}

                <figcaption className="mt-5 text-sm font-semibold">
                  — {review.author}, {review.details}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <Reveal>
        <section className="starfield mt-20 rounded-4xl border border-border bg-card/60 px-6 py-14 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-black sm:text-4xl">
            Ready to make bedtime the favorite part of your
            child's day?
          </h2>

          <div className="mt-8">
            <CTA className="float-slow">
              🚀 Unlock the Story Vault Here
            </CTA>
          </div>
        </section>
      </Reveal>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="mt-12 text-center text-sm text-muted-foreground">
        © Peaceful Pillow Stories by Nerochaze. All rights reserved.
      </footer>
    </main>
  );
}
