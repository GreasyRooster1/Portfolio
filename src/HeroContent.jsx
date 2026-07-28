import React from 'react';
import {Flex, Grid} from "@radix-ui/themes";
import Placeholder from "@components/Placeholder.jsx";
import styles from "./heroContent.module.css";

function HeroContent(props) {
    return (
        <Grid height={"70vh"} columns={{initial:"1",sm:"1",lg:"3"}}>
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
    );
}

export default HeroContent;