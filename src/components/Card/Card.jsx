import FadeIn from "../../utils/Animations/FadeIn";
import Profile from "../Profile/Profile";
import {motion} from "motion/react";

function Card({ children }) {
  return (
    <>
      <FadeIn duration={1.5} className="flex border-gradient rounded-4xl p-10">
          {children}
      </FadeIn>
    </>
  );
}

export default Card;
