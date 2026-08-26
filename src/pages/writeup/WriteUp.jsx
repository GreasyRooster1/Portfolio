import React from 'react';
import Markdown from "react-markdown";
import styles from "./writeUp.module.css";
import {DesktopView} from "@components/View.jsx";
import HtmlTitle from "@components/HtmlTitle.jsx";

function WriteUp(props) {
    return (
        <div className={styles.page}>
            <HtmlTitle title={props.meta.title}/>
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