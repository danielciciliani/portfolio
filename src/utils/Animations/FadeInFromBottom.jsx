import { motion } from "motion/react";

function FadeInFromBottom({ children, className = "", delay = 0, duration = 1.5 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      onViewportEnter={(entry) => console.log(entry.isIntersecting)}
      transition={{
        duration,
        delay,
        type: "spring",
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInFromBottom;
