import { motion, useSpring, frame } from "motion/react";
import { useEffect, useRef } from "react";
import FadeIn from "../../utils/Animations/FadeIn";

const PandaImages = [
  { id: 1, url: "/panda_transparent_logo_l.png" },
  { id: 2, url: "/panda_transparent_logo.png" },
  { id: 3, url: "/panda_transparent_logo_r.png" },
];

const spring = { damping: 10, stiffness: 120 };

function useMagneticMotion(ref, maxOffset = 20) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      if (distance < 150) {
        x.set((deltaX / distance) * maxOffset);
        y.set((deltaY / distance) * maxOffset);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return { x, y };
}

export default function Panda() {
  return (
    <div className="w-full flex flex-row justify-center gap-5 relative">
      {PandaImages.map((image, i) => {
        const ref = useRef(null);
        const { x, y } = useMagneticMotion(ref, 15);

        return (
          <FadeIn delay={0.5} key={i}>
            <motion.img
              key={i}
              ref={ref}
              src={image.url}
              alt="panda logo"
              className="w-28 h-28 md:w-40 md:h-40 object-contain"
              style={{ x, y }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            />
          </FadeIn>
        );
      })}
    </div>
  );
}
