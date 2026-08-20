import type { projects } from "@/content/data";

type Project = (typeof projects)[number];

export function ProjectItem({ p }: { p: Project }) {
  return (
    <li>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-medium text-ink leading-snug">{p.title}</h3>
        <span className="text-xs text-faint font-mono shrink-0">{p.period}</span>
      </div>
      <div className="mt-1 text-sm text-faint">
        <span className="text-muted">{p.role}</span>
        <span className="mx-2 text-line">·</span>
        {p.advisor}, {p.affiliation}
        <span className="mx-2 text-line">·</span>
        <span className="text-accent">{p.status}</span>
      </div>
      <ul className="mt-3 space-y-2 text-muted leading-relaxed text-[0.95rem]">
        {p.bullets.map((b, i) => (
          <li key={i} className="pl-4 relative">
            <span className="absolute left-0 top-[0.65rem] h-1 w-1 rounded-full bg-faint" />
            {b}
          </li>
        ))}
      </ul>
      {p.links.length > 0 && (
        <div className="mt-2.5 flex flex-wrap gap-3 text-xs">
          {p.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-accent underline decoration-line hover:decoration-accent underline-offset-4"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span
            key={t}
            className="text-[0.7rem] px-2 py-0.5 rounded bg-surface border border-line text-faint font-mono"
          >
            {t}
          </span>
        ))}
      </div>
    </li>
  );
}
