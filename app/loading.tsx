"use client";

import { motion } from "framer-motion";
import { LayoutPanelTop } from "lucide-react";

const skeletonBlocks = [
  "h-28",
  "h-36",
  "h-24",
  "h-32",
];

export default function Loading() {
  return (
    <main className="flex min-h-[calc(100vh-2rem)] items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <section className="w-full max-w-5xl space-y-6" aria-label="Loading dashboard">
        <header className="flex items-center justify-center">
          <article className="rounded-3xl border border-border/80 bg-card/90 px-6 py-5 shadow-2xl backdrop-blur-xl">
            <motion.figure
              className="flex items-center gap-3"
              style={{ perspective: 1200 }}
              animate={{
                rotateY: [0, 180, 360],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <LayoutPanelTop className="text-primary" size={24} aria-hidden="true" />
              <figcaption className="text-xl font-semibold tracking-tight text-foreground">
                Bento
              </figcaption>
            </motion.figure>
            <p className="mt-3 text-center text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Loading dashboard
            </p>
          </article>
        </header>

        <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skeletonBlocks.map((height, index) => (
            <li
              key={height + index}
              className="overflow-hidden rounded-3xl border border-border/80 bg-card/80 p-4 shadow-lg backdrop-blur-xl"
            >
              <span
                className={`block animate-pulse rounded-2xl bg-muted/70 ${height}`}
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>

        <section className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="rounded-3xl border border-border/80 bg-card/80 p-5 shadow-lg backdrop-blur-xl">
            <header className="space-y-4">
              <span className="block animate-pulse rounded-2xl bg-muted/70 h-7 w-44" aria-hidden="true" />
            </header>
            <section className="mt-4 grid gap-3 sm:grid-cols-2" aria-hidden="true">
              <span className="block animate-pulse rounded-2xl bg-muted/70 h-24" />
              <span className="block animate-pulse rounded-2xl bg-muted/70 h-24" />
            </section>
            <span className="mt-4 block animate-pulse rounded-2xl bg-muted/70 h-48" aria-hidden="true" />
          </article>

          <aside className="rounded-3xl border border-border/80 bg-card/80 p-5 shadow-lg backdrop-blur-xl">
            <header className="space-y-4">
              <span className="block animate-pulse rounded-2xl bg-muted/70 h-7 w-32" aria-hidden="true" />
            </header>
            <ul className="mt-4 space-y-3" aria-hidden="true">
              <li>
                <span className="block animate-pulse rounded-2xl bg-muted/70 h-14" />
              </li>
              <li>
                <span className="block animate-pulse rounded-2xl bg-muted/70 h-14" />
              </li>
              <li>
                <span className="block animate-pulse rounded-2xl bg-muted/70 h-14" />
              </li>
            </ul>
          </aside>
        </section>
      </section>
    </main>
  );
}
