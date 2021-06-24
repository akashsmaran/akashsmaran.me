import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

export default function StaggerWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [controls, inView]);

    const variants = {
      visible:{
        transition:{
            staggerChildren:0.1,
            delayChildren: 0.5
        }
      },
      hidden:{
        y:0
      }
    }
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
      >
        {children}
      </motion.div>
    );
  }
