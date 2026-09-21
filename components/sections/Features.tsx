import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { appFeatures, featureFlags } from "@/lib/content";

export function Features() {
  const visible = appFeatures.filter((feature) => !feature.flag || featureFlags[feature.flag]);

  return (
    <section id="features" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="App features"
          title="Built for the Way Construction Works"
          description="The Bajriwala Customer App is designed around material discovery, ordering and site delivery."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={index * 40}
              className="rounded-2xl border border-line bg-white p-5 shadow-card"
            >
              <Icon name={feature.icon as IconName} className="h-5 w-5 text-brand-700" />
              <h3 className="mt-3 text-base font-semibold text-ink">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{feature.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
