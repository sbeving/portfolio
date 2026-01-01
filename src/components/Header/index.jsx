'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from '../../common/Magnetic';

export default function Index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect( () => {
      if(isActive) setIsActive(false)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"},setIsActive(false))}
            }
        })
    }, [])

    return (
        <>
        <div ref={header} className={styles.header}>
            <div className={styles.logo}>
                <p className={styles.copyright}>👾</p>
                <div className={styles.name}>
                    <p className={styles.codeBy}>sbeve@</p>
                    <p className={styles.dennis}>SalehEddineTouil</p>
                </div>
            </div>
            <div className={styles.nav}>
                <Magnetic>
                    <div className={styles.el}>
                        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>CV</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
            </div>
            {/* Mobile hamburger button - always visible on mobile */}
            <div className={styles.mobileMenuBtn} onClick={() => setIsActive(!isActive)}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </div>
        </div>
        {/* Floating button that appears bottom right after scrolling 
        <div ref={button} className={styles.headerButtonContainer}>
            <Magnetic>
                <div onClick={() => setIsActive(!isActive)} className={styles.button}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </div>
            </Magnetic>
        </div>*/}
        <AnimatePresence mode="wait">
            {isActive && <Nav closeMenu={() => setIsActive(false)} />}
        </AnimatePresence>
        </>
    )
}
