import {LineBlock} from "@/heroComponents/LineBlock.jsx";
import React from "react";
import {Flex} from "@radix-ui/themes";
import TechIcon from "@components/TechIcon.jsx";

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