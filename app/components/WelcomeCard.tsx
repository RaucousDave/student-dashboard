"use client";

export default function WelcomeCard() {
  return (
    <section className="overflow-hidden mb-12 rounded-2xl border border-border/70 bg-card/85 p-6 text-foreground shadow-lg shadow-black/10 backdrop-blur-sm md:p-8">
      <div className="space-y-4">
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
      </div>
    </section>
  );
}
