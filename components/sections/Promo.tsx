import { Bike } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { bikeDeliveryPromo, featureFlags } from "@/lib/content";

export function Promo() {
  if (!featureFlags.bikeDeliveryPromo) return null;

  return (
    <section aria-labelledby="promo-heading" className="pb-4">
      <Container>
        <Reveal className="overflow-hidden rounded-3xl bg-brand-400 px-6 py-10 text-ink sm:px-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
                {bikeDeliveryPromo.eyebrow}
              </p>
              <h2 id="promo-heading" className="mt-2 text-3xl font-bold sm:text-4xl">
                {bikeDeliveryPromo.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink/80">
                {bikeDeliveryPromo.description}
              </p>
              <p className="mt-3 text-sm text-ink/65">{bikeDeliveryPromo.note}</p>
            </div>
            <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-ink text-brand-400">
              <Bike className="h-10 w-10" aria-hidden="true" />
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
