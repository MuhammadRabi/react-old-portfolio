import React from "react";
import image from "../../assets/images/bg.jpg";
function SidebarOverlay() {
  return (
    <>
      <div className="main-pic">
        <img src={image} className="object-cover" alt="bg" />
      </div>
    </>
  );
}

export default SidebarOverlay;
