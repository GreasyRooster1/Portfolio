import Placeholder from '@components/Placeholder'
import LinkRow from '@components/LinkRow'
import styles from './FeaturedHero.module.css'
import HeroOverlay from "@/HeroOverlay.jsx";
import {Flex, Grid} from "@radix-ui/themes";

const LINKS = [{ label: 'live demo', accent: true }, { label: 'source' }, { label: 'writeup' }]

export default function FeaturedHero() {
  return (
    <section className={styles.section}>
      <Grid style={{aspectRatio:"3/2"}} columns={{initial:"1",sm:"1",lg:"3"}} gap={{initial:"5",lg:"7"}} >
        <Flex className={styles.box}>
          sadd1
        </Flex>

        <Flex className={styles.box}>
          sadd1
        </Flex>
        <Flex className={styles.box}>
          sadd1
        </Flex>
        <Flex className={styles.box}>
          sadd1
        </Flex>
        <Flex className={styles.box}>
          sadd1
        </Flex>
        <Flex className={styles.box}>
          sadd1
        </Flex>
      </Grid>
    </section>
  )
}
