import React from "react"

function ProjectItem({ url, repo, image }) {
  return (
    <div className="product-box shadow-sm cursor-pointer flex border border-gray-100">
      <div className="overlay"></div>
      <img src={image} alt="test01" />
      <div className="project-btns mt-6 pb-5 flex">
        <a href={repo} rel="noreferrer" target="_blank">
          view code
        </a>
        <a href={url} rel="noreferrer" target="_blank">
          visit website
        </a>
      </div>
    </div>
  )
}

export default ProjectItem
