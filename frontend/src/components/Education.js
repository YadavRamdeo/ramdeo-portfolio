// src/components/Education.js - Complete with all educational qualifications
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, ExternalLink, Award, Zap, BookOpen, Code } from 'lucide-react';

const Education = ({ data }) => {
  // Default education data with proper priority order
  const defaultEducation = [
    {
      institution: "Bosscoder Academy",
      degree: "Software Engineering Program",
      field_of_study: "Data Structures and Algorithms",
      start_year: 2024,
      end_year: 2025,
      is_current: false,
      type: "certification",
      priority: 1
    },
    {
      institution: "National Institute of Technology, Kurukshetra",
      degree: "M.C.A (Master of Computer Application)",
      field_of_study: "Computer Application",
      start_year: 2019,
      end_year: 2022,
      cgpa: "7.1/10",
      is_current: false,
      type: "masters",
      priority: 2
    },
    {
      institution: "Bangalore University",
      degree: "BCA",
      field_of_study: "Bachelor in Computer Application",
      is_current: false,
      type: "bachelors",
      priority: 3
    }
  ];

  const educationData = data && data.length > 0 ? data : defaultEducation;

  const formatYear = (year) => {
    return year ? year.toString() : 'Present';
  };

  const formatDateRange = (startYear, endYear) => {
    if (!startYear && !endYear) return 'Completed';
    if (!startYear) return `Until ${formatYear(endYear)}`;
    if (!endYear) return `${formatYear(startYear)} - Present`;
    return `${formatYear(startYear)} - ${formatYear(endYear)}`;
  };

  const getEducationIcon = (type) => {
    switch (type) {
      case 'certification':
        return <Code size={28} />;
      case 'masters':
        return <GraduationCap size={28} />;
      case 'bachelors':
        return <BookOpen size={28} />;
      default:
        return <GraduationCap size={28} />;
    }
  };

  const getEducationGradient = (type, index) => {
    const gradients = {
      certification: 'linear-gradient(135deg, #f59e0b, #d97706)',
      masters: 'linear-gradient(135deg, #667eea, #764ba2)',
      bachelors: 'linear-gradient(135deg, #10b981, #059669)'
    };
    return gradients[type] || gradients.masters;
  };

  return (
    <section className="education" id="education">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="education-wrapper">
          <motion.div
            className="education-list"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {educationData
              .sort((a, b) => (a.priority || 999) - (b.priority || 999))
              .map((edu, index) => (
                <motion.div
                  key={index}
                  className="education-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  style={{
                    '--education-gradient': getEducationGradient(edu.type, index)
                  }}
                >
                  <div className="education-icon">
                    {getEducationIcon(edu.type)}
                  </div>
                  <div className="education-details">
                    <h4>{edu.institution}</h4>
                    <p className="education-degree">
                      {edu.degree}
                      {edu.field_of_study && edu.field_of_study !== edu.degree &&
                        ` - ${edu.field_of_study}`
                      }
                    </p>
                    <div className="education-meta">
                      <div className="education-year">
                        <Calendar size={16} />
                        <span>{formatDateRange(edu.start_year, edu.end_year)}</span>
                      </div>
                      {edu.cgpa && (
                        <div className="education-grade">
                          <Award size={16} />
                          <span>CGPA: {edu.cgpa}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

            {/* LeetCode Achievement - Now in Education Section */}
            <motion.div
              className="leetcode-achievement"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(249, 115, 22, 0.4)"
              }}
            >
              {/* Animated background shine */}
              <div className="shine-effect" />

              <div className="achievement-content">
                <div className="achievement-info">
                  <div className="achievement-icon">
                    <Zap size={32} />
                  </div>
                  <div className="achievement-text">
                    <h4>Coding Excellence</h4>
                    <p>800+ LeetCode Problems Solved</p>
                    <span className="rating">Contest Rating: 1,536</span>
                  </div>
                </div>

                <motion.a
                  href="https://leetcode.com/u/RamdeoYadav/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-link"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Profile</span>
                  <ExternalLink size={18} />
                </motion.a>
              </div>

              {/* Progress bar */}
              <div className="progress-container">
                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
              <p className="progress-label">Problem Solving Expertise</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .education {
          padding: 4rem 0;
          background: linear-gradient(135deg, #16213e 0%, #0f0f23 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .education-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        .education-list {
          width: 100%;
        }

        .education-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 2rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 20px;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.4s ease;
          cursor: default;
          position: relative;
          overflow: hidden;
        }

        .education-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--education-gradient);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }

        .education-item:hover {
          border-color: var(--education-gradient);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          background: rgba(255, 255, 255, 0.15);
        }

        .education-item:hover::before {
          opacity: 0.05;
        }

        .education-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: var(--education-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 2;
        }

        .education-details {
          flex: 1;
          position: relative;
          z-index: 2;
        }

        .education-details h4 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .education-degree {
          color: #e2e8f0;
          margin-bottom: 1rem;
          font-size: 1.125rem;
          font-weight: 500;
          line-height: 1.4;
        }

        .education-meta {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .education-year,
        .education-grade {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .education-year {
          color: #6366f1;
        }

        .education-grade {
          color: #10b981;
        }

        .leetcode-achievement {
          background: linear-gradient(135deg, #f97316, #dc2626, #ec4899);
          border-radius: 20px;
          padding: 2.5rem;
          color: white;
          position: relative;
          overflow: hidden;
          transition: all 0.5s ease;
          margin-top: 3rem;
        }

        .shine-effect {
          position: absolute;
          inset: 0;
          opacity: 0.2;
          background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%);
          transform: translateX(-100%) skewX(-12deg);
          transition: transform 1s ease;
        }

        .leetcode-achievement:hover .shine-effect {
          transform: translateX(100%) skewX(-12deg);
        }

        .achievement-content {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 2;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .achievement-info {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .achievement-icon {
          padding: 15px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .achievement-text h4 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.25rem;
        }

        .achievement-text p {
          color: #fed7aa;
          font-weight: 600;
          margin: 0;
          font-size: 1.125rem;
        }

        .rating {
          display: block;
          color: #fbbf24;
          font-size: 0.9rem;
          font-weight: 500;
          margin-top: 0.25rem;
        }

        .achievement-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.2);
          padding: 12px 24px;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          text-decoration: none;
          color: white;
          font-weight: 600;
          font-size: 1rem;
        }

        .progress-container {
          margin-top: 1.5rem;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          height: 8px;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }

        .progress-bar {
          height: 100%;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        .progress-label {
          font-size: 0.8rem;
          color: #fed7aa;
          margin-top: 0.75rem;
          font-weight: 500;
          margin-bottom: 0;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .education {
            padding: 3rem 0;
            min-height: auto;
          }
          
          .education-item,
          .leetcode-achievement {
            padding: 1.5rem;
          }

          .education-meta {
            flex-direction: column;
            gap: 0.75rem;
          }

          .achievement-content {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }

          .achievement-link {
            align-self: stretch;
            justify-content: center;
          }

          .education-details h4 {
            font-size: 1.25rem;
          }

          .achievement-text h4 {
            font-size: 1.25rem;
          }

          .education-degree {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;