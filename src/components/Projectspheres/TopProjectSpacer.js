import { ParallaxLayer } from '@react-spring/parallax';

const TopProjectSpacer = () => {
  return (
    <>
      <ParallaxLayer offset={2} speed={0.5}>
        <div className="bg-secspacer1 w-full bg-no-repeat bg-cover bg-center md:aspect-secspacer1 aspect-square z-10"></div>
        <div className="bg-secspacer2 w-full bg-no-repeat bg-cover bg-center md:aspect-secspacer1 mt-0 aspect-square"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.2}>
        <div className="absolute  bottom-0 text-7xl sm:text-8xl  lg:text-9xl xl:text-[10rem] 2xl:text-[11rem] tracking-tighter text-white w-full">
          <h1 className="absolute sm:left-14 tracking-tight ">
            My <span className="text-rose-500">Projects</span>
          </h1>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default TopProjectSpacer;
