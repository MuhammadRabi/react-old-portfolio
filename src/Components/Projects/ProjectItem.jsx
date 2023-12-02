import Btn from "./Btn"
import { motion } from "framer-motion"

function ProjectItem({ url, repo, image }) {
  return (
    <motion.article
      initial={{ x: -100, scale: 0.9 }}
      whileInView={{ x: 0, scale: 1 }}
      className="flex flex-col items-center duration-300 bg-white border border-gray-100 rounded-md shadow-md cursor-pointer product-box hover:translate-y-2"
    >
      <img
        src={image}
        className="relative flex flex-auto object-cover duration-500 rounded-sm grayscale hover:grayscale-0"
        alt="test01"
      />
      <div className="z-30 flex flex-col items-center justify-around w-1/2 py-4 mx-auto space-y-4 md:w-3/4 sm:items-baseline sm:flex-row">
        <Btn title="Code" link={repo} />
        <Btn title="demo" link={url} />
      </div>
    </motion.article>
  )
}

export default ProjectItem
