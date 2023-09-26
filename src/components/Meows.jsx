import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { DonutCanvas, TruffleCanvas, IcecreamCanvas} from "./canvas";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { textVariant } from "../utils/motion";

const Meows = () => {


  return (
    <div className='max-w-7xl mx-auto relative z-0'>
       <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}  text-secondary`}>
         Use pointer to rotate the floating food!
        </p>
        <h2 className={`${styles.sectionHeadText} mb-20 NeonTextonHover`}
            
        >
          See what's on the menu!
        </h2>
      </motion.div>
      <div className={'flex xl:flex-row flex-col-reverse overflow-hidden'}>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className='flex-1 h-96 py-20 text-right'
        >
          <p className={'sm:text-[18px] text-secondary tracking-wider pr-20 '}>
            <span className={'text-[25px] pr-2 PriceText'}>129.9</span> 
            <span>MeowCoin</span>
          
          </p>
          <h2 className={'text-white font-medium md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] pr-20 NeonTextonHover'}>Donut!</h2>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] ys-leftline'
        >
          <DonutCanvas/>
        </motion.div>
      </div>
      <div className={'flex xl:flex-row flex-col-reverse overflow-hidden'}>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] '
        >
          <TruffleCanvas />
        </motion.div>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className='flex-1 h-96 py-20 ys-leftline'
        >
          <p className={'sm:text-[18px] text-[14px] text-secondary tracking-wider pl-20 '}>
          <span className={'text-[25px] pr-2 PriceText'}>89.9</span> 
            <span>MeowCoin</span>

          </p>
          <h2 className={'text-white font-medium md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] pl-20 NeonTextonHover'}>Truffle!</h2>
        </motion.div>
      </div>
      <div className={'flex xl:flex-row flex-col-reverse overflow-hidden'}>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className='flex-1 h-96 py-20 text-right'
        >
          <p className={'sm:text-[18px] text-secondary tracking-wider pr-20 '}>
            <span className={'text-[25px] pr-2 PriceText'}>119.9</span> 
            <span>MeowCoin</span>
          
          </p>
          <h2 className={'text-white font-medium md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] pr-20 NeonTextonHover'}>Icecream!</h2>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] ys-leftline'
        >
          <IcecreamCanvas/>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Meows, "meows");