import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const loaderVariants = {
  hidden: {
    x: 0,
    opacity: 0,
    transition: {
      delay: 3,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
  },
  moveUp: {
    y: '-100vh',
    x: 0,
    transition: {
      delay: 4,
    },
  },
  exit: {
    x: 4600,
    transition: {
      duration: 2,
    },
  },
};

const Loader = () => {
  const controls = useAnimation();
  const [willExit, setWillExit] = useState(false);

  useEffect(() => {
    if (!willExit) {
      controls.start('hidden');
      controls.start('moveUp');
      setWillExit(true);
    } else {
      setTimeout(() => {
        controls.start('exit');
      }, 2400);
    }
  }, [controls, willExit]);
  return (
    <motion.div
      className="absolute lg:w-full w-screen flex-col  lg:max-h-max h-screen top-0 right-0 flex justify-center items-center z-load bg-loader "
      variants={loaderVariants}
      animate={controls}
      initial="show"
    >
      <h1
        className=" lg:ml-0 box-border relative text-4xl font-loader text-zinc-700  strokeHandler uppercase tracking-wider 
                      before:content-['Loading...'] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:text-rose-600 
                      before:strokeHandler before:border-r-4 before:border-r-rose-600 py-2  before:py-2 before:overflow-hidden before:filltext"
      >
        Loading...
      </h1>
    </motion.div>
  );
};

export default Loader;
