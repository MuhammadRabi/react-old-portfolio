import { useState } from "react";
import { FaRegWindowClose, FaAlignJustify } from "react-icons/fa";

import { links } from "./links";
import SidebarItem from "./SidebarItem";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div
        className="fixed menu-toggle hover:scale-125"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? (
          <FaRegWindowClose className="text-gray-400" />
        ) : (
          <FaAlignJustify className="text-darkest" />
        )}
      </div>

      <aside
        className={`fixed top-0 z-50 flex flex-col justify-center ${
          showSidebar ? "right-0" : "-right-full"
        } h-full p-24 w-full lg:w-1/3 duration-700  sidebar bg-dark`}
      >
        <ul className="flex flex-col items-center justify-center space-y-8">
          {links.map((link) => {
            return <SidebarItem key={link.id} {...link} />;
          })}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
