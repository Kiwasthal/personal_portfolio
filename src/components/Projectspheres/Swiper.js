import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './custom.css';

import BlogSphere from './BlogSphere';
import FantasySphere from './FantasySphere';
import HeronSphere from './HeronSphere';
import WaldoSphere from './WaldoSphere';
import ShoppingSphere from './ShoppingSphere';
import CvSphere from './CvSphere';
import BattleshipSphere from './Battleshipshpere';
import MemorySphere from './MemorySphere';
import SwiperContent from './SwiperContent';
import { topspheresConfig } from './SphereConfigs';
import SphereGenerator from './SphereTemplate';

const SwiperContainer = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="h-5/6 "
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: -110,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: -110,
          },
        }}
        speed={600}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {topspheresConfig.map(sphere => (
          <SwiperSlide className="custom-slide">
            <SphereGenerator sphere={sphere} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperContainer;
