"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "onDark";
type Size = "md" | "lg";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Fired before navigation; never blocks the click. */
  track?: AnalyticsEvent;
  trackParams?: Record<string, string>;
  external?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 active:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-400 text-ink shadow-[0_10px_24px_-10px_rgb(245_179_1/0.9)] hover:bg-brand-300 hover:shadow-[0_16px_32px_-12px_rgb(245_179_1/0.95)]",
  secondary:
    "border border-ink/15 bg-white text-ink shadow-card hover:border-ink/30 hover:shadow-card-hover",
  onDark:
    "border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "lg",
  className = "",
  track,
  trackParams,
  external = false,
  ariaLabel,
  onClick,
}: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const handleClick = () => {
    if (track) trackEvent(track, trackParams);
    onClick?.();
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={handleClick}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={handleClick} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
