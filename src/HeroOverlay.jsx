import React from 'react';
import {Flex, Grid} from "@radix-ui/themes";
import Placeholder from "@components/Placeholder.jsx";
import styles from "./heroOverlay.module.css";
import LinkRow from "@components/LinkRow.jsx";

const LINKS = [{ label: 'live demo', accent: true }, { label: 'source' }, { label: 'writeup' }]

function HeroOverlay(props) {
    return (
        <div className={styles.overlay}>
            <div>
                <div className={styles.eyebrow}>featured · 2024-2026</div>
                <div className={styles.title}>Inspiring Future Programmers</div>
                <p className={styles.desc}>
                    Currently teaching Javascript, Arduino, Scratch and Python to students ages 6-16
                </p>
                <LinkRow links={LINKS} className={styles.links} />
            </div>

        </div>
    );
}

export default HeroOverlay;