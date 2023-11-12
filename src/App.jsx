import "./App.css"
import "./index.css"
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
const Projects = lazy(() => import("./Components/Projects/Projects"))

function App() {
  const { isSidebarOpen } = useContext(appContext)
  return (
    <>
      {isSidebarOpen ? <Overlay /> : ""}
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
    </>
  )
}

export default App
