import { ParallaxLayer } from '@react-spring/parallax';
import { useAnimation, motion } from 'framer-motion';
import { useState } from 'react';
import SuccessMsg from '../../Form/SuccessMsg';
import FormBox from '../../Form/FormBox';

const infoBadge = {
  hidden: {
    x: 3000,
  },
  visible: {
    x: 0,
    transition: {
      delay: 3.2,
      duration: 1,
      type: 'spring',
      dampness: 200,
      stifness: 300,
    },
  },
};

const ContactSection = () => {
  const [messageSend, setMessageSend] = useState(false);
  const controls = useAnimation();

  controls.start('visible');

  return (
    <ParallaxLayer
      offset={7}
      className=" flex  items-center justify-between md:gap-4 gap-2 relative"
    >
      <div className="h-full w-screen lg:w-full flex  items-center justify-center md:gap-4 gap-2 relative  z-0">
        <SuccessMsg setMessage={setMessageSend} message={messageSend} />
        <FormBox setMessage={setMessageSend} message={messageSend} />
        <div className="lg:w-[900px] h-screen hidden md:block   w-1/2 bg-homemap  bg-no-repeat bg-fill bg-center   top relative">
          <div
            className="absolute lg:bottom-[35%] w-20 h-20 bg-zinc-800 lg:right-[26%] md:bottom-[35%] md:right-[51%] rounded-full flex justify-center items-center 
                          after:absolute after:bottom-[-17px]  
                          after:border-t-[30px] after:border-zinc-800
                          after:border-l-[28px] after:border-l-transparent
                          after:border-r-[28px] after:border-r-transparent
                          animate-bounce-slow"
          >
            <span className=" text-white font-logo logoShadowsm text-4xl mt-2 mr-2">
              PK
            </span>
          </div>
          <motion.div
            className="rounded-lg top-12s left-4  flex flex-col p-4 bg-stone-900 absolute z-30 "
            variants={infoBadge}
            initial="hidden"
            animate={controls}
          >
            <span className="text-white text-lg">
              <em>Athens, Greece</em>{' '}
            </span>
            <span className="text-white">
              <span className="text-rose-500 text-xl">@</span> :{' '}
              <em>imthekoul@gmail.com</em>
            </span>
          </motion.div>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default ContactSection;
