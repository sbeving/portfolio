import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function Index() {

    const phrase = "Cybersecurity Specialist • ICT Engineering Student • ISET'COM Tunis";
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
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>Full-stack developer with expertise in penetration testing, secure architecture design, and competitive CTF challenges. Passionate about building secure, scalable applications and solving complex security problems.<br/><br/>🏆 <strong>CTF Achievements:</strong> 1st Place DarkNets CTF 3.0 (2024) • Top 8 Securinets INSAT Finals • Top 20 Arab Security CyberDay<br/><br/>🔐 <strong>Core Skills:</strong> Penetration Testing • Secure Development • Cloud Security • AI/ML Integration • Full-Stack (MERN, Django, FastAPI)</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
