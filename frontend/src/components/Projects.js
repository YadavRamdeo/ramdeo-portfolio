import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Calendar, Code, Database, Globe } from 'lucide-react';

const Projects = ({ data }) => {
  const defaultProjects = [
    {
      title: "Inventory Management System",
      description: "Developed a full-stack web app to manage stock, suppliers, and invoices. Integrated real-time analytics dashboard with REST APIs and dynamic React UI. Features include automated stock alerts, supplier management, and comprehensive reporting.",
      tech_stack: "Python, Django, PostgreSQL, React.js, Docker",
      technologies: [
        { name: "Python" },
        { name: "Django" },
        { name: "PostgreSQL" },
        { name: "React.js" },
        { name: "Docker" }
      ],
      github_url: "https://github.com/YadavRamdeo/inventory-management",
      featured: true,
      created_date: "2024-03-01",
      achievements: "Successfully implemented real-time inventory tracking with 99.9% accuracy and reduced manual processing time by 60%.",
      category: "Full-Stack Web Application"
    },
    {
      title: "NLP-Based Text Similarity Evaluation",
      description: "Built a smart system to evaluate students' answers against model answers using cosine similarity. Deployed the application with Django backend, allowing teachers to review and assess text match scores automatically.",
      tech_stack: "Python, NLP, scikit-learn, Django",
      technologies: [
        { name: "Python" },
        { name: "NLP" },
        { name: "scikit-learn" },
        { name: "Django" }
      ],
      github_url: "https://github.com/YadavRamdeo/nlp-text-similarity",
      featured: true,
      created_date: "2023-08-01",
      achievements: "Achieved 92% accuracy in text similarity matching and reduced grading time by 75%.",
      category: "AI/ML Application"
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare management platform with patient records, appointment scheduling, billing integration, and real-time analytics. Built with Django backend, React frontend, and deployed on AWS with CI/CD pipeline.",
      tech_stack: "Django, React, PostgreSQL, AWS, Docker",
      technologies: [
        { name: "Django" },
        { name: "React" },
        { name: "PostgreSQL" },
        { name: "AWS" },
        { name: "Docker" }
      ],
      github_url: "https://github.com/YadavRamdeo/healthcare-management",
      featured: true,
      created_date: "2024-06-01",
      achievements: "Manages 10,000+ patient records with 99.9% uptime and HIPAA compliance.",
      category: "Enterprise Application"
    }
  ];

  const projects = data && data.length > 0 ? data : defaultProjects;

  const formatDate = (dateString) => {
    if (!dateString) return 'Recent';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const getCategoryIcon = (category) => {
    if (category?.includes('AI') || category?.includes('ML')) return <Database size={16} />;
    if (category?.includes('Web')) return <Globe size={16} />;
    if (category?.includes('Enterprise')) return <Code size={16} />;
    return <Star size={16} />;
  };

  const getCategoryColor = (category) => {
    if (category?.includes('AI') || category?.includes('ML')) return '#ec4899';
    if (category?.includes('Web')) return '#06b6d4';
    if (category?.includes('Enterprise')) return '#10b981';
    return '#f59e0b';
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className="project-content">
                <div className="project-header">
                  <div className="project-title-section">
                    <h3>{project.title}</h3>
                    {project.category && (
                      <div
                        className="category-badge"
                        style={{
                          background: `${getCategoryColor(project.category)}20`,
                          color: getCategoryColor(project.category),
                          border: `1px solid ${getCategoryColor(project.category)}40`
                        }}
                      >
                        {getCategoryIcon(project.category)}
                        <span>{project.category}</span>
                      </div>
                    )}
                  </div>

                  <div className="project-badges">
                    {project.featured && (
                      <motion.div
                        className="featured-badge"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                      >
                        <Star size={14} />
                        Featured
                      </motion.div>
                    )}
                    <div className="date-badge">
                      <Calendar size={14} />
                      {formatDate(project.created_date)}
                    </div>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                {project.achievements && (
                  <div className="project-achievements">
                    <h5>Key Achievements</h5>
                    <p>{project.achievements}</p>
                  </div>
                )}

                <div className="project-technologies">
                  <h5>Technologies Used</h5>
                  <div className="tech-tags">
                    {project.technologies?.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech.name}
                      </motion.span>
                    )) || project.tech_stack?.split(', ').map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech.trim()}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  {project.github_url && (
                    <motion.a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </motion.a>
                  )}
                  {project.live_url && (
                    <motion.a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-link"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects {
          padding: var(--space-3xl) 0;
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          position: relative;
        }

        .projects::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--accent-gradient);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: var(--space-2xl);
          margin-top: var(--space-2xl);
        }

        .project-card {
          background: var(--glass-bg);
          border-radius: var(--radius-2xl);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          position: relative;
          cursor: pointer;
          height: fit-content;
        }

        .project-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--primary-gradient);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
        }

        .project-card:hover {
          border-color: var(--primary-color);
          box-shadow: var(--shadow-xl);
        }

        .project-card:hover::before {
          opacity: 0.05;
        }

        .project-content {
          padding: var(--space-2xl);
          position: relative;
          z-index: 1;
        }

        .project-header {
          margin-bottom: var(--space-xl);
        }

        .project-title-section {
          margin-bottom: var(--space-lg);
        }

        .project-card h3 {
          font-size: var(--font-xl);
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: var(--space-sm);
        }

        .category-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-md);
          font-size: var(--font-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .project-badges {
          display: flex;
          gap: var(--space-sm);
          flex-wrap: wrap;
        }

        .featured-badge {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
          background: var(--accent-gradient);
          color: white;
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-md);
          font-size: var(--font-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: var(--shadow-sm);
        }

        .date-badge {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
          background: rgba(102, 126, 234, 0.2);
          color: var(--primary-color);
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-md);
          font-size: var(--font-xs);
          border: 1px solid rgba(102, 126, 234, 0.3);
          font-weight: 500;
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: var(--space-lg);
          font-size: var(--font-base);
        }

        .project-achievements {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: var(--radius-lg);
          padding: var(--space-lg);
          margin-bottom: var(--space-lg);
        }

        .project-achievements h5 {
          color: #10b981;
          font-size: var(--font-sm);
          font-weight: 600;
          margin-bottom: var(--space-sm);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .project-achievements p {
          color: var(--text-secondary);
          font-size: var(--font-sm);
          line-height: 1.6;
          margin: 0;
        }

        .project-technologies {
          margin-bottom: var(--space-xl);
        }

        .project-technologies h5 {
          color: var(--text-muted);
          font-size: var(--font-sm);
          margin-bottom: var(--space-sm);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
        }

        .tech-tag {
          background: rgba(102, 126, 234, 0.2);
          color: var(--primary-color);
          padding: var(--space-sm) var(--space-md);
          border-radius: var(--radius-lg);
          font-size: var(--font-xs);
          font-weight: 500;
          border: 1px solid rgba(102, 126, 234, 0.3);
          transition: all var(--transition-normal);
          cursor: default;
        }

        .tech-tag:hover {
          background: var(--primary-color);
          color: white;
          box-shadow: var(--shadow-sm);
        }

        .project-links {
          display: flex;
          gap: var(--space-lg);
          flex-wrap: wrap;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-sm);
          padding: var(--space-md) var(--space-xl);
          border-radius: var(--radius-lg);
          text-decoration: none;
          transition: all var(--transition-normal);
          min-height: 48px;
          text-align: center;
          font-weight: 600;
          font-size: var(--font-sm);
          flex: 1;
          min-width: 140px;
        }

        .github-link {
          background: var(--glass-bg);
          border: 2px solid var(--glass-border);
          color: var(--text-primary);
        }

        .github-link:hover {
          background: #333;
          color: white;
          border-color: #333;
          box-shadow: var(--shadow-md);
        }

        .live-link {
          background: rgba(102, 126, 234, 0.2);
          border: 2px solid rgba(102, 126, 234, 0.3);
          color: var(--primary-color);
        }

        .live-link:hover {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
          box-shadow: var(--shadow-md);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }

          .project-content {
            padding: var(--space-xl);
          }

          .project-links {
            flex-direction: column;
            gap: var(--space-md);
          }

          .project-link {
            min-width: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;