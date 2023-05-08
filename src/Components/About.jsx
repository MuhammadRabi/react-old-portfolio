import React from "react";
import SectionTitle from "./SectionTitle";
import coverImage from "../assets/images/bg1.jpg";

const About = () => {
  return (
    <section className="text-white bg-darkest page-container about-us">
      <SectionTitle title="about me" dark />
      <div className="flex flex-col justify-between mt-12 content lg:flex-row">
        <div className="flex-1 order-2 pl-10 my-20 leading-loose text-left about-text">
          <p>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser. I'm interested in entire front end spectrum and
            seeking work on ambitious projects with positive people
          </p>
          <p className="pt-7">
            I’m interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to use the form.
          </p>
        </div>
        <div className="flex-1 order-1 about-image">
          <img src={coverImage} className="object-cover rounded-sm" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
