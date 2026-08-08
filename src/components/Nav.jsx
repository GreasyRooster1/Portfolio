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
        {LINKS.map((l) => (
          <a key={l} href="#7a" className={styles.link}>
            {l}
          </a>
        ))}
        <a href="#7a" className={`${styles.link} ${styles.resume}`}>
          résumé ↓
        </a>
      </div>
    </nav>
  )
}
