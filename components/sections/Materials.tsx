"use client";

import { useRef, useState, type CSSProperties, type MouseEvent } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { additionalCategories, materialCategories, type MaterialCategory } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function MaterialCard({
  category,
  index,
  onSelect,
}: {
  category: MaterialCategory;
  index: number;
  onSelect: (slug: string) => void;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  function tilt(event: MouseEvent<HTMLAnchorElement>) {
    const card = cardRef.current;
    const image = imageRef.current;
    if (!card || !image || prefersReducedMotion()) return;

    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    card.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 10}deg) translateY(-10px) scale(1.01)`;
    image.style.transform = `scale(1.16) translate(${(x - 0.5) * 8}%, ${(y - 0.5) * 8}%)`;
  }

  function resetTilt() {
    if (cardRef.current) cardRef.current.style.transform = "";
    if (imageRef.current) imageRef.current.style.transform = "";
  }

  return (
    <Reveal delay={index * 50}>
      <a
        ref={cardRef}
        href="#materials-explorer"
        onClick={() => onSelect(category.slug)}
        onMouseMove={tilt}
        onMouseLeave={resetTilt}
        className="material-card group block overflow-hidden rounded-2xl border border-line bg-cream shadow-card"
        style={{ "--card-index": index } as CSSProperties}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-cream-deep">
          <div ref={imageRef} className="material-card-media absolute inset-0">
            <Image
              src={category.image}
              alt={category.imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <span className="material-card-shine" aria-hidden="true" />
        </div>
        <div className="p-5">
          <h3 className="text-base font-semibold text-ink">{category.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
            {category.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink">
            Explore Materials
            <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export function Materials() {
  const [active, setActive] = useState(materialCategories[0].slug);
  const selected = materialCategories.find((item) => item.slug === active) ?? materialCategories[0];

  function selectCategory(slug: string, source?: string) {
    setActive(slug);
    trackEvent("material_category_click", source ? { category: slug, source } : { category: slug });
  }

  return (
    <section id="materials" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Material categories"
          title="Everything You Need to Build"
          description="From everyday essentials to specialized construction materials."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {materialCategories.map((category, index) => (
            <MaterialCard
              key={category.slug}
              category={category}
              index={index}
              onSelect={(slug) => selectCategory(slug)}
            />
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted">
          Also in the app: {additionalCategories.join(" - ")}
        </p>

        <div id="materials-explorer" className="mt-16 scroll-mt-28 rounded-3xl border border-line bg-cream p-5 sm:p-8">
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2">
            {materialCategories.map((category) => {
              const isActive = category.slug === active;
              return (
                <button
                  key={category.slug}
                  type="button"
                  onClick={() => selectCategory(category.slug, "tab")}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
                    isActive
                      ? "bg-brand-400 text-ink shadow-card"
                      : "border border-line bg-white text-ink-soft hover:border-ink/20"
                  }`}
                  aria-pressed={isActive}
                >
                  {category.tabLabel}
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div key={selected.slug} className="explorer-copy">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                In the Bajriwala app
              </p>
              <h3 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">{selected.name}</h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">{selected.description}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {selected.highlights.map((item, index) => (
                  <li
                    key={item}
                    className="explorer-chip rounded-xl border border-line bg-white px-4 py-3 text-sm font-medium text-ink"
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-card">
              {materialCategories.map((category) => {
                const isActive = category.slug === active;
                return (
                  <Image
                    key={category.slug}
                    src={category.image}
                    alt={isActive ? category.imageAlt : ""}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className={`object-cover transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? "opacity-100 scale-100 photo-drift"
                        : "pointer-events-none opacity-0 scale-105"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
