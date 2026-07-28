import SectionHead from './SectionHead'
import WorkCard from './WorkCard'
import styles from './SelectedWork.module.css'
import { WORK } from '../data'

export default function SelectedWork() {
  return (
    <section id="work" className={styles.section}>
      <SectionHead title="Selected work" meta="4 featured · placeholder imagery" />
      <div className={styles.grid}>
        {WORK.map((w) => (
          <WorkCard key={w.title} {...w} />
        ))}
      </div>
    </section>
  )
}
