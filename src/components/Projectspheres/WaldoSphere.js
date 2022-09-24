import waldoGIF from '../assets/waldoGIF.gif';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { sphereVariants } from './sphereVariants';

const WaldoSphere = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start('visible');
    if (!inView) controls.start('hidden');
  }, [inView, controls]);

  return (
    <div className="h-[50vh] flex items-center justify-center pb-12 pr-16">
      <div className="  group relative w-72 h-72  hover:w-[500px] rounded-2xl transition-all duration-500 delay-0 ">
        <motion.div
          className="absolute flex items-center justify-center m-6 top-0 left-0 w-full h-full rounded-2xl overflow-hidden
  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-red-500 before:clipCon before:transition-all before:duration-500
  group-hover:before:clipConHov "
          ref={ref}
          variants={sphereVariants}
          animate={controls}
        >
          <span className="relative w-44 text-center text-5xl text-white font-logo rotate-350 transition-all sclae-1 duration-500 delay-0 group-hover:transition-all group-hover:scale-0 group-hover:delay-0 ">
            Where is Waldo?
          </span>
        </motion.div>
        <div className="w-1/2 h-full relative left-[30%] pt-9 pr-3 pb-3 pl-12 opacity-0 transition-all  invisible group-hover:left-0 group-hover:opacity-100 group-hover:visible group-hover:transition-all group-hover:delay-500 ">
          <h2 className="text-white font-bold text-xl leading-4">
            Photo-Tagging-App
          </h2>
          <span className="text-zinc-900 font-bold leading-3 text-sm">
            Express, Tailwind, Nextjs
          </span>
          <p className="text-white font-semibold mb-3 mt-1 leading-5">
            A react application utilizing firebase service back-end to catalogue
            different times set by users playing the infamous where-is-waldo
            picture searching game.
          </p>
          <a
            href="https://photo-tagging-app-b3072.firebaseapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-lg text-white font-bold relative bg-zinc-900 px-4 py-2 inline-block rounded-md"
          >
            Client
          </a>
        </div>
        <img
          src={waldoGIF}
          alt="Where is waldo gif. Showcasing game-app features"
          className="absolute rounded-md top-[60%] left-[77%] w-60 translate-x-[-50%] translate-y-[-50%] scale-1 h-96 transition-all scale-0 duration-500 group-hover:transition-all group-hover:transform group-hover:translate-x-[-50%] group-hover:duration-500 group-hover:translate-y-[-50%] group-hover:scale-100"
        />
      </div>
    </div>
  );
};

export default WaldoSphere;
