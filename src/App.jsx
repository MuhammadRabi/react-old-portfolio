import "./App.css"
import "./index.css"
import { Analytics } from "@vercel/analytics/react"
import Header from "./Components/Header/Header"
import About from "./Components/About"
import Services from "./Components/Services/Services"
import Faq from "./Components/Faq/Faq"
import Platform from "./Components/Platform/Platform"
import Footer from "./Components/Footer"
import Scroll from "./Components/UI/Scroll"
import { lazy, Suspense, useContext } from "react"
import Overlay from "./Components/UI/Overlay"
import { appContext } from "./Components/context"
import { motion, useScroll, useSpring } from "framer-motion"

const Projects = lazy(() => import("./Components/Projects/Projects"))

function App() {
  const { isSidebarOpen } = useContext(appContext)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      {isSidebarOpen ? <Overlay /> : ""}
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Header />
      <About />
      <Services />
      <Faq />
      <Suspense fallback={<p>loading ...</p>}>
        <Projects />
      </Suspense>
      <Platform />
      <Footer />
      <Scroll />
      <Analytics />
    </>
  )
}

export default App
