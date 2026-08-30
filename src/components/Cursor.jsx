import styles from './Cursor.module.css'

// Blinking terminal-style caret.
export default function Cursor() {
  return <span className={styles.cursor} />
}
