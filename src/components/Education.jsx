import '../styles/education.css'

const Education = () => {
  return (
    <section className="education section" id="education">
      <div className='container'>
      <div className="section-title">
        <h2>Education</h2>
        <p>My academic journey and qualifications.</p>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="year">2022 - 2026</span>
            <div className='media'>
            <h3>B.tech in Information Technology</h3>
            {/* <h4>M.S. Bidve Engineering College, Latur</h4> */}
            <p>CGPA: 7.5</p>
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="year">2020 - 2022</span>
            <div className='media'>
            <h3>Higher Secondary (HSC)</h3>
            {/* <h4>Dyanopasak College, Parbhani</h4> */}
            <p>Percentage : 65%</p>
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="year">2020</span>
            <div className='media'>
            <h3>Secondary School (SSC)</h3>
            {/* <h4>Bhartiya Bal Vidya Mandir, Parbhani</h4> */}
            <p>Percentage : 86%</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Education

