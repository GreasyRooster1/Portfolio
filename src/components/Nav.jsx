import Cursor from '@components/Cursor.jsx'
import styles from './Nav.module.css'
import {Flex} from "@radix-ui/themes";
import React, {useState} from "react";
import {motion, useScroll, useMotionValueEvent } from "motion/react";

const LINKS = ['work', 'index', 'about', 'experiments']

export default function Nav(props) {
    const { scrollY } = useScroll();
    const [isTop, setIsTop] = useState(true);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsTop(latest === 0);
    });

    return (
        <Flex className={styles.nav} px={{initial:"8px",sm:"64px"}} py={{initial:"16px",sm:"22px"}}>
            <div className={styles.brand}>
                Dillon Wilson
                <Cursor />
            </div>
            <Flex className={styles.links} gap={{initial:"8px",sm:"12px",md:"24px"}}>
                {props.children.map((link,index)=>{
                    return React.cloneElement(link,{className:styles.link,key:index})
                })}
            </Flex>
        </Flex>
    )
}
