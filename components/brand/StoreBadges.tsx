"use client";

import type { ReactNode } from "react";
import { DOWNLOAD_ANCHOR, isConfigured, siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

type StoreBadgesProps = {
  size?: "md" | "lg";
  className?: string;
  align?: "start" | "center";
};

function GooglePlayMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
      <path d="M3.6 2.4c-.4.3-.6.8-.6 1.4v16.4c0 .6.2 1.1.6 1.4l10.1-9.6L3.6 2.4Z" fill="#4285F4" />
      <path d="M16.8 15.7 13.1 12 3.6 21.6c.2.1.4.2.7.2.4 0 .8-.1 1.2-.4l11.3-6.5v.8Z" fill="#34A853" />
      <path d="M20.5 10.8 16.8 8.7 13.1 12l3.7 3.3 3.7-2.1c.9-.5.9-1.9 0-2.4Z" fill="#FBBC04" />
      <path d="M13.1 12 16.8 8.3 5.5 1.8C5.1 1.5 4.7 1.4 4.3 1.4c-.3 0-.5.1-.7.2L13.1 12Z" fill="#EA4335" />
    </svg>
  );
}

function AppleMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`shrink-0 fill-current ${className}`} aria-hidden="true">
      <path d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.5.8s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-.1 2.9-2.3c1-.1 2-1.3 2.5-2.4-6.5-2.5-5.5-9.1-3.8-10.9ZM14.6 5.4c.6-.8 1.1-1.9.9-3-1 .1-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.5 3-1.5Z" />
    </svg>
  );
}

function BadgeShell({
  href,
  onClick,
  children,
  ariaLabel,
  size,
}: {
  href: string;
  onClick: () => void;
  children: ReactNode;
  ariaLabel: string;
  size: "md" | "lg";
}) {
  const configured = href !== DOWNLOAD_ANCHOR && href.startsWith("http");
  const padding = size === "lg" ? "px-4 py-2.5" : "px-3.5 py-2";

  return (
    <a
      href={href}
      onClick={onClick}
      target={configured ? "_blank" : undefined}
      rel={configured ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={`inline-flex items-center gap-3 rounded-xl bg-[#14161A] text-white shadow-card transition duration-200 hover:-translate-y-0.5 hover:bg-black ${padding}`}
    >
      {children}
    </a>
  );
}

export function StoreBadges({ size = "lg", className = "", align = "start" }: StoreBadgesProps) {
  const playHref = isConfigured(siteConfig.googlePlayUrl)
    ? siteConfig.googlePlayUrl
    : DOWNLOAD_ANCHOR;
  const storeHref = isConfigured(siteConfig.appStoreUrl)
    ? siteConfig.appStoreUrl
    : DOWNLOAD_ANCHOR;
  const alignment = align === "center" ? "justify-center" : "justify-start";
  const kicker = size === "lg" ? "text-[10px]" : "text-[9px]";
  const name = size === "lg" ? "text-[15px]" : "text-sm";

  return (
    <div className={`flex flex-wrap gap-3 ${alignment} ${className}`}>
      <BadgeShell
        href={playHref}
        size={size}
        ariaLabel="Get it on Google Play"
        onClick={() => {
          trackEvent("app_download_google_play");
          trackEvent("download_app_click", { store: "google_play" });
        }}
      >
        <GooglePlayMark />
        <span className="flex flex-col items-start leading-none">
          <span className={`${kicker} uppercase tracking-[0.16em] text-white/70`}>Get it on</span>
          <span className={`mt-1 font-semibold ${name}`}>Google Play</span>
        </span>
      </BadgeShell>
      <BadgeShell
        href={storeHref}
        size={size}
        ariaLabel="Download on the App Store"
        onClick={() => {
          trackEvent("app_download_app_store");
          trackEvent("download_app_click", { store: "app_store" });
        }}
      >
        <AppleMark />
        <span className="flex flex-col items-start leading-none">
          <span className={`${kicker} uppercase tracking-[0.16em] text-white/70`}>
            Download on the
          </span>
          <span className={`mt-1 font-semibold ${name}`}>App Store</span>
        </span>
      </BadgeShell>
    </div>
  );
}

export function AppleGlyph({ className }: { className?: string }) {
  return <AppleMark className={className} />;
}
