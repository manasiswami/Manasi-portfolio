import "../styles/about.css";
const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-container">
          <div className="about-content">
            <h3>
              Passionate <span>Full Stack Developer</span>
            </h3>
            <p>
              I'm Manasi Swami, a Full-Stack Developer with hands-on internship
              experience building web applications using React.js, TypeScript,
              Node.js and database technologies.
            </p>

            <p>
              I have worked on a multi-tenant CRM application, contributing to
              frontend development, database design, schema management and team
              collaboration. I enjoy learning new technologies and building
              practical solutions to real-world problems.
            </p>
          </div>
          <div className="about-card">
            <div className="info-box">
              <h4>projects</h4>
              <span>5+</span>
            </div>
            <div className="info-box">
              <h4> Technologies</h4>
              <span>8+</span>
            </div>
            <div className="info-box">
              <h4>Experience</h4>
              <span>Fresher</span>
            </div>
            <div className="info-box">
              <h4>Status</h4>
              <span>Open to work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
