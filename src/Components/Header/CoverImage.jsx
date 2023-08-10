import image from "../../assets/images/dev.svg"
import { motion } from "framer-motion"

const CoverImage = () => {
  return (
    <div className="hidden w-1/3 md:block">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 110,
        }}
      >
        <img src={image} className="object-cover" alt="bg" />
      </motion.div>
    </div>
  )
}

export default CoverImage
