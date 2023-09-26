import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { cupcakea, cupcakeb, cupcakec } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const ShowcaseCard = ({
  index, imageSrc
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className="flex max-w-xs content-center items-center justify-center rounded-3xl NeonCard"
        style={{
          
          transformStyle: 'preserve-3d',
        }} 
      >
        <div style={{
          
          transform: 'translateZ(60px)',
        }}>
          <img className='w-32 py-14' alt='Cupcake'
          src={imageSrc}></img>
           
        </div>
      </Tilt>
    </motion.div>
  );
};

const More = () => {
 
  return (
    <div className='max-w-7xl mx-auto relative z-0'>
      <motion.div variants={textVariant()}>
        
        <h2 className={`${styles.sectionHeadText} NeonTextonHover`}>3D Cards!</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Hover on these pink cards!
        </motion.p>
      </div>

      <div className="mt-20 grid grid-flow-row gap-x-8 gap-y-4 grid-cols-3">
            <ShowcaseCard imageSrc={cupcakea} />
            <ShowcaseCard imageSrc={cupcakeb} />
            <ShowcaseCard imageSrc={cupcakec} />
      </div>
    </div>
  );
};

export default SectionWrapper(More, "More");