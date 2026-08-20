import { experience } from "@/content/data";
import { Section } from "./Section";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <Section id="experience" title="Experience" kicker="Research positions">
      <ol className="space-y-9">
        {experience.map((e, i) => (
          <Reveal as="li" key={e.role + e.org} delay={i * 70} className="flex gap-4 lift group">
            <Logo src={e.logo} alt={e.org} />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-medium text-ink group-hover:text-accent transition-colors duration-300">
                  {e.role}
                  <span className="text-faint"> · </span>
                  <span className="text-muted">{e.org}</span>
                </h3>
                <span className="text-xs text-faint font-mono shrink-0">{e.period}</span>
              </div>
              <p className="mt-1 text-sm text-faint">
                {e.advisor} · {e.location}
              </p>
              <ul className="mt-3 space-y-2 text-muted leading-relaxed text-[0.95rem]">
                {e.bullets.map((b, i) => (
                  <li key={i} className="pl-4 relative">
                    <span className="absolute left-0 top-[0.65rem] h-1 w-1 rounded-full bg-faint transition-colors duration-300 group-hover:bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
