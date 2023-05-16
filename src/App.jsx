import "./App.css";
import "./index.css";
import Header from "./Components/Header/Header";
import About from "./Components/About";
import Services from "./Components/Services/Services";
import Faq from "./Components/Faq/Faq";
import Platform from "./Components/Platform/Platform";
import Footer from "./Components/Footer";
import Scroll from "./Components/UI/Scroll";
import { lazy, Suspense } from "react";
const Projects = lazy(() => import("./Components/Projects/Projects"));

function App() {
  return (
    <>
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
  );
}

export default App;
