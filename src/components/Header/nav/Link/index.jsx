import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { slide, scale } from '../../animation';

export default function Index({data, isActive, setSelectedIndicator, onClick}) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div 
        className={styles.link} 
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      >
        <motion.div 
          variants={scale} 
          animate={isActive ? "open" : "closed"} 
          className={styles.indicator}>
        </motion.div>
        <span onClick={onClick} style={{ cursor: 'pointer' }}>{title}</span>
      </motion.div>
    )
}