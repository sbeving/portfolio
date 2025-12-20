'use client';
import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: "AI Integration & Web Security Engineer",
    company: "Megapc",
    location: "Tunis, Tunisia",
    period: "Jul 2025 – Sep 2025",
    highlights: [
      "Integrated AI solutions (chatbot, intelligent PC builder, product recommender)",
      "Automated workflows using n8n and DeepSeek",
      "Hardened backoffice against broken authentication and exposed APIs"
    ]
  },
  {
    title: "Cybersecurity Intern",
    company: "KEYSTONE Group",
    location: "Tunis, Tunisia",
    period: "Jan 2025 – Feb 2025",
    highlights: [
      "Supported security assessments and red-team testing",
      "Vulnerability discovery and documentation"
    ]
  },
  {
    title: "SOC Analyst L1 Intern",
    company: "DefensyLAB",
    location: "Tunis, Tunisia",
    period: "Jun 2024 – Aug 2024",
    highlights: [
      "Handled SOC tickets and alert queues",
      "Performed log analysis and correlation",
      "Supported incident response workflow"
    ]
  },
  {
    title: "Web Developer & Project Manager",
    company: "Petshouse.tn",
    location: "Tunisia",
    period: "Jan 2024 – Sep 2024",
    highlights: [
      "Specialized in Odoo web development",
      "Reduced manual errors by 20% with automated invoicing",
      "Increased online sales by 25% through SEO optimization"
    ]
  }
];

export default function Experience() {
  const container = useRef(null);
  const isInView = useInView(container, { once: true, margin: "-100px" });

  return (
    <div ref={container} className={styles.experience}>
      <div className={styles.body}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Professional Experience
        </motion.h2>
        
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3>{exp.title}</h3>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <div className={styles.company}>
                  <strong>{exp.company}</strong> • {exp.location}
                </div>
                <ul className={styles.highlights}>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.timelineDot}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
