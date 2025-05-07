import { motion, useScroll, useSpring } from "motion/react";

function Scroll() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      id="scroll-indicator"
      className="bg-main-gradient"
      style={{
        scaleX: useSpring(scrollYProgress, {
          stiffness: 100,
          damping: 30,
          restDelta: 0.001,
        }),
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        originX: 0,
        zIndex: 50,
      }}
    />
  );
}

export default Scroll;
