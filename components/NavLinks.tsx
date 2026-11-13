"use client";

import { navItems, useActiveSection } from "./useActiveSection";

/** Inline section links. Tablet width and up only; phones get MobileNav instead. */
export function NavLinks() {
  const active = useActiveSection();

  return (
    <ul className="hidden md:flex items-center gap-1 text-sm text-muted">
      {navItems.map((it) => {
        const on = active === it.id;
        return (
          <li key={it.id}>
            <a
              href={`/#${it.id}`}
              aria-current={on ? "true" : undefined}
              className={`relative px-3 py-1.5 rounded-md whitespace-nowrap transition-colors duration-200
                ${on ? "text-accent" : "hover:text-ink hover:bg-surface"}`}
            >
              {it.label}
              <span
                className={`absolute left-2 right-2 -bottom-0.5 h-px bg-accent origin-left
                  transition-transform duration-300 ${on ? "scale-x-100" : "scale-x-0"}`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
