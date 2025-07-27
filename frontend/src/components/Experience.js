import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, ExternalLink, Award } from 'lucide-react';

const Experience = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <section className="experience" id="experience">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
            Loading experience data...
          </p>
        </div>
      </section>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const getCompanyColor = (company) => {
    const colors = {
      'aster': '#e11d48',
      'freelancer': '#059669',
      'ciena': '#2563eb',
      'default': '#6366f1'
    };

    const companyKey = company.toLowerCase().split(' ')[0];
    return colors[companyKey] || colors.default;
  };

  return (
    <section className="experience" id="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <div className="experience-timeline">
          {data.map((exp, index) => {
            const companyColor = getCompanyColor(exp.company);

            return (
              <motion.div
                key={index}
                className="experience-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ '--company-color': companyColor }}
              >
                <div className="experience-content">
                  <div className="experience-header">
                    <div className="company-info">
                      <div className="company-name" style={{ color: companyColor }}>
                        <Building size={24} />
                        <h3>{exp.company}</h3>
                        {exp.is_current && (
                          <motion.span
                            className="current-badge"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.2 + 0.5 }}
                          >
                            Current
                          </motion.span>
                        )}
                      </div>
                      <h4 className="position-title">{exp.position}</h4>
                    </div>
                  </div>

                  <div className="experience-meta">
                    <div className="experience-date">
                      <Calendar size={16} />
                      <span>{formatDate(exp.start_date)} - {formatDate(exp.end_date)}</span>
                    </div>
                    {exp.location && (
                      <div className="experience-location">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="experience-description">
                    <p>{exp.description}</p>
                  </div>

                  {exp.achievements && (
                    <div className="experience-achievements">
                      <h5>
                        <Award size={16} />
                        Key Achievements
                      </h5>
                      <div className="achievements-content">
                        {exp.achievements.split('\n').map((achievement, idx) => (
                          achievement.trim() && (
                            <motion.div
                              key={idx}
                              className="achievement-item"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              viewport={{ once: true }}
                            >
                              {achievement.trim()}
                            </motion.div>
                          )
                        ))}
                      </div>
                    </div>
                  )}

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="experience-technologies">
                      <h5>Technologies Used</h5>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            className="tech-tag"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            viewport={{ once: true }}
                          >
                            {tech.name}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .experience {
          padding: var(--space-3xl) 0;
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
          position: relative;
        }

        .experience::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--primary-gradient);
        }

        .experience-timeline {
          position: relative;
          max-width: 100%;
          margin: 0 auto;
        }

        .experience-item {
          margin-bottom: var(--space-3xl);
          position: relative;
          border-radius: var(--radius-2xl);
          overflow: hidden;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .experience-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 6px;
          background: var(--company-color, var(--primary-color));
          border-radius: 0 3px 3px 0;
        }

        .experience-item:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-xl);
          border-color: var(--company-color, var(--primary-color));
        }

        .experience-content {
          padding: var(--space-2xl);
          position: relative;
        }

        .company-info {
          margin-bottom: var(--space-lg);
        }

        .company-name {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          margin-bottom: var(--space-sm);
          flex-wrap: wrap;
        }

        .company-name h3 {
          font-size: var(--font-2xl);
          font-weight: 700;
          margin: 0;
        }

        .position-title {
          font-size: var(--font-lg);
          color: var(--text-primary);
          font-weight: 600;
          margin: 0;
        }

        .current-badge {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          padding: var(--space-xs) var(--space-md);
          border-radius: var(--radius-md);
          font-size: var(--font-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: var(--shadow-sm);
          animation: pulse-badge 2s infinite;
        }

        @keyframes pulse-badge {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .experience-meta {
          display: flex;
          gap: var(--space-xl);
          margin: var(--space-lg) 0;
          flex-wrap: wrap;
        }

        .experience-date,
        .experience-location {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          color: var(--text-muted);
          font-size: var(--font-sm);
          background: rgba(102, 126, 234, 0.1);
          padding: var(--space-sm) var(--space-md);
          border-radius: var(--radius-md);
          font-weight: 500;
        }

        .experience-description {
          margin: var(--space-lg) 0;
        }

        .experience-description p {
          color: var(--text-secondary);
          line-height: 1.8;
          font-size: var(--font-base);
          margin: 0;
        }

        .experience-achievements {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: var(--radius-lg);
          padding: var(--space-lg);
          margin: var(--space-lg) 0;
        }

        .experience-achievements h5 {
          color: #10b981;
          font-size: var(--font-sm);
          font-weight: 600;
          margin-bottom: var(--space-md);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: var(--space-sm);
        }

        .achievements-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .achievement-item {
          color: var(--text-secondary);
          font-size: var(--font-sm);
          line-height: 1.6;
          padding-left: var(--space-md);
          position: relative;
        }

        .achievement-item::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }

        .experience-technologies {
          margin-top: var(--space-xl);
        }

        .experience-technologies h5 {
          color: var(--text-muted);
          font-size: var(--font-sm);
          margin-bottom: var(--space-sm);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .experience-content {
            padding: var(--space-xl);
          }

          .experience-meta {
            flex-direction: column;
            gap: var(--space-sm);
          }

          .company-name {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-sm);
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;