import { animate } from "motion";
import { motion } from "motion/react";
import FadeIn from "../../utils/Animations/FadeIn";

function Contact({children}){
    return (
        <>
            <div className="flex flex-col cursor-pointer">
                <h2 className="text-5xl font-extrabold">Do we talk?</h2>
                <FadeIn delay={1.5} className="pt-5 flex self-end" >
                    {children}
                </FadeIn>
            </div>
        </>
    );
}

export default Contact;