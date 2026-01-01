import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"profile"}
                            src={`/images/me.JPG`}
                            />
                        </div>
                        <h2>Let&apos;s secure</h2>
                    </span>
                    <h2>the future</h2>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Rounded  backgroundColor={"#00ff88"} className={styles.button}>
                            <p>Contact Me</p>
                        </Rounded>
                    </motion.div>
                    <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                        <Rounded>
                            <a href="mailto:saleh.touil@icloud.com" style={{textDecoration: 'none', color: 'inherit'}}>
                                <p>saleh.touil@icloud.com</p>
                            </a>
                        </Rounded>
                        <Rounded>
                            <a href="tel:+21652750718" style={{textDecoration: 'none', color: 'inherit'}}>
                                <p>+216 52 750 718</p>
                            </a>
                        </Rounded>
                        <Rounded>
                            <a href="/cv.pdf" download style={{textDecoration: 'none', color: 'inherit'}}>
                                <p>Download CV</p>
                            </a>
                        </Rounded>
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Location</h3>
                            <p>Soukra, Ariana, Tunisia</p>
                        </span>
                        <span>
                            <h3>Version</h3>
                            <p>2026 © Edition</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>socials</h3>
                            <Magnetic>
                                <a href="https://www.linkedin.com/in/saleh-eddine-touil/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
                                    <p>LinkedIn</p>
                                </a>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <a href="https://github.com/sbeving" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
                                <p>GitHub</p>
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="https://www.saleheddinetouil.tech" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
                                <p>Portfolio Site</p>
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="https://ctftime.org/team/375310" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
                                <p>CTFtime</p>
                            </a>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
