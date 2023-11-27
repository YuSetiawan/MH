import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Pagination, Navigation, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import tr1 from '../../assets/image/training-1.jpg';
import tr2 from '../../assets/image/training-2.jpg';
import tr3 from '../../assets/image/training-3.jpg';
import tr4 from '../../assets/image/training-4.jpg';
import tr5 from '../../assets/image/training-5.jpg';
import tr6 from '../../assets/image/training-6.jpg';
import tr7 from '../../assets/image/training-7.jpg';
import tr8 from '../../assets/image/training-8.jpg';
import tr9 from '../../assets/image/training-9.jpg';
import tr10 from '../../assets/image/training-10.jpg';
import tr11 from '../../assets/image/training-11.jpg';
import tr12 from '../../assets/image/training-12.jpg';

export default function Carousell() {
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
        <div className="col-sm-4 text-center">
          <SwiperSlide className="shadow">
            <img src={tr7} alt="icn-partner" className="col-12 mb-3" />
          </SwiperSlide>
        </div>
        <div className="col-sm-4 text-center">
          <SwiperSlide className="shadow">
            <img src={tr8} alt="icn-partner" className="col-12 mb-3" />
          </SwiperSlide>
        </div>
        <div className="col-sm-4 text-center">
          <SwiperSlide className="shadow">
            <img src={tr9} alt="icn-partner" className="col-12 mb-3" />
          </SwiperSlide>
        </div>
        <div className="col-sm-4 text-center">
          <SwiperSlide className="shadow">
            <img src={tr10} alt="icn-partner" className="col-12 mb-3" />
          </SwiperSlide>
        </div>
        <div className="col-sm-4 text-center">
          <SwiperSlide className="shadow">
            <img src={tr11} alt="icn-partner" className="col-12 mb-3" />
          </SwiperSlide>
        </div>
        <div className="col-sm-4 text-center">
          <SwiperSlide className="shadow">
            <img src={tr12} alt="icn-partner" className="col-12 mb-3" />
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
