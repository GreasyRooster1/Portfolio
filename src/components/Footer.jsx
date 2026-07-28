import Cursor from './Cursor'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.email}>
        you@example.com
        <Cursor />
      </div>
      <div>github / linkedin / rss</div>
    </footer>
  )
}
