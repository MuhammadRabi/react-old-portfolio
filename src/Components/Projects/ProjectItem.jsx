import Btn from "./Btn"
import { motion } from "framer-motion"

function ProjectItem({ url, repo, image, title, tools, desc }) {
  return (
    <motion.article
      initial={{ x: -100, scale: 0.9 }}
      whileInView={{ x: 0, scale: 1 }}
      className="flex flex-col max-w-sm mx-auto duration-300 bg-white border border-gray-300 shadow-md hover:shadow-lg rounded-2xl hover:translate-y-2"
    >
      <figure className="h-40 overflow-hidden border border-slate-100 rounded-t-2xl">
        <img
          src={image}
          className="object-cover overflow-hidden duration-500 hover:scale-105 grayscale hover:grayscale-0"
          alt="test01"
        />
      </figure>
      <div className="flex flex-col justify-start flex-1 w-full px-8 space-y-2">
        <h2 className="mt-2 text-lg font-bold text-left capitalize text-main">
          {title}
        </h2>
        <p className="flex flex-1 text-xs capitalize text-slate-400">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tech) => (
            <p
              key={tech}
              className="px-2 py-1 mt-2 text-xs font-medium text-gray-600 capitalize border rounded-sm lg:text-sm w-fit border-slate-200 bg-slate-50"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
      {/* expiremntal  */}

      <div className="flex gap-4 px-8 py-8">
        <Btn title="Live preview" link={url} />
        <Btn title="Code" link={repo} />
      </div>
    </motion.article>
  )
}

export default ProjectItem
