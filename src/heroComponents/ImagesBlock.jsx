import styles from "@/FeaturedHero.module.css";
import React from "react";
import {Flex} from "@radix-ui/themes";
import Carousel from "@components/Carousel.jsx";
import HeroOverlay from "@/HeroOverlay.jsx";

import kc1 from "@assets/KC/kc1.jpg"
import kc2 from "@assets/KC/kc2.jpg"
import kc3 from "@assets/KC/kc3.jpg"
import kc4 from "@assets/KC/kc4.jpg"
import kc5 from "@assets/KC/kc5.jpg"
import kc6 from "@assets/KC/kc6.jpg"
import kc7 from "@assets/KC/kc7.jpg"
import kc8 from "@assets/KC/kc8.jpg"
import snake from "@assets/snakelesson.png"

const images = [kc1,kc2,kc3,kc4,kc5,kc6,kc7,kc8,snake];


export function ImagesBlock() {
    return (
        <Flex className={styles.box} gridRow={"1/1"} gridColumn={"1/3"} height={"100%"} width={"100%"} flexGrow="1" style={{position:"relative",zIndex:1,overflow: "clip"}}>
            <Carousel images={images} style={{position:"absolute",zIndex:-1}} />
            <div style={{width:"100%",pointerEvents:"none"}}>
                <HeroOverlay />
            </div>
        </Flex>
    )
}