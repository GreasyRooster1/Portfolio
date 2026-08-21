import React from 'react';
import {Flex, Grid} from "@radix-ui/themes";
import Placeholder from "@components/Placeholder.jsx";
import styles from "./heroOverlay.module.css";
import LinkRow from "@components/LinkRow.jsx";
import Overlay from "@components/Overlay.jsx";

const LINKS = [{ label: 'live demo', accent: true }, { label: 'source' }, { label: 'writeup' }]

function HeroOverlay(props) {
    return (
        <Overlay>
            <div>
                {/*<div className={styles.eyebrow}>featured · 2024-2026</div>*/}
                <div className={styles.title}>Inspiring Future Programmers</div>
                <p className={styles.desc}>
                    An all-in-one platform build specifically to teach kids ages 6-16 programming skills. Students follow their lessons, build and run their projects, and share their work all within the app.
                </p>
                <LinkRow links={LINKS} className={styles.links} />
            </div>
        </Overlay>
    );
}

export default HeroOverlay;