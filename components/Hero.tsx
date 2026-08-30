import { profile } from "@/content/data";
import { GitHubIcon, LinkedInIcon, ScholarIcon, PinIcon } from "./Icons";
import { CopyEmail } from "./CopyEmail";

const social = [
  { href: profile.links.scholar, label: "Google Scholar", Icon: ScholarIcon },
  { href: profile.links.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
];

export function Hero() {
  return (
    <section id="top" className="relative pt-14 sm:pt-20 pb-10">
      {/* Soft drifting glow — purely decorative. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-32 h-72 w-72 rounded-full blur-3xl opacity-25 drift"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 65%)" }}
      />

      <div className="relative flex flex-col-reverse sm:flex-row sm:items-start sm:gap-8">
        <div className="flex-1 min-w-0">
          <div
            className="flex items-center gap-2 text-xs text-faint mb-4 rise"
            style={{ animationDelay: "40ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            {profile.badge}
          </div>

          <h1
            className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink rise"
            style={{ animationDelay: "90ms" }}
          >
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-muted rise" style={{ animationDelay: "150ms" }}>
            {profile.tagline}
          </p>
        </div>

        <div className="mb-6 sm:mb-0 shrink-0 rise" style={{ animationDelay: "120ms" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.avatar}
            alt={profile.name}
            className="h-40 w-40 sm:h-48 sm:w-48 rounded-full object-cover ring-2 ring-line shadow-xl
              transition-transform duration-500 ease-out hover:scale-[1.04] hover:ring-accent"
          />
        </div>
      </div>

      <p
        className="relative mt-6 max-w-2xl text-muted leading-relaxed rise"
        style={{ animationDelay: "210ms" }}
      >
        {profile.blurb}
      </p>

      <div
        className="relative mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm rise"
        style={{ animationDelay: "270ms" }}
      >
        <CopyEmail email={profile.email} />

        {social.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 text-ink hover:text-accent transition-colors ulink"
          >
            <Icon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            {label}
          </a>
        ))}

        <span className="inline-flex items-center gap-1.5 text-faint">
          <PinIcon className="h-3.5 w-3.5" />
          {profile.location}
        </span>
      </div>

      <div
        className="relative mt-8 flex flex-wrap gap-2 rise"
        style={{ animationDelay: "330ms" }}
      >
        {profile.interests.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-surface border border-line text-muted
              transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
