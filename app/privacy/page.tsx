import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LegalSection } from "@/components/legal/LegalSection";
import { operatorName, privacyContactLines, privacyPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Bajriwala collects, uses and shares information in the Customer App on Google Play and the App Store, and on this website.",
  alternates: { canonical: "/privacy" },
};

const toc = [
  { href: "#who-we-are", label: "Who we are" },
  { href: "#scope", label: "What this policy covers" },
  { href: "#data-we-collect", label: "Information we collect" },
  { href: "#permissions", label: "App permissions" },
  { href: "#how-we-use", label: "How we use information" },
  { href: "#sharing", label: "How we share information" },
  { href: "#store-disclosures", label: "Play Store & App Store" },
  { href: "#retention", label: "Retention" },
  { href: "#security", label: "Security" },
  { href: "#your-rights", label: "Your rights" },
  { href: "#children", label: "Children" },
  { href: "#changes", label: "Changes" },
  { href: "#contact", label: "Contact" },
];

export default function PrivacyPage() {
  const contacts = privacyContactLines();

  return (
    <main className="py-16 sm:py-20">
      <Container size="narrow">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Legal</p>
        <h1 className="mt-3 text-4xl font-bold text-ink">{privacyPolicy.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          This Privacy Policy explains how {operatorName} (“Bajriwala”, “we”, “us”) handles personal
          information when you use the Bajriwala Customer App on{" "}
          <strong className="font-semibold text-ink">Google Play</strong> and the{" "}
          <strong className="font-semibold text-ink">App Store</strong>, and when you visit this
          website.
        </p>
        <p className="mt-3 text-sm text-muted">
          Effective {privacyPolicy.effectiveDate} · Last updated {privacyPolicy.lastUpdated}
        </p>

        <nav
          aria-label="Privacy policy sections"
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
          <LegalSection id="who-we-are" title="1. Who we are">
            <p>
              Bajriwala is a construction-material marketplace. Through the Customer App you can
              discover materials such as cement, RMC, bricks, sand and aggregates, place orders and
              have them delivered to a construction site.
            </p>
            <p>
              This policy is written for the live production app distributed on Google Play and the
              App Store, and for this official Bajriwala website.
            </p>
          </LegalSection>

          <LegalSection id="scope" title="2. What this policy covers">
            <p>It applies to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>The Bajriwala Customer App for Android (Google Play)</li>
              <li>The Bajriwala Customer App for iOS (App Store)</li>
              <li>This website, including contact forms or links we publish here</li>
            </ul>
            <p>
              It does not replace the terms shown in the app at checkout, or the policies of Google,
              Apple or payment providers you use.
            </p>
          </LegalSection>

          <LegalSection id="data-we-collect" title="3. Information we collect">
            <p>
              We collect information that you provide, information created when you use the app, and
              information from service providers who help us run the product. The categories below
              match how the production Customer App actually works.
            </p>

            <h3 className="text-base font-semibold text-ink">Account and contact details</h3>
            <p>
              When you create or use an account we may collect your name, mobile number, email
              address, profile details and authentication information. The app shows a signed-in
              account area so that orders and notifications can be tied to you.
            </p>

            <h3 className="text-base font-semibold text-ink">Delivery location and addresses</h3>
            <p>
              Orders are placed against a delivery location (for example a site or office address).
              We collect the address, locality and related location details you choose so materials
              can be delivered to that site.
            </p>

            <h3 className="text-base font-semibold text-ink">Orders, cart and product activity</h3>
            <p>
              We collect search terms, category and brand browsing, products and variants added to
              the cart, quantities, prices, offers, bulk-rate selections, order history and order
              status (placed, processing, dispatched, on the way, delivered).
            </p>

            <h3 className="text-base font-semibold text-ink">Payments and invoices</h3>
            <p>
              If you pay online, the payment is processed by a supported payment service. We receive
              confirmation of payment status, amount and an order reference. We do not ask you to
              type full card details into Bajriwala-controlled fields; those are handled by the
              payment provider. If cash on delivery is available for your order, we record that you
              chose that option. If GST invoicing is used, we collect the business and tax details
              you submit so an invoice can be issued.
            </p>

            <h3 className="text-base font-semibold text-ink">Loyalty</h3>
            <p>
              If loyalty points are enabled on your account, we keep a record of eligible purchases
              and points earned or redeemed according to the programme rules shown in the app.
            </p>

            <h3 className="text-base font-semibold text-ink">Voice search</h3>
            <p>
              The app includes voice search. If you use it, microphone input is processed to turn
              your speech into a search query (for example cement, RMC or sand). We use that input
              to run the search you requested.
            </p>

            <h3 className="text-base font-semibold text-ink">Notifications and device data</h3>
            <p>
              To send order and account notifications we may collect a push-notification token and
              device identifiers. We may also collect app version, operating system, language,
              approximate network information and technical logs needed to operate, secure and debug
              the app.
            </p>

            <h3 className="text-base font-semibold text-ink">This website</h3>
            <p>
              If you contact us from the website we collect the details you send. If analytics is
              configured on the website, we collect standard page-view and click events (including
              app-store download clicks). Analytics is not loaded unless a measurement ID is
              configured.
            </p>
          </LegalSection>

          <LegalSection id="permissions" title="4. App permissions">
            <p>Depending on the device and the features you use, the app may request:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <span className="font-medium text-ink">Location</span> - to help set or confirm a
                delivery site
              </li>
              <li>
                <span className="font-medium text-ink">Microphone</span> - only if you use voice
                search
              </li>
              <li>
                <span className="font-medium text-ink">Notifications</span> - for order and account
                alerts
              </li>
              <li>
                <span className="font-medium text-ink">Network access</span> - to load the catalogue,
                cart, payments and order status
              </li>
            </ul>
            <p>
              You can refuse or later disable a permission in system settings. Some features will
              not work without it. We do not use microphone access for advertising.
            </p>
          </LegalSection>

          <LegalSection id="how-we-use" title="5. How we use information">
            <p>We use personal information to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Create and maintain your account</li>
              <li>Show relevant materials, prices, offers and bulk rates</li>
              <li>Take, fulfil and track orders to your site</li>
              <li>Process online payments or record cash on delivery</li>
              <li>Issue GST invoices where you have provided tax details</li>
              <li>Operate loyalty points on eligible purchases</li>
              <li>Send in-app or push notifications about your orders</li>
              <li>Provide customer support</li>
              <li>Keep the app secure, prevent fraud and fix errors</li>
              <li>Meet legal, tax and accounting requirements</li>
            </ul>
            <p>We do not sell your personal information.</p>
          </LegalSection>

          <LegalSection id="sharing" title="6. How we share information">
            <p>We share information only as needed to run the service:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <span className="font-medium text-ink">Payment processors</span> - to complete
                online payments
              </li>
              <li>
                <span className="font-medium text-ink">Delivery and fulfilment partners</span> - name,
                phone and delivery address so materials can reach your site
              </li>
              <li>
                <span className="font-medium text-ink">Cloud hosting and infrastructure</span> - to
                store and operate the app
              </li>
              <li>
                <span className="font-medium text-ink">Google and Apple</span> - as required to
                distribute the app, process store downloads and deliver push notifications (FCM /
                APNs)
              </li>
              <li>
                <span className="font-medium text-ink">Analytics providers</span> - only if analytics
                is enabled
              </li>
              <li>
                <span className="font-medium text-ink">Professional advisers and authorities</span> -
                where the law requires it
              </li>
            </ul>
            <p>
              Service providers are allowed to use the information only to perform work for
              Bajriwala, except where they act as independent controllers (for example Google Play,
              the App Store or a payment provider under their own terms).
            </p>
          </LegalSection>

          <LegalSection id="store-disclosures" title="7. Google Play and App Store disclosures">
            <p>
              Google Play Data safety and Apple App Privacy labels must match this policy. The table
              below is the intended declaration for the production Customer App, based on features
              that are live in the app.
            </p>
            <div className="overflow-x-auto rounded-xl border border-line">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead className="bg-cream-deep text-ink">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Data type</th>
                    <th className="px-4 py-3 font-semibold">Collected</th>
                    <th className="px-4 py-3 font-semibold">Shared with third parties</th>
                    <th className="px-4 py-3 font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line bg-white">
                  {dataSafetyRows.map((row) => (
                    <tr key={row.type}>
                      <td className="px-4 py-3 font-medium text-ink">{row.type}</td>
                      <td className="px-4 py-3">{row.collected}</td>
                      <td className="px-4 py-3">{row.shared}</td>
                      <td className="px-4 py-3">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Payment card numbers, if used, are collected by the payment provider, not stored by
              Bajriwala as card-on-file data. Approximate or precise location is used for delivery,
              not for ads.
            </p>
          </LegalSection>

          <LegalSection id="retention" title="8. How long we keep information">
            <p>
              We keep account, order, invoice and payment-status records for as long as the account
              is active and for the period required for tax, accounting, dispute handling and legal
              compliance. Voice search audio is used to complete the search; we do not keep voice
              recordings for marketing. You may ask us to delete account data that we are not
              required to retain.
            </p>
          </LegalSection>

          <LegalSection id="security" title="9. Security">
            <p>
              We use reasonable technical and organisational measures to protect personal
              information, including access controls and encrypted connections (HTTPS) for the
              website and app traffic. No method of transmission or storage is completely secure.
            </p>
          </LegalSection>

          <LegalSection id="your-rights" title="10. Your rights">
            <p>
              If you are in India, you are a Data Principal under the Digital Personal Data
              Protection Act, 2023. Subject to the Act, you may request access to your personal
              data, correction of inaccurate data, erasure of data we are not required to keep, and
              information about how we process it.
            </p>
            <p>
              You can review and update some details in the app Account area. To make a request, use
              the contact details in section 13. We may need to verify that the request comes from
              the account holder. Google Play and the App Store also let you manage app permissions
              and, where offered, account deletion through the store or in-app settings.
            </p>
          </LegalSection>

          <LegalSection id="children" title="11. Children">
            <p>
              Bajriwala is built for contractors, builders and other construction professionals. It
              is not directed at children under 18. We do not knowingly collect personal information
              from children. If you believe we have done so, contact us and we will delete it.
            </p>
          </LegalSection>

          <LegalSection id="changes" title="12. Changes to this policy">
            <p>
              We may update this policy when the app, the law or our providers change. The “Last
              updated” date at the top will change. Material changes will be posted on this page
              and, where appropriate, notified in the app.
            </p>
          </LegalSection>

          <LegalSection id="contact" title="13. How to contact us">
            <p>
              For privacy requests, including access, correction or deletion, contact {operatorName}
              using the details below. This is also the contact path for a grievance relating to
              personal data.
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
                Until a privacy email or phone number is published here, use the support options in
                the Bajriwala Customer App Account area.
              </p>
            )}
            <p>
              You can also reach us from the{" "}
              <Link href="/#contact" className="font-medium text-ink underline-offset-2 hover:underline">
                contact section
              </Link>{" "}
              on this website when those channels are published.
            </p>
          </LegalSection>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="secondary" size="md">
            Back to home
          </ButtonLink>
          <ButtonLink href="/terms" variant="secondary" size="md">
            Terms & Conditions
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}

const dataSafetyRows = [
  {
    type: "Name, email, phone",
    collected: "Yes",
    shared: "Fulfilment / support as needed",
    purpose: "Account, orders, support",
  },
  {
    type: "Physical address / location",
    collected: "Yes",
    shared: "Delivery partners",
    purpose: "Site delivery",
  },
  {
    type: "Purchase history",
    collected: "Yes",
    shared: "Payment & fulfilment providers",
    purpose: "Orders, invoices, loyalty",
  },
  {
    type: "Payment status",
    collected: "Yes",
    shared: "Payment processor",
    purpose: "Checkout",
  },
  {
    type: "GST / business details",
    collected: "If you provide them",
    shared: "Invoicing / tax as required",
    purpose: "GST invoices",
  },
  {
    type: "App activity (search, cart)",
    collected: "Yes",
    shared: "No (except infrastructure)",
    purpose: "App functionality",
  },
  {
    type: "Voice input",
    collected: "If you use voice search",
    shared: "Speech-to-search provider if used",
    purpose: "Search",
  },
  {
    type: "Device / push IDs",
    collected: "Yes",
    shared: "Google / Apple push services",
    purpose: "Notifications, security",
  },
  {
    type: "Diagnostics",
    collected: "May be collected",
    shared: "Infrastructure / crash tools if used",
    purpose: "Stability and security",
  },
];
