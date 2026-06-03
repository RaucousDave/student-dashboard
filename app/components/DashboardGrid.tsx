"use client";

import { motion } from "framer-motion";
import type { Course } from "../page";
import WelcomeCard from "./WelcomeCard";
import CourseDisplay from "./CourseDisplay";
import ChartDisplay from "./ChartDisplay";
import MobileNav from "./MobileNav";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
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

export default function DashboardGrid({ courses }: { courses: Course[] }) {
  return (
    <>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid h-full w-full min-h-screen grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-[auto_minmax(0,1fr)] md:gap-5"
      >
        <motion.div variants={itemVariants} className="sm:mb-0 md:col-span-3">
          <WelcomeCard />
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-1">
          <CourseDisplay courses={courses} />
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-2">
          <ChartDisplay />
        </motion.div>
      </motion.section>
    </>
  );
}
