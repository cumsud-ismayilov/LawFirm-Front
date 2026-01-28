import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function footer() {
  return (
    <footer className="bg-[#000] pt-[3rem]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <img
            className="w-[168px] h-[62px]"
            src="https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/logo-1-2x-retina.png"
            alt="Logo"
          />
          <p className="font-medium mb-4 text-[16px] text-[#898989]">
            Maecenas lacinia dapibus ultricies. Vestibulum bibendum sollicitudin
            nunc, quis bibendum dolor.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold mb-4 text-lg text-[#fff]">Subscribe</h4>
          <form>
            <input
              type="text"
              placeholder="Email address"
              className="w-full h-[50px] outline-none rounded-[3px] text-[1rem] border-none border-l-0 bg-[rgba(91,90,90,0.89)] text-white py-[10px] px-[25px]"
            />
          </form>
          <button className="uppercase bg-[#c18f59] text-[#fff] text-[16px] p-[13px_34px] mt-[26px] font-sans rounded-[3px] hover:bg-[#353535]">
            Get notified
          </button>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold mb-4 text-lg text-[#fff]">Quick Link</h4>
          <ul className="flex flex-col gap-[5px] text-[#898989]">
            <li className="hover:text-[#c18f59]">
              <Link>About</Link>
            </li>
            <li className="hover:text-[#c18f59]">
              <Link>Practice Areas</Link>
            </li>
            <li className="hover:text-[#c18f59]">
              <Link>Testimonials</Link>
            </li>
            <li className="hover:text-[#c18f59]">
              <Link>Attorney</Link>
            </li>
            <li className="hover:text-[#c18f59]">
              <Link>Blog</Link>
            </li>
            <li className="hover:text-[#c18f59]">
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold mb-4 text-lg text-[#fff]">All Laws</h4>
          <ul className="flex flex-col gap-[5px] text-[#898989]">
            <li className="hover:text-[#c18f59]">
              <Link>Family Law</Link>
            </li>
            <li className="hover:text-[#c18f59]">
              <Link>Accident Law</Link>
            </li>
            <li className="hover:text-[#c18f59]">
              <Link>Business Taxation</Link>
            </li>
            <li className="hover:text-[#c18f59]">
              <Link>Criminal Law</Link>
            </li>
            <li className="hover:text-[#c18f59]">
              <Link>Personal Injuries Law</Link>
            </li>
            <li className="hover:text-[#c18f59]">
              <Link>Trade & Finance Law</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-[2rem]  items-end border-t border-t-[rgba(186,175,175,0.26)] mt-[3rem] p-[20px_0px]">
        <p className="text-[#898989]">
          {" "}
          ©Copyright 2023<Link className="text-[#fff]"> Law Firm-7</Link> All
          Rights Reserved{" "}
        </p>
        <div className="flex items-end justify-end  gap-[16px] ">
          <p className="w-[32px] h-[32px] group flex items-center justify-center  rounded-[4px] hover:bg-[#5d82d1]">
            <FaFacebookF className="text-[#898989] transition-transform duration-[350ms] group-hover:text-[#fff]"/>
          </p>
          <p className="w-[32px] h-[32px] group flex items-center justify-center  rounded-[4px] hover:bg-[#5d82d1]">
            <FaTwitter  className="text-[#898989] transition-transform duration-[350ms] group-hover:text-[#fff]"/>
          </p>
          <p className="w-[32px] h-[32px] group flex items-center justify-center  rounded-[4px] hover:bg-[#5d82d1]">
            <FaDribbble className="text-[#898989] transition-transform duration-[350ms] group-hover:text-[#fff]" />
          </p>
          <p className="w-[32px] h-[32px] group flex items-center justify-center  rounded-[4px] hover:bg-[#5d82d1]">
            <FaInstagram className="text-[#898989] transition-transform duration-[350ms] group-hover:text-[#fff]" />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default footer;
