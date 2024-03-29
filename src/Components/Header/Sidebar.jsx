import { useContext } from "react"
import { FaRegWindowClose, FaAlignJustify } from "react-icons/fa"
import { links } from "./links"
import SidebarItem from "./SidebarItem"
import { appContext } from "../context"

const Sidebar = () => {
  const { setisSidebarOpen, isSidebarOpen } = useContext(appContext)
  const handleSidebar = () => {
    if (isSidebarOpen) {
      document.body.style.overflow = ""
      setisSidebarOpen(!isSidebarOpen)
    } else {
      document.body.style.overflow = "hidden"
      setisSidebarOpen(!isSidebarOpen)
    }
  }
  return (
    <>
      <div
        className="fixed z-[1000] text-4xl duration-300 cursor-pointer menu-toggle top-4 right-8 hover:scale-125"
        onClick={handleSidebar}
      >
        {isSidebarOpen ? (
          <FaRegWindowClose className="text-gray-400" />
        ) : (
          <FaAlignJustify className="text-violet-700" />
        )}
      </div>

      <aside
        className={`fixed top-0 z-50 flex flex-col justify-center ${
          isSidebarOpen ? "right-0" : "-right-full"
        } h-full p-24 w-full lg:w-1/3 duration-700  sidebar bg-dark`}
      >
        <ul className="flex flex-col items-center justify-center space-y-8 text-center">
          {links.map((link) => {
            return <SidebarItem key={link.id} {...link} />
          })}
        </ul>
      </aside>
    </>
  )
}

export default Sidebar
