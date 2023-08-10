import React from "react"
import { motion } from "framer-motion"

function PlatformItem({ image, title, url }) {
  return (
    <motion.a
      initial={{ y: 150, scale: 1.4 }}
      whileInView={{ y: 0, scale: 1 }}
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      <img
        src={image}
        alt={title}
        className="object-cover mx-auto duration-300 cursor-pointer hover:scale-105 w-72 "
      />
    </motion.a>
  )
}

export default PlatformItem
