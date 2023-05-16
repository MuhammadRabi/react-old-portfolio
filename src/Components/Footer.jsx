import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 page-container bg-dark">
      <div>
        <p className="text-xs text-center capitalize text-darker">
          Copyrights © {currentYear} Online tutorials. all right reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
