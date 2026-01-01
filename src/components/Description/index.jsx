import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function Index() {

    const phrase = "Results-driven Security Engineer & CTF Champion pursuing ICT at ISET'COM Tunis";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
                    Certified cybersecurity professional with hands-on experience in AI integration, SOC operations, and red-team testing. Passionate about securing networks, solving CTF challenges, and building innovative solutions that bridge security with emerging technologies.
                    <br/><br/>
                    <strong>Research Interests:</strong> Adversarial Machine Learning (evasion/robustness/privacy) • Web & API Security • Threat Hunting and Attack Reconstruction • Secure AI Integration • Log Analysis and Correlation
                    <br/><br/>
                    <strong>Certifications:</strong> CCNA Enterprise Networking • CCEP (Red Team Leaders) • ISC2 Candidate • API Security Fundamentals • Kubernetes & Zero Trust (Linux Foundation)
                </motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
