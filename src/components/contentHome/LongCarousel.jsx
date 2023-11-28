import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Pagination, Navigation, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import tr1 from '../../assets/image/tsquare1.jpg';
import tr2 from '../../assets/image/tsquare2.jpg';
import tr3 from '../../assets/image/tsquare3.jpg';
import tr4 from '../../assets/image/tsquare4.jpg';
import tr5 from '../../assets/image/tsquare5.jpg';
import tr6 from '../../assets/image/tsquare6.jpg';

export default function LongCarousell() {
  return (
    <>
      <style>
        {`
      .swiper-pagination{
        position: static !important;
      }
      `}
      </style>
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation, Autoplay]}
        className="mySwipe"
      >
        <div className="col-sm-4 text-center">
          <SwiperSlide className="shadow">
            <img src={tr1} alt="icn-partner" className="col-12 mb-3" />
          </SwiperSlide>
        </div>
        <div className="col-sm-4 text-center">
          <SwiperSlide className="shadow">
            <img src={tr2} alt="icn-partner" className="col-12 mb-3" />
          </SwiperSlide>
        </div>
        <div className="col-sm-4 text-center">
          <SwiperSlide className="shadow">
            <img src={tr3} alt="icn-partner" className="col-12 mb-3" />
          </SwiperSlide>
        </div>
        <div className="col-sm-4 text-center">
          <SwiperSlide className="shadow">
            <img src={tr4} alt="icn-partner" className="col-12 mb-3" />
          </SwiperSlide>
        </div>
        <div className="col-sm-4 text-center">
          <SwiperSlide className="shadow">
            <img src={tr5} alt="icn-partner" className="col-12 mb-3" />
          </SwiperSlide>
        </div>
        <div className="col-sm-4 text-center">
          <SwiperSlide className="shadow">
            <img src={tr6} alt="icn-partner" className="col-12 mb-3" />
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
