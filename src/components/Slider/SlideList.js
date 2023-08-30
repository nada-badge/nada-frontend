import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { SlideItem } from './SlideItem';

export const SlideList = ({ changeActive }) => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        onReachEnd={() => changeActive(true)}
      >
        <SwiperSlide>
          <SlideItem number={0} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem number={1} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem number={2} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem number={3} />;
        </SwiperSlide>
      </Swiper>
    </>
  );
};
