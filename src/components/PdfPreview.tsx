import { useEffect, useRef, useState } from "react";
import { AlertTriangle, Download, ExternalLink, RefreshCw } from "lucide-react";

type Status = "checking" | "loading" | "ready" | "error";

function Skeleton({ label }: { label: string }) {
  return (
    <div
      className="flex h-[70vh] min-h-[420px] w-full flex-col gap-4 rounded-2xl bg-secondary/60 p-6"
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">{label}</span>
      <div className="h-6 w-1/2 animate-pulse rounded-full bg-primary/10" />
      <div className="h-4 w-1/3 animate-pulse rounded-full bg-primary/10" />
      <div className="mt-2 flex-1 animate-pulse rounded-xl bg-primary/10" />
      <div className="flex gap-3">
        <div className="h-4 w-24 animate-pulse rounded-full bg-primary/10" />
        <div className="h-4 w-16 animate-pulse rounded-full bg-primary/10" />
      </div>
    </div>
  );
}

export function PdfPreview({ pdfUrl, title }: { pdfUrl: string; title: string }) {
  const [status, setStatus] = useState<Status>("checking");
  const [attempt, setAttempt] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    setStatus("checking");

    const check = async () => {
      try {
        const res = await fetch(pdfUrl, { method: "GET", headers: { Range: "bytes=0-0" } });
        if (cancelled) return;
        if (!res.ok && res.status !== 206) {
          setStatus("error");
          return;
        }
        setStatus("loading");
        // If the embedded viewer never fires load (blocked plugin, CSP), fail gracefully.
        timeoutRef.current = setTimeout(() => {
          if (!cancelled) setStatus((s) => (s === "loading" ? "error" : s));
        }, 12_000);
      } catch {
        if (!cancelled) setStatus("error");
      }
    };

    void check();
    return () => {
      cancelled = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [pdfUrl, attempt]);

  if (status === "error") {
    return (
      <div className="flex h-[70vh] min-h-[420px] w-full flex-col items-center justify-center gap-4 rounded-2xl bg-secondary/60 p-8 text-center">
        <AlertTriangle className="h-8 w-8 text-primary/70" aria-hidden="true" />
        <div>
          <p className="text-lg font-black text-primary">We couldn&apos;t load this preview</p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
            The PDF for {title} didn&apos;t open in your browser. You can try again, or open
            and download the file directly.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setAttempt((a) => a + 1)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-extrabold text-primary transition-colors hover:bg-secondary"
          >
            <RefreshCw className="h-4 w-4" /> Try again
          </button>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-extrabold text-primary transition-colors hover:bg-secondary"
          >
            <ExternalLink className="h-4 w-4" /> Open in a new tab
          </a>
          <a
            href={pdfUrl}
            download
            className="btn-moon inline-flex items-center gap-2 px-5 py-2.5 text-sm"
          >
            <Download className="h-4 w-4" /> Download
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {status !== "ready" && <Skeleton label={`Loading the ${title} PDF preview`} />}
      {status !== "checking" && (
        <iframe
          key={attempt}
          src={pdfUrl}
          title={`${title} PDF preview`}
          onLoad={() => setStatus("ready")}
          onError={() => setStatus("error")}
          className={
            status === "ready"
              ? "h-[70vh] min-h-[420px] w-full rounded-2xl"
              : "pointer-events-none absolute inset-0 h-full w-full opacity-0"
          }
        />
      )}
    </div>
  );
}
