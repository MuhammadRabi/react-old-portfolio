import React from "react"
import PlatformItem from "./PlatformItem"
import "./platform.scss"

const Platform = () => {
  return (
    <section className="platform">
      <div className="container">
        <h2 className="main-text main-heading special-heading-light">
          freelancer platforms
        </h2>
        <div className="platform-grid">
          <PlatformItem
            image={require("../../img/upwork.png")}
            title="upwork"
            url="https://www.upwork.com/freelancers/~01586210b75f2c3f8f"
          />
          <PlatformItem
            image={require("../../img/freelancer.png")}
            title="freelancer"
            url="https://www.freelancer.com/u/MuhammadRabi"
          />
          <PlatformItem
            image={require("../../img/mostaql.png")}
            title="mostaql"
            url="https://mostaql.com/u/Muhammad_Rabi"
          />
        </div>
      </div>
    </section>
  )
}

export default Platform
