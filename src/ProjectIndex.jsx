import SectionHead from '@components/SectionHead'
import IndexRow from '@components/IndexRow'
import styles from './ProjectIndex.module.css'

export default function ProjectIndex(props) {
  return (
    <section id="index" className={styles.section}>
      <SectionHead title="Everything else" meta={`${props.projects.length} projects`} />
      <div className={styles.header}>
        <div>№</div>
        <div>project</div>
        <div>stack</div>
        <div>result</div>
        <div className={styles.linksHead}>links</div>
      </div>
      {props.projects.map((project, i) => (
        <IndexRow key={project.n} {...project} last={i === props.projects.length - 1} />
      ))}
    </section>
  )
}
