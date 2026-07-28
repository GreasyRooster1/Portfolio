import styles from './Placeholder.module.css'

// Hatched image slot with a corner caption. `height` is per-instance, so it stays inline.
export default function Placeholder({ height, note }) {
  return (
    <div className={styles.placeholder} style={{ height }}>
      {note && <span className={styles.note}>{note}</span>}
    </div>
  )
}
