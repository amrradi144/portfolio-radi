import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNpm,
} from 'react-icons/fa'
import { SiTailwindcss, SiTypescript, SiBootstrap } from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
    { name: 'JavaScript', icon: <FaJs />, level: 88 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
    { name: 'React', icon: <FaReact />, level: 85 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 82 },
    { name: 'Bootstrap', icon: <SiBootstrap />, level: 85 },
    { name: 'Git', icon: <FaGitAlt />, level: 80 },
    { name: 'NPM', icon: <FaNpm />, level: 75 },
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="skills-content"
        >
          <h2 className="section-title">My Skills</h2>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <span className="skill-level">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 