"use client";
import { Course } from "../page";
import { Code, FileCode, Server, Database } from "lucide-react";

const iconMap = { Code, FileCode, Server, Database } as const;
export default function CourseDisplay({ courses }: { courses: Course[] }) {
  return (
    <section className="flex md:h-full min-h-0 flex-col rounded-2xl border border-border/70 bg-card/85 p-5 shadow-lg shadow-black/10 backdrop-blur-sm">
      <h1 className="shrink-0 text-xl font-semibold tracking-wide text-card-foreground">
        Course List
      </h1>
      <div className="mt-4 flex-1 min-h-0 space-y-3 pr-1">
        {courses.map((course: Course) => {
          const Icon =
            iconMap[course.icon_name as keyof typeof iconMap] ?? FileCode;

          return (
            <article
              key={course.id}
              className="rounded-xl border border-border/60 bg-background/40 px-3 py-3"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                <p className="min-w-0 flex-1 truncate text-sm font-medium text-card-foreground">
                  {course.title}
                </p>
                <p className="shrink-0 text-sm font-semibold text-foreground">
                  {course.progress}%
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
