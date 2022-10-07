import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useLocation, useParams } from 'react-router-dom';

const buttonVariables = {
  current: {
    x: 80,
    transition: {
      type: 'spring',
      delay: 0.1,
      stiffness: 100,
    },
  },
  standard: {
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.1,
      stiffness: 50,
    },
  },
};

const NavButton = ({ text }) => {
  const controls = useAnimation();
  const location = useLocation();

  useEffect(() => {
    if (text === location.pathname.slice(1)) controls.start('current');
    else controls.start('standard');
  }, [location, controls, text]);
  return (
    <motion.span
      className="relative inline-block  2xl:w-32 xl:w-24 2xl:h-10 xl:h-8 lg:w-20 lg:h-6 md:w-40 sm:w-32 w-28 h-8 sm:h-12 shadow-lg font-extrabold cursor-pointer"
      variants={buttonVariables}
      animate={controls}
      initial="standard"
    >
      <span className="text-lg lg:text-sm xl:text-base 2xl:text-lg absolute top-0 w-full h-full text-white bg-rose-600 flex justify-center items-center uppercase space tracking-wider clip-alter">
        {text}
      </span>
      <span className="text-lg  xl:text-base 2xl:text-lg  absolute top-0 w-full h-full text-rose-600 flex justify-center items-center uppercase space tracking-wider backgr bg-white overflow-hidden z-10 duration-500 clip-control">
        {text}
      </span>
    </motion.span>
  );
};

export default NavButton;
