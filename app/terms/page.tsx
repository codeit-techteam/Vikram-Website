import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LegalSection } from "@/components/legal/LegalSection";
import { featureFlags } from "@/lib/content";
import {
  legalContactLines,
  operatorName,
  termsOfService,
} from "@/lib/legal";
import { isConfigured, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms of use for the Bajriwala Customer App on Google Play and the App Store, and for this website — accounts, orders, delivery, payments, GST and user responsibilities.",
  alternates: { canonical: "/terms" },
};

const toc = [
  { href: "#agreement", label: "Agreement" },
  { href: "#who-we-are", label: "Who we are" },
  { href: "#eligibility", label: "Eligibility" },
  { href: "#account", label: "Account registration" },
  { href: "#catalogue", label: "Catalogue & pricing" },
  { href: "#orders-payments", label: "Ordering & payments" },
  { href: "#delivery", label: "Delivery" },
  { href: "#returns", label: "Returns & refunds" },
  { href: "#gst", label: "GST & billing" },
  { href: "#loyalty", label: "Loyalty" },
  { href: "#responsibilities", label: "User responsibilities" },
  { href: "#website", label: "This website" },
  { href: "#intellectual-property", label: "Intellectual property" },
  { href: "#disclaimer", label: "Disclaimer & liability" },
  { href: "#suspension", label: "Suspension & termination" },
  { href: "#privacy", label: "Privacy" },
  { href: "#changes", label: "Changes" },
  { href: "#governing-law", label: "Governing law" },
  { href: "#contact", label: "Contact" },
];

