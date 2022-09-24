import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimTxt = ({ text, premier, timeout, roate }) => {
  const flipView = {
    hidden: {
      rotate: 180,
      x: -100,
      opacity: 0,
      transition: {},
    },
    visible: i => ({
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 0.25,
      },
    }),
  };

  const [loading, setLoading] = useState(true);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  useEffect(() => {
    if (loading)
      setTimeout(() => {
        setLoading(false);
      }, timeout);
    if (inView && !loading) controls.start('visible');
    if (!inView && !loading) controls.start('hidden');
  }, [controls, inView, loading, timeout]);

  return (
    <motion.h2
      aria-label={text}
      role="heading"
      className=" font-semibold    mb-[-1em]"
    >
      {text.split(' ').map((word, index) => {
        return (
          <motion.span
            className="inline-block mr-3 whitespace-nowrap"
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={controls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.55,
              staggerChildren: 0.15,
            }}
          >
            {word.split('').map((char, index) => {
              if (index === 0 && premier.includes(char)) {
                let custom = char === 'P' ? 0.5 : 1;

                return (
                  <motion.span
                    key={index}
                    className={`inline-block  text-white logoShadow lg:text-9xl md:text-8xl  text-5xl cursor-pointer lg:mr-[-12px] md:mr-[-7px] font-logo`}
                    aria-hidden="true"
                    variants={flipView}
                    custom={custom}
                    whileHover={{
                      scaleY: 1.4,
                      scaleX: 0.8,
                    }}
                  >
                    {char}
                  </motion.span>
                );
              }
              return (
                <motion.span
                  key={index}
                  className={`lg:text-8xl md:text-6xl text-5xl  inline-block mr-negLetter text-rose-500 cursor-pointer pureTxtShadow`}
                  aria-hidden="true"
                  variants={characterAnimation}
                  whileHover={{
                    scaleY: 1.2,
                    scaleX: 0.9,
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </motion.h2>
  );
};

export default AnimTxt;
