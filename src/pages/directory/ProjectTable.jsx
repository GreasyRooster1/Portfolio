import SectionHead from '@components/SectionHead.jsx'
import IndexRow from '@/pages/index/IndexRow.jsx'
import styles from './ProjectTable.module.css'
import LinkRow from "@components/LinkRow.jsx";
import PageSection from "@components/PageSection.jsx";
import {DesktopView} from "@components/View.jsx";
import ProjectRow from "@/pages/directory/ProjectRow.jsx";

export default function ProjectTable(props) {
  return (
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
            <ProjectRow key={project.n} {...project} last={i === props.projects.length - 1} />
          ))}
        </PageSection>
  )
}
