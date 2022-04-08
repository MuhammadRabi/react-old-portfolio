import React, { useState } from "react"
import { FaRegWindowClose, FaAlignJustify } from "react-icons/fa"

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <>
      <div
        className="menu-toggle fixed hover:scale-125"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? (
          <FaRegWindowClose className="text-gray-400" />
        ) : (
          <FaAlignJustify />
        )}
      </div>
      {showSidebar && (
        <nav className="sidebar">
          <ul>
            <li>
              <a href="#hero" data-link=".hero">
                home
              </a>
            </li>
            <li>
              <a href="#about" data-link=".about-us">
                about me
              </a>
            </li>
            <li>
              <a href="#services" data-link=".our-services">
                services
              </a>
            </li>
            <li>
              <a href="#faq" data-link=".faq">
                FAQ
              </a>
            </li>
            <li>
              <a href="#recent-works" data-link=".recent-works">
                recent projects
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}

export default Sidebar
