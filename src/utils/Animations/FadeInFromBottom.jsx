import { motion } from "motion/react";

function FadeInFromBottom({ children, className = "", delay = 0, duration = 1.5 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, translateY: 200 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true, amount: 0 }}
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
