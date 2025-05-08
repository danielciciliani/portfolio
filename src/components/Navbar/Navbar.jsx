import { FaHome, FaEnvelope, FaMoon, FaRegMoon} from "react-icons/fa";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { MdOpacity } from "react-icons/md";
import { useRef, useState } from "react";

const options = [
    {name: <FaHome size={20}></FaHome>, link: "/" },
    {name: "Experience", link: "#experience" },
    {name: "Projects", link: "#projects" },
    {name: "About", link: "#about" },
    // {name: <FaEnvelope size={20}></FaEnvelope>, link: "" },
    {name: "Contact", link: "" },
    {name: <FaMoon size={15}></FaMoon>, link: "" },
];


function Navbar() {

    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const previousY = useRef(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > previousY.current && latest > 50) {
            setHidden(true);
          } else if (latest < previousY.current) {
            setHidden(false);
          }
          previousY.current = latest;
    })

    return (
        <>
        <motion.div className="flex justify-center w-full" 
            initial={{ y: 0}}
            animate={{y: hidden ? -100 : 0 }}
            transition={{duration: 1, ease: "easeOut"}}
                    
        >
            <nav className="flex border-gradient w-11/12 mx-auto sm:w-9/12 lg:w-7/12 py-2 px-4 mt-10 rounded-4xl gap-5 justify-around items-center fixed top-0 z-50">
                {
                    options.map((option, i) => (
                        <div key={i} className="text-sm md:text-xl">
                            <a href={option.link}>{option.name}</a>
                        </div>
                    ))
                }
            </nav>
        </motion.div>
        </>
    );
}

export default Navbar;


// import { motion, useScroll, useMotionValueEvent } from "framer-motion";
// import { FaHome } from "react-icons/fa";
// import { useState } from "react";

// const options = [
//   { name: <FaHome size={20} />, link: "#home" },
//   { name: "Experience", link: "#experience" },
//   { name: "Projects", link: "#projects" },
//   { name: "About", link: "#about" },
//   { name: "Contact", link: "#contact" },
// ];

// function Navbar() {
//   const [hidden, setHidden] = useState(false);
//   const { scrollY } = useScroll();

//   useMotionValueEvent(scrollY, "change", (latest, prev) => {
//     if (latest > prev) setHidden(true); // scrolling down
//     else setHidden(false); // scrolling up
//   });

//   return (
//     <motion.nav
//       initial={{ width: "50px", opacity: 0 }}
//       animate={{ width: "91.666667%", opacity: 1 }}
//       transition={{ duration: 2, ease: "easeInOut" }}
//       className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 py-2 px-4 rounded-4xl border border-white/30 backdrop-blur-lg ${
//         hidden ? "opacity-0 pointer-events-none" : "opacity-100"
//       }`}
//     >
//       {options.map((option, i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0, x: -10 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3 + i * 0.1 }}
//         >
//           <a href={option.link} className="text-white text-sm md:text-base">
//             {option.name}
//           </a>
//         </motion.div>
//       ))}
//     </motion.nav>
//   );
// }

// export default Navbar;
