import LinkRow from '@components/LinkRow.jsx'
import styles from './ProjectRow.module.css'

export default function ProjectRow(props) {

    let rawLinkData = [
        props.projectData.writeup?{label:"writeup",href:props.projectData.writeup,accent:true}:undefined,
    ]

    let linkData = rawLinkData.filter(item => item !== undefined);

  return (
    <div className={`${styles.row} ${props.last ? styles.rowLast : ''}`}>
      <div>
        <div className={styles.title}>{props.projectData.name}</div>
        <div className={styles.sub}>{props.projectData.desc}</div>
      </div>
      <div className={styles.stack}>
          {}
      </div>
      <div className={styles.result}>{}</div>
      <LinkRow links={linkData} separated className={styles.links} />
    </div>
  )
}
