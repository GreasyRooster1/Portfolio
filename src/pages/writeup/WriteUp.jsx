import React from 'react';
import Markdown from "react-markdown";
import styles from "./writeUp.module.css";
import {DesktopView} from "@components/View.jsx";
import HtmlTitle from "@components/HtmlTitle.jsx";
import Menu from "@/pages/writeup/Menu.jsx";
import remarkGfm from 'remark-gfm'

function WriteUp(props) {
    const [titles, setTitles] = React.useState([]);

    const addTitle = (title) => {
        setTitles((prevTitles) => [...prevTitles, title]);
    }

    return (
        <div className={styles.page}>
            <HtmlTitle title={props.meta.title}/>
            <Menu titles={titles} {...props}/>
            <Markdown components={{
                h1(props) {
                    const {node, ...rest} = props
                    let title = node.innerHTML
                    let id = `${title.toLowerCase()}${titles.length}`;
                    addTitle({name:title,id:id})
                    return <h1 style={{color: 'red'}} {...rest} />
                }
            }}>
                {props.md}
            </Markdown>
        </div>
    );
}

export default WriteUp;