'use client';
import styles from './style.module.scss';
import Image from 'next/image';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    category: "Bug Bounty & AppSec",
    items: ["BOLA/IDOR", "Auth Bypass", "JWT Testing", "GraphQL", "Business Logic", "Recon", "API Security", "Access Control", "Responsible Disclosure"]
  },
  {
    category: "Security Tools",
    items: ["Burp Suite", "Caido", "Nmap", "Wireshark", "Metasploit", "OWASP ZAP", "Kali Linux", "Snort", "Splunk", "Ghidra"]
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

const bugBountyMilestones = [
  { title: "Full-time", event: "Intigriti Hunter", note: "Active since Jan 2026" },
  { title: "Medium-Critical", event: "Accepted reports", note: "Web and API impact range" },
  { title: "VDP", event: "Digital Flanders", note: "Improper access control confirmed via YesWeHack" },
  { title: "Research Loop", event: "Duplicates to variants", note: "Variant hunting, impact refinement, better recon" }
];

const intigritiBadges = [
  {
    title: "Program Top 1",
    href: "https://app.intigriti.com/profile/sbeve?openAchievement=program_top_one",
    image: "/images/intigriti-badges/program-top-one.webp"
  },
  {
    title: "Program Top 10",
    href: "https://app.intigriti.com/profile/sbeve?openAchievement=program_top_ten",
    image: "/images/intigriti-badges/program-top-ten.webp"
  },
  {
    title: "10 Valid Submissions",
    href: "https://app.intigriti.com/profile/sbeve?openAchievement=ten_valid_submission",
    image: "/images/intigriti-badges/ten-valid-submission.webp"
  },
  {
    title: "Exceptional Severity",
    href: "https://app.intigriti.com/profile/sbeve?openAchievement=exceptional_severity",
    image: "/images/intigriti-badges/exceptional-severity.webp"
  },
  {
    title: "Critical Severity",
    href: "https://app.intigriti.com/profile/sbeve?openAchievement=critical_severity",
    image: "/images/intigriti-badges/critical-severity.webp"
  },
  {
    title: "High Severity",
    href: "https://app.intigriti.com/profile/sbeve?openAchievement=high_severity",
    image: "/images/intigriti-badges/high-severity.webp"
  },
  {
    title: "Medium Severity",
    href: "https://app.intigriti.com/profile/sbeve?openAchievement=medium_severity",
    image: "/images/intigriti-badges/medium-severity.webp"
  },
  {
    title: "Low Severity",
    href: "https://app.intigriti.com/profile/sbeve?openAchievement=low_severity",
    image: "/images/intigriti-badges/low-severity.webp"
  }
];

const teamAchievements = [
  { title: "1st Place", event: "Institut français de Tunisie CTF", note: "Team Shadows" },
  { title: "1st Place", event: "Darkest Hour CTF", note: "Team no!dea" },
  { title: "1st Place", event: "Darkest Hour CTF Eclipse Edition", note: "Team no!dea" },
  { title: "1st Place", event: "DarkNets 3.0 CTF", note: "National Competition 2025" },
  { title: "1st Place", event: "Cr4ck0ut 2.0 CTF", note: "National Competition" },
  { title: "Top 8", event: "Securinets INSAT International", note: "Among 600+ teams" },
];

const soloAchievements = [
  { title: "#157", event: "PatriotCTF 2025", note: "Out of 1300+ Solo" }
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
  { name: "Certified Cybersecurity Educator Professional (CCEP)", issuer: "Red Team Leaders", year: "2025" },
  { name: "CCNA: Enterprise Networking, Security, and Automation", issuer: "Cisco", year: "2025" },
  { name: "CCNA: Introduction to Networks", issuer: "Cisco", year: "2025" },
  { name: "API Security Fundamentals", issuer: "APIsec University", year: "2025" },
  { name: "Prompt Engineering Foundation Learner", issuer: "Certiprof", year: "2025" },
  { name: "LFS183: Introduction to Zero Trust", issuer: "The Linux Foundation", year: "2025" },
  { name: "LFS158: Introduction to Kubernetes", issuer: "The Linux Foundation", year: "2025" },
  { name: "Cybersecurity Fundamentals", issuer: "IBM", year: "2025" }
];

export default function Skills() {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });

  return (
    <div id="skills" ref={container} className={styles.skills}>
      <div className={styles.body}>
        {/* Bug bounty section */}
        <motion.div
          className={styles.achievementsSection}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Bug Bounty Focus</h2>
          <p className={styles.teamBadge}>Intigriti - Web, API, auth, access control, and exploit chaining</p>
          <div className={styles.achievementsGrid}>
            {bugBountyMilestones.map((achievement, index) => (
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
          <div className={styles.badgePanel}>
            <div className={styles.badgeCopy}>
              <span>Intigriti evidence</span>
              <h3>Achievement badges recruiters can verify.</h3>
              <p>Program ranking and severity badges linked directly to the public Intigriti profile.</p>
              <a href="https://app.intigriti.com/profile/sbeve" target="_blank" rel="noopener noreferrer">
                Open full profile
              </a>
            </div>
            <div className={styles.badgeGrid}>
              {intigritiBadges.map((badge, index) => (
                <motion.a
                  href={badge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.badgeCard}
                  key={badge.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.18 + index * 0.04 }}
                >
                  <Image src={badge.image} alt={`${badge.title} Intigriti badge`} width={92} height={92} />
                  <span>{badge.title}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

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
          <h2>Technical Skills</h2>
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
