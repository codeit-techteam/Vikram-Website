import { ArrowRight, BadgePercent, Bike, MapPin } from "lucide-react";
import { PhoneMockup } from "@/components/brand/PhoneMockup";
import { StoreBadges } from "@/components/brand/StoreBadges";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { featureFlags, getAppScreen, materialCategories } from "@/lib/content";

const heroStats = [
  { value: `${materialCategories.length}`, label: "Material categories" },
  { value: "1 Bag", label: "Cement orders from" },
  { value: "5+ MT", label: "Bulk pricing from" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream pb-16 pt-8 sm:pt-12 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3 py-1.5 text-xs font-semibold text-ink-soft shadow-card backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-positive opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-positive" />
              </span>
              Now live on Android & iPhone
            </div>

            <h1 className="mt-6 max-w-xl text-[2.6rem] font-extrabold leading-[1.04] text-ink sm:text-6xl lg:text-[4.1rem]">
              Construction materials,
              <span className="text-gradient-brand block">delivered to your site.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Order cement, RMC, bricks, sand, aggregates and more from one app - with transparent
              pricing, bulk rates and reliable site delivery.
            </p>

            <StoreBadges className="mt-8" />

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <ButtonLink href="#materials" variant="secondary" size="md">
                Explore Materials
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </ButtonLink>
              <a
                href="#app"
                className="text-sm font-semibold text-ink-soft underline-offset-4 transition hover:text-ink hover:underline"
              >
                See the app in action
              </a>
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-xl font-bold text-ink sm:text-2xl">{stat.value}</dd>
                  <dd className="mt-0.5 text-xs text-muted sm:text-sm">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto h-[520px] w-full max-w-[600px] sm:h-[600px] lg:h-[640px]">
            <div className="brand-glow pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[560px] sm:w-[560px]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-500/20 sm:h-[480px] sm:w-[480px]" />

            <div className="absolute left-1/2 top-12 hidden -translate-x-[118%] -rotate-[9deg] opacity-95 sm:block">
              <PhoneMockup screen={getAppScreen("deals")} size="sm" sizes="220px" />
            </div>
            <div className="absolute left-1/2 top-12 hidden translate-x-[18%] rotate-[9deg] opacity-95 sm:block">
              <PhoneMockup screen={getAppScreen("catalog")} size="sm" sizes="220px" />
            </div>
            <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
              <PhoneMockup screen={getAppScreen("home")} size="lg" preload float sizes="(max-width: 640px) 250px, 310px" />
            </div>

            <div className="glass-chip absolute bottom-24 left-0 z-20 flex animate-float-slow items-center gap-3 rounded-2xl px-4 py-3 sm:left-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-positive/10 text-positive">
                <BadgePercent className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">₹325 / Bag</p>
                <p className="text-xs font-medium text-positive">28% off UltraTech PPC</p>
              </div>
            </div>

            <div className="glass-chip absolute right-0 top-28 z-20 flex animate-float items-center gap-3 rounded-2xl px-4 py-3 sm:right-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-muted">Delivering to</p>
                <p className="text-sm font-bold text-ink">Your site</p>
              </div>
            </div>

            {featureFlags.bikeDeliveryPromo ? (
              <div className="absolute bottom-6 right-2 z-20 flex animate-float-slow items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-white shadow-phone sm:right-10">
                <Bike className="h-4 w-4 text-brand-300" />
                <span className="text-xs font-semibold">3 free bike deliveries</span>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
