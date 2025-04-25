import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const experiences = [
    {
      type: 'work',
      title: 'Senior Front-End Developer',
      company: 'Tech Company',
      period: '2021 - Present',
      description: 'Leading the front-end development team, implementing modern web technologies, and ensuring high-quality code standards.',
    },
    {
      type: 'work',
      title: 'Front-End Developer',
      company: 'Digital Agency',
      period: '2019 - 2021',
      description: 'Developed responsive web applications using React and modern CSS frameworks, collaborated with designers and backend developers.',
    },
  ]

  const education = [
    {
      type: 'education',
      title: 'Bachelor of Computer Science',
      school: 'University Name',
      period: '2015 - 2019',
      description: 'Specialized in Web Development and User Interface Design.',
    },
    {
      type: 'education',
      title: 'Web Development Certification',
      school: 'Online Platform',
      period: '2018',
      description: 'Advanced courses in React, Node.js, and modern web development practices.',
    },
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="experience-content"
        >
          <h2 className="section-title">Experience & Education</h2>

          <div className="experience-grid">
            <div className="experience-column">
              <h3 className="experience-subtitle">
                <FaBriefcase /> Work Experience
              </h3>
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="timeline-content">
                      <h4 className="timeline-title">{exp.title}</h4>
                      <h5 className="timeline-subtitle">{exp.company}</h5>
                      <p className="timeline-period">{exp.period}</p>
                      <p className="timeline-description">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="experience-column">
              <h3 className="experience-subtitle">
                <FaGraduationCap /> Education
              </h3>
              <div className="timeline">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="timeline-content">
                      <h4 className="timeline-title">{edu.title}</h4>
                      <h5 className="timeline-subtitle">{edu.school}</h5>
                      <p className="timeline-period">{edu.period}</p>
                      <p className="timeline-description">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 