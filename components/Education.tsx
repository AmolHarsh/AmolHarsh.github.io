import { education, skills, awards } from "@/content/data";
import { Section } from "./Section";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <Section id="education" title="Education" kicker="Academic background">
      <ol className="space-y-8">
        {education.map((ed, i) => (
          <Reveal as="li" key={ed.school} delay={i * 70} className="flex gap-4 lift group">
            <Logo src={ed.logo} alt={ed.school} />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-medium text-ink group-hover:text-accent transition-colors duration-300">{ed.school}</h3>
                <span className="text-xs text-faint font-mono shrink-0">{ed.period}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{ed.degree}</p>
              <p className="mt-0.5 text-sm text-faint">
                {ed.gpa && `GPA ${ed.gpa} · `}
                {ed.location}
              </p>
              {ed.notes.length > 0 && (
                <ul className="mt-3 space-y-1.5 text-muted text-[0.92rem]">
                  {ed.notes.map((n, i) => (
                    <li key={i} className="pl-4 relative">
                      <span className="absolute left-0 top-[0.6rem] h-1 w-1 rounded-full bg-faint" />
                      {n}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-14 grid sm:grid-cols-2 gap-8">
        <div>
          <h3 className="text-sm uppercase tracking-[0.2em] text-faint mb-4">Skills</h3>
          <dl className="space-y-3">
            {Object.entries(skills).map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs text-accent font-mono">{k}</dt>
                <dd className="text-sm text-muted mt-1">{v.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[0.2em] text-faint mb-4">Awards</h3>
          <ul className="space-y-2 text-sm text-muted">
            {awards.map((a, i) => (
              <li key={i} className="pl-4 relative leading-relaxed">
                <span className="absolute left-0 top-[0.6rem] h-1 w-1 rounded-full bg-faint" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
