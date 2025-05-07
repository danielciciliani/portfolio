import { animate } from "motion";
import { motion } from "motion/react";
import FadeIn from "../../utils/Animations/FadeIn";

function Contact({children}){
    return (
        <>
            <div className="flex flex-col cursor-pointer w-full">
                <h2 className="text-5xl font-extrabold">Wanna chat?</h2>
                <p className="pt-10 pb-5">If you think I could be a good fit for your team, or maybe you wanna build a project together, let's chat!</p>
                <FadeIn delay={1.5} className="pt-5 flex self-end" >
                    {children}
                </FadeIn>
            </div>
        </>
    );
}

export default Contact;