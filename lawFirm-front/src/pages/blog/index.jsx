import React from "react";

function index() {
  return (
    <section id="blog" className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-auto lg:min-h-[70vh]">
        {/* SOL HİSSƏ */}
        <div className="flex flex-col justify-center items-center px-8 lg:px-24 ">
          <img className="w-[46px] h-[55px]" src="https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/icon-1.png" alt="" />

          <h1 className="text-[34px] lg:text-[37px] font-semibold mb-4">
            WE WON <span className="text-[#c89b63]">AGAINST CRIMINAL</span>
          </h1>

          <p className="text-gray-500 text-center mb-6">
            In this Kidnapping the unlawful taking away or transportation of
            person against that person's will unlawfully...
          </p>

            <button className="uppercase bg-[#c18f59] text-[#fff] text-[16px] p-[13px_34px] mt-[26px] font-sans rounded-[3px] hover:bg-[#353535]">
              Read More
            </button>
        </div>

        {/* SAĞ HİSSƏ */}
        <div className="w-full h-full">
          <img
            src="	https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/news-1.jpg"
            alt="Law"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-auto lg:min-h-[70vh]">
        {/* SAĞ HİSSƏ */}
        <div className="w-full h-full">
          <img
            src="https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/news-4.jpg"
            alt="Law"
            className="w-full h-full object-cover"
          />
        </div>
        {/* SOL HİSSƏ */}
        <div className="flex flex-col justify-center items-center px-8 lg:px-24 ">
          <img className="w-[46px] h-[55px]" src="https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/icon-2.png" alt="" />

          <h1 className="font-sans text-[30px] lg:text-[37px] font-semibold mb-4">
            LEGAL ISSUES <span className="text-[#c89b63]">PATERNITY</span>
          </h1>

          <p className="text-gray-500 text-center mb-6">
            In this Kidnapping the unlawful taking away or transportation of
            person against that person's will unlawfully...
          </p>

            <button className="uppercase bg-[#c18f59] text-[#fff] text-[16px] p-[13px_34px] mt-[26px] font-sans rounded-[3px] hover:bg-[#353535]">
              Read More
            </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-auto lg:min-h-[70vh]">
        {/* SOL HİSSƏ */}
        <div className="flex flex-col justify-center items-center px-8 lg:px-24 ">
          <img className="w-[46px] h-[55px]" src="https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/icon-3.png" alt="" />

          <h1 className="font-sans text-[30px] lg:text-[34px] font-semibold mb-4">
            JUDGEMENT <span className="text-[#c89b63]">UNFAIR BUSINESS </span>
          </h1>

          <p className="text-gray-500 text-center mb-6">
            In this Kidnapping the unlawful taking away or transportation of
            person against that person's will unlawfully...
          </p>

            <button className="uppercase bg-[#c18f59] text-[#fff] text-[16px] p-[13px_34px] mt-[26px] font-sans rounded-[3px] hover:bg-[#353535]">
              Read More
            </button>
        </div>

        {/* SAĞ HİSSƏ */}
        <div className="w-full h-full">
          <img
            src="	https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/news-7.jpg"
            alt="Law"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default index;
