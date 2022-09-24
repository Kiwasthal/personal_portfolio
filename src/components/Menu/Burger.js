import { motion } from 'framer-motion';

const BurgerMenu = ({ isShowing, clickHandler }) => {
  return (
    <>
      {isShowing && (
        <motion.div
          className="block lg:hidden absolute top-3 left-3 z-max "
          onClick={clickHandler}
          whileHover={{
            scaleY: 1.3,
            scaleX: 0.9,
          }}
          whileTap={{
            scaleY: 2,
            scaleX: 1,
          }}
        >
          <motion.svg
            className="w-12 h-12 cursor-pointer  "
            fill="red"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </motion.svg>
        </motion.div>
      )}
    </>
  );
};

export default BurgerMenu;
