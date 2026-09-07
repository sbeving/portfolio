'use client';
import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    category: "Offensive Security",
    items: ["Penetration Testing", "Active Directory Attacks", "Privilege Escalation", "Lateral Movement", "Pivoting & Tunneling", "Post-Exploitation", "Kerberoasting", "Password Attacks", "Network Enumeration", "Threat Modeling"]
  },
  {
    category: "Bug Bounty & AppSec",
    items: ["BOLA/IDOR", "Auth Bypass", "JWT Testing", "GraphQL", "Business Logic", "Recon", "API Security", "Access Control", "Responsible Disclosure"]
  },
  {
    category: "Security Tools",
    items: ["Burp Suite", "Caido", "Nmap", "Wireshark", "Metasploit", "OWASP ZAP", "Kali Linux", "BloodHound", "Snort", "Splunk", "Ghidra"]
  },
  {
    category: "Reporting & Defence",
    items: ["Vulnerability Reporting", "Impact & Severity Rating", "CVSS", "Remediation Guidance", "SOC Triage", "Log Analysis", "Incident Documentation", "Secure Code Review"]
  },
  {
    category: "Programming Languages",
    items: ["Python", "Go", "JavaScript", "TypeScript", "Bash", "PHP", "C/C++", "Java", "SQL"]
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
  { title: "1st Place", event: "GCUP v2 CTF", note: "Second consecutive win - Institut français de Tunisie, organized by Securinets" },
  { title: "1st Place", event: "GCUP v1 CTF", note: "Institut français de Tunisie, first edition" },
  { title: "1st Place", event: "Darkest Hour CTF Eclipse Edition", note: "Securinets INSAT" },
  { title: "1st Place", event: "DarkNets 3.0 CTF", note: "National Competition 2025" },
  { title: "1st Place", event: "Cr4ck0ut 2.0 CTF", note: "Securinets SMU" },
  { title: "2nd Place", event: "CTF KAREEM", note: "Securinets TEK-UP - 11 first bloods" },
  { title: "2nd Place", event: "Cybermaze CTF", note: "Engineers Spark - ISET'COM" },
  { title: "Top 8", event: "Securinets INSAT International Finals", note: "Among 600+ teams, MENA and beyond" },
  { title: "8th Place", event: "Darkest Hour CTF", note: "Securinets INSAT - out of 70 teams" },
];

const certifications = [
  {
    name: "Hack The Box Certified Penetration Testing Specialist (CPTS)",
    issuer: "Hack The Box",
    year: "2026",
    badgeUrl: "https://academy.hackthebox.com/achievement/badge/6a2494e3-2792-11f1-9254-bea50ffe6cb4",
    certificateUrl: "/cpts-certificate.pdf"
  },
  {
    name: "TOEIC",
    issuer: "ETS",
    year: "2025",
    badgeUrl: "https://media.licdn.com/dms/image/v2/D4D2DAQFfBrjUQpWINA/profile-treasury-image-shrink_800_800/B4DZ0gxD2oIoAc-/0/1774371227380?e=1779883200&v=beta&t=I9_sIdlcrQp5D2Egln2EbvcqDi1c7sM043Jk3MFZ4Ew",
    certificateUrl: "/toeic.jpeg"
  },
  { name: "CCNA: Enterprise Networking, Security, and Automation", issuer: "Cisco", year: "2025" },
  { name: "CCNA: Switching, Routing, and Wireless Essentials", issuer: "Cisco", year: "2025" },
  { name: "CCNA: Introduction to Networks", issuer: "Cisco", year: "2025" },
  { name: "Cybersecurity Fundamentals", issuer: "IBM", year: "2025" }
];

export default function Skills() {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });

  return (
    <div id="skills" ref={container} className={styles.skills}>
      <div className={styles.body}>
        {/* CTF achievements section */}
        <motion.div 
          className={styles.achievementsSection}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>CTF Achievements</h2>
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
        </motion.div>

        {/* Technical Skills Section */}
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
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
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
          <h2>Certifications</h2>
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
                {(cert.badgeUrl || cert.certificateUrl) && (
                  <div className={styles.certLinks}>
                    {cert.badgeUrl && (
                      <a href={cert.badgeUrl} target="_blank" rel="noopener noreferrer">
                        View badge
                      </a>
                    )}
                    {cert.certificateUrl && (
                      <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                        Certificate
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
