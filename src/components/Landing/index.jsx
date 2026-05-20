'use client'
import styles from './style.module.scss'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const scrollDirection = useRef(-1);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Smooth infinite scroll with GSAP timeline
    const tl = gsap.timeline({ repeat: -1 });
    
    tl.to([firstText.current, secondText.current], {
      xPercent: -100,
      duration: 25,
      ease: "none",
    });

    // Scroll direction changes speed
    ScrollTrigger.create({
      trigger: document.documentElement,
      start: 0,
      end: window.innerHeight,
      scrub: true,
      onUpdate: (self) => {
        scrollDirection.current = self.direction;
        // Speed up when scrolling down, reverse when scrolling up
        const velocity = self.getVelocity() / 1000;
        gsap.to(tl, {
          timeScale: scrollDirection.current === 1 ? 1 + Math.abs(velocity) * 0.5 : -0.5 - Math.abs(velocity) * 0.3,
          duration: 0.5,
          ease: "power2.out",
          overwrite: true
        });
      },
      onLeave: () => {
        gsap.to(tl, { timeScale: 1, duration: 1, ease: "power2.out" });
      },
      onEnterBack: () => {
        gsap.to(tl, { timeScale: 1, duration: 1, ease: "power2.out" });
      }
    });

    // Reset to normal speed when not scrolling
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        gsap.to(tl, { timeScale: 1, duration: 1.5, ease: "power3.out" });
      }, 150);
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      tl.kill();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const proofPoints = [
    { label: 'Platform', value: 'Intigriti' },
    { label: 'Reports', value: '10+ valid' },
    { label: 'Impact', value: 'Low - Exceptional' },
    { label: 'Cert', value: 'CPTS' }
  ];

  return (
    <motion.main id="home" variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <section className={styles.heroPanel} aria-label="Portfolio introduction">
        <div className={styles.kicker}>
          <span className={styles.statusDot}></span>
          Available for application security roles and collaborations
        </div>
        <h1>Saleh Eddine Touil</h1>
        <p className={styles.lede}>
          Full-time bug bounty hunter turning recon, access-control testing, and exploit chaining into validated security impact.
        </p>
        <div className={styles.actions}>
          <a href="https://app.intigriti.com/profile/sbeve" target="_blank" rel="noopener noreferrer">View Intigriti</a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">Open CV</a>
        </div>
      </section>
      <aside className={styles.signalBoard} aria-label="Security proof points">
        <div className={styles.signalHeader}>
          <span>researcher.signal</span>
          <span>live</span>
        </div>
        <div className={styles.signalGrid}>
          {proofPoints.map((point) => (
            <div className={styles.signalItem} key={point.label}>
              <span>{point.label}</span>
              <strong>{point.value}</strong>
            </div>
          ))}
        </div>
      </aside>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>RECON • ACCESS CONTROL • AUTH LOGIC • API SECURITY —</p>
          <p ref={secondText}>RECON • ACCESS CONTROL • AUTH LOGIC • API SECURITY —</p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <p>Full-time bug bounty hunter on Intigriti</p>
        <p>Web & API Security • IDOR/BOLA • Auth Logic • Recon</p>
      </div>
    </motion.main>
  )
}
