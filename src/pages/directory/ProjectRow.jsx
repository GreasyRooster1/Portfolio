import LinkRow from '@components/LinkRow.jsx'
import styles from './ProjectRow.module.css'

export default function ProjectRow({ n, title, sub, stack, result, links, last }) {
  return (
    <div className={`${styles.row} ${last ? styles.rowLast : ''}`}>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.sub}>{sub}</div>
      </div>
      <div className={styles.stack}>{stack}</div>
      <div className={styles.result}>{result}</div>
      <LinkRow links={links} separated className={styles.links} />
    </div>
  )
}
