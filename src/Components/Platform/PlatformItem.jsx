import React from "react";

function PlatformItem({ image, title, url }) {
  return (
    <a href={url} rel="noreferrer" target="_blank">
      <img
        src={image}
        alt={title}
        className="object-cover mx-auto duration-300 cursor-pointer w-72 grayscale hover:grayscale-0 "
      />
    </a>
  );
}

export default PlatformItem;
