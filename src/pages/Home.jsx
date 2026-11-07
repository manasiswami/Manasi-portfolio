import About from "../components/About"
import Contact from "../components/Contact"
import Education from "../components/Education"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Experience from "../components/Experience"
const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience />
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
