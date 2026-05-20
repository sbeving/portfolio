'use client';
import styles from './style.module.scss';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const badges = [
  { title: 'Program Top 1', code: 'TOP-01', href: 'https://app.intigriti.com/profile/sbeve?openAchievement=program_top_one', tone: 'rank' },
  { title: 'Program Top 10', code: 'TOP-10', href: 'https://app.intigriti.com/profile/sbeve?openAchievement=program_top_ten', tone: 'rank' },
  { title: '10 Valid Submissions', code: 'VALID-10', href: 'https://app.intigriti.com/profile/sbeve?openAchievement=ten_valid_submission', tone: 'valid' },
  { title: 'Exceptional Severity', code: 'EXC', href: 'https://app.intigriti.com/profile/sbeve?openAchievement=exceptional_severity', tone: 'critical' },
  { title: 'Critical Severity', code: 'CRIT', href: 'https://app.intigriti.com/profile/sbeve?openAchievement=critical_severity', tone: 'critical' },
  { title: 'High Severity', code: 'HIGH', href: 'https://app.intigriti.com/profile/sbeve?openAchievement=high_severity', tone: 'high' },
  { title: 'Medium Severity', code: 'MED', href: 'https://app.intigriti.com/profile/sbeve?openAchievement=medium_severity', tone: 'medium' },
  { title: 'Low Severity', code: 'LOW', href: 'https://app.intigriti.com/profile/sbeve?openAchievement=low_severity', tone: 'low' }
];

const stats = [
  { label: 'Platform', value: 'Intigriti' },
  { label: 'Status', value: 'Full-time hunter' },
  { label: 'Impact range', value: 'Low to exceptional' },
  { label: 'Signal', value: 'Ranked programs' }
];

export default function IntigritiProof() {
  const section = useRef(null);
  const isInView = useInView(section, { once: true, margin: '-80px' });

  return (
    <section id="intigriti" ref={section} className={styles.proof}>
      <div className={styles.shell}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>intigriti.profile/sbeve</span>
          <h2>Validated impact, not portfolio theater.</h2>
          <p>
            A recruiter should not have to guess what I do. These achievements map directly to active bug bounty work:
            ranked program performance, valid submissions, and severity-backed findings.
          </p>
          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
          <a className={styles.profileLink} href="https://app.intigriti.com/profile/sbeve" target="_blank" rel="noopener noreferrer">
            Verify on Intigriti
          </a>
        </motion.div>

        <div className={styles.badges} aria-label="Intigriti achievement badges">
          {badges.map((badge, index) => (
            <motion.a
              href={badge.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.badge} ${styles[badge.tone]}`}
              key={badge.title}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <span className={styles.badgeMark}>{badge.code}</span>
              <span className={styles.badgeTitle}>{badge.title}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
