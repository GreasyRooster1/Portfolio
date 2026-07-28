import Placeholder from '@components/Placeholder'
import LinkRow from '@components/LinkRow'
import styles from './FeaturedHero.module.css'
import HeroOverlay from "@/HeroOverlay.jsx";
import {Flex, Grid} from "@radix-ui/themes";
import React from "react";

const LINKS = [{ label: 'live demo', accent: true }, { label: 'source' }, { label: 'writeup' }]

export default function FeaturedHero() {
  return (
    <section className={styles.section}>
      <Grid style={{height:"50vh"}} columns={{initial:"1",sm:"1",lg:"4"}} gap={{initial:"5",lg:"7"}} >

        <Flex className={styles.box} gridRow={"1/4"} gridColumn={"1/4"} justify="end" alignItems="center" direction="column" p={"2"}>
          <div className={styles.eyebrow}>featured · 2024-2026</div>
          <div className={styles.title}>Teaching Students</div>
          <p className={styles.desc}>
            Currently teaching Javascript, Arduino, Scratch and Python to students ages 6-16
          </p>
          <LinkRow links={LINKS} className={styles.links} />
        </Flex>
        <Flex className={styles.box} gridRow={"1/2"} >
          d
        </Flex>
        <Flex className={styles.box} gridRow={"2/5"} gridColumn={"4/5"}>
          ddd
        </Flex>
        <Flex className={styles.box} gridRow={"4/6"} gridColumn={"1/3"} >
          dd
        </Flex>
        <Flex className={styles.box} gridRow={"4/6"} gridColumn={"3/4"} >
          d
        </Flex>
        <Flex className={styles.box} gridRow={"5/6"} gridColumn={"4/5"} >
          d
        </Flex>

      </Grid>
    </section>
  )
}
