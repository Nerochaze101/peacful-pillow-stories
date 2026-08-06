/**
 * Hero background image.
 *
 * HOW TO SWAP THE HERO IMAGE
 * --------------------------
 * 1. Add your image file to the `public/` folder.
 *    Recommended filename: hero.jpg  (JPEG works great; PNG/WebP are fine too)
 *    Recommended size: at least 1280 × 720 px.
 * 2. Change the `src` prop below to match your filename, e.g. "/my-hero.png".
 *
 * The image fills the entire hero section as a background, so a landscape
 * photo or illustration with soft/dark tones works best.
 */
export function HeroImage({ className = "" }: { className?: string }) {
  return (
    <img
      src="/hero.jpg"
      alt=""
      aria-hidden="true"
      loading="eager"
      decoding="async"
      className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}
