import { FaFileLines, FaGithub, FaLinkedin } from "react-icons/fa6"
import { Link } from "react-router-dom"
import '../styles/footer.css'
import resume from "../assets/resume.pdf"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
      <div className="footer-flex">
       <div className="footer-top">
        <h3>Full Stack Developer</h3>   
      </div>
      <div className="div-flex">
        <div className="footer-social">
        <a href="https://github.com/manasiswami"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/mansi-swami"><FaLinkedin /></a>
        <a href={resume}><FaFileLines /></a>
        {/* <FaFileLines/> */}
      </div>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      </div>
      </div>
      <hr/>


      <p className="copyright">© 2026 Manasi Swami. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
