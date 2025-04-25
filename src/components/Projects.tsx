import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React and Node.js',
      image: '/project1.jpg',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1.com',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      image: '/project2.jpg',
      tags: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com/yourusername/project2',
      live: 'https://project2.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my work and skills',
      image: '/project3.jpg',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/yourusername/project3',
      live: 'https://project3.com',
    },
  ]

  const filters = ['all', 'React', 'Node.js', 'Firebase', 'Tailwind CSS']

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(filter))

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="projects-content"
        >
          <h2 className="section-title">My Projects</h2>

          <div className="project-filters">
            {filters.map((filterName) => (
              <button
                key={filterName}
                className={`filter-btn ${filter === filterName ? 'active' : ''}`}
                onClick={() => setFilter(filterName)}
              >
                {filterName}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 