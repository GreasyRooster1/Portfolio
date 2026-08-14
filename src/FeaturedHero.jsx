import Placeholder from '@components/Placeholder'
import LinkRow from '@components/LinkRow'
import styles from '@/FeaturedHero.module.css'
import HeroOverlay from "@/HeroOverlay.jsx";
import {Box, Flex, Grid, Quote, Text} from "@radix-ui/themes";
import React, {useEffect, useState} from "react";

import karmaImg from '@assets/karma2.png'
import TechIcon from "@components/TechIcon.jsx";
import CountUp from "@components/CountUp.jsx";
import Carousel from "@components/Carousel.jsx";
import Overlay from "@components/Overlay.jsx";
import ProjectsGrid from "@/ProjectsGrid.jsx";
import HeroQuote from "@components/HeroQuote.jsx";
import CarouselPrimitive from "@components/CarouselPrimitive.jsx";
import {ImagesBlock} from "@/heroComponents/ImagesBlock.jsx";
import StatsBlock from "@/heroComponents/StatsBlock.jsx";
import {LineBlock} from "@/heroComponents/LineBlock.jsx";
import {StackComponent} from "@/heroComponents/StackComponent.jsx";

const LINKS = [{ label: 'live demo', accent: true }, { label: 'source' }, { label: 'writeup' }]

export default function FeaturedHero() {
  return (
    <section className={styles.section}>
      <Flex direction="column" gap={{initial:"2",lg:"3"}} width={"100%"}>
        <Flex direction="row" height={{initial:"100vh",md:"70vh",lg:"50vh"}} gap={{initial:"2",lg:"3"}} minHeight="600px" width={"100%"}>
          <ImagesBlock/>
          <Grid gridRow={"1/1"} gridColumn={"3/3"} direction="column" gap={{initial:"2",lg:"3"}} height={"100%"} width={"25%"} minWidth={"330px"}>
            <StatsBlock/>
            <StackComponent/>
            <LineBlock/>
          </Grid>
        </Flex>

        <Flex direction="row" height={{initial:"40vh",md:"35vh",lg:"20vh"}} gap={{initial:"2",lg:"3"}} width={"100%"} minHeight="230px">
          <Flex className={styles.box} justify={"center"} align={"center"} width={"30%"} style={{position:"relative",overflow:"clip"}}>
            <ProjectsGrid/>
          </Flex>
          <Flex className={styles.box} justify={"center"} align={"center"} width={"70%"} direction={"column"} style={{fontSize:"14pt",overflow:"clip",position:"relative",zIndex:"1"}}>
            <CarouselPrimitive autoTime={5000} noArrows>
              <HeroQuote author={(<>
                Sally Newson, Founder, <a href={"https://karma-club.org/"}>Karma Club & The Kove</a>
              </>)}
              src={karmaImg}>
                Dillon was one of the most impressive student instructors I've ever seen. His ability to explain complex coding concepts with patience, clarity, and enthusiasm kept every student fully engaged from start to finish. Quite honestly, he taught with more skill and confidence than many professional educators. He has a remarkable gift for teaching and inspiring young people, and we were incredibly fortunate to have him lead our Coding Camp.
              </HeroQuote>
              {/*<HeroQuote author={(<>*/}
              {/*  Sally N*/}
              {/*</>)}*/}
              {/* src={karmaImg}>*/}
              {/*  s*/}
              {/*</HeroQuote>*/}
            </CarouselPrimitive>
          </Flex>
        </Flex>
      </Flex>
    </section>
  )
}
