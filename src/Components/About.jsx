import SectionTitle from "./SectionTitle"
import coverImage from "../assets/images/bg1.webp"

const About = () => {
  return (
    <section
      className="text-white lg:h-screen bg-darkest page-container about-us"
      id="about"
    >
      <SectionTitle title="about me" dark />
      <div className="flex flex-col items-center justify-between mt-12 lg:my-24 content lg:flex-row">
        <div className="flex-1 order-2 px-4 my-20 leading-loose text-left md:px-16 about-text">
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
          <img
            src={coverImage}
            className="object-cover rounded-sm"
            alt="rabi-cover-image"
          />
        </div>
      </div>
    </section>
  )
}

export default About
