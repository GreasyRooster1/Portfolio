import SectionHead from '@components/SectionHead.jsx'
import IndexRow from '@/pages/index/IndexRow.jsx'
import styles from './ProjectTable.module.css'
import LinkRow from "@components/LinkRow.jsx";
import PageSection from "@components/PageSection.jsx";
import {DesktopView} from "@components/View.jsx";
import ProjectRow from "@/pages/directory/ProjectRow.jsx";
import {Box, Flex} from "@radix-ui/themes";

export default function ProjectTable(props) {
  return (
      <div className={styles.parent}>
          <div className={styles.header}>
            <div>project</div>
            <Flex justify={"center"}>language</Flex>
            <Flex justify={"center"}>technologies</Flex>
            <div className={styles.linksHead}>links</div>
          </div>
          {props.projects.map((project, i) => (
            <ProjectRow key={i} projectData={project} last={i === props.projects.length - 1} />
          ))}
      </div>
  )
}
