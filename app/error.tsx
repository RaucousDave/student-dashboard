"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

type ErrorProps = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};

export default function Error({ error, unstable_retry }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[calc(100vh-2rem)] items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <article className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border/80 bg-card/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
        <span className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-destructive/70 to-transparent" />

        <section className="flex flex-col gap-6" aria-labelledby="supabase-error-title">
          <header className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-destructive/40 bg-destructive/10 text-destructive">
              <AlertTriangle size={22} aria-hidden="true" />
            </span>

            <section className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                 fetch failed
              </p>
              <h2
                id="supabase-error-title"
                className="text-2xl font-semibold tracking-tight text-foreground"
              >
                We could not load the dashboard data.
              </h2>
              <p className="max-w-md text-sm leading-6 text-muted-foreground">
                The request to our servers did not complete successfully. Try
                again, and if the issue keeps happening, check the database
                connection or query configuration.
              </p>
            </section>
          </header>

          <section className="rounded-2xl border border-border/80 bg-muted/30 p-4">
            <h3 className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Error details
            </h3>
            <p className="wrap-break-word text-sm leading-6 text-foreground/80">
              {error.message}
            </p>
            {error.digest ? (
              <p className="mt-3 text-xs text-muted-foreground">
                Digest: {error.digest}
              </p>
            ) : null}
          </section>

          <footer className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => unstable_retry()}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:scale-[1.01] hover:opacity-95 active:scale-[0.99]"
            >
              <RotateCcw size={16} />
              Try again
            </button>

            <aside className="rounded-xl border border-border/80 bg-background/60 px-4 py-3 text-sm text-muted-foreground">
              The app will re-fetch the segment when you retry.
            </aside>
          </footer>
        </section>
      </article>
    </main>
  );
}
