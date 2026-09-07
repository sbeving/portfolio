import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    {
        color: "#1E293B",
        src: "gallery/no1dea-ensit.jpg"
    },
    {
        color: "#334155",
        src: "gallery/no1dea-smu.jpg"
    },
    {
        color: "#0F172A",
        src: "gallery/no1dea-isetcom2.jpg"
    },
    {
        color: "#1E293B",
        src: "gallery/round-table.jpg"
    }
]

const slider2 = [
    {
        color: "#334155",
        src: "gallery/no1dea-tek-up.jpg"
    },
    {
        color: "#0F172A",
        src: "gallery/no1dea-isetcom.jpg"
    },
    {
        color: "#1E293B",
        src: "gallery/no1dea-fl1tz.jpg"
    },
    {
        color: "#334155",
        src: "gallery/me-securinets-finals.jpg"
    }
]

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    // scaleY instead of height: transforms are composited, height forces layout every frame
    const scaleY = useTransform(scrollYProgress, [0, 0.9], [1, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{x: x1, willChange: "transform"}} className={styles.slider}>
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    sizes="(max-width: 768px) 45vw, 22vw"
                                    alt={"image"}
                                    src={`/images/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2, willChange: "transform"}} className={styles.slider}>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div key={index} className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    sizes="(max-width: 768px) 45vw, 22vw"
                                    alt={"image"}
                                    src={`/images/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{scaleY, transformOrigin: "top"}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
        </div>
    )
}
