import { useEffect, useState } from "react";

export const navItems = [
  { id: "experience", label: "Experience" },
  { id: "publications", label: "Publications" },
  { id: "talks", label: "Talks" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

/** Scroll-spy: the id of the section whose top most recently passed under the sticky nav. */
export function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = navItems
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const onScroll = () => {
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

  return active;
}
