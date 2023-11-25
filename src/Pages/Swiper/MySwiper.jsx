// MySwiper.jsx

import React, { useRef, useState } from 'react';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './style.css';

import 'swiper/swiper-bundle.css'; // Import the Swiper styles

const MySwiper = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div>
      <h1 className='text-3xl font-semibold mt-[200px] mb-[20px]'>Our Destinations</h1>
      <div className="swiper-container mySwiper">
        <ReactSwiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >

          {/* SwiperSlides go here */}
          <SwiperSlide className='w-full'>
            <div className="slide-content">
              <img src="https://i.ibb.co/9G9ZxxZ/card-image.png" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className='w-full'>
            <div className="slide-content">
              <img src="https://i.ibb.co/YWcHnxq/card-image-1.png" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className='w-full'>
            <div className="slide-content">
              <img src="https://i.ibb.co/xFhY9Vj/card-image-2.png" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className='w-full'>
            <div className="slide-content">
              <img src="https://i.ibb.co/MhQYjXV/card-image-3.png" alt="" />
            </div>
          </SwiperSlide>

        </ReactSwiper>
      </div>
    </div>
  );
};

export default MySwiper;
