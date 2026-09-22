/**
 * Single source of truth for brand strings, external URLs and contact details.
 *
 * External links and contact methods are read from NEXT_PUBLIC_* env vars so
 * they can be updated without a code change. Contact details fall back to the
 * same support values used in the customer app when env vars are unset, so the
 * marketing site never shows developer configuration copy to visitors.
 * Empty store / social values are handled by consumers via `isConfigured`.
 */

const env = (value: string | undefined): string => (value ?? "").trim();

/** Prefer an env value; fall back when the variable is missing or blank. */
const envOr = (value: string | undefined, fallback: string): string => {
  const configured = env(value);
  return configured.length > 0 ? configured : fallback;
};

export const siteConfig = {
  brandName: "Bajriwala",
  tagline: "Construction Materials. Delivered Right to Your Site.",
  shortTagline: "Construction materials, delivered to your site.",
  description:
    "Buy construction materials including cement, RMC, bricks, aggregates and more with Bajriwala. Discover materials, order from the app and get them delivered to your site.",
  siteUrl: env(process.env.NEXT_PUBLIC_SITE_URL) || "http://localhost:3000",

  googlePlayUrl: env(process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL),
  appStoreUrl: env(process.env.NEXT_PUBLIC_APP_STORE_URL),

  // Defaults match the customer app support contacts; override via NEXT_PUBLIC_*.
  contactEmail: envOr(process.env.NEXT_PUBLIC_CONTACT_EMAIL, "support@bajriwala.com"),
  contactPhone: envOr(process.env.NEXT_PUBLIC_CONTACT_PHONE, "+91 99999 99999"),
  whatsappUrl: envOr(process.env.NEXT_PUBLIC_WHATSAPP_URL, "https://wa.me/919999999999"),

  socialLinks: {
    instagram: env(process.env.NEXT_PUBLIC_INSTAGRAM_URL),
    facebook: env(process.env.NEXT_PUBLIC_FACEBOOK_URL),
    linkedin: env(process.env.NEXT_PUBLIC_LINKEDIN_URL),
    youtube: env(process.env.NEXT_PUBLIC_YOUTUBE_URL),
  },

  googleAnalyticsId: env(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID),

  /** Registered business name shown on legal pages. Falls back to the brand name. */
  legalEntity: env(process.env.NEXT_PUBLIC_LEGAL_ENTITY),
} as const;

/** True when an environment-driven link or contact value has been provided. */
export const isConfigured = (value: string): boolean => value.length > 0;

/**
 * Anchor used whenever a store URL has not been configured yet. Visitors are
 * taken to the on-page download section instead of a fabricated store link.
 */
export const DOWNLOAD_ANCHOR = "#download";

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Materials", href: "#materials" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#why-bajriwala" },
  { label: "FAQ", href: "#faq" },
] as const;

export const telHref = (phone: string): string =>
  `tel:${phone.replace(/[^\d+]/g, "")}`;
