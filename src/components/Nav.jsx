import Cursor from './Cursor'
import styles from './Nav.module.css'
import {Flex} from "@radix-ui/themes";

const LINKS = ['work', 'index', 'about', 'experiments']

export default function Nav() {
  return (
    <Flex className={styles.nav} px={{initial:"8px",sm:"22px"}} py={{initial:"16px",sm:"64px"}}>
      <div className={styles.brand}>
        Dillon Wilson
        <Cursor />
      </div>
      <Flex className={styles.links} gap={{initial:"8px",sm:"12px",md:"24px"}}>
        <a href="#selected-work" className={styles.link}>featured</a>
        <a href="#project-index" className={styles.link}>projects</a>
        <a href="#experience" className={styles.link}>experience</a>
        {/*<a href="#7a" className={`${styles.link} ${styles.resume}`}>*/}
        {/*  résumé ↓*/}
        {/*</a>*/}
      </Flex>
    </Flex>
  )
}
