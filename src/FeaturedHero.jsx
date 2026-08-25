import Placeholder from '@components/Placeholder'
import LinkRow from '@components/LinkRow'
import styles from '@/FeaturedHero.module.css'
import HeroOverlay from "@/HeroOverlay.jsx";
import {Box, Flex, Grid, Quote, Text} from "@radix-ui/themes";
import React, {useEffect, useState} from "react";


import TechIcon from "@components/TechIcon.jsx";
import CountUp from "@components/CountUp.jsx";
import Carousel from "@components/Carousel.jsx";
import Overlay from "@components/Overlay.jsx";
import ProjectsGrid from "@/heroComponents/ProjectsGrid.jsx";
import HeroQuote from "@/HeroQuote.jsx";
import CarouselPrimitive from "@components/CarouselPrimitive.jsx";
import {ImagesBlock} from "@/heroComponents/ImagesBlock.jsx";
import StatsBlock from "@/heroComponents/StatsBlock.jsx";
import {LineBlock} from "@/heroComponents/LineBlock.jsx";
import {StackComponent} from "@/heroComponents/StackComponent.jsx";
import {QuoteBlock} from "@/heroComponents/QuoteBlock.jsx";
import {DesktopView, MobileView} from "@components/View.jsx";
import PageSection from "@components/PageSection.jsx";

const LINKS = [{ label: 'live demo', accent: true }, { label: 'source' }, { label: 'writeup' }]

export default function FeaturedHero() {
  return (
    <PageSection>
      <DesktopView>
        <Flex direction="column" gap={{initial:"2",lg:"3"}} width={"100%"}>
          <Flex direction="row" height={{initial:"100vh",md:"70vh",lg:"50vh"}} gap={{initial:"2",lg:"3"}} minHeight="600px" width={"100%"}>
            <Flex className={styles.box} gridRow={"1/1"} gridColumn={"1/3"} height={"100%"} width={"100%"} flexGrow="1" style={{position:"relative",zIndex:1,overflow: "clip"}}>
              <ImagesBlock/>
            </Flex>
            <Grid gridRow={"1/1"} gridColumn={"3/3"} direction="column" gap={{initial:"2",lg:"3"}} height={"100%"} width={"25%"} minWidth={"330px"}>
              <StatsBlock/>
              <StackComponent/>
              <LineBlock/>
            </Grid>
          </Flex>

          <Flex direction="row" height={{initial:"40vh",md:"35vh",lg:"20vh"}} gap={{initial:"2",lg:"3"}} width={"100%"} minHeight="230px">
            <ProjectsGrid width={"30%"}/>
            <QuoteBlock width={"70%"}/>
          </Flex>
        </Flex>
      </DesktopView>
      <MobileView>
        <Flex direction="column" gap="3" width={"100%"}>
          <Box width={"100%"} height={"100vw"} className={styles.box} style={{position:"relative",zIndex:1,overflow: "clip"}}>
            <ImagesBlock noOverlay/>
          </Box>
          <StatsBlock/>
          {/*<StackComponent/>*/}
          <LineBlock/>
          <QuoteBlock width={"100%"}/>
          <ProjectsGrid width={"calc(100%-16px)"} height={"100vw"} style={{aspectRatio:"1/1"}}/>
        </Flex>
      </MobileView>
    </PageSection>
  )
}
