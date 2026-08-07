import React from 'react';
import {Flex, Grid} from "@radix-ui/themes";
import Placeholder from "@components/Placeholder.jsx";
import styles from "./Overlay.module.css";
import LinkRow from "@components/LinkRow.jsx";

const LINKS = [{ label: 'live demo', accent: true }, { label: 'source' }, { label: 'writeup' }]

function HeroOverlay(props) {
    return (
        <div className={styles.overlay}>
            {props.children}
        </div>
    );
}

export default HeroOverlay;