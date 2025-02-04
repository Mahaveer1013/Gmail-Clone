import { faSearch, faSliders } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavSearch = () => {
  return (
      <label htmlFor="nav-search" className="ml-32 w-[50%] bg-[#eaf1fb] h-[44px] rounded-3xl flex items-center px-3 relative">
          <FontAwesomeIcon icon={faSearch} className="text-[#5f6368]"/>
          <input type="text" id="nav-search" placeholder="Search mail" className="h-full bg-transparent pl-[20px] text-xl"/>
          <FontAwesomeIcon icon={faSliders} className="absolute right-4 text-[#5f6368]" />
      </label>
  )
}

export default NavSearch