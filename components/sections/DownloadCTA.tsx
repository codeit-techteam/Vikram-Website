import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { StoreBadges } from "@/components/brand/StoreBadges";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function DownloadCTA() {
  return (
    <section id="download" className="relative overflow-hidden py-20 sm:py-24">
      <Image
        src="/images/construction/site-dusk.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover photo-drift"
      />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="pointer-events-none absolute inset-0 bg-blueprint-dark opacity-40" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            Download now
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Ready to Build Smarter?</h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            Download Bajriwala and bring construction-material ordering to your fingertips.
          </p>
          <StoreBadges align="center" className="mt-8" />
          <div className="mt-6">
            <ButtonLink href="#materials" variant="onDark" size="md">
              Explore Materials
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
