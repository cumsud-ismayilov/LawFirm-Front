import { useState, useEffect } from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const portfolioData = [
  {
    title: "Family Law",
    desc: "Cras sollicitudin, tellus vitae",
    img: "https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/s1.jpg"
  },
  {
    title: "Accident Law",
    desc: "Cras sollicitudin, tellus vitae",
    img: "https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/s2.jpg"
  },
  {
    title: "Business Taxation",
    desc: "Cras sollicitudin, tellus vitae",
    img: "https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/s3.jpg"
  },
  {
    title: "Criminal Law",
    desc: "Cras sollicitudin, tellus vitae",
    img: "https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/s4.jpg"
  },
  {
    title: "Personal Injuries Law",
    desc: "Cras sollicitudin, tellus vitae",
    img: "https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/s5.jpg"
  },
  {
    title: "Trade & Finance Law",
    desc: "Cras sollicitudin, tellus vitae",
    img: "https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/s6.jpg"
  }
];

function Index() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Modal açılıb-bağlanma animasiyası
  useEffect(() => {
    if (selectedImg) {
      setShowModal(true);
      document.body.style.overflow = "hidden"; // SCROLL DAYANDIR
    } else {
      document.body.style.overflow = "auto"; // SCROLL geri
    }
  }, [selectedImg]);


  // ESC düyməsi ilə bağlamaq
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedImg(null), 300); // animasiya bitdikdən sonra şəkli sıfırla
  };

  return (
    <section id="practice"  className="pb-20">
      <div className="mx-auto max-w-full sm:max-w-[480px] lg:max-w-7xl grid grid-cols-1 text-center relative z-20">
        <div className="title-box p-[30px_15px] mb-[44px]">
          <p className="text-[#898989] leading-[1.5] text-[20px]">Our</p>
          <h2 className="text-[#333] text-[32px] font-medium font-sans relative 
              after:block after:w-[50px] after:h-[3px] after:absolute after:top-[56px] 
              after:left-[calc(50%-25px)] after:bg-[#c18f59]">
            Practice Areas
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-full sm:max-w-[480px] lg:max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px] px-[11px]">
        {portfolioData.map((item, index) => (
          <div key={index} className="portfolio-item group overflow-hidden relative w-full">
            <img
              className="h-[360px] object-cover object-center transition-transform duration-[350ms] group-hover:scale-110 w-full"
              src={item.img}
              alt={item.title}
            />

            <div className="portfolio-overlay bg-[#f9f9f9] w-full p-[10px_0] pl-[20px] absolute bottom-0 left-0 z-[2]">
              <h4 className="text-[#323232] font-semibold">
                <Link to="#">{item.title}</Link>
              </h4>
              <p>
                <Link to="#">{item.desc}</Link>
              </p>
            </div>

            <div
              className="absolute top-[-44px] right-[22px] bg-[#fff] w-[40px] h-[40px] rounded-full flex items-center justify-center
                transition-all duration-500 ease-in-out cursor-pointer group-hover:top-[22px] group-hover:right-[22px] z-10"
              onClick={() => setSelectedImg(item.img)}
            >
              <FaExpandArrowsAlt color="#c18f59" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImg && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-300 ${
            showModal ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeModal}
        >
          <img
            src={selectedImg}
            alt="modalImg"
            className="max-w-[90%] max-h-[90%] rounded shadow-lg transition-transform duration-300 ease-in-out transform scale-95"
          />
        </div>
      )}
    </section>
  );
}

export default Index;
