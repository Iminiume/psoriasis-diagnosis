"use client";

import { motion } from "framer-motion";

export default function Transition({ children }) {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      transition={{ ease: "easeInOut", duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
