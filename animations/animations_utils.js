import { motion, useAnimation } from "framer-motion";

export const stagger = {
    animate: {
      transition:{
        staggerChildren:0.1
      }
    }
  }

export const delaystagger = {
    animate: {
      transition:{
        staggerChildren:0.1,
        delayChildren: 0.5
      }
    }
}

const easing = [0.6, -0.05, 0.01, 0.99]

export const fadein = {
  initial: {
      y:60,
      opacity:0
  },
  animate: {
      y:0,
      opacity:1,
      transition:{
          duration: .9,
          ease: easing
      }
  }
}