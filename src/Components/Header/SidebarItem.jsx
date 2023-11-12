import { useContext } from "react"
import { appContext } from "../context"

const SidebarItem = ({ id, link, text, dataLink }) => {
  const { isSidebarOpen, setisSidebarOpen } = useContext(appContext)
  return (
    <li key={id} className="m-2.5">
      <a
        href={link}
        className="text-2xl hover:text-main text-darker tracking-wider cursor-pointer my-2.5 uppercase duration-500"
        data-link={dataLink}
        onClick={() => {
          setisSidebarOpen(!isSidebarOpen)
          document.body.style.overflow = ""
        }}
      >
        {text}
      </a>
    </li>
  )
}
export default SidebarItem
