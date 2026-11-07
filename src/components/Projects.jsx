import { Link } from "react-router-dom"
import '../styles/project.css'
import ai from "../assets/ai.png";
import two from "../assets/1.png"
import gemini from "../assets/gemini.png"
const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="container">
      <div className="section-title">
        <h2>Projects</h2>
        <p>Some of my recent work and real-world applications.</p>
      </div>
      <div className="project-container">
        <div className="project-card">
          <div className="project-image">
            <img src={two} alt="" />
          </div>   
       <div className="project-content">
         <div className="project-header">
          <h3>Trackify - Expense Tracker</h3>
          <span className="role">Full Stack Developer</span>
        </div>
        <p>
          A secure expense tracking application that helps users manage budgets, monitor spending and visualize financial data.
        </p>

        <div className="tech-stack">
          <span>Next.js</span>
          <span>Clerk</span>
          <span>MY SQL</span>
          <span>Drizzle ORM</span>
        </div>
        <ul className="feature-list">
            <li>Designed and developed the complete expense tracking application.</li>
            <li>Implemented secure user authentication.</li>
            <li>Built budget and expense management modules.</li>
            <li>Integrated dashboard with charts.</li>
            <li>Designed a fully responsive UI.</li>
        </ul>

        <div className="project-links">
          <Link to="">Live Demo</Link>
          <Link>Github</Link>
        </div>

       </div>
       </div>
        <div className="project-card reverse">
          <div className="project-image">
              <img src={ai} alt="" />
          </div>
       <div className="project-content">
         <div className="project-header">
          <h3>AIZen - AI SAAS Application</h3>
          <span className="role">Full Stack Developer</span>
        </div>

        <p>
           AI-powered SaaS application that provides image generation, authentication,
           payment integration and a responsive dashboard.
        </p>

        <div className="tech-stack">
          <span>React</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>PostgreSQL</span>
          <span>Clerk</span>
          <span>Gemini-API</span>
        </div>
        <ul className="feature-list">
          <li>AI Image, Title Generation</li>
          <li>AI Image, Background, Object Removal</li>
          <li>User Authentication</li>
          <li>Clerk Payment</li>
          <li>Gemini API used</li>
        </ul>

        <div className="project-links">
          <Link to="">Live Demo</Link>
          <Link>Github</Link>
        </div>
        </div>
       </div>
        <div className="project-card">
          <div className="project-image">
              <img src={gemini} alt="" />
          </div>
        <div className="project-content">
         <div className="project-header">
          <h3>Gemini Clone</h3>
         <span className="role">Frontend Developer</span>
        </div>

        <p>
          A responsive AI chat interface inspired by google's Gemini with a modern UI and Real-time AI responses.
        </p>

        <div className="tech-stack">
          <span>React</span>
          <span>Javascript</span>
          <span>Gemini API</span>
        </div>
        <ul className="feature-list">
          <li>User Authentication</li>
          <li>Budget & Expense Management</li>
          <li>Dashboard with Charts</li>
          <li>Responsive Design</li>
        </ul>
       </div>
      </div>
    </div>

    </div>
    </section>
  )
}

export default Projects
