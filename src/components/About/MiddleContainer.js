import promo50 from '../assets/promo.jpg';
import { motion } from 'framer-motion';
import AnimPKHead from './AnimPKHead';

const flip = {
  hidden: {
    transform: 'scale(0) rotateX(-720deg) ',

    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: ' scale(1) rotateX(0deg) ',
    opacity: 1,
    transition: {
      delay: 4,
      duration: 1,
    },
  },
  exit: {
    transform: 'scale(0) rotateX(360deg)',
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const mainTxtVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      delay: 3.5,
    },
  },
};

const MiddleContainer = () => {
  return (
    <div className="w-full left-[50%] top-[50%] absolute translate-x-[-50%] translate-y-[-50%]  z-10 flex flex-col justify-between gap-12">
      <div className="w-full flex justify-center lmg:pl-32 textlg:pl-0 md:pl-0 pl-14">
        <AnimPKHead
          text={`Hello, I'm Panos Kostopoulos`}
          premier={['P', 'K']}
          timeout={3000}
        />
      </div>

      <div
        className="flex w-full 
                     md:flex-row lg:flex-row  sm:flex-col sm:items-center  items-center lg:items-start md:items-start flex-col justify-center lg:gap-3 md:gap-3
                    md:px-16  lmg:px-20 textlg:px-15  md:mt-12 mt-0 "
      >
        <motion.div
          className=" flex flex-col gap-4 cursor-default"
          variants={mainTxtVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="md:text-2xl lmg:text-xl textlg:text-3xl text-xl text-center md:text-start  text-white">
            Fullstack{' '}
            <span className=" text-rose-500 font-logo">Web-Developer</span> from
            Greece
          </div>
          <div className="text-center md:text-start md:text-2xl lmg:text-xl textlg:text-3xl text-xl text-white">
            With a <span className=" text-rose-500 font-logo">passion</span> for
            complexity and all things{' '}
            <span className="text-rose-500 font-logo">React</span>
          </div>
          <div className="text-center md:text-start md:text-2xl lmg:text-xl textlg:text-3xl  text-white"></div>

          <div className="lg:mt-12 mt-0 text-white text-lg text-center md:text-start">
            <p>
              My javascript journey started at the{' '}
              <a
                href="https://www.theodinproject.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-500 underline"
              >
                Odin Project
              </a>{' '}
              while coming from an interior-decorator background. A student of
              many fields with aspirations of exceling in the area of
              development.
            </p>
          </div>
          <div className="text-white text-center md:text-start sm:mb-4 text-xl mb-0">
            <p>Avid reader and chess player</p>
          </div>
        </motion.div>

        <motion.img
          src={promo50}
          className=" lmg:w-6/12 textlg:w-[520px] md:w-[400px] w-[350px] border-4  border-rose-600  rounded-md   "
          alt="potrait of myslef"
          variants={flip}
          initial="hidden"
          animate="visible"
        ></motion.img>
      </div>
    </div>
  );
};

export default MiddleContainer;
