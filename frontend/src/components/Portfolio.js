import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './Hero';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import { portfolioAPI } from '../services/api';
import './Portfolio.css';

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingProgress(20);

        // Try to fetch summary first
        try {
          const response = await portfolioAPI.getSummary();
          setPortfolioData(response.data);
          setLoadingProgress(100);
        } catch (summaryError) {
          console.warn('Summary endpoint failed, fetching individual endpoints...');
          setLoadingProgress(30);

          // Fallback: fetch individual endpoints
          const [
            personalInfo,
            skills,
            experiences,
            education,
            projects,
            certifications,
            achievements
          ] = await Promise.allSettled([
            portfolioAPI.getPersonalInfo(),
            portfolioAPI.getSkills(),
            portfolioAPI.getExperiences(),
            portfolioAPI.getEducation(),
            portfolioAPI.getProjects(),
            portfolioAPI.getCertifications(),
            portfolioAPI.getAchievements()
          ]);

          setLoadingProgress(80);

          const data = {
            personal_info: personalInfo.status === 'fulfilled' ? personalInfo.value.data[0] : null,
            skills: skills.status === 'fulfilled' ? skills.value.data : [],
            experiences: experiences.status === 'fulfilled' ? experiences.value.data : [],
            education: education.status === 'fulfilled' ? education.value.data : [],
            featured_projects: projects.status === 'fulfilled' ?
              projects.value.data.filter(p => p.featured) : [],
            certifications: certifications.status === 'fulfilled' ? certifications.value.data : [],
            achievements: achievements.status === 'fulfilled' ? achievements.value.data : []
          };

          setPortfolioData(data);
          setLoadingProgress(100);
        }
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
        setError(error.message);

        // Fallback to static data
        setPortfolioData({
          personal_info: {
            name: "Ramdeo Yadav",
            title: "Software Engineer",
            summary: "Innovative and result-driven Software Engineer with 2+ years of experience in backend and full-stack development, distributed systems, and scalable microservices. Strong background in AI/ML development and ML-Ops practices.",
            years_experience: 2,
            leetcode_problems: 800,
            leetcode_rating: 1536,
            linkedin_url: "https://linkedin.com/in/ramdeoyadav",
            github_url: "https://github.com/YadavRamdeo",
            email: "ramdeoyadav4545@gmail.com",
            phone: "+91 9354067818",
            location: "India"
          },
          skills: [],
          experiences: [],
          education: [],
          featured_projects: [],
          certifications: [],
          achievements: []
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <motion.div
          className="loader"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <div className="loader-circle"></div>
        </motion.div>
        <motion.div
          className="loading-progress"
          initial={{ width: 0 }}
          animate={{ width: `${loadingProgress}%` }}
          transition={{ duration: 0.5 }}
        />
        <p>Loading Portfolio... {loadingProgress}%</p>
        {error && (
          <motion.div
            className="error-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Using offline data: {error}
          </motion.div>
        )}
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        className="portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero data={portfolioData?.personal_info} />
        <Skills data={portfolioData?.skills} />
        <Experience data={portfolioData?.experiences} />
        <Education data={portfolioData?.education} />
        <Projects data={portfolioData?.featured_projects} />
        <Contact data={portfolioData?.personal_info} />
      </motion.div>
    </AnimatePresence>
  );
};

export default Portfolio;