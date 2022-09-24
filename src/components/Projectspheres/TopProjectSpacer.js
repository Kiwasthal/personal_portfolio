import { ParallaxLayer } from '@react-spring/parallax';

const TopProjectSpacer = () => {
  return (
    <>
      <ParallaxLayer offset={2} speed={0.5}>
        <div className="bg-secspacer1 w-full bg-no-repeat bg-cover bg-center aspect-secspacer1"></div>
        <div className="bg-secspacer2 w-full bg-no-repeat bg-cover bg-center aspect-secspacer1 mt-0"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.2}>
        <div className="absolute  bottom-0  text-[11rem] tracking-tighter text-white w-full">
          <h1 className="absolute left-14 tracking-tight ">
            My <span className="text-rose-500">Projects</span>
          </h1>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default TopProjectSpacer;
