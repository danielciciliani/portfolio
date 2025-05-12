import { motion } from "motion/react";

function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 1.5,
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, amount: 0 }}
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

export default FadeIn;
