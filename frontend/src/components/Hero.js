import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, ChevronDown, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Hero = ({ data }) => {
  if (!data) {
    return (
      <section className="hero">
        <div className="hero-background">
          <div className="code-pattern"></div>
          <div className="neural-network"></div>
        </div>
        <div className="hero-content">
          <div className="loading-placeholder">
            <h1>Loading...</h1>
          </div>
        </div>
      </section>
    );
  }

  const scrollToNextSection = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <div className="code-pattern"></div>
        <div className="neural-network"></div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {data.name}
          </motion.h1>

          <motion.h2
            className="hero-title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {data.title}
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {data.years_experience}+ years of experience in backend and full-stack development.
            Solved {data.leetcode_problems}+ LeetCode problems with a rating of {data.leetcode_rating}.
          </motion.p>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="stat-item">
              <span className="stat-number">{data.years_experience}+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{data.leetcode_problems}+</span>
              <span className="stat-label">Problems Solved</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{data.leetcode_rating}</span>
              <span className="stat-label">LeetCode Rating</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-contact-info"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="contact-item">
              <Mail size={18} />
              <span>{data.email}</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <span>{data.phone}</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <span>{data.location}</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.a
              href={data.linkedin_url}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
              LinkedIn
            </motion.a>
            <motion.a
              href={data.github_url}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              GitHub
            </motion.a>
            <motion.a
              href={`mailto:${data.email}`}
              className="btn btn-accent"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero-summary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <h3>Professional Summary</h3>
        <p>{data.summary}</p>
      </motion.div>

      <motion.button
        className="scroll-indicator"
        onClick={scrollToNextSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
        <span>Explore My Work</span>
      </motion.button>
    </section>
  );
};

export default Hero;