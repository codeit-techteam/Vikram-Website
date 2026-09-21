import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { deliveryTimeline } from "@/lib/content";

export function Delivery() {
  return (
    <section id="delivery" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/construction/rmc-truck-site.jpg"
              alt="Ready-mix concrete truck delivering material at an Indian construction site"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Delivery"
              title="From Order to Site"
              description="Get construction materials delivered where you need them, with delivery planning built around your order and location."
            />
            <ol className="relative mt-10 space-y-0">
              {deliveryTimeline.map((item, index) => (
                <li key={item.title} className="relative flex gap-4 pb-8 last:pb-0">
                  {index < deliveryTimeline.length - 1 ? (
                    <span className="absolute left-[15px] top-8 h-[calc(100%-8px)] w-px bg-line" />
                  ) : null}
                  <span className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-400 text-xs font-bold text-ink">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
