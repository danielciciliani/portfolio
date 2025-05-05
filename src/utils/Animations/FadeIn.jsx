import { motion } from "motion/react"

function FadeIn({children, className="", delay=0}) {
    return (
        <motion.div
            className={className}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                delay,
                scale: { type: "spring", bounce: 0.5 },
            }}
        >
            {children}
        </motion.div>
    );
}

export default FadeIn;