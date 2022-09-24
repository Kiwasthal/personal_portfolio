import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const flip = {
  hidden: {
    transform: 'scale(0) rotateX(-720deg)',

    opacity: 0,
    transition: {},
  },
  visible: {
    transform: ' scale(1) rotateX(0deg)',

    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, premier, timeout, maxTxt, flipP, gBot }) => {
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
      className=" font-semibold  lg:ml-12  mb-[-1em]"
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
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
          >
            {word.split('').map((char, index) => {
              if (index === 0 && premier.includes(char)) {
                return (
                  <motion.span
                    key={index}
                    className={
                      char === 'W' && maxTxt
                        ? `inline-block  text-white logoShadow lg:text-10xl md:text-8xl text-6xl cursor-pointer lg:mr-[-12px] md:mr-[-7px]`
                        : `inline-block  text-white logoShadow lg:text-10xl md:text-8xl text-6xl cursor-pointer mr-negLetter `
                    }
                    aria-hidden="true"
                    variants={flipP ? flip : characterAnimation}
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

export default AnimatedText;
