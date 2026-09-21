import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms of use for the Bajriwala marketing website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="py-20">
      <Container size="narrow">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Legal</p>
        <h1 className="mt-3 text-4xl font-bold text-ink">Terms & Conditions</h1>
        <p className="mt-6 text-base leading-relaxed text-muted">
          This website is a marketing site for the Bajriwala Customer App. Product availability,
          pricing, delivery and payment terms are governed by the app at the time of order. Full
          website terms will replace this placeholder once legal copy is provided.
        </p>
        <div className="mt-10">
          <ButtonLink href="/" variant="secondary" size="md">
            Back to home
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
