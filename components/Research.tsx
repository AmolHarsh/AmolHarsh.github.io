import Link from "next/link";
import { projects } from "@/content/data";
import { Section } from "./Section";
import { ProjectItem } from "./ProjectItem";
import { Reveal } from "./Reveal";

export function Research() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.length - featured.length;

  return (
    <Section id="projects" title="Projects" kicker="Selected research">
      <ol className="space-y-10">
        {featured.map((p, i) => (
          <ProjectItem key={p.slug} p={p} delay={i * 70} />
        ))}
      </ol>

      {rest > 0 && (
        <Reveal>
          <Link
            href="/projects"
            className="group mt-10 inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors ulink"
          >
            View all {projects.length} projects
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      )}
    </Section>
  );
}
