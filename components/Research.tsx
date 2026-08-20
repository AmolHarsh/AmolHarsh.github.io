import Link from "next/link";
import { projects } from "@/content/data";
import { Section } from "./Section";
import { ProjectItem } from "./ProjectItem";

export function Research() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.length - featured.length;

  return (
    <Section id="projects" title="Projects" kicker="Selected research">
      <ol className="space-y-10">
        {featured.map((p) => (
          <ProjectItem key={p.slug} p={p} />
        ))}
      </ol>

      {rest > 0 && (
        <Link
          href="/projects"
          className="mt-10 inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent underline decoration-line hover:decoration-accent underline-offset-4 transition-colors"
        >
          View all {projects.length} projects
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </Section>
  );
}
