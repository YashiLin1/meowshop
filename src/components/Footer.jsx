import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { MynameCanvas } from "./canvas";
 


const Footer = () => {
  return (
    <div className={`max-w-7xl mx-auto relative z-0`}>
       <motion.div variants={textVariant()}>
       <h2 className={`${styles.sectionHeadText} text-right NeonTextonHover`}
            
            >
              Libraries used
            </h2>
        <p className={`${styles.sectionSubText} text-right mt-4 NeonTextonHover`}>
        ThreeJS, React-three-fiber, React-three/drei, React-tilt, Maath and Framer Motion.

        </p>
        

        <div  className='max-w-7xl mx-auto relative z-0 h-[480px]'><MynameCanvas/>
        
        
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Footer)