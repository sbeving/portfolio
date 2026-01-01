'use client';
import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Go", "C/C++", "JavaScript", "TypeScript", "Bash", "PHP", "Java", "SQL"]
  },
  {
    category: "Security Tools",
    items: ["Burp Suite", "Wireshark", "Nmap", "Metasploit", "Snort", "Splunk", "Volatility", "Kali Linux", "Ghidra", "OWASP ZAP"]
  },
  {
    category: "Frameworks & Stacks",
    items: ["MERN Stack", "Next.js", "React", "Node.js", "Express", "Odoo", "Flutter", "FastAPI"]
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "Git", "CI/CD", "GitHub Actions", "AWS", "Azure", "GCP", "n8n"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "SQL Server", "Redis"]
  }
];

const teamAchievements = [
  { title: "🥇 1st Place", event: "DarkNets 3.0 CTF", note: "National Competition 2025" },
  { title: "🥇 1st Place", event: "Cr4ck0ut 2.0 CTF", note: "National Competition" },
  { title: "🥈 2nd Place", event: "CyberMaze CTF", note: "Engineers Spark" },
  { title: "🥈 2nd Place", event: "Securinets TEK-UP Quals", note: "11 First Bloods!" },
  { title: "🏆 Top 8", event: "Securinets INSAT International", note: "Among 600+ Teams" },
];

const soloAchievements = [
  { title: "#157", event: "PatriotCTF 2025", note: "Out of 1300+ Solo" }
];

const certifications = [
  { name: "CCNA: Enterprise Networking, Security, and Automation", issuer: "Cisco", year: "2024" },
  { name: "CCNA: Switching, Routing, and Wireless Essentials", issuer: "Cisco", year: "2024" },
  { name: "CCNA: Introduction to Networks", issuer: "Cisco", year: "2024" },
  { name: "CCEP: Junior Cybersecurity Analyst", issuer: "Cisco", year: "2024" },
  { name: "CC (Certified in Cybersecurity)", issuer: "ISC2", year: "2024" },
  { name: "API Security Fundamentals", issuer: "APIsec University", year: "2025" },
  { name: "OWASP API Security Top 10", issuer: "APIsec University", year: "2025" },
  { name: "API Penetration Testing", issuer: "APIsec University", year: "2025" },
  { name: "Kubernetes Fundamentals (LFS258)", issuer: "Linux Foundation", year: "2025" },
  { name: "Zero Trust Security", issuer: "Zscaler", year: "2024" },
  { name: "Cloud Digital Leader", issuer: "Google Cloud", year: "2023" },
  { name: "Azure Fundamentals (AZ-900) Course", issuer: "Microsoft", year: "2023" },
  { name: "GitHub Foundations", issuer: "GitHub", year: "2024" },
  { name: "Ethical Hacker", issuer: "Cisco", year: "2024" },
  { name: "Network Defense", issuer: "Cisco", year: "2024" },
  { name: "Endpoint Security", issuer: "Cisco", year: "2024" }
];

export default function Skills() {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });

  return (
    <div id="skills" ref={container} className={styles.skills}>
      <div className={styles.body}>
        {/* CTF Achievements Section */}
        <motion.div 
          className={styles.achievementsSection}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>🏴 CTF Achievements</h2>
          <p className={styles.teamBadge}>Team no!dea — Competitive CTF Team</p>
          <div className={styles.achievementsGrid}>
            {teamAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={styles.achievementCard}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <h3>{achievement.title}</h3>
                <p className={styles.eventName}>{achievement.event}</p>
                <span className={styles.eventNote}>{achievement.note}</span>
              </motion.div>
            ))}
          </div>
          
          <h4 className={styles.soloHeader}>Solo Competitions</h4>
          <div className={styles.soloGrid}>
            {soloAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={styles.achievementCard}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3>{achievement.title}</h3>
                <p className={styles.eventName}>{achievement.event}</p>
                <span className={styles.eventNote}>{achievement.note}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div 
          className={styles.skillsSection}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2>💻 Technical Skills</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skillSet, index) => (
              <motion.div
                key={index}
                className={styles.skillCard}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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

        {/* Certifications Section */}
        <motion.div 
          className={styles.certificationsSection}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2>📜 Certifications ({certifications.length}+)</h2>
          <div className={styles.certGrid}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className={styles.certCard}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.04 }}
              >
                <span className={styles.certName}>{cert.name}</span>
                <div className={styles.certMeta}>
                  <span className={styles.certIssuer}>{cert.issuer}</span>
                  <span className={styles.certYear}>{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
