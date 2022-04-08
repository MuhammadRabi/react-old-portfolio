import React from "react"
import Sidebar from "./Sidebar"
import SidebarOverlay from "./SidebarOverlay"
import HeroText from "./HeroText"
import "./Header.scss"

function Header() {
  return (
    <header>
      <div className="hero" id="hero">
        <Sidebar />
        <SidebarOverlay />
        <HeroText />
      </div>
    </header>
  )
}

export default Header
