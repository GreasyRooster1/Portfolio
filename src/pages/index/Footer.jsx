import Cursor from '@components/Cursor.jsx'
import styles from './Footer.module.css'
import {Flex} from "@radix-ui/themes";

export default function Footer() {
  return (
    <Flex px={{initial:"8px",sm:"28px"}} py={{initial:"18px",sm:"64px"}} className={styles.footer}>
      <div className={styles.email}>
        DillonJWilson1@gmail.com
        <Cursor />
      </div>
        <div><a href={"https://github.com/GreasyRooster1"}>github</a> / <a href={"mailto:dillonjwilson1@gmail.com"}>email</a></div>
    </Flex>
  )
}
