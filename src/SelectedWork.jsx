import SectionHead from '@components/SectionHead'
import WorkCard from '@components/WorkCard'
import styles from './SelectedWork.module.css'
import { WORK } from '@/data'
import PageSection from "@components/PageSection.jsx";

export default function SelectedWork(props) {
  return (
    <PageSection id="work" className={styles.section} {...props}>
      <SectionHead title="Selected work" meta={`${props.projects.length} featured projects`} />
      <div className={styles.grid}>
        {props.projects.map((w) => (
          <WorkCard key={w.title} {...w} />
        ))}
      </div>
    </PageSection>
  )
}
