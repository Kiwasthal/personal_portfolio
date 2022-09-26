import { useEffect } from 'react';
import { SwiperSlide } from 'swiper/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { sphereVariants } from './sphereVariants';

const SphereGenerator = ({ sphere }) => {
  console.log(sphere.mainColor);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start('visible');
    if (!inView) controls.start('hidden');
  }, [inView, controls]);

  return (
    <SwiperSlide className="custom-slide">
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
          <h2 className={`font-bold text-2xl leading-4 ${sphere.header}`}>
            Battleship Game
          </h2>
          <span className={`sphere-tools ${sphere.tools}`}>
            Vanilla Javascript
          </span>
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
          src={sphere.src}
          alt={sphere.desc}
          className="absolute rounded-md top-[60%] left-[77%] 
                  w-60 translate-x-[-50%] translate-y-[-50%] 
                  scale-1 h-[125%] transition-all scale-0 duration-500 
                  group-hover:transition-all group-hover:transform 
                  group-hover:translate-x-[-50%] group-hover:duration-500 
                  group-hover:translate-y-[-50%] group-hover:scale-100"
        />
      </div>
    </SwiperSlide>
  );
};

export default SphereGenerator;
