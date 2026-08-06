import { useEffect, useRef, useState } from "react";

import heroMobile from "@/assets/hero-forest-mobile.mp4.asset.json";
import heroDesktop from "@/assets/hero-forest-720.mp4.asset.json";
import heroPoster from "@/assets/hero-poster.jpg.asset.json";

/**
 * Mobile-first hero background video.
 *
 * - The poster image paints instantly (tiny JPEG) so there is never a blank hero.
 * - The actual video file is only attached AFTER hydration, so it never competes
 *   with the first paint, and a much smaller 640px file is used on phones.
 * - Skipped entirely on data-saver connections or when the user prefers
 *   reduced motion; the poster stays as a static background.
 */
export function HeroVideo({ className = "" }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;

    const lowData =
      connection?.saveData === true ||
      (connection?.effectiveType ? /2g/.test(connection.effectiveType) : false);

    if (reducedMotion || lowData) return;

    const isPhone = window.matchMedia("(max-width: 767px)").matches;
    const chosen = isPhone ? heroMobile.url : heroDesktop.url;

    // Wait for the browser to be idle so the LCP content lands first.
    const idle =
      window.requestIdleCallback?.(() => setSrc(chosen), { timeout: 1200 }) ??
      window.setTimeout(() => setSrc(chosen), 300);

    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(idle as number);
      else window.clearTimeout(idle as number);
    };
  }, []);

  useEffect(() => {
    if (!src) return;
    const el = videoRef.current;
    if (!el) return;
    el.load();
    const play = () => void el.play().catch(() => {});
    play();
    el.addEventListener("canplay", play, { once: true });
    return () => el.removeEventListener("canplay", play);
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src ?? undefined}
      poster={heroPoster.url}
      autoPlay
      loop
      muted
      playsInline
      disablePictureInPicture
      preload="none"
      tabIndex={-1}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${className}`}
      style={{ contentVisibility: "auto" }}
    />
  );
}
