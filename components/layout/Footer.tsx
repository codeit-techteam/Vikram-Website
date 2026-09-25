import { Logo } from "@/components/brand/Logo";
import { isConfigured, siteConfig, telHref } from "@/lib/site-config";
import { materialCategories } from "@/lib/content";

const company = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#why-bajriwala" },
  { label: "Contact", href: "#contact" },
];

const support = [
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Account Deletion", href: "/account-deletion" },
];

export function Footer() {
  const play = isConfigured(siteConfig.googlePlayUrl);
  const store = isConfigured(siteConfig.appStoreUrl);
  const email = isConfigured(siteConfig.contactEmail);
  const phone = isConfigured(siteConfig.contactPhone);
  const social = [
    { label: "Instagram", href: siteConfig.socialLinks.instagram },
    { label: "Facebook", href: siteConfig.socialLinks.facebook },
    { label: "LinkedIn", href: siteConfig.socialLinks.linkedin },
    { label: "YouTube", href: siteConfig.socialLinks.youtube },
  ].filter((item) => isConfigured(item.href));

  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo inverted />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              {siteConfig.shortTagline}
            </p>
            {(email || phone) && (
              <ul className="mt-5 space-y-2 text-sm text-white/65">
                {email ? (
                  <li>
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="transition hover:text-white"
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </li>
                ) : null}
                {phone ? (
                  <li>
                    <a
                      href={telHref(siteConfig.contactPhone)}
                      className="transition hover:text-white"
                    >
                      {siteConfig.contactPhone}
                    </a>
                  </li>
                ) : null}
              </ul>
            )}
          </div>

          <FooterColumn title="Company" links={company} />
          <FooterColumn
            title="Materials"
            links={materialCategories.slice(0, 8).map((category) => ({
              label: category.tabLabel,
              href: "#materials",
            }))}
          />
          <div>
            <p className="text-sm font-semibold text-white">App</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={play ? siteConfig.googlePlayUrl : "#download"}
                  className="text-sm text-white/65 transition hover:text-white"
                  {...(play ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  Google Play
                </a>
              </li>
              <li>
                <a
                  href={store ? siteConfig.appStoreUrl : "#download"}
                  className="text-sm text-white/65 transition hover:text-white"
                  {...(store ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  App Store
                </a>
              </li>
            </ul>
          </div>
          <div>
            <FooterColumn title="Support" links={support} />
            <p className="mt-8 text-sm font-semibold text-white">Legal</p>
            <ul className="mt-4 space-y-2.5">
              {legal.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/65 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Bajriwala. All rights reserved.
          </p>
          {social.length > 0 ? (
            <ul className="flex flex-wrap gap-4">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-white/65 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-sm text-white/65 transition hover:text-white">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
