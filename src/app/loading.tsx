"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-[#0B1020]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src="/images/loader.gif"
          alt="Loading..."
          width={1000}
          height={1000}
          priority
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400"
      >
        Loading DayAI...
      </motion.p>
    </div>
  );
}