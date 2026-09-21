"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <Container size="narrow">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Straight answers about the Bajriwala Customer App."
        />
        <div className="mt-10 divide-y divide-line rounded-3xl border border-line bg-cream">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-ink sm:px-7"
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    {item.question}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted transition ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-7"
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
