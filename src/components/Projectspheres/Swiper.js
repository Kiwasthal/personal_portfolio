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

const SwiperContainer = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: -110,
          },
        }}
        speed={600}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <BlogSphere />
        </SwiperSlide>
        <SwiperSlide>
          <FantasySphere />
        </SwiperSlide>
        <SwiperSlide>
          <HeronSphere />
        </SwiperSlide>
        <SwiperSlide>
          <WaldoSphere />
        </SwiperSlide>
        <SwiperSlide>
          <ShoppingSphere />
        </SwiperSlide>
        <SwiperSlide>
          <MemorySphere />
        </SwiperSlide>
        <SwiperSlide>
          <CvSphere />
        </SwiperSlide>
      </Swiper>
      <Swiper
        className="sm:justify-start"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: -110,
          },
        }}
        speed={600}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <BattleshipSphere />
        </SwiperSlide>
        <SwiperSlide>
          <BlogSphere />
        </SwiperSlide>
        <SwiperSlide>
          <BlogSphere />
        </SwiperSlide>
        <SwiperSlide>
          <BlogSphere />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperContainer;
