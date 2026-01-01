'use client'
import Image from 'next/image'
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

  return (
    <motion.main id="home" variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <Image 
        src="/images/background.png"
        fill={true}
        alt="background"
        priority
      />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>SECURITY ENGINEER • CTF CHAMPION • AI INTEGRATOR • SOC ANALYST —</p>
          <p ref={secondText}>SECURITY ENGINEER • CTF CHAMPION • AI INTEGRATOR • SOC ANALYST —</p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <p>ISET&apos;COM Tunis — ICT Engineering</p>
        <p>Adversarial ML • Web Security • Threat Hunting</p>
      </div>
    </motion.main>
  )
}
