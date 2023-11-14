import { motion } from "framer-motion"

function PlatformItem({ image, title, url }) {
  return (
    <motion.a
      initial={{ y: 150 }}
      whileInView={{ y: 0 }}
      href={url}
      rel="noreferrer"
      target="_blank"
      className="mb-8 md:mb-2"
    >
      <img
        src={image}
        alt={title}
        className="object-cover w-40 mx-auto duration-300 cursor-pointer lg:w-80 hover:scale-105 "
      />
    </motion.a>
  )
}

export default PlatformItem
