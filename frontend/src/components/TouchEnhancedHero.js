import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ExternalLink, Mail, ChevronDown } from 'lucide-react';

const TouchEnhancedHero = ({ data }) => {
  const [dragDirection, setDragDirection] = useState(0);
  const controls = useAnimation();

  if (!data) return null;

  const handleDragEnd = (event, info) => {
    const threshold = 50;

    if (info.offset.y > threshold) {
      // Swipe down - scroll to next section
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Reset position
    controls.start({ x: 0, y: 0 });
  };

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

      <motion.div
        className="hero-content"
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        animate={controls}
      >
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-name">{data.name}: Software Engineer</h1>
          <p className="hero-description">
            {data.years_experience}+ years of experience in Python, Django Rest Framework, React JS, and SQL.
            Solved {data.leetcode_problems}+ LeetCode problems.
          </p>

          <div className="hero-buttons">
            <motion.a
              href={data.linkedin_url}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
              View LinkedIn
            </motion.a>
            <motion.a
              href={`mailto:${data.email}`}
              className="btn btn-secondary"
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-summary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2>Summary: Passionate & Dedicated</h2>
        <p>{data.summary}</p>
      </motion.div>

      {/* Scroll indicator for mobile */}
      <motion.button
        className="scroll-indicator"
        onClick={scrollToNextSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
        <span>Swipe or tap to explore</span>
      </motion.button>
    </section>
  );
};

export default TouchEnhancedHero;
