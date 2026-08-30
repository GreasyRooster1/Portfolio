import SectionHead from '@components/SectionHead.jsx'
import IndexRow from '@/pages/index/IndexRow.jsx'
import styles from './ProjectIndex.module.css'
import LinkRow from "@components/LinkRow.jsx";
import PageSection from "@components/PageSection.jsx";
import {DesktopView} from "@components/View.jsx";

export default function ProjectIndex(props) {
  return (
      <DesktopView>
        <PageSection id="index" {...props}>
          <SectionHead title="More projects" meta={`${props.projects.length} projects`} />
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
        <a className={styles.moreContainer} href="https://github.com/GreasyRooster1?tab=repositories">
            <span className={styles.moreText}>View 58 public repositories...</span>
        </a>
        </PageSection>
      </DesktopView>
  )
}
