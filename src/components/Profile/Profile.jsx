import { motion } from "motion/react"
import "../../index.css";

function Profile() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-[100%] flex justify-center pb-10">
          <motion.div 
          initial={{ opacity: 0, scale: 0}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.3,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5},
          }}
          className="w-25 h-25 rounded-full"
          >
            <img
              className="rounded-full h-[100%] w-[100%] object-cover object-top"
              src="/profile_picture_opt.png"
              alt="Profile picture"
            />
          </motion.div>
        </div>
        <motion.h1 className="font-extrabold text-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          delay: 0.1,
          duration: 0.5
        }}
        >
          Hey, I'm <span className="main-gradient pt-10">Daniel Ciciliani</span>
        </motion.h1>
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
      </div>
    </>
  );
}

export default Profile;
