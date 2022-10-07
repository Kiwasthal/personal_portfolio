import { ParallaxLayer } from '@react-spring/parallax';
import { useInView } from 'react-intersection-observer';
import blogVideo from '../../assets/fantasyGIF.gif';
import { Link } from 'react-router-dom';

let visibleShadow =
  'absolute lg:left-[5%] -top-20  blur-lg sm:left-[50%] sm:translate-x-[-50%] lg:translate-x-0  lg:h-1/2  w-full    sm :w-[95%] bg-gradient-radial opacity-40 from-zinc-800 via-rose-500 to-rose-500  rounded-lg  object-cover  md:left-4 xl:left-[5%]  sm:w-4/5  md:w-3/5 top-[50%] lg:w-3/5 xl:w-2/5 h-2/5   z-10 scale-1 origin-left ransition-all duration-500  delay-500 opacity-0 lg:opacity-50';
let clearShadow =
  'absolute lg:left-[5%] -top-20 blur-lg sm:left-[50%] sm:translate-x-[-50%] lg:translate-x-0  lg:h-1/2  w-full    sm :w-[95%] bg-gradient-radial opacity-40 from-zinc-800 via-rose-500 to-rose-500  rounded-lg  object-cover  md:left-4 xl:left-[5%]  sm:w-4/5  md:w-3/5 top-[50%] lg:w-3/5 xl:w-2/5 h-2/5   z-10 scale-0 origin-left transition-all duration-200 opacity-0 lg:opacity-50';
let modalShow =
  'absolute lg:left-[6%] top-0 md:left-14 md:h-1/2 md:w-2/3 shadow-2xl lg:shadow-none md:left-5 top-[50%] backdrop-blur-sm   rounded-xl lg:w-3/5 xl:w-3/5  2xl:w-2/5  lg:h-1/2 lg:bg-zinc-900  py-4 px-8 transition-all scale-100 origin-right duration-1000 ';
let modalHide =
  'absolute lg:left-[6%] top-0 md:left-5 top-[50%] md:w-2/3  md:backdrop-blur-sm rounded-xl lg:w-3/5 xl:w-4/5   2xl:w-3/5  lg:h-1/2   py-4 px-8 transition-all scale-0 origin-right duration-1000 ';

const Fantasy = () => {
  const [endRef, endInView] = useInView();

  return (
    <>
      <ParallaxLayer offset={5} speed={0.5}>
        <div className={endInView ? visibleShadow : clearShadow}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={5} speed={0.9}>
        <img
          className=" absolute top-0 md:right-0 lg:right-10  2xl:right-32 w-full   h-2/3 sm:w-full lg:w-4/5 xl:w-4/5 2xl:w-3/5  shadow-md   rounded-lg  z-30 object-cover"
          src={blogVideo}
          alt="fantasy website"
        />
        {/* <source src= type="video/mp4" />
        </video>{' '} */}
      </ParallaxLayer>

      <ParallaxLayer offset={5} speed={0.2}>
        <div className={endInView ? modalShow : modalHide}>
          <div className="lex flex-col lg:flex-row justify-between items-start">
            <h3 className="text-4xl text-white">Fantasy Inventory</h3>
            <div className="flex gap-5">
              <i className="devicon-tailwindcss-plain colored text-3xl"></i>
              <i className="devicon-express-original colored text-3xl"></i>
              <i className="devicon-mongodb-plain colored text-3xl"></i>
            </div>
          </div>
          <p className="md:text-black lg:text-white mt-5 text-[0.5rem] sm:text-base leading-2 lg:text-base xl:text-xl 2xl:text-lg">
            An application designer to catalogue different creatures. Users can
            start by creating a family or a specific origin of a creature then
            proceed to add specific details about any fantastical creature ever
            imagined. The content of the page is render with EJS via an Back end
            view engine. The Server was created with express and Mongoose.
          </p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={5}>
        <span ref={endRef} className="absolute bottom-[50%]  w-full"></span>
      </ParallaxLayer>
      <ParallaxLayer offset={5} speed={0.2}>
        <h1 className="absolute bottom-0 sm:bottom-24 right-0 sm:mr-32 text-5xl text-white z-20">
          Browse all{' '}
          <Link to="/works">
            <span className=" text-rose-500 underline">Projects</span>
          </Link>
        </h1>
      </ParallaxLayer>
    </>
  );
};

export default Fantasy;
