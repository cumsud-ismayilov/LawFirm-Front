import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Pagination } from "swiper/modules";

function index() {
  return (
    <section id="home" className="h-screen">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Pagination]}
        className="mySwiper h-full homeSlider"
      >
        <SwiperSlide>
          <img src="https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/travel1.jpg" />
          <div className="slider-content absolute bottom-[44%]">
            <h1 className="text-[#fff] text-[56px]">Welcome to Law-Firm</h1>
            <p className="text-[#fff] text-[18px]">
              Aenean tellus vitae ex rhoncus Sollicitudin{" "}
            </p>
            <button className="uppercase bg-[#c18f59] text-[#fff] text-[16px] p-[13px_34px] mt-[26px] font-sans rounded-[3px] hover:bg-[#353535]">
              Read More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/travel3.jpg" />
          <div className="slider-content absolute bottom-[44%]">
            <h1 className="text-[#fff] text-[56px]">Earn More with us.</h1>
            <p className="text-[#fff] text-[18px]">
              Aenean tellus vitae ex rhoncus Sollicitudin
            </p>
            <button className="uppercase bg-[#c18f59] text-[#fff] text-[16px] p-[13px_34px] mt-[26px] font-sans rounded-[3px] hover:bg-[#353535]">
              Read More
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default index;
