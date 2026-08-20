import { profile } from "@/content/data";
import { GitHubIcon, LinkedInIcon, ScholarIcon, MailIcon } from "./Icons";

const links = [
  { href: profile.links.scholar, label: "Google Scholar", Icon: ScholarIcon, ext: true },
  { href: profile.links.github, label: "GitHub", Icon: GitHubIcon, ext: true },
  { href: profile.links.linkedin, label: "LinkedIn", Icon: LinkedInIcon, ext: true },
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon, ext: false },
];

export function Footer() {
  return (
    <footer className="mt-10 py-10 border-t border-line text-sm text-faint">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <div className="flex items-center gap-1">
          {links.map(({ href, label, Icon, ext }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              {...(ext ? { target: "_blank", rel: "noreferrer" } : {})}
              className="p-2 rounded-md text-faint hover:text-accent hover:bg-surface
                transition-all duration-300 hover:-translate-y-0.5"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
