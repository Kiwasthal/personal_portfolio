import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import SkillSwiper from './SkillSwiper';
import { ParallaxLayer } from '@react-spring/parallax';

const titleVariants = {
  hidden: {
    filter: 'blur(6px)',
    y: -140,
    opacity: 0,
    transform: 'scale(0)',
    transition: {},
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transform: 'scale(1)',
    transition: {
      duration: 2.2,
    },
  },
};

const SkillSection = ({ inView, skillTitleRef, scrollRef }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');

      setTimeout(() => {
        controls.start('move');
      }, 2500);
    }
    if (!inView) controls.start('hidden');
  }, [inView, controls]);

  return (
    <ParallaxLayer offset={1} factor={0.2}>
      <div className="top-0 bg-secspacer2 w-full bg-no-repeat bg-cover bg-center aspect-square sm:aspect-secspacer1"></div>

      <section
        className="flex flex-col items-center h-screen md:translate-y-[10px] lg:translate-y-[-42px]"
        ref={skillTitleRef}
      >
        <motion.h1
          className="text-5xl text-white "
          variants={titleVariants}
          initial="hidden"
          animate={controls}
        >
          Web Development Skills
        </motion.h1>
        <div className="w-11/12 h-24" ref={scrollRef}>
          <SkillSwiper />
        </div>
      </section>
    </ParallaxLayer>
  );
};

export default SkillSection;
