import { ThemeToggle } from "./ThemeToggle";
import { NavLinks } from "./NavLinks";
import { MobileNav } from "./MobileNav";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-canvas/80 border-b border-line">
      <nav className="mx-auto max-w-3xl px-6 h-14 flex items-center justify-between gap-4">
        <a
          href="/#top"
          className="group shrink-0 whitespace-nowrap text-sm font-medium tracking-tight text-ink hover:text-accent transition-colors"
        >
          <span className="text-accent opacity-70 group-hover:opacity-100 transition-opacity">/</span>{" "}
          Amol Harsh
        </a>
        <div className="flex items-center">
          <NavLinks />
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
