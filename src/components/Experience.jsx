
import '../styles/experience.css';

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="container">

        <div className="section-title">
          <h2>Work Experience</h2>
          <p>My professional journey and hands-on experience.</p>
        </div>

        <div className="experience-container">
          <div className="experience-card">

            <div className="experience-header">
              <div>
                <span className="experience-label">
                  Internship
                </span>

                <h3>Full-Stack Developer Intern</h3>

                <h4>TN Nexora Technologies Pvt. Ltd.</h4>
              </div>

              <span className="experience-date">
                June 2026 – [November, 2026]
              </span>
            </div>

            <p className="experience-description">
              Worked on a multi-tenant CRM application,
              contributing to frontend development,
              database management and application modules.
            </p>

            <h4 className="responsibility-title">
              Key Responsibilities
            </h4>

            <ul className="experience-list">
              <li>
                Developed and updated frontend modules using
                React.js, TypeScript and Tailwind CSS.
              </li>

              <li>
                Worked with PostgreSQL and MySQL databases
                using Prisma ORM.
              </li>

              <li>
                Designed and updated database schemas,
                relationships and migrations.
              </li>

              <li>
                Contributed to Company Profile, Employee
                Management, Sales Pipeline, Settings and
                Support modules.
              </li>

              <li>
                Used Git and GitHub for version control
                and team collaboration.
              </li>
            </ul>

            <div className="tech-stack">
              <span>React.js</span>
              <span>TypeScript</span>
              <span>Tailwind CSS</span>
              <span>PostgreSQL</span>
              <span>MySQL</span>
              <span>Prisma ORM</span>
              <span>Git</span>
              <span>GitHub</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
