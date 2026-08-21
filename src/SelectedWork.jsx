import SectionHead from '@components/SectionHead'
import WorkCard from '@components/WorkCard'
import styles from './SelectedWork.module.css'
import PageSection from "@components/PageSection.jsx";
import {Grid} from "@radix-ui/themes";

export default function SelectedWork(props) {
  return (
    <PageSection id="work" {...props}>
      <SectionHead title="Selected work" meta={`${props.projects.length} featured projects`} />
      <Grid gapX={{initial:"8px",sm:"16px",md:"32px",lg:"64px"}} columns={{inital:"1",md:"2"}} gapY="48px" className={styles.grid}>
        {props.projects.map((w) => (
          <WorkCard key={w.title} {...w} />
        ))}
      </Grid>
    </PageSection>
  )
}
