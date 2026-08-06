import { Link } from "@tanstack/react-router";

/**
 * Site-wide sticky header — logo in the top-left corner linking back to home.
 * The backdrop-blur gives a frosted-glass feel over the hero video.
 */
export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-background/60 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center gap-3 px-5 sm:px-8">
        <Link
          to="/"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Peaceful Pillow Stories — home"
        >
          {/* Brand logo image */}
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/30 transition-all group-hover:ring-primary/60">
            <img
              src="/favicon.png"
              alt="Peaceful Pillow Stories logo"
              className="h-full w-full object-cover object-top"
              width={40}
              height={40}
              loading="eager"
            />
          </div>

          {/* Brand name */}
          <span
            className="hidden font-black leading-tight text-primary transition-opacity group-hover:opacity-80 sm:block"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "1rem",
              letterSpacing: "0.02em",
            }}
          >
            Peaceful Pillow Stories
          </span>
        </Link>
      </div>
    </header>
  );
}
