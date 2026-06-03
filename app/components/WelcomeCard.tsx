"use client";

import { motion } from "framer-motion";

export default function WelcomeCard() {
  return (
    <motion.section
      whileHover={{
        y: -3,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="group relative mb-12 overflow-hidden rounded-2xl border border-border/70 bg-card/85 p-6 text-foreground shadow-lg shadow-black/10 backdrop-blur-sm transition-shadow duration-300 hover:border-primary/30 hover:shadow-[0_24px_60px_rgba(0,0,0,0.22)] md:p-8"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.08),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.05),transparent_32%)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_42%,rgba(255,255,255,0.015))]"
      />
      <header className="relative z-10 space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
          Dashboard overview
        </p>
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Welcome back, Davies.
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          Here&apos;s a compact view of today&apos;s schedule, current course
          progress, and how your learning stack is moving.
        </p>
      </header>
    </motion.section>
  );
}
