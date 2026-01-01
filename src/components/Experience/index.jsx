'use client';
import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: "AI Integration & Web Security Engineer",
    company: "Megapc",
    location: "Tunis, Tunisia (On-site)",
    period: "Jul 2025 – Sep 2025",
    highlights: [
      "Integrated AI solutions (chatbot, intelligent PC builder, product recommender) into production web systems",
      "Automated workflows using n8n and DeepSeek to reduce repetitive tasks and improve turnaround time",
      "Hardened backoffice and website against broken authentication, exposed/public APIs, and privilege escalation paths"
    ]
  },
  {
    title: "Debrief Administrator",
    company: "Jetpack Delivery",
    location: "Ariana, Tunisia (On-site)",
    period: "May 2025 – Jul 2025",
    highlights: [
      "Operational support role focused on structured reporting/debriefing",
      "Coordination and process follow-up for delivery operations"
    ]
  },
  {
    title: "Cybersecurity Intern",
    company: "KEYSTONE Group",
    location: "Tunis, Tunisia",
    period: "Jan 2025 – Feb 2025",
    highlights: [
      "Supported security assessments and red-team style testing",
      "Vulnerability discovery, documentation, and remediation focus"
    ]
  },/*
  {
    title: "SOC Analyst L1 Intern",
    company: "DefensyLAB",
    location: "Tunis, Tunisia",
    period: "Jun 2024 – Aug 2024",
    highlights: [
      "Handled SOC tickets and alert queues: triage, enrichment, prioritization, and escalation",
      "Performed log analysis and basic correlation to validate alerts and reduce false positives",
      "Supported incident response workflow with clear documentation, timelines, and reporting"
    ]
  },*/
  {
    title: "Web Developer & Project Manager",
    company: "Petshouse.tn",
    location: "Tunisia (Hybrid)",
    period: "Jan 2024 – Sep 2024",
    highlights: [
      "Specialized in Odoo web development for invoicing, e-commerce, and shop management (MVP pattern)",
      "Reduced manual errors by 20% through automated invoicing features",
      "Increased online sales by 25% through SEO optimization and targeted marketing campaigns",
      "Managed CRM integration and social media strategies to improve customer engagement"
    ]
  },
  {
    title: "Web Developer",
    company: "OUSSMAN4WD Automotive",
    location: "Tunis, Tunisia (On-site)",
    period: "Jan 2023 – Mar 2023",
    highlights: [
      "Developed and maintained website components",
      "Strengthened foundations in practical web delivery and maintenance"
    ]
  },
  {
    title: "Intern Data Analyst",
    company: "Orange Tunisia (Orange Business Services)",
    location: "Tunis, Tunisia",
    period: "Jan 2022 – Feb 2022",
    highlights: [
      "Conducted data cleaning, filtering, and dashboard creation for reporting and analytics",
      "Improved data accuracy by 15% through efficient data cleaning processes",
      "Collaborated with cross-functional teams to deliver actionable insights for business decision-making"
    ]
  }
];

export default function Experience() {
  const container = useRef(null);
  const isInView = useInView(container, { once: true, margin: "-100px" });

  return (
    <div id="experience" ref={container} className={styles.experience}>
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
              transition={{ duration: 0.6, delay: index * 0.15 }}
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
