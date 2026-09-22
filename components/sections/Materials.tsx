"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { additionalCategories, materialCategories } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

export function Materials() {
  const [active, setActive] = useState(materialCategories[0].slug);
  const selected = materialCategories.find((item) => item.slug === active) ?? materialCategories[0];

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
            <Reveal key={category.slug} delay={index * 50}>
              <a
                href="#materials-explorer"
                onClick={() => {
                  setActive(category.slug);
                  trackEvent("material_category_click", { category: category.slug });
                }}
                className="group block overflow-hidden rounded-2xl border border-line bg-cream shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-deep">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-ink">{category.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                    {category.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink">
                    Explore Materials
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
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
                  onClick={() => {
                    setActive(category.slug);
                    trackEvent("material_category_click", { category: category.slug, source: "tab" });
                  }}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
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
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                In the Bajriwala app
              </p>
              <h3 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">{selected.name}</h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">{selected.description}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {selected.highlights.map((item) => (
                  <li key={item} className="rounded-xl border border-line bg-white px-4 py-3 text-sm font-medium text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-card">
              <Image
                src={selected.image}
                alt={selected.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
