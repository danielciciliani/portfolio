import { animate } from "motion";
import { motion } from "motion/react";
import FadeIn from "../../utils/Animations/FadeIn";
import { mailTo } from "../../utils/LinksData";

function Contact({ children }) {
  return (
    <>
      <div className="flex flex-col cursor-pointer w-full">
        <h2 className="text-5xl font-extrabold">Let's talk!</h2>
        <p className="pt-10 pb-5">
          If you think I could be a good fit for your team, or maybe you wanna
          build a project together,
          <span className="font-bold">
            <a href={mailTo}> let's talk about it!</a>
          </span>
        </p>
        <div className="pt-5 flex self-end">{children}</div>
      </div>
    </>
  );
}

export default Contact;
