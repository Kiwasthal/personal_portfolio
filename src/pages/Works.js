import 'swiper/css';
import SwiperContainer from '../components/Projectspheres/Swiper';
import SEO from '../components/SEO';

const Works = () => {
  return (
    <>
      <SEO
        title={'Works'}
        description={' Porfolio projects page, list of my projects'}
      />
      <div className="h-full w-screen lg:w-full flex items-center  relative ">
        <div className=" absolute w-full h-screen pb-0 bg-workbg aspect-spacer1 bg-bottom"></div>
        <SwiperContainer />
      </div>
    </>
  );
};

export default Works;
