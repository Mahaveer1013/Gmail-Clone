import { ImPencil } from "react-icons/im";
import { FaRegImage } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { MdLabelImportantOutline } from "react-icons/md";
import { RxPaperPlane } from "react-icons/rx";
import { IoDocumentOutline } from "react-icons/io5";
import { BsChatLeftText } from "react-icons/bs";
import { MdOutlineScheduleSend } from "react-icons/md";
import { LuMails } from "react-icons/lu";
import { RiSpam2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";

const AsideList = ({ item, isActive, isAside, setIsActive }) => {
  return (
    <div className={
      (isAside ? "w-[90%] pl-[20px] flex items-center rounded-r-2xl " : "rounded-full ") +
      (isActive ? "bg-[#d3e3fd] " : "hover:bg-slate-200 ") +
      "flex items-center relative cursor-pointer py-[0.1px]"
    } onClick={() => setIsActive(item.id)}
    >
      <span className={
        (isAside ? "" : "justify-center items-center rounded-full") +
        (isActive ? " bg-[#d3e3fd]" : "") +
        " flex text-black p-2 justify-center items-center"}>
        <item.Icon className="text-black w-[16px] h-[16px]" />
        {!isAside && item.count > 0 && <span className="absolute right-[2px] top-[2px] p-1 bg-red-600 rounded-full"></span>}
      </span>
      {isAside
        &&
        <>
          <p className={(item.count > 0 ? "font-bold " : "font-normal ") + "ml-[10px] text-sm"}>{item.name}</p>
          {item.count > 0 && <span className="absolute right-2 text-[12px] font-medium">{Number(item.count).toLocaleString()}</span>}
        </>
      }
    </div>
  )
}

const Aside = ({ isAsideOpen }) => {

  const nav = [
    {
      id: 0,
      Icon: FaRegImage,
      name: "Index",
      count: 1932,
      link: "",
    },
    {
      id: 1,
      Icon: FaRegStar,
      name: "Starred",
      count: 0,
      link: "",
    },
    {
      id: 2,
      Icon: IoTimeOutline,
      name: "Snoozed",
      count: 0,
      link: "",
    },
    {
      id: 3,
      Icon: MdLabelImportantOutline,
      name: "Important",
      count: 0,
      link: "",
    },
    {
      id: 4,
      Icon: RxPaperPlane,
      name: "Sent",
      count: 0,
      link: "",
    },
    {
      id: 5,
      Icon: IoDocumentOutline,
      name: "Drafts",
      count: 0,
      link: "",
    },
    {
      id: 6,
      Icon: BsChatLeftText,
      name: "Chats",
      count: 0,
      link: ""
    },
    {
      id: 7,
      Icon: MdOutlineScheduleSend,
      name: "Scheduled",
      count: 0,
      link: ""
    },
    {
      id: 8,
      Icon: LuMails,
      name: "All Mail",
      count: 0,
      link: ""
    },
    {
      id: 9,
      Icon: RiSpam2Line,
      name: "Spam",
      count: 0,
      link: ""
    },
    {
      id: 10,
      Icon: RiDeleteBin6Line,
      name: "Bin",
      count: 0,
      link: ""
    }

  ]

  const [isActive, setIsActive] = useState(0);

  // const [isAsideHover, setIsAsideHover] = useState(false);

  return (
    <aside className={(isAsideOpen ? "w-[256px] items-start" : "w-[72px] items-center") + " h-[100%] absolute left-0 top-0 z-0 pt-[74px] flex flex-col bg-[#f6f8fc]"}>
      <button
        style={{ boxShadow: "0 1px 3px 0 rgba(60, 64, 67, .3), 0 4px 8px 3px rgba(60, 64, 67, .15)" }}
        className={(isAsideOpen ? "ml-[8px] " : "") + "p-4 bg-[#c2e7ff] rounded-2xl flex justify-center items-center hover:shadow-lg"}
      >
        <ImPencil className="w-5 h-5" />
        {isAsideOpen && <span className="ml-[20px] mr-[4px] text-[15px] font-medium">Compose</span>}
      </button>
      <div className={(isAsideOpen ? "" : "items-center") + " mt-4 w-full flex-grow overflow-y-auto flex flex-col"}>
        {nav.map((item) => {
          return <AsideList
            key={item.id}
            item={item}
            isAside={isAsideOpen}
            isActive={item.id == isActive}
            setIsActive={setIsActive}
          />
        })}
      </div>
    </aside>
  )
}

export default Aside
