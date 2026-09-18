import React from 'react';
import Markdown from "react-markdown";
import styles from "./writeUp.module.css";
import {DesktopView} from "@components/View.jsx";
import HtmlTitle from "@components/HtmlTitle.jsx";
import Menu from "@/pages/writeup/Menu.jsx";

function WriteUp(props) {
    return (
        <div className={styles.page}>
            <HtmlTitle title={props.meta.title}/>
            <Menu {...props}/>
            <Markdown>
                {props.md}
            </Markdown>
        </div>
    );
}

export default WriteUp;