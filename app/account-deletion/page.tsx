import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LegalSection } from "@/components/legal/LegalSection";
import {
  accountDeletionMailto,
  accountDeletionPolicy,
  legalContactLines,
  operatorName,
} from "@/lib/legal";
import { isConfigured, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Account Deletion",
  description:
    "How to request deletion of your Bajriwala Customer App account and related personal data — for Google Play and App Store users.",
  alternates: { canonical: "/account-deletion" },
};

const toc = [
  { href: "#overview", label: "Overview" },
  { href: "#how-to-request", label: "How to request deletion" },
  { href: "#what-we-delete", label: "What we delete" },
  { href: "#what-we-retain", label: "What we may retain" },
  { href: "#timeline", label: "Timeline" },
  { href: "#after-deletion", label: "After deletion" },
  { href: "#contact", label: "Contact" },
];

export default function AccountDeletionPage() {
  const contacts = legalContactLines();
  const mailto = accountDeletionMailto();

  return (
    <main className="py-16 sm:py-20">
      <Container size="narrow">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Legal</p>
        <h1 className="mt-3 text-4xl font-bold text-ink">{accountDeletionPolicy.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          This page explains how to request deletion of your Bajriwala Customer App account and
          associated personal data. It is provided for users of the production app on{" "}
          <strong className="font-semibold text-ink">Google Play</strong> and the{" "}
          <strong className="font-semibold text-ink">App Store</strong>, and meets store requirements
          for a clear web path to request account deletion.
        </p>
        <p className="mt-3 text-sm text-muted">
          Effective {accountDeletionPolicy.effectiveDate} · Last updated{" "}
          {accountDeletionPolicy.lastUpdated}
        </p>

        <nav
          aria-label="Account deletion sections"
          className="mt-8 rounded-2xl border border-line bg-white p-5 sm:p-6"
        >
          <p className="text-sm font-semibold text-ink">On this page</p>
          <ol className="mt-3 columns-1 gap-x-8 text-sm text-muted sm:columns-2">
            {toc.map((item, index) => (
              <li key={item.href} className="break-inside-avoid py-1">
                <a href={item.href} className="hover:text-ink">
                  {index + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-8 rounded-2xl border border-line bg-cream p-5 sm:p-6">
          <p className="text-sm font-semibold text-ink">Request deletion</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Email {operatorName} from the mobile number or email linked to your Bajriwala account,
            or use the button below to open a pre-filled deletion request.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {mailto ? (
              <ButtonLink href={mailto} variant="primary" size="md" external>
                Email deletion request
              </ButtonLink>
            ) : null}
            {isConfigured(siteConfig.whatsappUrl) ? (
              <ButtonLink href={siteConfig.whatsappUrl} variant="secondary" size="md" external>
                WhatsApp support
              </ButtonLink>
            ) : null}
          </div>
        </div>

        <div className="mt-10 space-y-0">
          <LegalSection id="overview" title="1. Overview">
            <p>
              When you delete your Bajriwala account, we remove or anonymise personal data that
              identifies your account, subject to data we must keep for tax, accounting, dispute
              handling, fraud prevention or other legal obligations. Deleting the app from your
              device does <strong className="font-semibold text-ink">not</strong> by itself delete
              your account — you need to submit a deletion request as described below.
            </p>
            <p>
              More detail on how we handle personal information is in our{" "}
              <Link
                href="/privacy"
                className="font-medium text-ink underline-offset-2 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection id="how-to-request" title="2. How to request deletion">
            <p>Use any of the following methods:</p>
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                <span className="font-medium text-ink">Email (recommended)</span>
                <p className="mt-1">
                  Send a message to{" "}
                  {isConfigured(siteConfig.contactEmail) ? (
                    <a
                      href={mailto ?? `mailto:${siteConfig.contactEmail}`}
                      className="font-medium text-ink underline-offset-2 hover:underline"
                    >
                      {siteConfig.contactEmail}
                    </a>
                  ) : (
                    "the support email shown in the Bajriwala app"
                  )}{" "}
                  with the subject line <span className="font-medium text-ink">Account deletion request</span>.
                  Include:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>The registered mobile number on your Bajriwala account</li>
                  <li>Your full name as shown in the app</li>
                  <li>A clear statement that you want the account permanently deleted</li>
                  <li>Optional: a short reason for the request</li>
                </ul>
              </li>
              <li>
                <span className="font-medium text-ink">In the Customer App</span>
                <p className="mt-1">
                  Open Account / Profile, use Contact Support or the help option, and ask for account
                  deletion. Where an in-app “Delete account” control is available, you may use that
                  flow instead.
                </p>
              </li>
              <li>
                <span className="font-medium text-ink">Phone or WhatsApp</span>
                <p className="mt-1">
                  Contact support using the phone or WhatsApp channel published on this site or in
                  the app. We will still verify that the request comes from the account holder before
                  deleting data.
                </p>
              </li>
            </ol>
            <p>
              We may ask you to confirm the request (for example via OTP on the registered mobile
              number) so we do not delete someone else’s account by mistake.
            </p>
          </LegalSection>

          <LegalSection id="what-we-delete" title="3. What we delete">
            <p>After a verified request, we delete or irreversibly anonymise, as applicable:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Account profile details (name, mobile number, email, profile settings)</li>
              <li>Saved delivery sites and addresses tied to the account</li>
              <li>Cart, wishlist and similar in-app preference data</li>
              <li>Push-notification tokens and device links for that account</li>
              <li>Loyalty points balance associated with the account (if any)</li>
              <li>
                Authentication sessions so you can no longer sign in with that account
              </li>
            </ul>
            <p>
              Order history that is no longer required for legal retention may be deleted or stored
              only in anonymised / aggregated form.
            </p>
          </LegalSection>

          <LegalSection id="what-we-retain" title="4. What we may retain">
            <p>
              Some records cannot be fully erased immediately or at all, because of law or legitimate
              operational needs. We may retain for the required period:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Order, payment-status, invoice and GST records needed for tax, accounting and audit
              </li>
              <li>Records needed to handle disputes, chargebacks, refunds or fraud investigations</li>
              <li>
                Information we must keep under applicable Indian law (including the Digital Personal
                Data Protection Act, 2023, where retention is required or permitted)
              </li>
            </ul>
            <p>
              Retained records are limited to what is necessary and are not used to market to you
              after the account is deleted.
            </p>
          </LegalSection>

          <LegalSection id="timeline" title="5. Timeline">
            <p>
              Once we verify your request, we aim to complete account deletion within{" "}
              <strong className="font-semibold text-ink">
                {accountDeletionPolicy.processingDays}
              </strong>
              . Complex cases (for example open orders, pending refunds or active disputes) may take
              longer; we will tell you if more time is needed.
            </p>
            <p>
              If you have an open order that is not yet delivered or settled, we may ask you to wait
              until that order is completed or cancelled before finishing deletion.
            </p>
          </LegalSection>

          <LegalSection id="after-deletion" title="6. After deletion">
            <p>
              When deletion is complete you will no longer be able to sign in with that account. To
              use Bajriwala again you must register a new account. Deleted personal data cannot be
              restored.
            </p>
            <p>
              Uninstalling the app from Google Play or the App Store only removes the app from your
              device. Follow the steps on this page if you also want the account and personal data
              removed from Bajriwala systems.
            </p>
          </LegalSection>

          <LegalSection id="contact" title="7. Contact">
            <p>
              For account deletion or related privacy requests, contact {operatorName}:
            </p>
            {contacts.length > 0 ? (
              <ul className="list-none space-y-2 pl-0">
                {contacts.map((item) => (
                  <li key={item.label}>
                    <span className="font-medium text-ink">{item.label}: </span>
                    {item.href ? (
                      <a href={item.href} className="text-ink underline-offset-2 hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                Use the support options in the Bajriwala Customer App Account area until contact
                details are published here.
              </p>
            )}
            <p>
              See also our{" "}
              <Link
                href="/privacy"
                className="font-medium text-ink underline-offset-2 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/terms"
                className="font-medium text-ink underline-offset-2 hover:underline"
              >
                Terms & Conditions
              </Link>
              .
            </p>
          </LegalSection>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="secondary" size="md">
            Back to home
          </ButtonLink>
          {mailto ? (
            <ButtonLink href={mailto} variant="primary" size="md" external>
              Email deletion request
            </ButtonLink>
          ) : null}
          <ButtonLink href="/privacy" variant="secondary" size="md">
            Privacy Policy
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
