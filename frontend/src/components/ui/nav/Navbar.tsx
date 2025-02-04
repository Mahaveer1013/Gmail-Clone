import { useState } from "react";
import NavSearch from "./NavSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faQuestion } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-[64px] w-full flex items-center px-6">
      <div className="flex justify-center items-center">
        <div>
          <div className="w-[22px] h-[2px] bg-black mb-1"></div>
          <div className="w-[22px] h-[2px] bg-black mb-1"></div>
          <div className="w-[22px] h-[2px] bg-black mb-1"></div>
        </div>
        <img src="/img/gmail_logo.png" alt="Gmail Logo" className="pl-6" />
      </div>
      <NavSearch />
      <div className="flex items-center justify-center gap-x-8">
        <FontAwesomeIcon icon={faQuestion} className="border-2 border-[#5f6368] w-5 h-5 p-[1px] text-[#5f6368] rounded-full" />
        <FontAwesomeIcon icon={faGear} className="w-5 h-5 p-[1px] text-[#5f6368]" />
        <div className="flex justify-between items-center w-5 h-5">
          <div>
            <div className="bg-[#5f6368] rounded-full p-[2px] mb-[3px]"></div>
            <div className="bg-[#5f6368] rounded-full p-[2px] mb-[3px]"></div>
            <div className="bg-[#5f6368] rounded-full p-[2px] mb-[3px]"></div>
          </div>
          <div>
            <div className="bg-[#5f6368] rounded-full p-[2px] mb-[3px]"></div>
            <div className="bg-[#5f6368] rounded-full p-[2px] mb-[3px]"></div>
            <div className="bg-[#5f6368] rounded-full p-[2px] mb-[3px]"></div>
          </div>
          <div>
            <div className="bg-[#5f6368] rounded-full p-[2px] mb-[3px]"></div>
            <div className="bg-[#5f6368] rounded-full p-[2px] mb-[3px]"></div>
            <div className="bg-[#5f6368] rounded-full p-[2px] mb-[3px]"></div>
          </div>
        </div>
        {/* <img /> */}
      </div>
    </nav>
  );
};

export default Navbar;
