"use client";

import { useEffect, useRef, useState } from "react";
import { navItems, useActiveSection } from "./useActiveSection";

/**
 * Phone-width navigation: a menu button that opens the section links in a
 * panel under the sticky header. Hidden from tablet width up, where the
 * links fit inline (see NavLinks).
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (root.current && !root.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    // Close if the window grows past the breakpoint while the menu is open.
    const wide = window.matchMedia("(min-width: 768px)");
    const onWide = () => wide.matches && setOpen(false);

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  return (
    <div ref={root} className="md:hidden">
      <button
        ref={button}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((o) => !o)}
        className="ml-1 p-2 -mr-2 rounded-md text-muted hover:text-ink hover:bg-surface transition-colors"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          {open ? (
            <path d="M6 6l12 12M18 6 6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {/* Positioned against the sticky <header>, so it spans the full width just below it. */}
      <div
        id="mobile-nav"
        className={`absolute inset-x-0 top-full border-b border-line bg-canvas shadow-lg
          transition-all duration-200 ease-out
          ${open ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1"}`}
      >
        <ul className="mx-auto max-w-3xl px-6 py-2">
          {navItems.map((it) => {
            const on = active === it.id;
            return (
              <li key={it.id} className="border-b border-line last:border-0">
                <a
                  href={`/#${it.id}`}
                  aria-current={on ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-3 text-base
                    transition-colors ${on ? "text-accent" : "text-ink hover:text-accent"}`}
                >
                  {it.label}
                  {on && <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
