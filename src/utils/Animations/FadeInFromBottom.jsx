import { motion } from "motion/react";

function FadeInFromBottom({
  children,
  className = "",
  delay = 0,
  duration = 1.5,
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.1 }}
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
