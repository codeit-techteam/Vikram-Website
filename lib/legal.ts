import { isConfigured, siteConfig } from "@/lib/site-config";

export const privacyPolicy = {
  title: "Privacy Policy",
  effectiveDate: "19 September 2026",
  lastUpdated: "19 September 2026",
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
