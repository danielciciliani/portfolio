import {
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from "motion/react";
import { FaHome } from "react-icons/fa";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useEffect, useState } from "react";
import { ContactLink, mailTo } from "../../utils/LinksData";

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

  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("dark mode");
  
    return stored !== null ? stored === "true" : true;
    
  });
  

  const toggleDark = () => {
    setDarkMode((prev) => !prev);
  };

  const options = [
    { name: <FaHome size={20} />, link: "#home" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "About", link: "#about" },
    { name: "Contact", link: mailTo },
    {
      name: darkMode ? (
        <IoMdSunny size={20} onClick={toggleDark}></IoMdSunny>
      ) : (
        <IoMdMoon size={20} onClick={toggleDark}></IoMdMoon>
      ),
    },
  ];

  useEffect(() => {
    const htmlTag = document.documentElement; //
    
    if (darkMode) {
      htmlTag.classList.add("dark");
    } else {
      htmlTag.classList.remove("dark");
    }
    
    localStorage.setItem("dark mode", darkMode);
  }, [darkMode]);

  return (
    <motion.nav
      initial={{
        opacity: 0,
        scaleX: 0,
        justifyContent: "flex-start",
      }}
      animate={{
        opacity: hidden ? 0 : 1,
        scaleX: 1,
        justifyContent: "space-between",
      }}
      transition={{
        duration: 2,
        type: "spring",
      }}
      className={`w-11/12 mx-auto sm:w-9/12 lg:w-7/12 fixed top-10 left-1/2 
        -translate-x-1/2 z-50 flex items-center py-2 px-4 
        rounded-4xl backdrop-blur-2xl card-shadow`}
    >
      {options.map((option, i) => {
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.1,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="cursor-pointer"
          >
            <motion.a
              href={option.link}
              className="text-slate-600 dark:text-slate-200 text-sm hover:text-indigo-500 transition-all 0.8 ease"
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 1.1,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              {option.name}
            </motion.a>
          </motion.div>
        );
      })}
    </motion.nav>
  );
}

export default Navbar;
