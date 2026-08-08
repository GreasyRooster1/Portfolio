import styles from './LinkRow.module.css'

// A row of monospace links. `separated` inserts slash dividers (used in the index table);
// otherwise links are spaced with flex gap (used under the featured hero and work cards).
export default function LinkRow({ links, separated = false, className }) {
  const cls = [separated ? styles.separated : styles.spaced, className].filter(Boolean).join(' ')
  return (
    <div className={cls}>
      {links.map((l, i) => (
        <span key={l.label}>
          {separated && i > 0 && <span className={styles.sep}>/</span>}
          <a className={l.accent ? styles.accent : styles.link} href={l.src}>
            {l.label}
          </a>
        </span>
      ))}
    </div>
  )
}
