import Link from "next/link";
import { ArrowLeft, Settings2 } from "lucide-react";

export default function SettingsPage() {
  return (
    <main className="flex min-h-[calc(100vh-2rem)] items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <article className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-border/80 bg-card/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.08),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.06),transparent_34%)]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_42%,rgba(255,255,255,0.015))]"
        />

        <section className="relative z-10 space-y-6">
          <header className="flex md:flex-row flex-col items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-muted/30 text-primary">
              <Settings2 size={22} aria-hidden="true" />
            </span>

            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                Looking for the settings page?
              </h1>
              <p className="max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                We do not have that page yet. Check out the home page instead to
                view the dashboard and current learning summary.
              </p>
            </div>
          </header>

          <footer className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Back to home
            </Link>

            <p className="rounded-xl border border-border/80 bg-background/60 px-4 py-3 text-sm text-muted-foreground">
              The home page is the best place to continue for now.
            </p>
          </footer>
        </section>
      </article>
    </main>
  );
}
