import SectionHead from '@components/SectionHead'
import IndexRow from '@components/IndexRow'
import styles from './ProjectIndex.module.css'
import { INDEX_ROWS } from '@/data'

export default function ProjectIndex() {
  return (
    <section id="index" className={styles.section}>
      <SectionHead title="Everything else" meta="8 projects · full index" />
      <div className={styles.header}>
        <div>№</div>
        <div>project</div>
        <div>stack</div>
        <div>result</div>
        <div className={styles.linksHead}>links</div>
      </div>
      {INDEX_ROWS.map((r, i) => (
        <IndexRow key={r.n} {...r} last={i === INDEX_ROWS.length - 1} />
      ))}
    </section>
  )
}
