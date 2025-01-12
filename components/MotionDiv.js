"use client"
import { motion } from "framer-motion";

const MotionDiv = ({
    children,
    element: Element = motion.div, // Use a default element like motion.div
    initial = { opacity: 0, y: 50 },
    whileInView = { opacity: 1, y: 0 },
    transition = { duration: 0.8 },
    viewport = { once: true, amount: 0.5 },
    className = "",
}) => {
    return (
        <Element
            initial={initial}
            whileInView={whileInView}
            transition={transition}
            viewport={viewport}
            className={className}
        >
            {children}
        </Element>
    );
};

export default MotionDiv;