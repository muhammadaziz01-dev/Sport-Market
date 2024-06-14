


"use client"

// import Swiper core and required modules
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
  } from "swiper/modules";
  
  import { Swiper, SwiperSlide } from "swiper/react";

  import Image from "next/image";
  
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import "./style.scss";


  import ImageCarusel from "../../../assets/images/img-carusel1.png"
 
  
  const  Carusel =  () => {
    const imgList = [
        ImageCarusel,
        ImageCarusel,
        ImageCarusel,
        ImageCarusel,
        ImageCarusel
    ];
    return (
      
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} 
        >
          {imgList.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="h-[488px] w-[819px] rounded-[20px] bg-white overflow-hidden ">
                  <div className="flex items-start">
                    <div className=" pt-[82px] pl-[70px]">
                        <h1 className="text-[32px] font-extrabold">
                            Бутсы Nike Phantom <br /> 
                            GT2 Elite FG
                        </h1>
                        <button className="py-2.5 mt-[27px] px-5 rounded-md border-2 border-[#FBD029] ">
                        Подробности
                        </button>
                    </div>
                    <div className="relative h-[488x] ">
                        <div className=" absolute top-[55px] left-[20px] w-[380px] h-[380px] rounded-[50%] bg-red-500 z-0"></div>
                        <div className=" absolute top-[-75px] left-[130px]  rotate-[25deg] w-[355px] h-[921px]  bg-[#BDD400] z-0"></div>
                        <div className=" sticky z-10  pr-5">
                           <Image src={item} width={438} height={438} alt="Carusel img"  className=" z-100"/>
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
    );
  };

  Carusel.displayName = 'Carusel';
  export default Carusel;