import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from './Loader/Loader';

const transitionVars = {
  hidden: {
    x: -2800,
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    x: 1600,
    transition: {
      duration: 1,
    },
  },
};

const Transition = ({ children, main }) => {
  const [transitionClass, setTransitionClass] = useState(
    'h-full w-screen lg:w-maxPage overflow-hidden  relative'
  );

  useEffect(() => {
    if (main)
      setTimeout(() => {
        setTransitionClass(
          'h-full w-screen lg:w-maxPage overflow-x-hidden relative'
        );
      }, 3000);
  }, [main]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={'div'}
        className={transitionClass}
        variants={transitionVars}
        initial="hidden"
        animate="visible"
      >
        <Loader />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
