"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
const PageTransition = ({ childern }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.3, ease: "easeOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
        {childern}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
