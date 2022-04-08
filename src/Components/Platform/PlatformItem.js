import React from "react"

function PlatformItem({ image, title, url }) {
  return (
    <a href={url} rel="noreferrer" target="_blank">
      <img src={image} alt={title} className="img-fluid" />
    </a>
  )
}

export default PlatformItem
