import Cursor from './Cursor'
import styles from './Nav.module.css'

const LINKS = ['work', 'index', 'about', 'experiments']

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        Dillon Wilson
        <Cursor />
      </div>
      <div className={styles.links}>
        <a href="#selected-work" className={styles.link}>featured</a>
        <a href="#project-index" className={styles.link}>projects</a>
        <a href="#experience" className={styles.link}>experience</a>
        {/*<a href="#7a" className={`${styles.link} ${styles.resume}`}>*/}
        {/*  résumé ↓*/}
        {/*</a>*/}
      </div>
    </nav>
  )
}
