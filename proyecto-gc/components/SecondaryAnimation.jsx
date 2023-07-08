import { motion } from "framer-motion";
export default function SecondaryAnimation({ children, x }) {
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.1, 0.7, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
}
