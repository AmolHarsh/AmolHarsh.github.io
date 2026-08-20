import type { Metadata } from "next";
import Link from "next/link";
import { projects, profile } from "@/content/data";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProjectItem } from "@/components/ProjectItem";

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description: `Research projects by ${profile.name}: 3D vision, video world models, medical imaging, and robotics.`,
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6">
        <div className="pt-14 sm:pt-20 pb-10">
          <Link
            href="/"
            className="text-sm text-muted hover:text-accent underline decoration-line hover:decoration-accent underline-offset-4 transition-colors"
          >
            ← Back
          </Link>
          <div className="text-xs uppercase tracking-[0.2em] text-accent mt-8 mb-2">
            All research projects
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            Work spanning 3D scene understanding and multimodal models, video world models,
            medical image analysis, and socially aware robot navigation.
          </p>
        </div>

        <ol className="space-y-12 border-t border-line pt-12">
          {projects.map((p) => (
            <ProjectItem key={p.slug} p={p} />
          ))}
        </ol>

        <Footer />
      </main>
    </>
  );
}
