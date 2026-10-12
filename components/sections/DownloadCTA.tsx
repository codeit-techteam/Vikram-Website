import { ArrowRight } from "lucide-react";
import { PhoneMockup } from "@/components/brand/PhoneMockup";
import { StoreBadges } from "@/components/brand/StoreBadges";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getAppScreen } from "@/lib/content";

export function DownloadCTA() {
  return (
    <section id="download" className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 pt-14 text-white sm:px-12 lg:px-16 lg:pt-0">
          <div className="pointer-events-none absolute inset-0 bg-blueprint-dark opacity-40" />
          <div className="brand-glow pointer-events-none absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full opacity-60" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="text-center lg:py-20 lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                Download now
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">
                Ready to <span className="text-gradient-brand">build smarter?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0">
                Download Bajriwala and bring construction-material ordering to your fingertips.
              </p>
              <StoreBadges align="center" className="mt-8 lg:justify-start [&_a]:ring-1 [&_a]:ring-white/20" />
              <div className="mt-6">
                <ButtonLink href="#materials" variant="onDark" size="md">
                  Explore Materials
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>

            <div className="relative mx-auto flex h-[340px] w-full max-w-[460px] justify-center sm:h-[400px] lg:h-[460px] lg:self-end">
              <div className="absolute left-1/2 top-16 -translate-x-[95%] -rotate-6">
                <PhoneMockup screen={getAppScreen("deals")} size="sm" sizes="220px" />
              </div>
              <div className="absolute left-1/2 top-4 -translate-x-[8%] rotate-3">
                <PhoneMockup screen={getAppScreen("home")} size="md" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
