import {LineBlock} from "@/heroComponents/LineBlock.jsx";
import React from "react";
import {Flex} from "@radix-ui/themes";
import TechIcon from "@components/TechIcon.jsx";
import styles from '@/FeaturedHero.module.css'
import firebaseIcon from '@assets/langs/firebase.png'
import viteIcon from '@assets/langs/vite.svg'
import rustIcon from '@assets/langs/rust.png'

export function StackComponent() {
    return (
        <Flex className={styles.box} justify={"center"} align={"center"} direction={"column"} gap="4">
            <div className={styles.metricLabel}>tech stack</div>
            <Flex width={"100%"} style={{justifyContent:"space-evenly"}} px="2">
                <TechIcon icon={firebaseIcon} name={"Firebase"}/>
                <TechIcon icon={viteIcon} name={"Vite"}/>
                <TechIcon icon={rustIcon} name={"Rust"}/>
            </Flex>
            <div className={styles.stackText}>JavaScript • TypeScript • CSS</div>
        </Flex>
    )
}