"use client";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[70vh] items-center py-20">
      <Container className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Error</p>
        <h1 className="mt-3 text-4xl font-bold text-ink">Something went wrong</h1>
        <p className="mx-auto mt-4 max-w-md text-base text-muted">
          The page failed to load. Try again, or return to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full bg-brand-400 px-6 py-3.5 text-base font-semibold text-ink shadow-[0_10px_24px_-10px_rgb(245_179_1/0.9)] transition hover:-translate-y-0.5 hover:bg-brand-300"
          >
            Try again
          </button>
          <ButtonLink href="/" variant="secondary">
            Back to home
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
