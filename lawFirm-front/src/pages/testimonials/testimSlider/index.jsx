import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function index() {
  return (
    <div className="mx-auto max-w-full sm:max-w-[480px] lg:max-w-4xl relative z-20">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper testimSlider"
      >
        <SwiperSlide>
          <div className="testimonials pt-0 px-[50px] pb-[75px] flex flex-col items-center gap-[15px]">
            <div className="avatar w-[70px] h-[70px] rounded-[50%]">
              <img
                className="w-full h-full rounded-full"
                src="https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/avtar-2.jpg"
                alt="avatar"
              />
            </div>
            <div className="testimonial-info">
              <p className="text-[14px] text-[#fff] font-normal">
                Awesome and amazing work. Very well organized PSD files with
                high quality design. Keep creating and providing such quality
                stuff - Thank you very much!
              </p>
            </div>
            <div className="author-info">
              <p className="text-[16px] text-[#ffffff] font-normal">
                Client-1 -<span className="text-[#FF981A]">User-name</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonials pt-0 px-[50px] pb-[75px] flex flex-col items-center gap-[15px]">
            <div className="avatar w-[70px] h-[70px] rounded-[50%]">
              <img
                className="w-full h-full rounded-full"
                src="https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/avtar-3.jpg"
                alt="avatar"
              />
            </div>
            <div className="testimonial-info">
              <p className="text-[14px] text-[#fff] font-normal">
                Awesome and amazing work. Very well organized PSD files with
                high quality design. Keep creating and providing such quality
                stuff - Thank you very much!
              </p>
            </div>
            <div className="author-info">
              <p className="text-[16px] text-[#ffffff] font-normal">
                Client-2 -<span className="text-[#FF981A]">User-name</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default index;
