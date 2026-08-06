import { useEffect, useRef, useState } from "react";

/**
 * Hero background video — uses a local MP4 stored in public/.
 *
 * HOW TO SWAP THE HERO VIDEO
 * --------------------------
 * 1. Add your video file to the `public/` folder.
 *    Recommended filename: hero.mp4
 *    Recommended: short loop (5–15 s), landscape, 720p or 1080p.
 * 2. If you use a different filename, change the `src` below to match.
 *
 * The video only plays after the page has loaded (idle callback), so it
 * never slows down the initial paint. On slow connections or when the user
 * has "reduce motion" enabled the video is skipped and the dark overlay
 * colour shows instead.
 */
export function HeroVideo({ className = "" }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;

    const lowData =
      connection?.saveData === true ||
      (connection?.effectiveType ? /2g/.test(connection.effectiveType) : false);

    if (reducedMotion || lowData) return;

    // Wait for the browser to be idle so the hero text paints first.
    const idle =
      window.requestIdleCallback?.(() => setSrc("/hero.mp4"), {
        timeout: 1200,
      }) ?? window.setTimeout(() => setSrc("/hero.mp4"), 300);

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
