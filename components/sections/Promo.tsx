import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { bikeDeliveryPromo, featureFlags } from "@/lib/content";

export function Promo() {
  if (!featureFlags.bikeDeliveryPromo) return null;

  return (
    <section aria-labelledby="promo-heading" className="pb-4">
      <Container>
        <Reveal className="overflow-hidden rounded-3xl bg-brand-400 px-6 py-10 text-ink sm:px-10">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
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
            <div className="relative mx-auto h-28 w-44 shrink-0 sm:mx-0 sm:h-32 sm:w-52 lg:h-36 lg:w-60">
              <Image
                src="/images/promo-delivery-bike.png"
                alt="Delivery scooter with cargo box"
                fill
                sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 240px"
                className="object-contain object-right drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)]"
                priority={false}
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
