import { motion } from 'framer-motion';

const IconHolder = ({ children, text }) => {
  return (
    <motion.div
      text={text}
      className={`relative  lg-0 shadow-lg after:z-neg  after:left-[50%] hover:after:translate-y-32 after:absolute after:w-full 
      after:duration-300 after:top-0 after:content-[attr(text)] after:translate-x-[-50%]
      after:text-white after:text-xl after:font-bold`}
      whileHover={{ scale: 1.1 }}
    >
      {children}
    </motion.div>
  );
};

export default IconHolder;
