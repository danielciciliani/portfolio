import { motion, delay } from "motion/react";
import FadeIn from "../../utils/Animations/FadeIn";

const PandaImages = [
  {id: 1, url: "/panda_transparent_logo_l.png"},
  {id: 2, url: "/panda_transparent_logo.png"},
  {id: 3, url: "/panda_transparent_logo_r.png"},
];

function Panda() {
  return (
    <>
    <div className="w-full flex flex-row justify-center">
      {
        PandaImages.map((image, i) => (
          <FadeIn
          key={i}
          className="w-30 h-30 md:w-40 md:h-40"
          delay={0.5}
      >
          <img 
            className="w-full h-full"
            src={image.url}
            alt="red panda logo"
            />
        </FadeIn>
        ))
      }
    </div>    
    </>
  );
}

export default Panda;
