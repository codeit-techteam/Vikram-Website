import type { ReactNode } from "react";

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line pt-10">
      <h2 className="text-xl font-bold text-ink sm:text-2xl">{title}</h2>
      <div className="legal-copy mt-4 space-y-4 text-base leading-relaxed text-muted [&_h3]:mt-6">
        {children}
      </div>
    </section>
  );
}
