import { ThemeToggle } from "./ThemeToggle";

const items = [
  { href: "/#experience", label: "Experience" },
  { href: "/#publications", label: "Publications" },
  { href: "/#projects", label: "Projects" },
  { href: "/#education", label: "Education" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-canvas/80 border-b border-line">
      <nav className="mx-auto max-w-3xl px-6 h-14 flex items-center justify-between">
        <a
          href="/#top"
          className="text-sm font-medium tracking-tight text-ink hover:text-accent transition-colors"
        >
          Amol Harsh
        </a>
        <div className="flex items-center">
          <ul className="flex items-center gap-0.5 sm:gap-1 text-sm text-muted">
            {items.map((it) => (
              <li key={it.href}>
                <a
                  href={it.href}
                  className="px-2 sm:px-3 py-1.5 rounded-md hover:text-ink hover:bg-surface transition-colors"
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
