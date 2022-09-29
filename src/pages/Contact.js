import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useState } from 'react';
import FormBox from '../components/Form/FormBox';
import SuccessMsg from '../components/Form/SuccessMsg';
import SEO from '../components/SEO';

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

function Contact() {
  const [messageSend, setMessageSend] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  return (
    <>
      <SEO
        title="Contact"
        description="Porfolio contact page, contact kiwasthal via email"
        domain="https://panagiotis-kostopoulos.netlify.app/contact"
      />

      <div className="h-full w-screen lg:w-full flex  items-center justify-center md:gap-4 gap-2 relative">
        <SuccessMsg setMessage={setMessageSend} message={messageSend} />
        <FormBox setMessage={setMessageSend} message={messageSend} />
        <div className="lg:w-[900px] h-screen hidden md:block   w-1/2 bg-map bg-top-4  top relative">
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
            className="rounded-lg top-3 left-3 flex flex-col p-4 bg-stone-900 absolute "
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
    </>
  );
}

export default Contact;
