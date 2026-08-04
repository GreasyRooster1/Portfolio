import Placeholder from '@components/Placeholder'
import LinkRow from '@components/LinkRow'
import styles from './FeaturedHero.module.css'
import HeroOverlay from "@/HeroOverlay.jsx";
import {Box, Flex, Grid, Quote, Text} from "@radix-ui/themes";
import React, {useEffect, useState} from "react";
import firebaseIcon from '@assets/firebase.png'
import viteIcon from '@assets/vite.svg'
import rustIcon from '@assets/rust.png'
import karmaImg from '@assets/karma2.png'
import TechIcon from "@components/TechIcon.jsx";
import CountUp from "@components/CountUp.jsx";
import Carousel from "@components/Carousel.jsx";

import kc1 from "@assets/kc1.jpg"
import kc2 from "@assets/kc2.jpg"
import kc3 from "@assets/kc3.jpg"
import kc4 from "@assets/kc4.jpg"
import kc5 from "@assets/kc5.jpg"
import kc6 from "@assets/kc6.jpg"
import kc7 from "@assets/kc7.jpg"
import kc8 from "@assets/kc8.jpg"
import snake from "@assets/snakelesson.png"

const LINKS = [{ label: 'live demo', accent: true }, { label: 'source' }, { label: 'writeup' }]
const images = [kc1,kc2,kc3,kc4,kc5,kc6,kc7,kc8,snake];

export default function FeaturedHero() {
  const [totalLines, setTotalLines] = useState(527886)
  const [totalProjects, setTotalProjects] = useState(2523)

  useEffect(() => {
    fetch("https://portfolio-api.dillonjw.com/qcode_line_count")
        .then((data) => {
          data.json().then((dataJson) => {
            setTotalLines(dataJson)
          })
        })
    fetch("https://portfolio-api.dillonjw.com/qcode_project_count")
        .then((data) => {
          data.json().then((dataJson) => {
              setTotalProjects(dataJson)
          })
        })
  },[])

  return (
    <section className={styles.section}>
      <Flex direction="column" gap={{initial:"2",lg:"3"}} width={"100%"}>
        <Flex direction="row" style={{height:"50vh"}} gap={{initial:"2",lg:"3"}} width={"100%"}>
          <Flex className={styles.box} gridRow={"1/1"} gridColumn={"1/3"} height={"100%"} width={"100%"} flexGrow="1" style={{position:"relative",zIndex:1,overflow: "clip"}}>
            <Carousel images={images} style={{position:"absolute",zIndex:-1}} />
            <div style={{width:"100%",pointerEvents:"none"}}>
              <HeroOverlay />
            </div>
          </Flex>
          <Grid gridRow={"1/1"} gridColumn={"3/3"} direction="column" gap={{initial:"2",lg:"3"}} height={"100%"} width={"25%"} minWidth={"330px"}>
            <Flex className={styles.box} justify={"center"} align={"center"}>
              <div className={styles.metrics}>
                <div>
                  <div className={styles.metricLabel}>students</div>
                  <div className={styles.metricValue}>
                    <CountUp className={styles.metricValue}
                             from={100}
                             to={300}
                             separator=","
                             direction="up"
                             duration={.5}
                             delay={0}
                    />+
                  </div>
                </div>
                <div>
                  <div className={styles.metricLabel}>total projects</div>
                  <CountUp className={styles.metricValue}
                           from={1000}
                           to={totalProjects}
                           separator=","
                           direction="up"
                           duration={.5}
                           delay={0}
                  />
                </div>
              </div>
            </Flex>
            <Flex className={styles.box} justify={"center"} align={"center"} direction={"column"} gap="4">
              <div className={styles.metricLabel}>tech stack</div>
              <Flex width={"100%"} style={{justifyContent:"space-evenly"}} px="2">
                <TechIcon icon={firebaseIcon} name={"Firebase"}/>
                <TechIcon icon={viteIcon} name={"Vite"}/>
                <TechIcon icon={rustIcon} name={"Rust"}/>
              </Flex>
              <div className={styles.stackText}>JavaScript • TypeScript • CSS</div>
            </Flex>
            <Flex className={styles.box} justify={"center"} align={"center"} >
              <div>
                <div className={styles.metricLabel}>total lines of code</div>
                <CountUp className={styles.linesValue}
                         from={100000}
                         to={totalLines}
                         separator=","
                         direction="up"
                         duration={.5}
                         delay={0}
                />
                <div className={styles.linesSub}>by <span style={{color:"var(--accent)"}}>real</span> students ages 6-16</div>
              </div>
            </Flex>
          </Grid>
        </Flex>

        <Flex direction="row" style={{height:"20vh"}} gap={{initial:"2",lg:"3"}} width={"100%"}>
          <Flex className={styles.box} justify={"center"} align={"center"} width={"30%"}>
            d
          </Flex>
          <Flex className={styles.box} justify={"center"} align={"center"} width={"70%"} px={"7"} direction={"column"} style={{fontSize:"14pt",overflow:"clip",position:"relative",zIndex:"1"}}>
            <Quote wrap="pretty">Dillon was one of the most impressive student instructors I've ever seen. His ability to explain complex coding concepts with patience, clarity, and enthusiasm kept every student fully engaged from start to finish. Quite honestly, he taught with more skill and confidence than many professional educators. He has a remarkable gift for teaching and inspiring young people, and we were incredibly fortunate to have him lead our Coding Camp.</Quote>
            <br/>
            <Text align="right" style={{width:"100%"}} weight="bold">
              — Sally Newson, Founder, <a href={"https://karma-club.org/"}>Karma Club & The Kove</a>
            </Text>
            <img className={styles.karmaClubLogo} src={karmaImg} />
          </Flex>
        </Flex>
      </Flex>
    </section>
  )
}
