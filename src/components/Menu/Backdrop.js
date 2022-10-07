import { AnimatePresence, motion } from 'framer-motion';

const dropTop = {
  initial: {
    opacity: 0,
    y: -250,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: -250,
    transition: {
      duration: 2,
    },
  },
};

const dropBottom = {
  initial: {
    opacity: 1,
    y: 250,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
  animate: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 250,
    transition: {
      delay: 0.2,
      duration: 2,
    },
  },
};

const Backdrop = ({ children, isShowing, clickHandler }) => {
  return (
    <AnimatePresence initial={false} mode="wait">
      {!isShowing && (
        <motion.div
          onClick={clickHandler}
          className=" absolute lg:hidden md:flex md:flex-col w-full h-full  z-max overflow-hidden opacity-1"
        >
          <motion.div
            key={'top'}
            className="h-1/2 w-full bg-black bg-opacity-50 "
            {...dropTop}
          ></motion.div>

          <motion.div
            key={'bottom'}
            className="h-1/2 w-full bg-black bg-opacity-50 "
            {...dropBottom}
          ></motion.div>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Backdrop;
