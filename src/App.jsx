import "./App.css";
import "./index.css";
import Header from "./Components/Header/Header";
import About from "./Components/About";
import Services from "./Components/Services/Services";
import Faq from "./Components/Faq/Faq";
import Platform from "./Components/Platform/Platform";
import Projects from "./Components/Projects/Projects";
import Video from "./Components/Video";
import Footer from "./Components/Footer";
import Scroll from "./Components/UI/Scroll";

function App() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Faq />
      <Projects />
      <Platform />
      <Video />
      <Footer />
      <Scroll />
    </>
  );
}

export default App;
