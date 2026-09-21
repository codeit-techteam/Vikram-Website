import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center py-20">
      <Container className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">404</p>
        <h1 className="mt-3 text-4xl font-bold text-ink">This page is not on site</h1>
        <p className="mx-auto mt-4 max-w-md text-base text-muted">
          The page you are looking for does not exist. Head back to Bajriwala or download the app.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/#download" variant="secondary">
            Download App
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
