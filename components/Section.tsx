import { Reveal } from "./Reveal";

export function Section({
  id,
  title,
  kicker,
  children,
}: {
  id: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-14 sm:py-20 border-t border-line">
      <Reveal className="mb-8 sm:mb-10">
        {kicker && (
          <div className="text-xs uppercase tracking-[0.2em] text-accent mb-2">{kicker}</div>
        )}
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}
