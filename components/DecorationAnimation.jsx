"use client";
import { motion } from "framer-motion";
export default function DecorationAnimation({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100, x: 100 }}
      animate={{
        opacity: 1,
        scale: [1, 2, 2, 1, 1],
        y: 0,
        x: 0,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className="w-24 max-md:hidden self-center -ms-28"
    >
      {children}
    </motion.div>
  );
}
