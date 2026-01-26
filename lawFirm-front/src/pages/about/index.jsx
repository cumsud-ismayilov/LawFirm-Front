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
      <div className="relative bg-center bg-cover h-[427px] mt-[4rem] p-[40px_0px] bg-[url('https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/choose.jpg')] after:absolute  after:top-0 after:left-0  after:w-full after:h-full after:z-[1] after:bg-white/80">
        <div className="mx-auto max-w-full sm:max-w-[480px] lg:max-w-7xl grid grid-cols-1 text-center relative z-20">
          <div className="title-box p-[30px_15px] mb-[44px]">
            <p className="text-[#898989] leading-[1.5] text-[20px]">
              You may want to
            </p>
            <h2 className="text-[#333] text-[32px] font-medium font-sans relative after:block after:w-[50px] after:h-[3px] after:absolute after:top-[56px] after:left-[calc(50%-25px)] after:bg-[#c18f59]">
              Know the attorneys
            </h2>
          </div>
        </div>
        <div className="mx-auto max-w-full sm:max-w-[480px] lg:max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px] px-[11px] relative z-20">
          <div className="choose-box flex flex-col items-center gap-[8px]">
            <span className="fa fa-balance-scale text-3xl text-[#4c4c4c] text-[72px] transition-all duration-[600ms] ease-in-out  [transform-style:preserve-3d] hover:[transform:rotateY(-180deg)]"></span>
            <h3 className="uppercase text-[18px] tracking-[0px] mt-[21px] font-medium text-center">
              Best Attorneys
            </h3>
            <p className="text-[#898989] leading-[1.5] font-normal text-center">
              Praesent dambus & Send aug eget sollicitudin velit malesuada
              Aliquam blandit Mani leumat.
            </p>
          </div>
          <div className="choose-box flex flex-col items-center gap-[8px]">
            <span className="fa fa-suitcase text-3xl text-[#4c4c4c] text-[72px] transition-all duration-[600ms] ease-in-out  [transform-style:preserve-3d] hover:[transform:rotateY(-180deg)]"></span>
            <h3 className="uppercase text-[18px] tracking-[0px] mt-[21px] font-medium text-center">
              Highly Qualified
            </h3>
            <p className="text-[#898989] leading-[1.5] font-normal text-center">
              Praesent dambus & Send aug eget sollicitudin velit malesuada
              Aliquam blandit Mani leumat.
            </p>
          </div>
          <div className="choose-box flex flex-col items-center gap-[8px]">
            <span className="fa fa-gavel text-3xl text-[#4c4c4c] text-[72px] transition-all duration-[600ms] ease-in-out  [transform-style:preserve-3d] hover:[transform:rotateY(-180deg)]"></span>
            <h3 className="uppercase text-[18px] tracking-[0px] mt-[21px] font-medium text-center">
              Trustable
            </h3>
            <p className="text-[#898989] leading-[1.5] font-normal text-center">
              Praesent dambus & Send aug eget sollicitudin velit malesuada
              Aliquam blandit Mani leumat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
