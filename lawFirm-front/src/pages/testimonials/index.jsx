import React from "react";
import TestimSlider from "./testimSlider/index"

function index() {
  return (
    <section
      id="testimonials"
      className="relative bg-center bg-cover bg-no-repeat bg-fixed pt-[32px]  h-[480px] bg-[url('https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/testimonials.jpg')]"
    >
      <div className="absolute inset-0 bg-[#0000000a] z-10"></div>
      <div className="mx-auto max-w-full sm:max-w-[480px] lg:max-w-7xl grid grid-cols-1 text-center relative z-20">
        <div className="title-box p-[30px_15px] mb-[20px]">
          <p className="text-[#c5c5c5] leading-[1.5] text-[20px]">
            Our
          </p>
          <h2 className="text-[#fff] text-[32px] font-medium font-sans relative after:block after:w-[50px] after:h-[3px] after:absolute after:top-[56px] after:left-[calc(50%-25px)] after:bg-[#c18f59]">
            Success Stories
          </h2>
        </div>
      </div>
      <TestimSlider/>
    </section>
  );
}

export default index;
