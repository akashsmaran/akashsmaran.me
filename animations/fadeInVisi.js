import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

export default function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.9}}
        variants={{
          visible: { opacity: 1, y:-60 },
          hidden: { opacity: 0, y:0 }
        }}
      >
        {children}
      </motion.div>
    );
  }

//  export default function FadeInWhenVisible({ children }) {
//     const controls = useAnimation();
//     const [ref, inView] = useInView({
//       threshold:0.2
//     });

//     useEffect(() => {
//       if (inView) {
//         controls.start("visible");
//       } else {
//         controls.start("hidden");
//       }
//     }, [controls, inView]);

//     const variants = {
//       visible:{
//         opacity: 1,
//         y:0,
//         transition:{
//           duration:1
//         }
//       },
//       hidden:{
//         y:60,
//         opacity: 0
//       }
//     }
  
//     return (
//       <motion.ul
//         ref={ref}
//         animate={controls}
//         initial="hidden"
//         variants={variants}
//       >
//         {children}
//       </motion.ul>
//     );
//   }
