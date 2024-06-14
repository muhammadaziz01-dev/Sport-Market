"use client"
// components/Carousel.js
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore from 'swiper';
import {
    Navigation
  } from "swiper/modules";

// import "./style.scss";
// Install Swiper modules
SwiperCore.use([Navigation]);

import { CaruselCard } from '../card';

interface Props {
    text?: string;
    bg?: string;
}

const Carusel = ({text , bg}:Props) => {
  return (
    <div className="carousel-container ">
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        navigation
        loop={true}
        className="mySwiper"
      >
        <div className='test-Carusel bg-red-500'>
            <SwiperSlide style={{borderRadius: 10}}><CaruselCard text={text} bg={bg}/></SwiperSlide>
            <SwiperSlide style={{borderRadius: 10}}><CaruselCard text={text} bg={bg}/></SwiperSlide>
            <SwiperSlide style={{borderRadius: 10}}><CaruselCard text={text} bg={bg}/></SwiperSlide>
            <SwiperSlide style={{borderRadius: 10}}><CaruselCard text={text} bg={bg}/></SwiperSlide>
            <SwiperSlide style={{borderRadius: 10}}><CaruselCard text={text} bg={bg}/></SwiperSlide>
            <SwiperSlide style={{borderRadius: 10}}><CaruselCard text={text} bg={bg}/></SwiperSlide>
            <SwiperSlide style={{borderRadius: 10}}><CaruselCard text={text} bg={bg}/></SwiperSlide>
            <SwiperSlide style={{borderRadius: 10}}><CaruselCard text={text} bg={bg}/></SwiperSlide>
            <SwiperSlide style={{borderRadius: 10}}><CaruselCard text={text} bg={bg}/></SwiperSlide>
            <SwiperSlide style={{borderRadius: 10}}><CaruselCard text={text} bg={bg}/></SwiperSlide>

        </div>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};
  Carusel.displayName = 'Carusel';
export default Carusel;
 