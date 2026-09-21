import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { trustPillars } from "@/lib/content";

export function Trust() {
  return (
    <section id="trust" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Built for professionals"
          title="Built for Contractors, Builders & Construction Professionals"
          description="Bajriwala is built around your construction needs — material discovery, digital ordering, site delivery and transparent pricing."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {trustPillars.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 50}
              className="rounded-2xl border border-line bg-white p-5"
            >
              <h3 className="text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
