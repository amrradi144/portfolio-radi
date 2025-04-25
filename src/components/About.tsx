import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="about-content"
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="about-grid">
            <div className="about-text">
              <p>
                I am a passionate Front-End Developer with a strong focus on creating
                beautiful, responsive, and user-friendly web applications. With a keen
                eye for design and a deep understanding of modern web technologies,
                I strive to deliver exceptional user experiences.
              </p>
              
              <p>
                My journey in web development started with a curiosity about how
                websites work, which led me to dive deep into HTML, CSS, and
                JavaScript. Today, I specialize in React and modern front-end
                frameworks, always staying up-to-date with the latest trends and
                best practices.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <h3>3+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h3>20+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>

            <div className="about-image">
              <img src="/about-image.jpg" alt="About Me" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 