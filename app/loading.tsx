"use client";

import { motion } from "framer-motion";
import { LayoutPanelTop } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <motion.figure
        className="flex items-center justify-center"
        aria-label="Loading"
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <LayoutPanelTop
          className="text-primary drop-shadow-[0_0_18px_rgba(74,222,128,0.22)]"
          size={40}
          aria-hidden="true"
        />
      </motion.figure>
    </main>
  );
}
