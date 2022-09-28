import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './custom.css';

import { topspheresConfig } from './SphereConfigs';
import SphereGenerator from './SphereGenerator';

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
          1536: {
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
          <SwiperSlide key={sphere.id} className="custom-slide">
            <SphereGenerator sphere={sphere} multiple={sphere.multiple} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperContainer;
