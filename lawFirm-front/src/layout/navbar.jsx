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

function navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");

  /* Scroll effect (fixed + animation) */
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

  return (
    <header
      className={`
        z-50 w-full transition-all duration-500 ease-in-out
        ${isScrolled ? "fixed top-0 left-0" : "absolute top-5"}
      `}
    >
      <div
        className={`
          mx-auto flex items-center justify-between
          transition-all duration-500 ease-in-out transform
          ${
            isScrolled
              ? "max-w-none px-12 py-4 bg-white shadow-md translate-y-0"
              : "max-w-[1300px] px-8 py-4 bg-white rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
          }
        `}
      >
        {/* Logo */}
        <div className="w-[200px] h-[42px]">
          <img
            src="https://html.multipurposethemes.com/lawfirmonepage/law_firm_bt_5/images/home-7/logo.png"
            alt="pageLogo"
            className="w-full h-full"
          />
        </div>

        {/* Menu */}
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
                className={`
                cursor-pointer relative transition-colors duration-300
                ${
                  active === item.id ? "text-[#c89b6d]" : "hover:text-[#c89b6d]"
                }
              `}
              >
                {item.label}

                {/* Active underline */}
                <span
                  className={`
                  absolute left-0 -top-2 h-[1px] bg-[#c89b6d]
                  transition-all duration-300 ease-in-out
                  ${active === item.id ? "w-full opacity-100" : "w-0 opacity-0"}
                `}
                />
              </li>
            ))}
          </ul>

          {/* Search */}
          <FaSearch className="text-gray-700 cursor-pointer text-sm hover:text-[#c89b6d] transition" />
        </div>
      </div>
    </header>
  );
}

export default navbar;
