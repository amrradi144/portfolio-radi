import React from 'react';
import styles from '../styles/Hero.module.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Hi, I'm <span className={styles.name}>Your Name</span></h1>
        <h2>Full Stack Developer</h2>
        <p>
          I build exceptional digital experiences that combine creativity with technical expertise.
          Passionate about creating elegant solutions to complex problems.
        </p>
        <div className={styles.cta}>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>
            View My Work
          </button>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>
            Contact Me
          </button>
        </div>
        <div className={styles.social}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 