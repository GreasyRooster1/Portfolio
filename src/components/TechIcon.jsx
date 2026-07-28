import React from 'react';
import firebaseIcon from "@assets/firebase.png";
import {Text} from "@radix-ui/themes/dist/esm/index.d.ts";
import styles from "@/FeaturedHero.module.css";
import {Flex} from "@radix-ui/themes";

function TechIcon(props) {
    return (
        <Flex direction={"column"} justify={"center"}>
            <img src={props.icon} alt={"firebase logo"} width={"64px"} height={"64px"} style={{objectFit: "contain"}}/>
            <Text className={styles.techText} mt={"2"} align={"center"}>{props.name}</Text>
        </Flex>
    );
}

export default TechIcon;