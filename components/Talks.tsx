import { talks } from "@/content/data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Talks() {
  return (
    <Section id="talks" title="Talks & Presentations" kicker="Invited">
      <ol className="space-y-7">
        {talks.map((t, i) => (
          <Reveal as="li" key={t.title + t.date} delay={i * 70} className="flex gap-4 lift group">
            <span
              aria-hidden="true"
              className="mt-1 shrink-0 text-faint transition-colors duration-300 group-hover:text-accent"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M3 3h18v12H3z" />
                <path d="M12 15v6M9 21h6M8 8l3 3 5-5" />
              </svg>
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="text-ink leading-snug font-medium group-hover:text-accent transition-colors duration-300">
                  {t.title}
                </p>
                <span className="text-xs text-faint font-mono shrink-0">{t.date}</span>
              </div>
              <p className="text-sm text-muted mt-1">
                <span className="text-accent">{t.kind}</span>
                <span className="mx-2 text-line">·</span>
                {t.venue}
              </p>
              <p className="text-sm text-faint mt-1">{t.location}</p>
              {t.href && (
                <a
                  href={t.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1.5 inline-flex items-center gap-1 text-xs text-muted hover:text-accent transition-colors ulink"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    className="h-3 w-3"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
                  </svg>
                  workshop page
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
