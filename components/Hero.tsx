import { profile } from "@/content/data";

const linkClass =
  "text-ink hover:text-accent underline decoration-line hover:decoration-accent underline-offset-4 transition-colors";

export function Hero() {
  return (
    <section id="top" className="pt-14 sm:pt-20 pb-10">
      <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:gap-8">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-xs text-faint mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Applying to PhD programs · Fall 2027
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-muted">{profile.tagline}</p>
        </div>

        <div className="mb-6 sm:mb-0 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.avatar}
            alt={profile.name}
            className="h-40 w-40 sm:h-48 sm:w-48 rounded-full object-cover ring-2 ring-line shadow-xl"
          />
        </div>
      </div>

      <p className="mt-6 max-w-2xl text-muted leading-relaxed">{profile.blurb}</p>

      <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <a href={`mailto:${profile.email}`} className={linkClass}>
          {profile.email}
        </a>
        <a href={profile.links.scholar} target="_blank" rel="noreferrer" className={linkClass}>
          Google Scholar
        </a>
        <a href={profile.links.github} target="_blank" rel="noreferrer" className={linkClass}>
          GitHub
        </a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
          LinkedIn
        </a>
        <span className="text-faint">{profile.location}</span>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {profile.interests.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-surface border border-line text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
