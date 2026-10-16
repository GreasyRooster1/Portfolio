import LinkRow from '@components/LinkRow.jsx'
import styles from './ProjectRow.module.css'
import {Box} from "@radix-ui/themes";
import {Tag} from "@/pages/directory/Tag.jsx";

export default function ProjectRow(props) {

    let rawLinkData = [
        props.projectData.writeup?{label:"writeup",href:props.projectData.writeup,accent:true}:undefined,
    ]

    let linkData = rawLinkData.filter(item => item !== undefined);

  return (
    <Box className={`${styles.row} ${props.last ? styles.rowLast : ''}`}>
      <div>
        <div className={styles.title}>{props.projectData.name}</div>
        <Box className={styles.sub} maxWidth={{initial:"320px",lg:"700px"}}>
            {props.projectData.desc}
        </Box>
      </div>
      <div className={styles.stack}>
          {props.projectData.tags.map(tag => (
              <Tag key={tag.name} tagClass={`${tag.color.replace("#","")}`} {...tag}/>
          ))}
      </div>
      <div className={styles.result}>{}</div>
      <LinkRow links={linkData} separated className={styles.links} />
    </Box>
  )
}
