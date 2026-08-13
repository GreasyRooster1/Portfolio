import Cursor from './Cursor'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.email}>
        dillonjwilson@gmail.com
        <Cursor />
      </div>
        <div><a href={"https://github.com/GreasyRooster1"}>github</a> / <a href={"mailto:dillonjwilson1@gmail.com"}>email</a></div>
    </footer>
  )
}
