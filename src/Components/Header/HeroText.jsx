import { socialLinks } from "./links"
import { motion } from "framer-motion"
const HeroText = () => {
  return (
    <article className="flex flex-col w-full p-4 space-y-8 text-center md:text-left md:p-12 md:w-1/2">
      <p className="m-0">
        <span className="text-2xl font-bold text-main">Hello</span>, I`m
      </p>
      <motion.div
        initial={{ opacity: 0, x: -80, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 110,
        }}
      >
        <h1 className="text-3xl font-bold tracking-wide md:text-5xl">
          Muhammad Rabi
        </h1>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, x: -80, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 110,
        }}
        className="mb-2"
      >
        I`m a Front End Developer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 110,
          delay: 0.1,
        }}
        className="leading-loose"
      >
        I can translate UI/UX design to modern code and write maintainable,
        scalable, responsive, and cross-browser code. Skilled in pixel-perfect
        PSD-to-HTML, CSS, SASS, JavaScript, and Bootstrap
      </motion.p>
      <motion.a
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 110,
          delay: 0.2,
        }}
        href="mailto:contact@muhammadrabi.com"
        className="mx-auto mt-5 text-white duration-200 md:mx-0 w-fit bg-main hover:bg-violet-800 btn"
      >
        hire me
      </motion.a>
      <div className="flex mx-auto space-x-2 md:mx-0">
        {socialLinks.map((link) => {
          return (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 0.9 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
            >
              <a
                href={link.link}
                aria-label={link.aria}
                rel="noreferrer"
                target="_blank"
                className="text-3xl duration-300 rounded-full text-dark hover:opacity-70"
              >
                {<link.icon />}
              </a>
            </motion.div>
          )
        })}
      </div>
    </article>
  )
}

export default HeroText
