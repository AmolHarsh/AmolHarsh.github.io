import { news } from "@/content/data";
import { Reveal } from "./Reveal";

export function News() {
  return (
    <section id="news" className="scroll-mt-20 pb-14 sm:pb-16">
      <Reveal className="mb-5">
        <h2 className="text-xs uppercase tracking-[0.2em] text-accent">News</h2>
      </Reveal>
      <ol className="space-y-3">
        {news.map((n, i) => (
          <Reveal
            as="li"
            key={n.date + i}
            delay={i * 50}
            className="flex gap-4 text-[0.95rem] leading-relaxed group"
          >
            <span className="font-mono text-xs text-faint shrink-0 w-20 pt-1 transition-colors duration-300 group-hover:text-accent">
              {n.date}
            </span>
            <span className="text-muted">{n.text}</span>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
