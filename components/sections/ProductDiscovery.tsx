import { ArrowRight } from "lucide-react";
import { PhoneMockup } from "@/components/brand/PhoneMockup";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { appHighlights, appScreens, discoveryJourney } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";

export function ProductDiscovery() {
  return (
    <section id="product-discovery" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Product discovery"
          title="Find What Your Site Needs"
          description="Browse construction materials by category and brand, choose the right variant and add it to your cart in a few taps."
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-700">
              Your construction materials, all in one place
            </p>
            <h3 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
              Search, categories, brands, products, variants and prices
            </h3>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
              Find the right material for your project without searching across multiple suppliers.
              Bulk pricing is shown on the product when larger quantities qualify.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {appHighlights.map((item) => (
                <li key={item.title} className="rounded-2xl border border-line bg-white p-4">
                  <Icon name={item.icon} className="h-5 w-5 text-brand-700" />
                  <p className="mt-3 text-sm font-semibold text-ink">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="flex justify-center">
            <PhoneMockup screen={appScreens[1]} />
          </div>
        </div>

        <div className="no-scrollbar mt-14 flex items-center gap-2 overflow-x-auto pb-2">
          {discoveryJourney.map((step, index) => (
            <div key={step} className="flex shrink-0 items-center gap-2">
              <span className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink">
                {step}
              </span>
              {index < discoveryJourney.length - 1 ? (
                <ArrowRight className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
