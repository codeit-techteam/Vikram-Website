import { PhoneMockup } from "@/components/brand/PhoneMockup";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { appScreens, howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Build Smarter in 4 Simple Steps"
          description="From download to delivery — without chasing suppliers over the phone."
        />
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="hidden justify-center lg:flex">
            <PhoneMockup screen={appScreens[1]} />
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {howItWorks.map((step, index) => (
              <li key={step.step}>
              <Reveal
                delay={index * 80}
                className="h-full rounded-2xl border border-line bg-cream p-6"
              >
                <span className="text-sm font-semibold tracking-[0.16em] text-brand-700">
                  STEP {step.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
