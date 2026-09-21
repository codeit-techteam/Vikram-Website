import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PhoneMockup } from "@/components/brand/PhoneMockup";
import { StoreBadges } from "@/components/brand/StoreBadges";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { appScreens } from "@/lib/content";

export function Hero() {
  const homeScreen = appScreens[0];

  return (
    <section id="top" className="relative overflow-hidden bg-cream pb-8 pt-6 sm:pt-10 lg:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-70" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft shadow-card">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-positive opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-positive" />
              </span>
              Now live
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
              Bajriwala
            </p>
            <h1 className="mt-3 max-w-xl text-4xl font-bold leading-[1.08] text-ink sm:text-5xl lg:text-[3.6rem]">
              Construction Materials.
              <span className="mt-1 block">Delivered Right to Your Site.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base font-medium text-ink-soft sm:text-lg">
              Buy Cement • RMC • Bricks • Sand • Aggregates & More
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Buy cement, RMC, bricks, sand, aggregates and more through Bajriwala — with
              transparent pricing, convenient ordering and reliable site delivery.
            </p>

            <StoreBadges className="mt-8" />

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <ButtonLink href="#materials" variant="secondary" size="md">
                Explore Materials
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </ButtonLink>
              <p className="text-sm text-muted">Available on Google Play and the App Store.</p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute inset-x-8 bottom-6 top-16 overflow-hidden rounded-[2rem] opacity-80">
              <Image
                src="/images/construction/hero-site.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 80vw, 480px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/20 to-transparent" />
            </div>
            <div className="relative z-10 flex justify-center py-4">
              <PhoneMockup screen={homeScreen} priority float />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
