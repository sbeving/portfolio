import styles from './style.module.scss';

export default function index() {
  return (
    <div className={styles.footer}>
        <a href="https://www.linkedin.com/in/saleh-eddine-touil/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/sbeving" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.saleheddinetouil.tech" target="_blank" rel="noopener noreferrer">Portfolio</a>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
    </div>
  )
}
