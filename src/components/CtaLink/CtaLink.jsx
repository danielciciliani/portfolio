import FadeIn from "../../utils/Animations/FadeIn";
import { motion } from "motion/react";

function CtaLink({ links }) {
  return (
    <>
      <FadeIn>
        <div className="flex gap-2 md:gap-4 content-between w-full justify-center">
          {links.map((e) => {
            const Icon = e.icon;
            return (
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                key={e.id}
                className="
                    text-sm md:text-base border-1  border-blue-500 rounded-2xl 
                    px-5 py-1 min-w-[30%] md:min-w-[150px]
                    hover:border-pink-500 cursor-pointer"
              >
                <a
                  href={e.link}
                  target="_blank"
                  className="flex gap-2 items-center justify-center"
                >
                  <Icon size={20}></Icon>
                  {e.text}
                </a>
              </motion.div>
            );
          })}
        </div>
      </FadeIn>
    </>
  );
}

export default CtaLink;
