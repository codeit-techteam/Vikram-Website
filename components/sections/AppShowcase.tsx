import { PhoneMockup } from "@/components/brand/PhoneMockup";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { appScreens } from "@/lib/content";

export function AppShowcase() {
  return (
    <section id="app" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="The customer app"
          title="Everything You Need. Right From Your Phone."
          description="Discover materials, compare options, manage your cart and place orders - all from the Bajriwala app."
        />

        <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-8 overflow-x-auto px-1 pb-4 lg:justify-center lg:overflow-visible">
          {appScreens.map((screen, index) => (
            <div key={screen.src} className={`snap-center shrink-0 ${index === 0 ? "lg:mt-6" : "lg:-mt-2"}`}>
              <PhoneMockup screen={screen} caption />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
