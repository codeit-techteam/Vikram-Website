import { ArrowRight, BadgePercent, Layers, SlidersHorizontal } from "lucide-react";
import { PhoneMockup } from "@/components/brand/PhoneMockup";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { appHighlights, discoveryJourney, getAppScreen } from "@/lib/content";
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
                <li
                  key={item.title}
                  className="group rounded-2xl border border-line bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card-hover"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 transition group-hover:bg-brand-400">
                    <Icon name={item.icon} className="h-5 w-5 text-brand-700 transition group-hover:text-ink" />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-ink">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="relative flex justify-center py-6">
            <div className="brand-glow pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
            <div className="relative">
              <PhoneMockup screen={getAppScreen("catalog")} size="lg" />
              <div className="glass-chip absolute -left-6 top-28 flex items-center gap-2 rounded-xl px-3 py-2 sm:-left-20">
                <SlidersHorizontal className="h-4 w-4 text-brand-700" />
                <span className="text-xs font-semibold text-ink">Filter by brand & grade</span>
              </div>
              <div className="glass-chip absolute -right-4 top-1/2 flex items-center gap-2 rounded-xl px-3 py-2 sm:-right-16">
                <Layers className="h-4 w-4 text-brand-700" />
                <span className="text-xs font-semibold text-ink">Pick a variant</span>
              </div>
              <div className="glass-chip absolute -left-4 bottom-20 flex items-center gap-2 rounded-xl px-3 py-2 sm:-left-14">
                <BadgePercent className="h-4 w-4 text-positive" />
                <span className="text-xs font-semibold text-ink">Discounts up front</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="no-scrollbar mt-14 flex items-center gap-2 overflow-x-auto pb-2">
          {discoveryJourney.map((step, index) => (
            <div key={step} className="flex shrink-0 items-center gap-2">
              <span
                className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                  index === discoveryJourney.length - 1
                    ? "border-brand-400 bg-brand-400 text-ink"
                    : "border-line bg-white text-ink"
                }`}
              >
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
