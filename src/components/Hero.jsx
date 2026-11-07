import '../styles/hero.css';
import photo from "../assets/photo.png"
// import resume from '../assets/resume'
import resume from "../assets/resume.pdf"
const Hero = () => {
  return (
    <section className='hero' id='home'>

      <div className='hero-content'>
          <span className='hero-badge'>
            Full Stack Developer
          </span>
          <h1>
            Hi, I am <br/>
            <span>Manasi Swami</span>
          </h1>
           <p>
          Passionate Full Stack Developer skilled in React, Node.js,
          Express.js, MongoDB and MySQL. I like creating responsive,
          scalable and user-friendly web applications.
        </p>

        <div className='hero-btn'>
          <a href="#projects" className='btn primary'>
            View Projects
          </a>

          <a href={resume} download className='btn secondary'>Download Resume</a>
        </div>
      </div>

      <div className='hero-img'>
        <div className='img-card'>
          <img src={photo} alt="manasi swami" />
        </div>
      </div>
    </section>
  )
}

export default Hero
