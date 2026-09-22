"use client";

import type { ReactNode } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { isConfigured, siteConfig, telHref } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

export function Contact() {
  const email = isConfigured(siteConfig.contactEmail);
  const phone = isConfigured(siteConfig.contactPhone);
  const whatsapp = isConfigured(siteConfig.whatsappUrl);
  const hasContact = email || phone || whatsapp;

  return (
    <section id="contact" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Need help?"
          title="Have a requirement or looking for a material?"
          description="Talk to our team for material requirements, order help or site delivery questions."
        />

        {hasContact ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {email ? (
              <ContactCard
                href={`mailto:${siteConfig.contactEmail}`}
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value={siteConfig.contactEmail}
                eventValue="email"
              />
            ) : null}
            {phone ? (
              <ContactCard
                href={telHref(siteConfig.contactPhone)}
                icon={<Phone className="h-5 w-5" />}
                label="Phone"
                value={siteConfig.contactPhone}
                eventValue="phone"
              />
            ) : null}
            {whatsapp ? (
              <ContactCard
                href={siteConfig.whatsappUrl}
                icon={<MessageCircle className="h-5 w-5" />}
                label="WhatsApp"
                value="Message the team"
                eventValue="whatsapp"
                external
              />
            ) : null}
          </div>
        ) : (
          <Reveal className="mx-auto mt-10 max-w-xl rounded-2xl border border-dashed border-line bg-white px-6 py-8 text-center text-sm leading-relaxed text-muted">
            Download the Bajriwala app to chat with our team and manage your orders.
          </Reveal>
        )}
      </Container>
    </section>
  );
}

function ContactCard({
  href,
  icon,
  label,
  value,
  eventValue,
  external,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  eventValue: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={() => trackEvent("contact_click", { method: eventValue })}
      className="rounded-2xl border border-line bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-ink">
        {icon}
      </span>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-muted">{label}</p>
      <p className="mt-1 text-base font-semibold text-ink">{value}</p>
    </a>
  );
}
