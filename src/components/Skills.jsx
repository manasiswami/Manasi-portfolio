import '../styles/skills.css'
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaNode,
  FaCode 
} from "react-icons/fa";
import { FaDocker, FaFigma } from 'react-icons/fa6';
import {
  SiExpress,
  // SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGithub,
  SiGit,
  SiPostman,
  SiCloudinary,
  SiClerk,
  SiVercel,
  SiGithubactions,
  SiTailwindcss,
  SiPrisma,
  SiNeon,
  SiTypescript

} from "react-icons/si";
const Skills = () => {
  return (
    <section className='skills section' id='skills'>
      <div className='container'>
       <div className='section-title'>
        <h2>My Skills</h2>
        <p>Technologies and Tools I use to build modern web applications.</p>
       </div>
       <div className='skills-container'>
        <div className='skill-box'>
          <h3>Frontend & Backend</h3>
          <div className="skill-grid">

            <div className="skill-card">
              <FaHtml5 className='icon'/>
              <h4>HTML</h4>
              <span className='level advanced'>Advanced</span>
            </div>
             <div className="skill-card">
              <FaCss3Alt className='icon'/>
              <h4>CSS3</h4>
              <span className='level advanced'>Advanced</span>
            </div>
             <div className="skill-card">
              <SiExpress className='icon'/>
              <h4>JavaScript</h4>
              <span className='level advanced'>Advanced</span>
            </div>
             <div className="skill-card">
              <SiTypescript className='icon'/>
              <h4>TypeScript</h4>
              <span className='level advanced'>Intermediate</span>
            </div>
             <div className="skill-card">
              <FaReact className='icon'/>
              <h4>React.js</h4>
              {/* <span className='level intermediate'>Intermediate</span> */}
            </div>
            <div className="skill-card">
              <SiTailwindcss className='icon'/>
              <h4>Tailwind CSS</h4>
              <span className='level intermediate'>Advanced</span>
            </div>
             <div className="skill-card">
              <FaNodeJs className='icon'/>
              <h4>Node.js</h4>
              {/* <span className='level intermediate'>Intermediate</span> */}
            </div>
             <div className="skill-card">
              <FaNode className='icon'/>
              <h4>Express.js</h4>
              <span className='level advanced'>Advanced</span>
            </div>
             <div className="skill-card">
              <SiMysql className='icon'/>
              <h4>My SQL</h4>
              <span className='level advanced'>Advanced</span>
            </div>
             <div className="skill-card">
              <SiPostgresql className='icon'/>
              <h4>PostgreSQL</h4>
              <span className='level intermediate'>Intermediate</span>
            </div>
             {/* <div className="skill-card">
              <SiMongodb className='icon'/>
              <h4>MongoDB</h4>
              <span className='level intermediate'>Intermediate</span>
            </div> */}
             <div className="skill-card">
              <SiPrisma className='icon'/>
              <h4>Prisma (ORM)</h4>
              <span className='level intermediate'>Intermediate</span>
            </div>
          </div>
        </div>

        <div className='skill-box'>
          <h3>Tools & Platforms</h3>

          <div className="skill-grid">

            <div className="skill-card">
              <FaCode className='icon'/>
              <h4>Vs code</h4>
            </div>
            <div className="skill-card">
              <SiGit className='icon'/>
              <h4>Git</h4>
            </div>
            <div className="skill-card">
              <SiGithub className='icon'/>
              <h4>Github</h4>
            </div>
             <div className="skill-card">
              <SiGithubactions className='icon'/>
              <h4>CI/CD</h4>
            </div>
             <div className="skill-card">
              <FaDocker className='icon'/>
              <h4>Docker</h4>
            </div>
             <div className="skill-card">
              <SiNeon className='icon'/>
              <h4>Neon</h4>
            </div>
            <div className="skill-card">
              <SiClerk className='icon'/>
              <h4>Clerk</h4>
            </div>
            <div className="skill-card">
              <SiVercel className='icon'/>
              <h4>Vercel</h4>
            </div>
            <div className="skill-card">
              <SiCloudinary className='icon'/>
              <h4>Claudinary</h4>
            </div>
            <div className="skill-card">
             <SiPostman className='icon'/>
              <h4>Postman</h4>
            </div>
             <div className="skill-card">
              <FaFigma className='icon'/>
              <h4>Figma</h4>
            </div>
          </div>
        </div>
       </div>
       </div>
    </section>
  )
}

export default Skills
