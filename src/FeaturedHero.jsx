import Placeholder from '@components/Placeholder'
import LinkRow from '@components/LinkRow'
import styles from './FeaturedHero.module.css'
import HeroOverlay from "@/HeroOverlay.jsx";
import {Box, Flex, Grid, Quote, Text} from "@radix-ui/themes";
import React from "react";
import firebaseIcon from '@assets/firebase.png'
import viteIcon from '@assets/vite.svg'
import rustIcon from '@assets/rust.png'
import karmaImg from '@assets/karma2.png'
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
            <Flex width={"100%"} style={{justifyContent:"space-evenly"}}>
              <TechIcon icon={firebaseIcon} name={"Firebase"}/>
              <TechIcon icon={viteIcon} name={"Vite"}/>
              <TechIcon icon={rustIcon} name={"Rust"}/>
            </Flex>
          </Flex>
        </Grid>

        <Flex className={styles.box} gridRow={"2/2"} gridColumn={"1/1"} justify={"center"} align={"center"}>
          <div>
            <div className={styles.metricLabel}>total lines of code</div>
            <div className={styles.linesValue}>500,467</div>
            <div className={styles.linesSub}>by <span style={{color:"var(--accent)"}}>real</span> students ages 7-17</div>
          </div>
        </Flex>
        <Flex className={styles.box} gridRow={"2/2"} gridColumn={"2/4"} justify={"center"} align={"center"} px={"7"} direction={"column"} style={{fontSize:"14pt",overflow:"clip",position:"relative",zIndex:"1"}}>
          <Quote wrap="pretty">Dillon was one of the most impressive student instructors I've ever seen. His ability to explain complex coding concepts with patience, clarity, and enthusiasm kept every student fully engaged from start to finish. Quite honestly, he taught with more skill and confidence than many professional educators. He has a remarkable gift for teaching and inspiring young people, and we were incredibly fortunate to have him lead our Coding Camp.</Quote>
          <br/>
          <Text align="right" style={{width:"100%"}} weight="bold">
            — Sally Newson, Founder, <a href={"https://karma-club.org/"}>Karma Club & The Kove</a>
          </Text>
          <img className={styles.karmaClubLogo} src={karmaImg} />
        </Flex>
      </Grid>
    </section>
  )
}
