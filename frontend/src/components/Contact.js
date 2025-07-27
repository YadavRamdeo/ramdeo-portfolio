// src/components/Contact.js - Fixed with proper styling
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:${data?.email || 'ramdeoyadav4545@gmail.com'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities and collaborations.
              Feel free to reach out if you'd like to discuss a project or just say hello!
            </p>

            <div className="contact-details">
              <motion.div
                className="contact-item"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${data?.email || 'ramdeoyadav4545@gmail.com'}`}>
                    {data?.email || 'ramdeoyadav4545@gmail.com'}
                  </a>
                </div>
              </motion.div>

              {data?.phone && (
                <motion.div
                  className="contact-item"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Phone</span>
                    <a href={`tel:${data.phone}`}>
                      {data.phone}
                    </a>
                  </div>
                </motion.div>
              )}

              <motion.div
                className="contact-item"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Location</span>
                  <span>{data?.location || 'India'}</span>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <h4>Connect with me</h4>
              <div className="social-buttons">
                {data?.linkedin_url && (
                  <motion.a
                    href={data.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link linkedin"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </motion.a>
                )}

                {data?.github_url && (
                  <motion.a
                    href={data.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link github"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send me a message</h3>

              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary submit-btn"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>

              <p className="form-note">
                This will open your default email client with the message pre-filled.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          padding: var(--space-3xl, 4rem) 0;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          position: relative;
          overflow: hidden;
        }

        .contact::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #f093fb, transparent);
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: start;
          margin-top: 2rem;
        }

        .contact-info h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
          position: relative;
        }

        .contact-info h3::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(135deg, #f093fb, #f5576c);
          border-radius: 2px;
        }

        .contact-info p {
          color: #e2e8f0;
          line-height: 1.8;
          margin-bottom: 2rem;
          font-size: 1.125rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          cursor: default;
        }

        .contact-item:hover {
          border-color: #6366f1;
          box-shadow: 0 8px 32px rgba(99, 102, 241, 0.2);
        }

        .contact-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);
        }

        .contact-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .contact-label {
          font-size: 0.875rem;
          color: #94a3b8;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .contact-text a,
        .contact-text span:not(.contact-label) {
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.125rem;
          transition: color 0.3s ease;
        }

        .contact-text a:hover {
          color: #6366f1;
        }

        .social-links {
          margin-top: 2rem;
        }

        .social-links h4 {
          color: #ffffff;
          font-size: 1.25rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .social-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: #ffffff;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 600;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .social-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--social-bg, linear-gradient(135deg, #6366f1, #8b5cf6));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .social-link:hover::before {
          opacity: 1;
        }

        .social-link:hover {
          color: white;
          border-color: transparent;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .social-link.linkedin {
          --social-bg: linear-gradient(135deg, #0077b5, #005885);
        }

        .social-link.github {
          --social-bg: linear-gradient(135deg, #333, #000);
        }

        .contact-form-container {
          position: relative;
        }

        .contact-form {
          background: rgba(255, 255, 255, 0.1);
          padding: 2.5rem;
          border-radius: 24px;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 16px 64px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .contact-form::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(240, 147, 251, 0.3), rgba(245, 87, 108, 0.3));
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
        }

        .contact-form h3 {
          color: #ffffff;
          font-size: 1.75rem;
          margin-bottom: 2rem;
          font-weight: 700;
          text-align: center;
          position: relative;
        }

        .contact-form h3::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(135deg, #f093fb, #f5576c);
          border-radius: 2px;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-sizing: border-box;
          backdrop-filter: blur(10px);
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #6366f1;
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
          transform: translateY(-2px);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #94a3b8;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
          line-height: 1.6;
        }

        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border: none;
          font-size: 1.125rem;
          font-weight: 700;
          padding: 1.25rem;
          position: relative;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .submit-btn:hover::before {
          transform: translateX(100%);
        }

        .form-note {
          font-size: 0.875rem;
          color: #94a3b8;
          text-align: center;
          font-style: italic;
          margin: 0;
        }

        @media (min-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
        }

        @media (max-width: 768px) {
          .contact {
            padding: 3rem 0;
          }

          .contact-form {
            padding: 2rem;
          }

          .contact-details {
            gap: 1rem;
          }

          .contact-item {
            padding: 1rem;
          }

          .social-buttons {
            flex-direction: column;
          }

          .social-link {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;