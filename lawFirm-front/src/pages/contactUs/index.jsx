import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function index() {
  return (
    <section id="contact" className="pt-[60px]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-[2rem] items-center">
        <div>
          <h6 className=" text-[16px] mb-[5px] font-medium">
            Are you looking for a Lawyer? or Do you want Case Evaluation?
          </h6>
          <h1 className="mb-[22px] text-[32px] font-medium">
            LAW-FIRM<span className="text-[#c18f59]"> COUNTRY </span>
          </h1>
          <p className="text-[#898989] text-[16px] mb-[10px]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="text-[#898989] flex items-center gap-[10px] p-[7px_0px]">
            <FaPhoneAlt className="" />
            <Link to="/" className=" ">
              +(244) 878-1649
            </Link>
          </p>

          <p className="text-[#898989] flex items-center gap-[10px] p-[7px_0px]">
            <FaEnvelope />
            <Link to="/">info@lawfirm.com</Link>
          </p>

          <p className="text-[#898989] flex items-center gap-[10px] p-[7px_0px]">
            <FaMapMarkerAlt />
            <Link to="/">16 Collins Street</Link>
          </p>
          <button className="uppercase bg-[#c18f59] text-[#fff] text-[16px] p-[13px_34px] mt-[26px] font-sans rounded-[3px] hover:bg-[#353535]">
            CONTACT US
          </button>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7248273.608470384!2d-89.09805350033892!3d27.494276216630123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2zRmxvcmlkYSwgQW1lcmlrYSBCaXJsyZnFn21pxZ8gxZ50YXRsYXLEsQ!5e0!3m2!1saz!2saz!4v1769596921081!5m2!1saz!2saz"
            title="Google Map"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="bg-[#F7F7F7] mt-[60px] pt-[60px] pb-[90px]">
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
        <div className="mx-auto max-w-5xl">
          <form>
            <div className="grid grid-cols-3 gap-[15px]">
              <input
                type="text"
                placeholder="Name*"
                className="text-[#aaaaaa] w-full mb-[20px] border-2 border-[#eeeeee] rounded-[3px] text-[0.928rem] h-auto leading-[1.33333] pt-[15px] pr-[15px] pb-[15px] pl-[20px] bg-transparent outline-none"
              />
              <input
                type="text"
                placeholder="Email*"
                className="text-[#aaaaaa] w-full mb-[20px] border-2 border-[#eeeeee] rounded-[3px] text-[0.928rem] h-auto leading-[1.33333] pt-[15px] pr-[15px] pb-[15px] pl-[20px] bg-transparent outline-none"
              />
              <input
                type="text"
                placeholder="Phone*"
                className="text-[#aaaaaa] w-full mb-[20px] border-2 border-[#eeeeee] rounded-[3px] text-[0.928rem] h-auto leading-[1.33333] pt-[15px] pr-[15px] pb-[15px] pl-[20px] bg-transparent outline-none"
              />
            </div>
            <div className="textarea">
              <textarea
                placeholder="Comment*"
                name="InputMessage"
                id="InputMessage"
                cols="30"
                rows="7"
                className="bg-transparent w-full border-2 border-[#eeeeee] rounded-[3px] text-[0.928rem] pl-[20px] pt-[15px] pr-[15px] pb-[15px] mb-[20px] outline-none"
              ></textarea>
            </div>
            <div className="text-center">
              <button className="uppercase bg-[#c18f59] text-[#fff] text-[16px] p-[13px_34px]  font-sans rounded-[3px] hover:bg-[#353535]">
                Send your message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default index;
