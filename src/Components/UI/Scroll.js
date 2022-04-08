import React, { useState, useEffect } from "react"
import "./scroll.scss"
import { BsFillArrowUpCircleFill } from "react-icons/bs"

function Scroll() {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 600 ? setIsActive(true) : setIsActive(false)
    })
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="scroll-to-top">
      {isActive && <BsFillArrowUpCircleFill onClick={scrollTop} />}
    </div>
  )
}

export default Scroll
