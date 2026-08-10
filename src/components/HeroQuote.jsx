import React from 'react';
import {Quote, Text} from "@radix-ui/themes/dist/esm/index.d.ts";
import styles from "@components/heroQuote.module.css";
import karmaImg from "@assets/karma2.png";
import {Flex} from "@radix-ui/themes";

function HeroQuote(props) {
    return (
        <Flex justify={"center"} align={"center"} px={"7"} height={"100%"} direction={"column"} style={{fontSize:"14pt",overflow:"clip",position:"relative",zIndex:"1"}}>
            <Quote wrap="pretty">{props.children}</Quote>
            <br/>
            <Text align="right" style={{width:"100%"}} weight="bold">
                — {props.author}
            </Text>
            <img className={styles.logo} src={props.src} />
        </Flex>
    );
}

export default HeroQuote;