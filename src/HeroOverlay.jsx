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
                <div className={styles.title}>Teaching Students</div>
                <p className={styles.desc}>
                    Currently teaching Javascript, Arduino, Scratch and Python to students ages 6-16
                </p>
                <LinkRow links={LINKS} className={styles.links} />
            </div>
            <div className={styles.metrics}>
                <div>
                    <div className={styles.metricLabel}>students</div>
                    <div className={styles.metricValue}>300+</div>
                </div>
                <div>
                    <div className={styles.metricLabel}>total projects</div>
                    <div className={styles.metricValue}>2,467</div>
                </div>
                <div>
                    <div className={styles.metricLabel}>stack</div>
                    <div className={styles.stack}>
                        JS · Rust
                        <br />
                        Firebase
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroOverlay;