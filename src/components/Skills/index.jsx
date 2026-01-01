'use client';
import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    category: "Security & Cyber",
    items: ["Penetration Testing", "SOC Analysis", "Network Security", "Web Security", "CTF Competitions", "Threat Hunting"]
  },
  {
    category: "Development",
    items: ["Python", "JavaScript/TypeScript", "Go", "React/Next.js", "Node.js", "MERN Stack"]
  },
  {
    category: "Tools & Platforms",
    items: ["Kali Linux", "Burp Suite", "Wireshark", "Metasploit", "Docker", "Git"]
  },
  {
    category: "Certifications",
    items: ["CCNA", "CCEP", "ISC2 Candidate", "API Security", "Kubernetes (LFS158)"]
  }
];

const achievements = [
  { title: "1st Place", event: "DarkNets 3.0 (2025)" },
  { title: "1st Place", event: "Cr4ck0ut 2.0" },
  { title: "2nd Place", event: "CyberMaze Engineers Spark" },
  { title: "Top 8", event: "Securinets INSAT International Finals" }

];

export default function Skills() {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });

  return (
    <div ref={container} className={styles.skills}>
      <div className={styles.body}>
        <motion.div 
          className={styles.achievementsSection}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>CTF Achievements</h2>
          <div className={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={styles.achievementCard}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{achievement.title}</h3>
                <p>{achievement.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className={styles.skillsSection}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2>Technical Skills</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skillSet, index) => (
              <motion.div
                key={index}
                className={styles.skillCard}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <h3>{skillSet.category}</h3>
                <ul>
                  {skillSet.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
