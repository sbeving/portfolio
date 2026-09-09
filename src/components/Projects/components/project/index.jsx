'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './style.module.scss';

// Per-type accent — used on the badge, the terminal glow and the hover border.
const ACCENTS = {
  Web: '#06b6d4',
  Product: '#22c55e',
  'Full-Stack': '#8b5cf6',
  Mobile: '#f59e0b',
};

const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function ProjectCard({ project }) {
  const { title, subtitle, src, url, type, year, tags = [], description, company } = project;
  const accent = ACCENTS[type] || '#22c55e';
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const Tag = url ? motion.a : motion.div;
  const linkProps = url
    ? { href: url, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Tag
      {...linkProps}
      className={styles.card}
      style={{ '--accent': accent }}
      variants={card}
    >
      <div className={styles.media}>
        {src ? (
          <>
            <Image
              className={styles.shot}
              src={`/images/${src}`}
              alt={`${title} — ${subtitle}`}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
            />
            <div className={styles.shade} />
          </>
        ) : (
          <div className={styles.terminal}>
            <div className={styles.termBar}>
              <span /><span /><span />
              <em>{slug}.sh</em>
            </div>
            <pre className={styles.termBody}>
              <span className={styles.cmt}># {type.toLowerCase()} · {year}</span>
              <span>
                <span className={styles.grn}>$</span> ./{slug}
              </span>
              {tags.map((t) => (
                <span key={t} className={styles.termLine}>
                  <span className={styles.arrow}>▸</span> {t}
                </span>
              ))}
              <span className={styles.caret}>▍</span>
            </pre>
          </div>
        )}

        <span className={styles.badge}>{type}</span>
        {url && (
          <span className={styles.live}>
            Live
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.year}>{year}</span>
          {company && <span className={styles.company}>{company}</span>}
        </div>
        <h3>
          {title}
          <span className={styles.sub}>{subtitle}</span>
        </h3>
        <p>{description}</p>
        <ul className={styles.tags}>
          {tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </Tag>
  );
}
