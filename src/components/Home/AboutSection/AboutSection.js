import AnimTxt from './AnimTxt';
import Canvas from './Canvas';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

const AboutSection = ({ inView, scroll }) => {
  const [arrowHovered, setArrowHovered] = useState(false);

  const handleHover = () => setArrowHovered(!arrowHovered);

  return (
    <ParallaxLayer>
      <section className="relative h-screen flex flex-col justify-center">
        <div className="absolute w-full translate-y-[-30%] lg:ml-5 ml-0 text-xl text-white flex flex-col items-center cursor-none gap-5 md:gap-0">
          <AnimTxt
            text={`Hello, I'm Panos`}
            premier={['P', 'K']}
            timeout={3000}
          />
          <AnimTxt text={`Kostopoulos`} premier={['P', 'K']} timeout={3200} />
          <span className="mt-5 sm:mt-12 ml-3 md:text-2xl text-sm text-red-100 cursor-default">
            <em>Full-Stack Web Developer</em>{' '}
          </span>
        </div>
        {!inView ? <Canvas /> : null}

        <div
          className="absolute bottom-0 h-28 bg-rose-500 w-full 
                      before:block before:absolute after:block after:absolute before:bg-zinc-800 before:translate-y-[-61%] before:translate-x-[-2%]  before:z-20
                      before:rounded-tl-[100%] before:rounded-br-[100%] before:rounded-tr-[50%] before:rounded-bl-[50%] before:w-[57%] before:h-full
                      after:rounded-tl-[100%] after:rounded-br-[100%] after:rounded-tr-[50%] after:rounded-bl-[50%] after:w-[55%] after:h-full
                      after:translate-x-[94%]   after:translate-y-[-72%] after:bg-rose-500 after:z-10"
        >
          <AnimatePresence mode="wait">
            {!inView ? (
              <motion.svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="32.727px"
                height="32.727px"
                viewBox="0 0 32.727 29.727"
                xmlSpace="preserve"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                onClick={scroll}
                fill={arrowHovered ? 'white' : 'black'}
                className="absolute w-12 h-12 bottom-0 left-[50%] translate-x-[50%] animate-bounce-slow text-red-200 transition-all duration-200 cursor-pointer after:content-['Hello'] after:absolute"
                initial={{ opacity: 0, transition: { duration: 1 } }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, transition: { duration: 1.5 } }}
              >
                <g>
                  <path
                    d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0
		l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"
                  />
                </g>
              </motion.svg>
            ) : null}
          </AnimatePresence>
        </div>
      </section>
    </ParallaxLayer>
  );
};

export default AboutSection;
