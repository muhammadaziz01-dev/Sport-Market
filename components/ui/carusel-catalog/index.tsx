"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "./style.scss";
import { FreeMode, Pagination } from 'swiper/modules';
import { Myachi , Obuv , Odejdi , Terenajorni , VodniSport , GorniSport } from '@/assets/images';
import Image from 'next/image';

export default function CaruselCatalog() {
  const data = [
    {title: "Тренажеры" , bg: "#D3E5F2" , img: Terenajorni},
    {title: "Мячи" , bg: "#F3E9E3" , img: Myachi},
    {title:"Спротивные обуви", bg: "#DADBE0" , img:Obuv },
    {title: "Спортивные одежды" , bg: "#E2EEC0" , img: Odejdi},
    {title: "Водный спорт" , bg: "#C2BCE8" , img: VodniSport},
    {title: "Горный спорт" , bg: "rgba(171,165,32,0.2)" , img: GorniSport},
    {title: "Тренажеры" , bg: "#D3E5F2" , img: Terenajorni},
    {title: "Мячи" , bg: "#F3E9E3" , img: Myachi},
    {title:"Спротивные обуви", bg: "#DADBE0" , img:Obuv },
    {title: "Спортивные одежды" , bg: "#E2EEC0" , img: Odejdi},
    {title: "Водный спорт" , bg: "#C2BCE8" , img: VodniSport},
    {title: "Горный спорт" , bg: "rgba(171,165,32,0.2)" , img: GorniSport},
  ];

  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={24}
      freeMode={true}
      pagination={{
        clickable: true,
        el: '.swiper-pagination',
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="w-[187px] h-[247px] rounded-lg pt-6 pb-[36px] px-4 flex items-center justify-between flex-col" style={{background: item.bg }}>
            <div className="text-[20px] text-start">{item.title}</div>
            <div>
              <Image src={item.img} width={126} height={102} alt="logo" />
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
}
