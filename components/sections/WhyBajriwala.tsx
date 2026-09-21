import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyBajriwala } from "@/lib/content";

export function WhyBajriwala() {
  return (
    <section id="why-bajriwala" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Bajriwala"
          title="Why Choose Bajriwala?"
          description="A construction-material marketplace built around how sites actually order, not a generic delivery app."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyBajriwala.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 60}
              className="rounded-2xl border border-line bg-white p-6 shadow-card"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-ink">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
