import { ImPencil } from "react-icons/im";
import { FaRegImage } from "react-icons/fa6";

const AsideList = ({ isActive, msgCount, isAside, icon: Icon, name }) => {
  return (
    <div className={
      (isAside && isActive && "w-[90%] pl-[20px] ") +
      (isActive ? "bg-[#d3e3fd] flex items-center rounded-r-2xl" : "") +
      " flex items-center relative cursor-pointer"
    }>
      <span className={
        ( isAside ? "" : "justify-center items-center bg-[#d3e3fd] rounded-full") +
        " flex text-black p-2 justify-center items-center"}>
        <Icon className="text-black w-[16px] h-[16px]" />
        {!isAside && msgCount>0 && <span className="absolute right-[2px] top-[2px] p-1 bg-red-600 rounded-full"></span>}
      </span>
      {isAside
        &&
        <>
          <p className="ml-[10px] font-medium text-sm">{name}</p>
          <span className="absolute right-2 text-[12px] font-medium">{Number(msgCount).toLocaleString()}</span>
        </>
      }
    </div>
  )
}

const Aside = ({ isAsideOpen }) => {

  // const [isAsideHover, setIsAsideHover] = useState(false);

  return (
    <aside className={(isAsideOpen ? "w-[256px] items-start" : "w-[72px] items-center") + " h-[100%] absolute left-0 top-0 z-0 pt-[74px] flex flex-col bg-[#f6f8fc]"}>
      <button
        style={{ boxShadow: "0 1px 3px 0 rgba(60, 64, 67, .3), 0 4px 8px 3px rgba(60, 64, 67, .15)" }}
        className={(isAsideOpen ? "ml-[8px] " :"") + "p-4 bg-[#c2e7ff] rounded-2xl flex justify-center items-center hover:shadow-lg"}
      >
        <ImPencil className="w-5 h-5" />
        {isAsideOpen && <span className="ml-[20px] mr-[4px] text-[15px] font-medium">Compose</span>}
      </button>
      <div className={(isAsideOpen ? "" : "items-center") + " mt-4 w-full flex-grow overflow-y-auto flex flex-col"}>
        <AsideList icon={FaRegImage} isAside={isAsideOpen} name={"Index"} isActive={true} msgCount={1903} />
      </div>
    </aside>
  )
}

export default Aside
