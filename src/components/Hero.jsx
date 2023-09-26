import { motion } from "framer-motion";
import { styles } from "../styles";
import { CakemainCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[230px] max-w-screen-2xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className={'NeonText'}>MeowShop </span>

          </h1>
          
          <p className={`${styles.sectionSubText} mt-2 text-white-100`}>
          A <span className={'text-[#e099df]'}>WebGL</span> website! Rotate the cake!
          </p>
        </div>
      </div>
      <CakemainCanvas />
      <div className='absolute w-full flex justify-end items-center'>
        <a href='#meows'>
          <div className='arrow'>
            <motion.div
              animate={{
                y: [0, 28, 0],
              }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className=' down'
            />
            <motion.div
              animate={{
                y: [0, 30, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className=' down arrow'
            />
            <motion.div
              animate={{
                y: [0, 32, 0],
              }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className=' down arrow'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");