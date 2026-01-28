import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Practice Areas", id: "practice" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Attorney", id: "attorney" },
  { label: "Blog", id: "blog" },
  { label: "Contact Us", id: "contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80);

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [searchOpen]);

  return (
    <header
      className={`z-50 w-full transition-all duration-500 ease-in-out ${
        isScrolled ? "fixed top-0 left-0" : "absolute top-5"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out transform ${
          isScrolled
            ? "max-w-none px-12 py-4 bg-white shadow-md translate-y-0"
            : "max-w-[1300px] px-8 py-4 bg-white rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
        }`}
      >
        <div className="w-[200px] h-[42px]">
          <img
            src="https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/logo.png"
            alt="pageLogo"
            className="w-full h-full"
          />
        </div>

        <div className="flex items-center gap-[40px]">
          <ul className="flex gap-7 text-[15px] font-sans font-normal uppercase tracking-widest text-gray-700">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() =>
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`cursor-pointer relative transition-colors duration-300 ${
                  active === item.id ? "text-[#c89b6d]" : "hover:text-[#c89b6d]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -top-2 h-[1px] bg-[#c89b6d] transition-all duration-300 ease-in-out ${
                    active === item.id ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </li>
            ))}
          </ul>

          <FaSearch
            className="text-gray-700 cursor-pointer text-sm hover:text-[#c89b6d] transition"
            onClick={() => setSearchOpen(true)}
          />
        </div>
      </div>


      {searchOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        >
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-[500px] relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#c89b6d]"
              autoFocus
            />
            <button
              className="absolute top-[1px] right-[8px] text-gray-500 hover:text-[#c89b6d]"
              onClick={() => setSearchOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
