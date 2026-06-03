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
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function DashboardGrid({ courses }: { courses: Course[] }) {
  return (
    <>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="grid h-full w-full min-h-screen grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-[auto_minmax(0,1fr)]  md:gap-5"
      >
        <motion.div variants={itemVariants} className="min-h-0 mb-6 sm:mb-0 md:col-span-3">
          <WelcomeCard />
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-1">
          <CourseDisplay courses={courses} />
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-2">
          <ChartDisplay />
        </motion.div>
      </motion.section>
      {/* <MobileNav /> */}
    </>
  );
}
