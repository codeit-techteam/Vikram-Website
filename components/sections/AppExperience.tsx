import Image from "next/image";
import { PhoneMockup } from "@/components/brand/PhoneMockup";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { appScreens, featureFlags } from "@/lib/content";

export function AppExperience() {
  return (
    <section id="experience" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Designed for construction"
          title="Designed for Construction. Built for Mobile."
          description="A sequence of the live Bajriwala Customer App - discover, browse, choose, order and track."
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src="/images/construction/contractor-phone.jpg"
              alt="Construction professional using a smartphone at a building site"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
            />
          </Reveal>
          <div className="no-scrollbar flex gap-6 overflow-x-auto pb-2 lg:grid lg:grid-cols-2 lg:overflow-visible">
            {appScreens.map((screen) => (
              <PhoneMockup key={screen.src} screen={screen} caption className="shrink-0" />
            ))}
          </div>
        </div>

        {featureFlags.loyaltyPoints ? (
          <Reveal className="mt-14 rounded-3xl border border-line bg-cream p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
              Loyalty
            </p>
            <h3 className="mt-2 text-2xl font-bold text-ink">Get More From Every Purchase</h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
              Earn loyalty points on eligible purchases and use them according to the programme
              rules shown in the app.
            </p>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
