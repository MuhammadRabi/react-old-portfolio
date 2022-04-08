import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaYoutube,
} from "react-icons/fa"

function HeroText() {
  return (
    <div className="hero-text text-center">
      <p>
        <span>Hello</span>, I`m
      </p>
      <h1>Muhammad Rabi</h1>
      <h2 className="mb-2">I`m a Front End Developer</h2>
      <p>
        I'm a Front-End Web Dev who can translate UI/UX design to modern code
        and write maintainable, scalable, responsive, and cross-browser code.
        Skilled in pixel-perfect PSD-to-HTML, CSS, SASS, JavaScript, and
        Bootstrap
      </p>
      <a href="mailto:contact@muhammadrabi.com" className="btn mt-5">
        hire me
      </a>
      <div className="social-icons">
        <a
          href="https://github.com/MuhammadRabi"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          href="https://www.facebook.com/rabi9504/"
          rel="noreferrer"
          target="_blank"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.youtube.com/c/MohamedRabi"
          rel="noreferrer"
          target="_blank"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-rabi-07a51b202/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}

export default HeroText
