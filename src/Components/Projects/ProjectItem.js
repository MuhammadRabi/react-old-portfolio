import React from "react";

function ProjectItem({ url, repo, image }) {
  return (
    <article className="flex flex-col pb-4 duration-300 bg-white border border-gray-100 rounded-md shadow-md cursor-pointer product-box">
      <div className="rounded-sm overlay"></div>
      <img
        src={image}
        className="relative flex flex-auto rounded-sm object-"
        alt="test01"
      />
      <div className="z-30 flex pb-5 mx-auto mt-6 project-btns">
        <a href={repo} rel="noreferrer" target="_blank">
          view code
        </a>
        <a href={url} rel="noreferrer" target="_blank">
          visit website
        </a>
      </div>
    </article>
  );
}

export default ProjectItem;
