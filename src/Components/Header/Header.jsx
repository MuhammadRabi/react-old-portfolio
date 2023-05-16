import React from "react";
import Sidebar from "./Sidebar";
import CoverImage from "./CoverImage";
import HeroText from "./HeroText";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <Sidebar />
      <Logo />
      <div className="flex flex-col items-center justify-around h-screen md:flex-row">
        <CoverImage />
        <HeroText />
      </div>
    </header>
  );
};

export default Header;
