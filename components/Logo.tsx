export function Logo({ src, alt }: { src?: string; alt: string }) {
  if (!src) return null;

  // Plaksha's mark is white-on-transparent, so it always needs a dark card.
  // Every other mark is dark-on-transparent: readable as-is in light mode,
  // but it needs a white card once the page goes dark.
  const isLightLogo = src.includes("plaksha");
  const card = isLightLogo
    ? "bg-[var(--color-logo-card-alt)] ring-1 ring-line"
    : "bg-transparent dark:bg-[var(--color-logo-card)] dark:ring-1 dark:ring-line";

  return (
    <span
      className={`logo-card inline-flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-lg shrink-0 overflow-hidden p-2 ${card}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
    </span>
  );
}
