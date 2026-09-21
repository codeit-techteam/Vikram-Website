"use client";

import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { navLinks } from "@/lib/site-config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-[padding,background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "border-line/80 bg-white/80 py-2.5 shadow-[0_8px_30px_-18px_rgb(20_22_26/0.35)] backdrop-blur-xl"
            : "border-transparent bg-cream/70 py-4 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-5 sm:px-6 lg:px-8">
          <a href="#top" className="relative z-10 min-w-0" aria-label="Bajriwala home" onClick={closeMenu}>
            <Logo compact={scrolled} />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-soft/80 transition hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="#download" size="md" track="download_app_click" trackParams={{ source: "navbar" }}>
              Download App
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ButtonLink
              href="#download"
              size="md"
              className="hidden px-3.5 py-2 text-xs sm:inline-flex"
              track="download_app_click"
              trackParams={{ source: "navbar_mobile" }}
            >
              Download
            </ButtonLink>
            <button
              type="button"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls={panelId}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div className="lg:hidden" aria-hidden={!menuOpen}>
        <button
          type="button"
          tabIndex={menuOpen ? 0 : -1}
          className={`fixed inset-0 z-60 bg-ink/45 backdrop-blur-[2px] transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-label="Close menu"
          onClick={closeMenu}
        />
        <aside
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={`fixed inset-y-0 right-0 z-70 flex h-dvh w-[min(20.5rem,88vw)] flex-col border-l border-line bg-white shadow-[0_24px_80px_-24px_rgb(20_22_26/0.45)] transition-[translate] duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4 pt-[max(1rem,env(safe-area-inset-top))]">
            <Logo compact />
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto overscroll-contain px-3 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                className="block rounded-xl px-3 py-3.5 text-base font-medium text-ink hover:bg-cream-deep"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="border-t border-line px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4">
            <ButtonLink
              href="#download"
              className="w-full"
              track="download_app_click"
              trackParams={{ source: "mobile_nav" }}
              onClick={closeMenu}
            >
              Download App
            </ButtonLink>
          </div>
        </aside>
      </div>
    </>
  );
}
