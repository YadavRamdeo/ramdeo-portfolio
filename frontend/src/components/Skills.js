// src/components/Skills.js - Fixed import
import React from 'react';
import { motion } from 'framer-motion';
import {
  Code, Database, Cloud, Globe, Smartphone, Settings,
  Brain, Server, GitBranch, Layers, Zap, Wrench
} from 'lucide-react';

const Skills = ({ data }) => {
  const skillCategories = {
    languages: {
      icon: Code,
      title: 'Programming Languages',
      description: 'Core programming languages and syntax mastery.',
      color: '#6366f1',
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
    },
    frameworks: {
      icon: Layers,
      title: 'Frameworks & Libraries',
      description: 'Modern frameworks for web and application development.',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)'
    },
    aiml: {
      icon: Brain,
      title: 'AI/ML Technologies',
      description: 'Machine learning, AI, and data science tools.',
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899, #f97316)'
    },
    databases: {
      icon: Database,
      title: 'Database Systems',
      description: 'SQL and NoSQL database management systems.',
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)'
    },
    devops: {
      icon: Server,
      title: 'DevOps & Infrastructure',
      description: 'Containerization, CI/CD, and deployment tools.',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981, #059669)'
    },
    cloud: {
      icon: Cloud,
      title: 'Cloud & Tools',
      description: 'Cloud platforms and development tools.',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b, #d97706)'
    },
    concepts: {
      icon: Zap,
      title: 'Core Concepts',
      description: 'Fundamental programming and software engineering concepts.',
      color: '#ef4444',
      gradient: 'linear-gradient(135deg, #ef4444, #dc2626)'
    },
    other: {
      icon: Wrench,
      title: 'Other Technologies',
      description: 'Additional tools and technologies.',
      color: '#6b7280',
      gradient: 'linear-gradient(135deg, #6b7280, #4b5563)'
    }
  };

  // Fallback data if no skills provided
  const fallbackSkills = [
    { name: 'Python', category: 'languages', proficiency: 95 },
    { name: 'JavaScript', category: 'languages', proficiency: 85 },
    { name: 'Java', category: 'languages', proficiency: 80 },
    { name: 'C', category: 'languages', proficiency: 75 },
    { name: 'C++', category: 'languages', proficiency: 80 },
    { name: 'Django', category: 'frameworks', proficiency: 90 },
    { name: 'React.js', category: 'frameworks', proficiency: 85 },
    { name: 'TensorFlow', category: 'frameworks', proficiency: 80 },
    { name: 'PyTorch', category: 'frameworks', proficiency: 75 },
    { name: 'scikit-learn', category: 'frameworks', proficiency: 85 },
    { name: 'MLOps', category: 'aiml', proficiency: 85 },
    { name: 'Model Deployment', category: 'aiml', proficiency: 80 },
    { name: 'NLP', category: 'aiml', proficiency: 75 },
    { name: 'PostgreSQL', category: 'databases', proficiency: 85 },
    { name: 'MongoDB', category: 'databases', proficiency: 80 },
    { name: 'Redis', category: 'databases', proficiency: 75 },
    { name: 'Docker', category: 'devops', proficiency: 85 },
    { name: 'Kubernetes', category: 'devops', proficiency: 80 },
    { name: 'Jenkins', category: 'devops', proficiency: 75 },
    { name: 'AWS', category: 'cloud', proficiency: 80 },
    { name: 'GCP', category: 'cloud', proficiency: 75 },
    { name: 'Git', category: 'cloud', proficiency: 90 },
    { name: 'OOP', category: 'concepts', proficiency: 90 },
    { name: 'Design Patterns', category: 'concepts', proficiency: 85 }
  ];

  const skills = data && data.length > 0 ? data : fallbackSkills;

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'other';
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {});

  // Sort skills by proficiency within each category
  Object.keys(groupedSkills).forEach(category => {
    groupedSkills[category].sort((a, b) => (b.proficiency || 0) - (a.proficiency || 0));
  });

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="skills-grid">
          {Object.entries(groupedSkills).map(([category, categorySkills], index) => {
            const categoryInfo = skillCategories[category] || skillCategories.other;
            const IconComponent = categoryInfo.icon;

            return (
              <motion.div
                key={category}
                className="skill-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{
                  '--category-color': categoryInfo.color,
                  '--category-gradient': categoryInfo.gradient
                }}
              >
                <div className="skill-icon">
                  <IconComponent size={40} />
                </div>

                <h3>{categoryInfo.title}</h3>
                <p>{categoryInfo.description}</p>

                <div className="skill-list">
                  {categorySkills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        {skill.proficiency && (
                          <span className="skill-proficiency">{skill.proficiency}%</span>
                        )}
                      </div>
                      {skill.proficiency && (
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1.2, delay: idx * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;