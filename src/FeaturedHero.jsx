import Placeholder from '@components/Placeholder'
import LinkRow from '@components/LinkRow'
import styles from './FeaturedHero.module.css'
import HeroOverlay from "@/HeroOverlay.jsx";
import {Box, Flex, Grid, Text} from "@radix-ui/themes";
import React from "react";
import firebaseIcon from '@assets/firebase.png'
import viteIcon from '@assets/vite.svg'
import TechIcon from "@components/TechIcon.jsx";

const LINKS = [{ label: 'live demo', accent: true }, { label: 'source' }, { label: 'writeup' }]

export default function FeaturedHero() {
  return (
    <section className={styles.section}>
      <Grid style={{height:"60vh"}} columns={{initial:"1",sm:"1",lg:"3"}} gap={{initial:"2",lg:"3"}} >

        <Flex className={styles.box} gridRow={"1/1"} gridColumn={"1/3"}>
          <div>
            <HeroOverlay />
          </div>
        </Flex>
        <Grid gridRow={"1/1"} gridColumn={"3/3"} direction="column" gap={{initial:"2",lg:"3"}}>
          <Flex className={styles.box} justify={"center"} align={"center"}>
            <div className={styles.metrics}>
              <div>
                <div className={styles.metricLabel}>students</div>
                <div className={styles.metricValue}>300+</div>
              </div>
              <div>
                <div className={styles.metricLabel}>total projects</div>
                <div className={styles.metricValue}>2,467</div>
              </div>
            </div>
          </Flex>
          <Flex className={styles.box} justify={"center"} align={"center"}>
            <Flex width={"70%"} style={{justifyContent:"space-evenly"}}>
              <TechIcon icon={firebaseIcon} name={"Firebase"}/>
              <TechIcon icon={viteIcon} name={"Vite"}/>
            </Flex>
          </Flex>
        </Grid>

        <Flex className={styles.box} gridRow={"2/2"} gridColumn={"1/1"} justify={"center"} align={"center"}>

        </Flex>
        <Flex className={styles.box} gridRow={"2/2"} gridColumn={"2/4"}>
        </Flex>
      </Grid>
    </section>
  )
}
