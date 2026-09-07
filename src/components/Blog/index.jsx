'use client';
import styles from './style.module.scss';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import posts from '../../data/latest-posts.json';

const BLOG_URL = 'https://blog.saleheddinetouil.tech';

export default function Blog() {
  const section = useRef(null);
  const isInView = useInView(section, { once: true, margin: '-80px' });

  return (
    <section id="blog" ref={section} className={styles.blog}>
      <div className={styles.body}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <div>
            <span className={styles.eyebrow}>blog.saleheddinetouil.tech</span>
            <h2>Writeups</h2>
            <p>Bug bounty findings and CTF writeups, with the requests and responses that proved them.</p>
          </div>
          <a className={styles.readAll} href={BLOG_URL} target="_blank" rel="noopener noreferrer">
            Read the blog
            <span aria-hidden="true">&rarr;</span>
          </a>
        </motion.div>

        {posts.length > 0 && (
          <div className={styles.grid}>
            {posts.map((post, i) => (
              <motion.a
                key={post.slug}
                className={styles.card}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              >
                <div className={styles.thumb}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt="" loading="lazy" />
                </div>
                <div className={styles.content}>
                  <span className={styles.date}>{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <span className={styles.more}>Read writeup &rarr;</span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
