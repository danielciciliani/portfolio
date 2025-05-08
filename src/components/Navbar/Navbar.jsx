import { motion, useScroll, useMotionValueEvent, useSpring } from "motion/react";

import { FaHome, FaMoon, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";

const options = [
  { name: <FaHome size={20} />, link: "#home" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "" },
  { name: <FaMoon size={15} />, link: "" },
];

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
  const previous = scrollY.getPrevious() || 0;

    if (latest > previous && latest > 20) {
        setHidden(true);
    } else { 
        setHidden(false);
    }
  });

  return (
    <motion.nav
      initial={{ 
        opacity: 0, 
        scaleX: 0, 
        justifyContent: "flex-start"
    }}
      animate={{ 
        opacity: hidden ? 0 : 1, 
        scaleX: 1, 
        justifyContent: "space-around"
    }}
      transition={{ 
        duration: 2, 
        type: "spring",
    }}
    //   className={`w-11/12 mx-auto sm:w-9/12 lg:w-7/12 fixed top-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 py-2 px-4 rounded-4xl border-gradient-nav justify-around 
    //   }`}

      className={`w-11/12 mx-auto sm:w-9/12 lg:w-7/12 fixed top-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 py-2 px-4 
        rounded-4xl border-gradient-nav--- justify-around
        bg-black-500 backdrop-blur-2xl shadow-[0_0_20px_1px_rgba(255,255,255,0.1)]
      `}
      
    >
      {options.map((option, i) => {
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            // transition={{ delay: 0.5 + i * 0.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.1,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="cursor-pointer text-base"
          >
            <a href={option.link} className=" md:text-base text-sm md:text-normal">
              {option.name}
            </a>
          </motion.div>
        );
      })}
    </motion.nav>
  );
}

export default Navbar;
