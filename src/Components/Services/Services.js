import React from "react"
import ServiceItem from "./ServiceItem"
import "./services.scss"

function Services() {
  return (
    <section className="our-services" id="services">
      <div className="container">
        <h2 className="main-text main-heading special-heading-light">
          our services
        </h2>
        <p className="main-text text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos illo
          mollitia quo, molestiae saepe totam iste nulla exercitationem unde
          maxime!
        </p>
        <div className="card-container grid-3">
          <ServiceItem
            image={require("../../img/icon1.png")}
            title="pexel perfect"
            description="I can offer a pixel perfect design as sharpest, cleanest and intentional looks due to the complete utilization of every pixel in the design."
          />
          <ServiceItem
            image={require("../../img/icon2.png")}
            title="full support"
            description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis maxime
           voluptate tempore facere blanditiis sed, sunt corrupti temporibus cum
           quos! Quae architecto earum velit esse?"
          />
          <ServiceItem
            image={require("../../img/icon3.png")}
            title="responsive design"
            description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis maxime
           voluptate tempore facere blanditiis sed, sunt corrupti temporibus cum
           quos! Quae architecto earum velit esse?"
          />
          <ServiceItem
            image={require("../../img/icon4.png")}
            title="clean code"
            description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis maxime
           voluptate tempore facere blanditiis sed, sunt corrupti temporibus cum
           quos! Quae architecto earum velit esse?"
          />
          <ServiceItem
            image={require("../../img/icon5.png")}
            title="PSD to HTML"
            description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis maxime
            voluptate tempore facere blanditiis sed, sunt corrupti temporibus cum
            quos! Quae architecto earum velit esse?"
          />
          <ServiceItem
            image={require("../../img/icon6.png")}
            title="responsive design"
            description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis maxime
             voluptate tempore facere blanditiis sed, sunt corrupti temporibus cum
             quos! Quae architecto earum velit esse?"
          />
        </div>
      </div>
    </section>
  )
}

export default Services
