import React from "react"
import "./about.scss"

function About() {
  return (
    <section className="about-us text-white" id="about">
      <div className="container">
        <h2 className="main-text main-heading special-heading-dark">
          about me
        </h2>
        <div className="content flex flex-col lg:flex-row">
          <div className="about-text my-20 text-left pl-10 order-2 flex-1">
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser. I'm interested in entire front end spectrum
              and seeking work on ambitious projects with positive people
            </p>
            <p className="pt-7">
              I’m interested in freelance opportunities – especially ambitious
              or large projects. However, if you have other request or question,
              don’t hesitate to use the form.
            </p>
          </div>
          <div className="about-image order-1 flex-1">
            <img src={require("../img/bg1.jpg")} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
