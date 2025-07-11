// components/MotionTag.tsx
"use client";
import { motion } from "framer-motion";

const MotionTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ y: -20, opacity:0, filter:"blur(8px)" }}
      animate={{ y: 0, opacity:1, filter:"blur(0px)" }}
      transition={{ duration: 0.3 }}
      className="px-2 py-1 text-sm text-neutral-500"
    >
      {children}
    </motion.div>
  );
};

export default MotionTag;
