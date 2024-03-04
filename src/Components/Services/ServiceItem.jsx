import { motion } from "framer-motion"
const ServiceItem = ({ image, title, description }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.1,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
      className="card hover:bg-gray-900 hover:text-darker group relative py-12 bg-gray-50 cursor-pointer duration-500 text-center min-w-[320px] max-w-sm mx-auto"
    >
      <img
        src={image}
        className="object-cover w-24 mx-auto my-6 duration-500 group-hover:invert"
        alt="serviceImage"
      />
      <h3 className="mb-6 text-2xl font-bold capitalize group-hover:text-main">
        {title}
      </h3>
      <p className="px-4 leading-relaxed text-gray-500">{description}</p>
      <span className="absolute top-0 left-0 w-1 h-0 duration-500 bg-main group-hover:h-full"></span>
      <span className="absolute bottom-0 right-0 w-1 h-0 duration-500 bg-main group-hover:h-full"></span>
    </motion.article>
  )
}

export default ServiceItem
