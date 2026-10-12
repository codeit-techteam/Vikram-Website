"use client";

import { useEffect, useState } from "react";
import { PhoneMockup } from "@/components/brand/PhoneMockup";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { appScreens } from "@/lib/content";

const AUTOPLAY_MS = 5000;

export function AppShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setTimeout(
      () => setActive((current) => (current + 1) % appScreens.length),
      AUTOPLAY_MS,
    );
    return () => window.clearTimeout(timer);
  }, [active, paused, reducedMotion]);

  const screen = appScreens[active];
  const prev = appScreens[(active - 1 + appScreens.length) % appScreens.length];
  const next = appScreens[(active + 1) % appScreens.length];

  return (
    <section id="app" className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-blueprint-dark opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="brand-glow pointer-events-none absolute -right-40 top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full opacity-40" />

      <Container className="relative">
        <SectionHeading
          tone="dark"
          eyebrow="The customer app"
          title="Everything your site needs. Right from your phone."
          description="Discover materials, compare prices and choose the right variant - this is the live Bajriwala app."
        />

        <div
          className="mt-14 grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div role="tablist" aria-label="App screens" className="order-2 flex flex-col gap-3 lg:order-1">
            {appScreens.map((item, index) => {
              const selected = index === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`app-tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls="app-screen-panel"
                  onClick={() => setActive(index)}
                  className={`group relative overflow-hidden rounded-2xl p-5 text-left transition duration-300 sm:p-6 ${
                    selected ? "glass-dark bg-white/[0.08]" : "hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition ${
                        selected ? "bg-brand-400 text-ink" : "bg-white/10 text-white/60 group-hover:text-white"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <div>
                      <p className={`text-lg font-semibold transition ${selected ? "text-white" : "text-white/60 group-hover:text-white/90"}`}>
                        {item.caption}
                        <span className="ml-2 text-sm font-medium text-brand-300/80">{item.label}</span>
                      </p>
                      <p
                        className={`grid text-sm leading-relaxed text-white/65 transition-all duration-500 ${
                          selected ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <span className="overflow-hidden">{item.description}</span>
                      </p>
                    </div>
                  </div>
                  {selected ? (
                    <span className="absolute inset-x-5 bottom-0 h-[2px] overflow-hidden rounded-full bg-white/10 sm:inset-x-6">
                      <span
                        key={`${item.id}-${paused}`}
                        className={`block h-full bg-brand-400 ${paused || reducedMotion ? "" : "progress-fill"}`}
                        style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                      />
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>

          <div
            id="app-screen-panel"
            role="tabpanel"
            aria-labelledby={`app-tab-${screen.id}`}
            className="relative order-1 flex h-[560px] items-start justify-center sm:h-[640px] lg:order-2"
          >
            <div className="absolute left-1/2 top-16 hidden -translate-x-[125%] -rotate-6 opacity-40 blur-[1px] transition duration-500 md:block">
              <PhoneMockup screen={prev} size="sm" sizes="220px" />
            </div>
            <div className="absolute left-1/2 top-16 hidden translate-x-[25%] rotate-6 opacity-40 blur-[1px] transition duration-500 md:block">
              <PhoneMockup screen={next} size="sm" sizes="220px" />
            </div>
            <div key={screen.id} className="screen-in relative z-10">
              <PhoneMockup screen={screen} size="lg" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
