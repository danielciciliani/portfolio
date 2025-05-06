import { motion, delay } from "motion/react"

function Panda() {
  return (
    <>
      <div className="w-full flex flex-row justify-center">
        <motion.div className="w-30 h-30 md:w-40 md:h-40"
        initial={{ opacity: 0, scale: 0}}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5},
        }}
        >
          <img
            className="w-full h-full"
            src="/panda_transparent_logo_l.png"
            alt="red panda logo"
          />
        </motion.div>
        <motion.div className="w-30 h-30 md:w-40 md:h-40"
        initial={{ opacity: 0, scale: 0}}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5},
        }}
        >
          <img
            className="w-full h-full"
            src="/panda_transparent_logo.png"
            alt="red panda logo"
          />
        </motion.div>
        <motion.div className="w-30 h-30 md:w-40 md:h-40"
        initial={{ opacity: 0, scale: 0}}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5},
        }}
        >
          <img
            className="w-full h-full"
            src="/panda_transparent_logo_r.png"
            alt="red panda logo"
          />
        </motion.div>
      </div>
    </>
  );
}

export default Panda;
