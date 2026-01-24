import React from "react";

function index() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-[2rem] items-center">
        {/* LEFT - IMAGE */}
        <div className="relative">
          <img
            src="https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/about-2.png"
            alt="Lawyer"
            className="w-full h-[632px] object-cover rounded-tl-[160px]"
          />

          {/* Experience box */}
        </div>

        {/* RIGHT - CONTENT */}
        <div className="">
          <h4 className="text-[41px] font-semibold text-gray-900  ">
            OVER 20 YEARS OF EXPERIENCE
          </h4>

          <h2 className="text-[35px] tracking-[0.3em] text-[#c49a6c] font-semibold">
            Founded in 2014
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-xl mt-[18px]">
            Until recently, the prevailing view assumed lorem ipsum was born as
            a nonsense text. “It's not Latin, though it looks like it, and it
            actually says nothing,” Before & After magazine answered a curious
            reader, “Its ‘words’ loosely approximate the frequency with which
            letters occur in English, which is why at a glance it looks pretty
            real.”
          </p>

          <button className="uppercase bg-[#c18f59] text-[#fff] text-[16px] p-[13px_34px] mt-[26px] font-sans rounded-[3px] hover:bg-[#353535]">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default index;
