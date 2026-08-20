import { publications } from "@/content/data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { LinkGlyph } from "./Icons";

function highlightAuthor(authors: string, me: string) {
  const parts = authors.split(me);
  return parts.flatMap((p, i) =>
    i < parts.length - 1
      ? [p, <span key={i} className="text-accent font-semibold">{me}</span>]
      : [p],
  );
}

export function Publications() {
  return (
    <Section id="publications" title="Publications" kicker="Peer-reviewed & under review">
      <ol className="space-y-7">
        {publications.map((p, idx) => (
          <Reveal as="li" key={idx} delay={idx * 60} className="flex gap-4 lift group">
            <span className="text-xs font-mono text-faint mt-1 shrink-0 w-6 transition-colors duration-300 group-hover:text-accent">
              [{idx + 1}]
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-ink leading-snug font-medium group-hover:text-accent transition-colors duration-300">
                {p.title}
              </p>
              <p className="text-sm text-muted mt-1">{highlightAuthor(p.authors, p.me)}</p>
              <p className="text-sm text-faint mt-1">
                <span className="italic">{p.venue}</span>
                <span className="mx-2 text-line">·</span>
                {p.year}
                {p.status && (
                  <>
                    <span className="mx-2 text-line">·</span>
                    <span
                      className={`inline-flex items-center gap-1 ${
                        p.status === "Under Review" ? "text-warn" : "text-accent"
                      }`}
                    >
                      {p.status !== "Under Review" && (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3 w-3"
                          aria-hidden="true"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      )}
                      {p.status}
                    </span>
                  </>
                )}
                {"note" in p && p.note && (
                  <>
                    <span className="mx-2 text-line">·</span>
                    <span className="italic">{p.note}</span>
                  </>
                )}
              </p>
              {p.links.length > 0 && (
                <div className="mt-1.5 flex flex-wrap gap-3 text-xs">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-muted hover:text-accent transition-colors ulink"
                    >
                      <LinkGlyph label={l.label} />
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
