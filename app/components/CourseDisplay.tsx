"use client";

import { motion } from "framer-motion";
import { Code, FileCode, Server, Database } from "lucide-react";
import type { Course } from "../page";

const iconMap = { Code, FileCode, Server, Database } as const;

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    } as const,
  },
};

export default function CourseDisplay({ courses }: { courses: Course[] }) {
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
      className="group relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/85 p-5 shadow-lg shadow-black/10 backdrop-blur-sm transition-shadow duration-300 hover:border-primary/30 hover:shadow-[0_24px_60px_rgba(0,0,0,0.22)] md:h-full"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(74,222,128,0.08),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.06),transparent_32%)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_38%,rgba(255,255,255,0.015))]"
      />

      <header className="relative z-10 shrink-0">
        <h1 className="text-xl font-semibold tracking-wide text-card-foreground">
          Course List
        </h1>
      </header>

      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mt-4 flex-1 min-h-0 space-y-3 pr-1"
      >
        {courses.map((course: Course) => {
          const Icon =
            iconMap[course.icon_name as keyof typeof iconMap] ?? FileCode;

          return (
            <motion.li key={course.id} variants={cardVariants}>
              <motion.article
                whileHover={{
                  y: -2,
                  scale: 1.015,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="group/card relative overflow-hidden rounded-xl border border-border/60 bg-background/40 px-3 py-3 shadow-sm shadow-black/5 transition-shadow duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-black/15"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.08),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.06),transparent_40%)] opacity-80"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_45%,rgba(255,255,255,0.015))]"
                />

                <header className="relative z-10 flex items-start gap-3">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-muted/30 text-muted-foreground">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>

                  <section className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-card-foreground">
                      {course.title}
                    </p>

                    <footer className="mt-3 flex items-center gap-3">
                      <section className="relative h-2 flex-1 overflow-hidden rounded-full bg-muted/80">
                        <motion.span
                          initial={{ width: "0%" }}
                          animate={{ width: `${course.progress}%` }}
                          transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 20,
                            delay: 0.1,
                          }}
                          className="block h-full rounded-full bg-linear-to-r from-primary via-chart-2 to-chart-5 shadow-[0_0_16px_rgba(74,222,128,0.28)]"
                        />
                      </section>
                      <span className="shrink-0 text-xs font-semibold text-foreground">
                        {course.progress}%
                      </span>
                    </footer>
                  </section>
                </header>
              </motion.article>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.section>
  );
}
