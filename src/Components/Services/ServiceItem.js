import React from "react"

function ServiceItem({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} className="img-fluid" alt="" />
      <h3 className="capitalize font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ServiceItem
