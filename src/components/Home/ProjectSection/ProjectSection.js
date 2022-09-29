import { ParallaxLayer } from '@react-spring/parallax';
import { Link } from 'react-router-dom';
import msgVideo from '../../assets/videos/heronPort.mp4';
import Blog from './Blog';

const ProjectSection = () => {
  return (
    <>
      <Blog />
      <ParallaxLayer offset={4} speed={0.9}>
        <video
          className="absolute sm:left-[50%] sm:translate-x-[-50%] lg:translate-x-0 lg:left-32 top-0 w-full   h-2/3 sm :w-[95%] lg:w-3/5  shadow-md   rounded-lg  z-30 object-cover"
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source src={msgVideo} type="video/mp4" />
        </video>
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0.5}>
        <div className="absolute mt-9 lg:right-52 md:right-4 sm:w-4/5  lg:w-2/5 h-2/5 border-dotted border-4 border-rose-600 z-30 flex flex-col"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={0.2}>
        <div className="absolute mt-16 lg:right-56 md:right-4   rounded-xl   w-[772px] h-96  bg-zinc-900 py-4 px-8 shadow-lg ">
          <div className="flex justify-between items-end">
            <h3 className="text-4xl text-white">Heron Messanger</h3>
            <div className="flex items-center  gap-5">
              <i className="devicon-redux-original colored text-3xl"></i>
              <i className="devicon-typescript-plain colored text-3xl "></i>
              <i className="devicon-firebase-plain colored text-3xl"></i>
            </div>
          </div>
          <p className="text-white mt-5 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={5} speed={0.9}>
        <div className="absolute right-32   h-2/3 w-3/5 border-dotted border-4 bg-white z-30"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={5} speed={0.5}>
        <div className="absolute lg:left-52 top-[0%] w-2/5 h-2/5 border-dotted border-4 border-rose-600 z-30 flex flex-col"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={5} speed={0.2}>
        <div className="absolute lg:left-56 top-[0%]  rounded-xl w-[772px] h-96  bg-zinc-900 py-4 px-8">
          <div className="flex justify-between items-end">
            <h3 className="text-4xl text-white">Fantasy Inventory</h3>
            <div className="flex gap-5">
              <i className="devicon-tailwindcss-plain colored text-3xl"></i>
              <i className="devicon-express-original colored text-3xl"></i>
              <i className="devicon-mongodb-plain colored text-3xl"></i>
            </div>
          </div>
          <p className="text-white mt-5 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={5} speed={0.5}></ParallaxLayer>
      <ParallaxLayer offset={5} speed={0.2}>
        <h1 className="absolute bottom-24 right-0 mr-32 text-5xl text-white z-20">
          Browse all{' '}
          <Link to="/works">
            <span className="text-rose-500 underline">Projects</span>
          </Link>
        </h1>
      </ParallaxLayer>
    </>
  );
};

export default ProjectSection;
