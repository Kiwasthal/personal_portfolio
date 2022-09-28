import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { sphereVariants } from './sphereVariants';

const SphereGenerator = ({ sphere, multiple }) => {
  const [gifShowing, setGifShowing] = useState(multiple ? 'LOG' : null);
  const [loadedGif, setLoadedGif] = useState(multiple ? true : null);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    const changeGIFshowing = () => {
      gifShowing === 'LOG'
        ? setGifShowing('FRIENDS')
        : gifShowing === 'FRIENDS'
        ? setGifShowing('GLOBAL')
        : setGifShowing('LOG');
    };
    if (multiple) {
      if (loadedGif) {
        setTimeout(() => {
          setLoadedGif(!loadedGif);
        }, 6000);
      }
      if (!loadedGif) {
        setTimeout(() => {
          setLoadedGif(!loadedGif);
          changeGIFshowing();
        }, 6000);
      }
    }
  }, [loadedGif, gifShowing, multiple]);

  useEffect(() => {
    if (inView) controls.start('visible');
    if (!inView) controls.start('hidden');
  }, [inView, controls]);

  return (
    <div className="group sphere-container">
      <motion.div
        className={`sphere-handler ${sphere.mainColor}`}
        ref={ref}
        variants={sphereVariants}
        animate={controls}
      >
        <span className={`sphere-name ${sphere.name}`}>
          {sphere.originName}
        </span>
      </motion.div>
      <div className="sphere-content">
        <div>
          <h2 className={`font-bold leading-4 ${sphere.header}`}>
            {sphere.innerTitle}
          </h2>
          <span className={`sphere-tools ${sphere.tools}`}>
            {sphere.toolContent}
          </span>
        </div>

        <p className={`sphere-para ${sphere.paraStyles}`}>{sphere.para}</p>
        <a
          href={sphere.livelink}
          target="_blank"
          rel="noopener noreferrer"
          className={`sphere-button ${sphere.button}`}
        >
          Client
        </a>
      </div>
      <img
        src={
          multiple
            ? gifShowing === 'LOG'
              ? sphere.multipleVariants[0]
              : gifShowing === 'FRIENDS'
              ? sphere.multipleVariants[1]
              : sphere.multipleVariants[2]
            : sphere.src
        }
        alt={sphere.desc}
        className="absolute rounded-md top-[50%] left-[74%] 
                  w-1/2 md:w-72 translate-x-[-50%] translate-y-[-50%] 
                  scale-1 h-[125%] transition-all scale-0 duration-500 
                  group-hover:transition-all group-hover:transform 
                  group-hover:translate-x-[-50%] group-hover:duration-500 
                  group-hover:translate-y-[-50%] group-hover:scale-100"
      />
    </div>
  );
};

export default SphereGenerator;
