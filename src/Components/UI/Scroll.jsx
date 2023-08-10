import React, { useState, useEffect } from "react"
import { BsFillArrowUpCircleFill } from "react-icons/bs"
import { motion } from "framer-motion"

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
    <div className="fixed z-10 cursor-pointer right-6 bottom-6">
      {isActive && (
        <BsFillArrowUpCircleFill
          className="text-4xl opacity-100 text-main hover:opacity-100"
          onClick={scrollTop}
        />
      )}
    </div>
  )
}

export default Scroll
