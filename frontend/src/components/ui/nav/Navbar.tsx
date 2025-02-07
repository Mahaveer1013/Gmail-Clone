import NavSearch from "./NavSearch";
import { useNavigate } from "react-router-dom";
import { CgMenuGridO } from 'react-icons/cg'
import { RxQuestionMarkCircled } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import useWindowWidth from "../../../hooks/useWindowWidth";

const Navbar = () => {

  const width = useWindowWidth();

  const navigate = useNavigate();

  return (
    <nav className={`h-[64px] w-full flex items-center px-4`}>
      <div className="w-auto md:w-[20%] flex items-center">
        <div className="flex flex-col justify-center items-center p-3 cursor-pointer rounded-full hover:bg-[#ddd]">
          <div className="border-b-[2px] relative top-[3px] w-[18px] border-black mb-1"></div>
          <div className="border-b-[2px] relative top-[3px] w-[18px] border-black mb-1"></div>
          <div className="border-b-[2px] relative top-[3px] w-[18px] border-black mb-1"></div>
        </div>
        <img src="/img/gmail_logo.png" alt="Gmail Logo" className="pl-3 cursor-pointer" onClick={() => navigate('/')} />
      </div>
      {width > 768 ? <NavSearch /> : <div className="flex flex-grow"></div>}
      <div className="flex w-auto md:w-[20%] items-center justify-end">
        {
          width > 425
          &&
          <>
            <span title="Question" className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#ddd] cursor-pointer">
              <RxQuestionMarkCircled className="text-[#5f6368] w-5 h-5" />
            </span>
            <span className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#ddd] cursor-pointer">
              <IoSettingsOutline className="text-[#5f6368] w-5 h-5" />
            </span>
            <span className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#ddd] cursor-pointer">
              <CgMenuGridO className="text-[#5f6368] w-5 h-5" />
            </span>
          </>
        }
        <span className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#ddd] cursor-pointer">
          <img
            src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
            alt="Image"
            className="w-7 h-7 rounded-full bg-cover"
          />
        </span>

      </div>
    </nav>
  );
};

export default Navbar;
