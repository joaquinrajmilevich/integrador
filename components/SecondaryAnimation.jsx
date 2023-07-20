"use client";
import { motion } from "framer-motion";
export default function SecondaryAnimation({ children, x, y, time = 0.2 }) {
  return (
    <motion.div
      initial={{ opacity: 0.5, x, y }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: time,
        ease: [0, 0.4, 0.85, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
}
