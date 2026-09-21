import { StoreBadges } from "@/components/brand/StoreBadges";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function LiveOnStores() {
  return (
    <section aria-labelledby="live-heading" className="pb-4">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 rounded-3xl border border-line bg-white px-6 py-8 text-center shadow-card sm:px-10">
          <div>
            <p
              id="live-heading"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700"
            >
              Now live
            </p>
            <h2 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
              Bajriwala is available on Google Play and the App Store
            </h2>
            <p className="mt-2 text-sm text-muted sm:text-base">
              Download the Bajriwala app and start ordering construction materials for your site.
            </p>
          </div>
          <StoreBadges align="center" />
        </Reveal>
      </Container>
    </section>
  );
}
