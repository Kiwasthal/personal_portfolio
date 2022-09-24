import blogGIF from '../assets/blogGIF.gif';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { sphereVariants } from './sphereVariants';

const BlogSphere = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start('visible');
    if (!inView) controls.start('hidden');
  }, [inView, controls]);
  return (
    <div className="h-[50vh] flex items-center justify-center pb-12 pr-16">
      <div className="  group relative w-72 h-72  hover:w-[500px] rounded-2xl transition-all duration-500 delay-0 ">
        <motion.div
          className="absolute flex items-center justify-center m-6 top-0 left-0 w-full h-full rounded-2xl overflow-hidden
  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gray-900 before:clipCon before:transition-all before:duration-500
  group-hover:before:clipConHov "
          ref={ref}
          variants={sphereVariants}
          animate={controls}
        >
          <span className="relative w-44 text-center text-5xl text-white font-logo rotate-350 transition-all sclae-1 duration-500 delay-0 group-hover:transition-all group-hover:scale-0 group-hover:delay-0 ">
            Blog
          </span>
        </motion.div>
        <div className="w-1/2 h-full relative left-[30%] pt-9 pr-3 pb-3 pl-12 opacity-0 transition-all  invisible group-hover:left-0 group-hover:opacity-100 group-hover:visible group-hover:transition-all group-hover:delay-500 ">
          <h2 className="text-white font-bold text-2xl leading-4">
            Kiwasthal-Blog
          </h2>
          <span className="text-rose-500 font-bold leading-3 text-sm">
            Express, Tailwind, Nextjs
          </span>
          <p className="text-white mb-3 mt-1 leading-5">
            A site for blogging, consiting of three parts. A node Api deployed
            on heroku. A cms for updating content utalizing admin login and a
            client built with nextjs.
          </p>
          <a
            href="https://kiwasthal-blog.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-lg font-bold relative bg-rose-500 px-4 py-2 inline-block rounded-md"
          >
            Client
          </a>
        </div>
        <img
          src={blogGIF}
          alt="Vercel blog app browsing gif"
          className="absolute rounded-md top-[60%] left-[77%] w-60 translate-x-[-50%] translate-y-[-50%] scale-1 h-96 transition-all scale-0 duration-500 group-hover:transition-all group-hover:transform group-hover:translate-x-[-50%] group-hover:duration-500 group-hover:translate-y-[-50%] group-hover:scale-100"
        />
      </div>
    </div>
  );
};

export default BlogSphere;