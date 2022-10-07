import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';

const successVariants = {
  hidden: {
    x: 1200,
    transition: {
      duration: 1,
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const SuccessMsg = ({ message, setMessage }) => {
  const controls = useAnimation();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (message) {
      controls.start('visible');
      setTimeout(() => {
        setHasMounted(true);
      }, 1100);
      setTimeout(() => {
        setMessage(false);
        controls.start('hidden');
        setHasMounted(false);
      }, 4800);
    }
  }, [message, controls, setMessage]);

  return (
    <motion.div
      className="absolute md:bottom-14 md:right-12 bottom-10  rounded-xl flex flex-col p-5 z-max bg-stone-900 text-white"
      initial="hidden"
      animate={controls}
      variants={successVariants}
    >
      <span className="tracking-wide text-2xl">
        Email sent <span className="text-lime-300">successfully! </span>
      </span>
      <span className="text-sm mb-2">Thanks for reaching me</span>
      <div className=" h-2 border-2 border-white rounded-lg relative">
        {hasMounted ? (
          <div className="absolute  top-0 h-1 rounded-lg bg-lime-300 mailSent"></div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default SuccessMsg;
