"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "experience", label: "Experience" },
  { id: "publications", label: "Publications" },
  { id: "talks", label: "Talks" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

export function NavLinks() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const onScroll = () => {
      // The section whose top has most recently passed under the sticky nav.
      const line = window.scrollY + 100;
      let current: string | null = null;
      for (const s of sections) {
        if (s.offsetTop <= line) current = s.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ul className="flex items-center gap-0.5 sm:gap-1 text-sm text-muted">
      {items.map((it) => {
        const on = active === it.id;
        return (
          <li key={it.id}>
            <a
              href={`/#${it.id}`}
              aria-current={on ? "true" : undefined}
              className={`relative px-2 sm:px-3 py-1.5 rounded-md transition-colors duration-200
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
