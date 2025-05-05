import Profile from "../Profile/Profile";
import {motion} from "motion/react";

function Card({ children }) {
  return (
    <>
      <motion.div className="flex border-gradient rounded-4xl p-10"
         initial={{ opacity: 0, scale: 0 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
           type: "spring",
           duration: 0.5
         }}
      >{children}</motion.div>
    </>
  );
}

export default Card;
