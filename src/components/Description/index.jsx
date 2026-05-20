import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function Index() {

    const phrase = "Full-time Bug Bounty Hunter focused on Web & API Security";
    const methods = [
        { label: "Recon", value: "Map exposed surfaces, hidden APIs, roles, and trust boundaries." },
        { label: "Exploit", value: "Test access control, auth logic, JWT, GraphQL, and business workflows." },
        { label: "Report", value: "Write clear impact, reproduction, evidence, and remediation guidance." }
    ];
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div id="about" ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
                    I hunt vulnerabilities full-time on Intigriti, with accepted reports from medium to critical impact. My work centers on recon, attack surface mapping, access control flaws, authentication logic, JWT issues, GraphQL testing, and chaining small weaknesses into reports that matter.
                    <br/><br/>
                    <strong>Current focus:</strong> Bug bounty methodology • Web & API Security • BOLA/IDOR • JWT and auth bypasses • GraphQL attack surface • Secure AI Integration
                    <br/><br/>
                    <strong>Certifications:</strong> HTB Certified Penetration Testing Specialist (CPTS) • CCNA Enterprise Networking • API Security Fundamentals • Zero Trust • Kubernetes • Cybersecurity Fundamentals
                </motion.p>
                <motion.div className={styles.methodGrid} variants={opacity} animate={isInView ? "open" : "closed"}>
                    {methods.map((item) => (
                        <div className={styles.methodCard} key={item.label}>
                            <span>{item.label}</span>
                            <p>{item.value}</p>
                        </div>
                    ))}
                </motion.div>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
