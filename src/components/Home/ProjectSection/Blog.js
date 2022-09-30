import blogVideo from '../../assets/videos/blogPort.mp4';
import { ParallaxLayer } from '@react-spring/parallax';
import { useInView } from 'react-intersection-observer';

let visibleShadow =
  'absolute lg:left-[5%]  blur-lg sm:left-[50%] sm:translate-x-[-50%] lg:translate-x-0  lg:h-1/2  w-full    sm :w-[95%] bg-gradient-radial opacity-40 from-zinc-800 via-rose-500 to-rose-500  rounded-lg  object-cover  md:left-4 xl:left-[5%]  sm:w-4/5  md:w-3/5 top-[50%] lg:w-3/5 xl:w-2/5 h-2/5   z-10 scale-1 origin-left ransition-all duration-500  delay-500 opacity-0 lg:opacity-50';
let clearShadow =
  'absolute lg:left-[5%]  blur-lg sm:left-[50%] sm:translate-x-[-50%] lg:translate-x-0  lg:h-1/2  w-full    sm :w-[95%] bg-gradient-radial opacity-40 from-zinc-800 via-rose-500 to-rose-500  rounded-lg  object-cover  md:left-4 xl:left-[5%]  sm:w-4/5  md:w-3/5 top-[50%] lg:w-3/5 xl:w-2/5 h-2/5   z-10 scale-0 origin-left transition-all duration-200 md:opacity-0 lg:opacity-50';
let modalShow =
  'absolute lg:left-[6%] md:left-14 md:h-1/2 md:w-2/3 shadow-2xl lg:shadow-none md:left-5 top-[50%] backdrop-blur-sm   rounded-xl lg:w-3/5 xl:w-3/5  2xl:w-2/5  lg:h-1/2 lg:bg-zinc-900  py-4 px-8 transition-all scale-100 origin-right duration-1000 ';
let modalHide =
  'absolute lg:left-[6%] md:left-5 top-[50%] md:w-2/3  md:backdrop-blur-sm rounded-xl lg:w-3/5 xl:w-4/5   2xl:w-3/5  lg:h-1/2   py-4 px-8 transition-all scale-0 origin-right duration-1000 ';

const Blog = () => {
  const [endRef, endInView] = useInView();

  return (
    <>
      <ParallaxLayer offset={3} speed={0.5}>
        <div className={endInView ? visibleShadow : clearShadow}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.9}>
        <video
          className=" absolute top-[50%] md:right-0 lg:right-10  2xl:right-32 w-full   h-2/3 sm:w-full lg:w-4/5 xl:w-4/5 2xl:w-3/5  shadow-md   rounded-lg  z-30 object-cover"
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source src={blogVideo} type="video/mp4" />
        </video>
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.2}>
        <div className={endInView ? modalShow : modalHide}>
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <h3 className="text-xl md:text-4xl text-rose-500 lg:text-white font-bold">
              Kiwasthal Blog
            </h3>
            <div className="flex gap-5 items-center">
              <i className="devicon-nextjs-original colored text-xl md:text-3xl"></i>
              <i className="devicon-tailwindcss-plain colored text-xl md:text-3xl"></i>
              <i className="devicon-express-original colored text-xl md:text-3xl"></i>
              <i className="devicon-mongodb-plain colored text-xl md:text-3xl"></i>
            </div>
          </div>
          <p className="md:text-black lg:text-white mt-5 text-[0.5rem] sm:text-base leading-2 lg:text-base xl:text-xl 2xl:text-lg">
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
      <ParallaxLayer offset={3}>
        <span ref={endRef} className="absolute -bottom-0  w-full"></span>
      </ParallaxLayer>
    </>
  );
};

export default Blog;
