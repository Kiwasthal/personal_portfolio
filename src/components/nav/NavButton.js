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

const NavButton = ({ text, curPage, setCurPage }) => {
  const controls = useAnimation();
  const location = useLocation();

  console.log(location.pathname.slice(1));

  useEffect(() => {
    if (text === location.pathname.slice(1)) controls.start('current');
    else controls.start('standard');
  }, [location, controls, text]);
  return (
    <motion.span
      className="relative inline-block w-40  lg:w-36 md:w-40 sm:w-32 h-12 shadow-lg font-extrabold cursor-pointer"
      variants={buttonVariables}
      animate={controls}
      initial="standard"
      onClick={() => setCurPage(text)}
    >
      <span className="lg:text-xl  absolute top-0 w-full h-full text-white bg-rose-600 flex justify-center items-center uppercase space tracking-wider clip-alter">
        {text}
      </span>
      <span className="lg:text-xl   absolute top-0 w-full h-full text-rose-600 flex justify-center items-center uppercase space tracking-wider backgr bg-white overflow-hidden z-10 duration-500 clip-control">
        {text}
      </span>
    </motion.span>
  );
};

export default NavButton;
