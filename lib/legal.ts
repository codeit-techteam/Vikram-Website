import { isConfigured, siteConfig } from "@/lib/site-config";

export const privacyPolicy = {
  title: "Privacy Policy",
  effectiveDate: "19 September 2026",
  lastUpdated: "19 September 2026",
} as const;

export const termsOfService = {
  title: "Terms & Conditions",
  effectiveDate: "25 September 2026",
  lastUpdated: "25 September 2026",
} as const;

export const accountDeletionPolicy = {
  title: "Account Deletion",
  effectiveDate: "25 September 2026",
  lastUpdated: "25 September 2026",
  /** Typical processing window once a verified request is received. */
  processingDays: "7–30 business days",
} as const;

export const operatorName = isConfigured(siteConfig.legalEntity)
  ? siteConfig.legalEntity
  : siteConfig.brandName;

export function privacyContactLines(): { label: string; href?: string; value: string }[] {
  const lines: { label: string; href?: string; value: string }[] = [];

  if (isConfigured(siteConfig.contactEmail)) {
    lines.push({
      label: "Email",
      href: `mailto:${siteConfig.contactEmail}`,
      value: siteConfig.contactEmail,
    });
  }

  if (isConfigured(siteConfig.contactPhone)) {
    lines.push({
      label: "Phone",
      href: `tel:${siteConfig.contactPhone.replace(/[^\d+]/g, "")}`,
      value: siteConfig.contactPhone,
    });
  }

  return lines;
}

/** Same contact channels used for legal / deletion requests. */
export const legalContactLines = privacyContactLines;

export function accountDeletionMailto(subject = "Account deletion request"): string | null {
  if (!isConfigured(siteConfig.contactEmail)) return null;
  const body = [
    "I request deletion of my Bajriwala Customer App account.",
    "",
    "Registered mobile number: ",
    "Full name: ",
    "Reason (optional): ",
  ].join("\n");
  return `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
