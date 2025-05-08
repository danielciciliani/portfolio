import { motion } from "motion/react";
import "../../index.css";
import FadeIn from "../../utils/Animations/FadeIn";

function Profile() {
  return (
    <>

      <section className="flex flex-col items-center">
        <div className="w-[100%] flex justify-center pb-10">
          <FadeIn delay={0.3}>
            <div className="w-25 h-25 rounded-full">
              <img
                className="rounded-full h-[100%] w-[100%] object-cover object-top"
                src="/profile_picture_opt.png"
                alt="Profile picture"
              />
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.4}>
          <h1 className="font-extrabold text-center">
            Hey, I'm{" "}
            <span className="main-gradient pt-10">Daniel Ciciliani</span>
          </h1>
        </FadeIn>
        <div className=" w-10/12 flex flex-col pt-5 text-[1.3rem]/[2rem] text-center gap-3">
          <p>
            I'm a frontend developer with{" "}
            <span className="font-bold">
              +3 years of professional experience
            </span>
            , plus a couple years freelancing.
          </p>
          <p>
            I'm lucky that coding brings together the most I like: tech, logic,
            problem-solving and making things look good.
          </p>
        </div>
      </section>
    </>
  );
}

export default Profile;
