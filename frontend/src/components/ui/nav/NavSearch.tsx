import { faSearch, faSliders } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavSearch = () => {
  return (
      <label htmlFor="nav-search" className="w-[50%] max-w-[900px]  hidden md:flex flex-grow bg-[#eaf1fb] h-[44px] rounded-3xl items-center relative">
          <FontAwesomeIcon icon={faSearch} className="text-[#5f6368] w-12 grid items-center"/>
          <input type="text" id="nav-search" placeholder="Search mail" className="h-full bg-[#e9eef6] text-black flex-grow bg-transparent text-xl focus:outline-none"/>
          <FontAwesomeIcon icon={faSliders} className="w-12  text-[#5f6368]" />
      </label>
  )
}

export default NavSearch