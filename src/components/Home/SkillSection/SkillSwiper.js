import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import IconHolder from './IconHolder';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './customSwiper.css';

const SkillSwiper = () => {
  return (
    <Swiper
      className="h-72 w-full"
      centeredSlides={true}
      modules={[Navigation, Scrollbar, A11y, Pagination]}
      spaceBetween={0}
      slidesPerView={5}
      slidesPerGroup={1}
      loop={true}
      breakpoints={{
        540: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 0,
          loopFillGroupWithBlank: true,
        },
        808: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 0,
          loopFillGroupWithBlank: true,
        },
        1024: {
          slidesPerView: 5,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
      }}
      speed={600}
      navigation
      pagination={{
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      }}
    >
      <SwiperSlide className="custom-slide">
        <IconHolder text={'React'}>
          <i className="devicon-react-original colored swiper-icon"></i>
        </IconHolder>
      </SwiperSlide>
      <SwiperSlide className="custom-slide">
        <IconHolder text={'Redux'}>
          <i className="devicon-redux-original colored swiper-icon"></i>
        </IconHolder>
      </SwiperSlide>
      <SwiperSlide className="custom-slide">
        <IconHolder text={'NextJS'}>
          <i className="devicon-nextjs-original colored swiper-icon"></i>
        </IconHolder>
      </SwiperSlide>
      <SwiperSlide className="custom-slide">
        <IconHolder text={'JavaScript'}>
          <i className="devicon-javascript-plain colored swiper-icon "></i>
        </IconHolder>
      </SwiperSlide>
      <SwiperSlide className="custom-slide">
        <IconHolder text={'TypeScript'}>
          <i className="devicon-typescript-plain colored swiper-icon "></i>
        </IconHolder>
      </SwiperSlide>
      <SwiperSlide className="custom-slide">
        <IconHolder text={'HTML5'}>
          <i className="devicon-html5-plain-wordmark colored swiper-icon"></i>
        </IconHolder>
      </SwiperSlide>
      <SwiperSlide className="custom-slide">
        <IconHolder text={'CSS3'}>
          <i className="devicon-css3-plain-wordmark colored swiper-icon"></i>
        </IconHolder>
      </SwiperSlide>
      <SwiperSlide className="custom-slide">
        <IconHolder text={'Tailwindcss'}>
          <i className="devicon-tailwindcss-plain colored swiper-icon"></i>
        </IconHolder>
      </SwiperSlide>
      <SwiperSlide className="custom-slide">
        <IconHolder text={'Express'}>
          <i className="devicon-express-original colored swiper-icon"></i>
        </IconHolder>
      </SwiperSlide>
      <SwiperSlide className="custom-slide">
        <IconHolder text={'MongoDB'}>
          <i className="devicon-mongodb-plain-wordmark colored swiper-icon"></i>
        </IconHolder>
      </SwiperSlide>
      <SwiperSlide className="custom-slide">
        <IconHolder text={'Webpack'}>
          <i className="devicon-webpack-plain colored swiper-icon"></i>
        </IconHolder>
      </SwiperSlide>
      <SwiperSlide className="custom-slide">
        <IconHolder text={'Jest'}>
          <i className="devicon-jest-plain colored swiper-icon"></i>
        </IconHolder>
      </SwiperSlide>
      <SwiperSlide className="custom-slide">
        <IconHolder text={'Git'}>
          <i className="devicon-git-plain-wordmark colored swiper-icon"></i>
        </IconHolder>
      </SwiperSlide>
      <SwiperSlide className="custom-slide">
        <IconHolder text={'Firebase'}>
          <i className="devicon-firebase-plain-wordmark colored swiper-icon"></i>
        </IconHolder>
      </SwiperSlide>
      <SwiperSlide className="custom-slide">
        <IconHolder text={'NodeJS'}>
          <i className="devicon-nodejs-plain-wordmark colored swiper-icon"></i>
        </IconHolder>
      </SwiperSlide>
    </Swiper>
  );
};

export default SkillSwiper;
