import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

export default function StaggerWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        transition={{ staggerChildren: 0.1 }}
        initial = "hidden"
        variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
        }}
      >
        {children}
      </motion.div>
    );
  }