import React from 'react';
import Markdown from "react-markdown";
import styles from "./writeUp.module.css";
import {DesktopView} from "@components/View.jsx";

function WriteUp(props) {
    return (
        <div className={styles.page}>
            <DesktopView>
                <div className={styles.menuWrapper}>
                    <div className={styles.menu}>
                        asd
                    </div>
                </div>
            </DesktopView>
            <Markdown>
                {props.md}
            </Markdown>
        </div>
    );
}

export default WriteUp;