export default function TermsPage() {
  const contacts = legalContactLines();

  return (
    <main className="py-16 sm:py-20">
      <Container size="narrow">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Legal</p>
        <h1 className="mt-3 text-4xl font-bold text-ink">{termsOfService.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Please read these Terms & Conditions carefully before using Bajriwala. By creating an
          account, placing an order, or using any Bajriwala service — including the Customer App on{" "}
          <strong className="font-semibold text-ink">Google Play</strong> and the{" "}
          <strong className="font-semibold text-ink">App Store</strong>, and this website — you agree
          to these terms.
        </p>
        <p className="mt-3 text-sm text-muted">
          Effective {termsOfService.effectiveDate} · Last updated {termsOfService.lastUpdated}
        </p>

        <nav
          aria-label="Terms sections"
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

        <div className="mt-10 space-y-0">
          <LegalSection id="agreement" title="1. Agreement to these terms">
            <p>
              These Terms & Conditions form a binding agreement between you and {operatorName}{" "}
              (“Bajriwala”, “we”, “us”). They apply to the Bajriwala Customer App and to this
              marketing website.
            </p>
            <p>
              If you do not agree, do not create an account, place an order, or continue using the
              app or website. Product availability, live prices, delivery options and payment methods
              shown in the app at the time of order govern that order.
            </p>
          </LegalSection>

          <LegalSection id="who-we-are" title="2. Who we are">
            <p>
              Bajriwala is a construction-material marketplace. Through the Customer App you can
              browse materials such as cement, RMC, bricks, sand, aggregates, adhesives, paint and
              putty, electrical, hardware, tiles, safety wears and tools, place orders and have them
              delivered to a construction site.
            </p>
          </LegalSection>

          <LegalSection id="eligibility" title="3. Eligibility">
            <p>
              You must be at least 18 years old and able to form a binding contract under applicable
              Indian law. The app is intended for contractors, builders, site managers and other
              construction professionals (and businesses they represent).
            </p>
            <p>
              If you use Bajriwala on behalf of a business, you confirm that you are authorised to
              bind that business to these terms.
            </p>
          </LegalSection>

          <LegalSection id="account" title="4. Account registration">
            <p>To place orders you must create and maintain an account. You agree that:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>You will provide accurate, complete and up-to-date information</li>
              <li>Mobile number verification is required to use the account</li>
              <li>
                GST and business details you submit (if any) are genuine and belong to you or the
                business you represent
              </li>
              <li>
                You are responsible for keeping your device and login credentials secure, and for
                activity under your account
              </li>
            </ul>
            <p>
              Notify us promptly if you suspect unauthorised use. We may refuse registration or ask
              for extra verification where needed to prevent fraud.
            </p>
            <p>
              To request permanent deletion of your account, see our{" "}
              <Link
                href="/account-deletion"
                className="font-medium text-ink underline-offset-2 hover:underline"
              >
                Account Deletion
              </Link>{" "}
              page.
            </p>
          </LegalSection>

          <LegalSection id="catalogue" title="5. Catalogue, availability and pricing">
            <p>
              Materials, brands, variants, pack sizes, stock status, offers and prices shown in the
              app are for ordering through Bajriwala. Availability can change. Prices may be updated
              without prior notice; the price confirmed for your order in the app at checkout is the
              price that applies to that order.
            </p>
            <p>
              Bulk or volume rates apply only when the quantity thresholds shown for that product are
              met. Promotional offers, including launch or delivery promotions, are subject to the
              terms displayed with the offer in the app.
            </p>
          </LegalSection>

          <LegalSection id="orders-payments" title="6. Ordering and payments">
            <p>
              An order is an offer to buy the materials and quantities you select. Acceptance and
              fulfilment depend on product availability, delivery coverage and successful payment
              (where payment is due before dispatch).
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Orders are subject to product availability at fulfilment</li>
              <li>
                We may cancel an order if payment fails, stock is unavailable, delivery cannot be
                completed to the address provided, or we detect suspected fraud or misuse
              </li>
              {featureFlags.onlinePayments ? (
                <li>
                  Online payments are processed by supported payment providers. Bajriwala does not
                  store full card numbers entered into the payment provider’s checkout
                </li>
              ) : null}
              {featureFlags.cashOnDelivery ? (
                <li>
                  Cash on delivery may be offered for eligible orders and locations; if selected, you
                  must pay the amount due on delivery as shown in the app
                </li>
              ) : null}
            </ul>
          </LegalSection>

          <LegalSection id="delivery" title="7. Delivery policy">
            <p>
              Delivery is to the site or address you choose in the app. Estimated arrival times
              depend on location, material type, vehicle allocation and operational conditions.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Delivery ETA depends on your delivery location and order details</li>
              <li>Heavy materials may require truck or transit-mixer allocation</li>
              <li>Smaller eligible orders may use bike or light-vehicle delivery</li>
              <li>
                Delays can occur due to weather, traffic, access restrictions, force majeure or
                events outside our reasonable control
              </li>
            </ul>
            <p>
              You are responsible for providing accurate access details and ensuring someone
              authorised can receive materials at the delivery location.
            </p>
          </LegalSection>

          <LegalSection id="returns" title="8. Returns and refunds">
            <p>
              Construction materials are often bulky, custom-batched or site-specific. Returns and
              refunds are handled as follows:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Damaged, short-supplied or clearly incorrect materials should be reported within 24
                hours of delivery, with supporting details or photos where requested
              </li>
              <li>Refunds or replacements are processed after verification</li>
              <li>
                Bulk, custom, cut-to-order or specially procured orders may not be refundable once
                confirmed or dispatched, except where required by law or where Bajriwala caused the
                error
              </li>
            </ul>
          </LegalSection>

          {featureFlags.gstInvoice ? (
            <LegalSection id="gst" title="9. GST and billing">
              <p>
                Where GST invoicing is available and you have provided valid tax details, a GST
                invoice may be generated after a successful order. Incorrect GST or business
                information is your responsibility; we may not be able to re-issue invoices for
                wrong details you submitted.
              </p>
              <p>
                Invoices are available in the app under Profile → Invoices (or the equivalent Account
                invoices area).
              </p>
            </LegalSection>
          ) : (
            <LegalSection id="gst" title="9. GST and billing">
              <p>
                Billing and tax documents, where issued, follow the details shown in the app at the
                time of order. Keep your business and tax information accurate in your account.
              </p>
            </LegalSection>
          )}

          {featureFlags.loyaltyPoints ? (
            <LegalSection id="loyalty" title="10. Loyalty">
              <p>
                If loyalty points are enabled on your account, points are earned or redeemed only
                according to the programme rules shown in the app. Points have no cash value outside
                the programme, may expire, and may be adjusted or withdrawn if we detect misuse or
                change the programme with notice in the app.
              </p>
            </LegalSection>
          ) : (
            <LegalSection id="loyalty" title="10. Loyalty">
              <p>
                Loyalty or rewards features, if introduced later, will be subject to the rules shown
                in the app when those features go live.
              </p>
            </LegalSection>
          )}

          <LegalSection id="responsibilities" title="11. User responsibilities">
            <p>You agree that you will not:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Misuse the platform, scrape the catalogue, or interfere with service operations</li>
              <li>Place fake, abusive or fraudulent orders</li>
              <li>Provide false identity, GST or delivery information</li>
              <li>Attempt to circumvent pricing, payment or delivery controls</li>
            </ul>
            <p>
              Fraudulent or abusive activity may result in order cancellation, account suspension or
              termination, and reporting to authorities where appropriate.
            </p>
          </LegalSection>

          <LegalSection id="website" title="12. This website">
            <p>
              This website is a marketing and information site for the Bajriwala Customer App. It
              does not itself complete material purchases. Descriptions of categories, features and
              offers are summaries; the live app catalogue and checkout controls govern transactions.
            </p>
            <p>
              Store download links open Google Play or the App Store when configured. Third-party
              store terms also apply to downloading and installing the app.
            </p>
          </LegalSection>

          <LegalSection id="intellectual-property" title="13. Intellectual property">
            <p>
              Bajriwala branding, logos, app design, website content and related materials are owned
              by {operatorName} or its licensors. You may not copy, modify, distribute or create
              derivative works from them without prior written permission, except as allowed by law
              for personal use of the app and website.
            </p>
          </LegalSection>

          <LegalSection id="disclaimer" title="14. Disclaimer and limitation of liability">
            <p>
              The app and website are provided on an “as available” basis. We aim for accurate
              catalogue and order information but do not warrant uninterrupted service, error-free
              operation, or that every listed product will always be in stock.
            </p>
            <p>
              To the fullest extent permitted by Indian law, Bajriwala is not liable for indirect,
              incidental, special or consequential losses (including lost profits, project delay
              costs or third-party claims) arising from use of the app, website or delivery delays
              outside our reasonable control. Our aggregate liability for a given order is limited to
              the amount you paid Bajriwala for that order, except where liability cannot be limited
              by law (including for proven fraud or wilful misconduct).
            </p>
          </LegalSection>

          <LegalSection id="suspension" title="15. Suspension and termination">
            <p>
              We may suspend or terminate access to your account if you breach these terms, if
              required by law, or to protect Bajriwala, our partners or other users. You may stop
              using the app at any time and may request account deletion as described on the Account
              Deletion page.
            </p>
          </LegalSection>

          <LegalSection id="privacy" title="16. Privacy">
            <p>
              How we collect and use personal information is described in our{" "}
              <Link
                href="/privacy"
                className="font-medium text-ink underline-offset-2 hover:underline"
              >
                Privacy Policy
              </Link>
              . Customer information is used to operate the service and improve it. Bajriwala does
              not sell customer personal data.
            </p>
          </LegalSection>

          <LegalSection id="changes" title="17. Changes to these terms">
            <p>
              We may update these Terms & Conditions when the product, law or our operations change.
              The “Last updated” date at the top will change. Material updates will be posted on this
              page and, where appropriate, notified in the app. Continued use after an update means
              you accept the revised terms.
            </p>
          </LegalSection>

          <LegalSection id="governing-law" title="18. Governing law">
            <p>
              These terms are governed by the laws of India. Courts in India shall have exclusive
              jurisdiction, subject to any mandatory consumer protections that apply to you.
            </p>
          </LegalSection>

          <LegalSection id="contact" title="19. Contact and support">
            <p>
              For questions about these terms, orders or support, contact {operatorName} using the
              details below, or through the support options in the Customer App Account area.
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
                <li>
                  <span className="font-medium text-ink">Working hours: </span>
                  9 AM – 8 PM (India)
                </li>
              </ul>
            ) : (
              <p>
                Use the support options in the Bajriwala Customer App Account area until contact
                details are published here.
              </p>
            )}
            {isConfigured(siteConfig.contactEmail) ? (
              <p>
                Support email used in the app:{" "}
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="font-medium text-ink underline-offset-2 hover:underline"
                >
                  {siteConfig.contactEmail}
                </a>
              </p>
            ) : null}
            <p>
              You can also reach us from the{" "}
              <Link
                href="/#contact"
                className="font-medium text-ink underline-offset-2 hover:underline"
              >
                contact section
              </Link>{" "}
              on this website.
            </p>
          </LegalSection>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="secondary" size="md">
            Back to home
          </ButtonLink>
          <ButtonLink href="/privacy" variant="secondary" size="md">
            Privacy Policy
          </ButtonLink>
          <ButtonLink href="/account-deletion" variant="secondary" size="md">
            Account Deletion
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
