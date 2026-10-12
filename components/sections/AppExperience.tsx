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

        <Reveal className="relative mt-12 overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-300 via-brand-400 to-brand-500 px-4 pt-12 sm:px-10 sm:pt-16">
          <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-50" />
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
          <div className="no-scrollbar relative flex snap-x snap-mandatory gap-6 overflow-x-auto pb-12 sm:pb-16 lg:justify-center lg:gap-10 lg:overflow-visible">
            {appScreens.map((screen, index) => (
              <div
                key={screen.id}
                className={`shrink-0 snap-center ${index === 1 ? "lg:-translate-y-6" : "lg:translate-y-6"}`}
              >
                <PhoneMockup screen={screen} />
                <div className="mx-auto mt-6 max-w-[260px] rounded-2xl bg-white/70 px-4 py-3 text-center backdrop-blur">
                  <p className="text-sm font-bold text-ink">
                    <span className="mr-1.5 text-ink/40">0{index + 1}</span>
                    {screen.caption}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-ink/70">{screen.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

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
