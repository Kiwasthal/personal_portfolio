import { ParallaxLayer } from '@react-spring/parallax';
import { useInView } from 'react-intersection-observer';
import msgVideo from '../../assets/videos/heronPort.mp4';

let visibleShadow =
  'absolute  right-[5%]  blur-lg    lg:h-1/2  w-full    sm :w-[95%] bg-gradient-radial opacity-40 from-zinc-800 via-rose-500 to-rose-500  rounded-lg  object-cover   xl:right-[5%]  sm:w-4/5  md:w-3/5 lg:w-3/5 xl:w-2/5 h-2/5   z-10 scale-1 origin-right ransition-all duration-500  delay-500 opacity-0 lg:opacity-50';
let clearShadow =
  'absolute right-[5%]  blur-lg      lg:h-1/2  w-full    sm :w-[95%] bg-gradient-radial opacity-40 from-zinc-800 via-rose-500 to-rose-500  rounded-lg  object-cover   xl:right-[5%]  sm:w-4/5  md:w-3/5 lg:w-3/5 xl:w-2/5 h-2/5   z-10 scale-0 origin-right transition-all duration-200 md:opacity-0 lg:opacity-50';
let modalShow =
  'absolute lg:right-[6%] md:right-10 md:h-1/2 md:w-2/3 shadow-2xl top-10 lg:shadow-none  backdrop-blur-sm   rounded-xl lg:w-3/5 xl:w-3/5  2xl:w-2/5  lg:h-1/2 lg:bg-zinc-900  py-4 px-8 transition-all scale-100 origin-left duration-1000 ';
let modalHide =
  'absolute lg:right-[6%] md:right-5  md:w-2/3 top-10 md:backdrop-blur-sm rounded-xl lg:w-3/5 xl:w-4/5   2xl:w-3/5  lg:h-1/2   py-4 px-8 transition-all scale-0 origin-left duration-1000 ';

const Messanger = () => {
  const [endRef, endInView] = useInView();
  return (
    <>
      <ParallaxLayer offset={4} speed={0.5} className="w-full">
        <div className={endInView ? visibleShadow : clearShadow}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={0.9}>
        <video
          className="absolute sm:left-[50%] sm:translate-x-[-50%] lg:translate-x-0 lg:left-32 top-0 w-full   h-2/3  lg:w-4/5 xl:w-4/5 2xl:w-3/5  shadow-md   rounded-lg  z-30 object-cover"
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source src={msgVideo} type="video/mp4" />
        </video>
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0.2}>
        <div className={endInView ? modalShow : modalHide}>
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <h3 className="text-xl md:text-4xl text-rose-500 lg:text-white font-bold">
              Heron Messenger
            </h3>
            <div className="flex items-center  gap-5">
              <i className="devicon-redux-original colored text-3xl"></i>
              <i className="devicon-typescript-plain colored text-3xl "></i>
              <i className="devicon-firebase-plain colored text-3xl"></i>
            </div>
          </div>
          <p className="md:text-black lg:text-white mt-5 text-[0.5rem] sm:text-base leading-2 lg:text-base xl:text-xl 2xl:text-lg">
            A real-time messenger application built with firebase, redux and
            typescript. Users can login manually or via their google account,
            they can add friends and join private chatrooms to have a chat, or
            they can post messanges on the global section.
          </p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={4}>
        <span ref={endRef} className="absolute bottom-[25%] w-full"></span>
      </ParallaxLayer>
    </>
  );
};

export default Messanger;
