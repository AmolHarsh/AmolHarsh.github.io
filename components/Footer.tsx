import { profile } from "@/content/data";

export function Footer() {
  return (
    <footer className="mt-10 py-10 border-t border-line text-sm text-faint">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="font-mono text-xs">Built with Next.js · Tailwind.</span>
      </div>
    </footer>
  );
}
