import {useEffect, useState} from 'react';
import Markdown from "react-markdown";
import styles from "./writeUp.module.css";
import {DesktopView} from "@components/View.jsx";
import HtmlTitle from "@components/HtmlTitle.jsx";
import Menu from "@/pages/writeup/Menu.jsx";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

function WriteUp(props) {
    let rawTitles = [];
    const [titles,setTitles] = useState([]);

    let registerTitle = (children)=>{
        let title = getReactNodeText(children);
        let id = `${title.toLowerCase()}`.replaceAll(" ", "_");
        useEffect(()=>{rawTitles.push({name:title,id:id})},[])
        return id
    }

    useEffect(() => {
        setTitles(rawTitles);
        rawTitles = []
    }, []);

    return (
        <div className={styles.page}>
            <HtmlTitle title={props.meta.title}/>
            <Menu titles={titles} {...props}/>
            <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                h1(props) {
                    const {children, node, ...rest} = props
                    let id=registerTitle(children);
                    return <h1 {...rest} >{children}</h1>
                },
                h2(props) {
                    const {children, node, ...rest} = props
                    let id=registerTitle(children);
                    return <h2 id={id} {...rest} >{children}</h2>
                },
                img(props) {
                    const {children, node, ...rest} = props
                    return <img className={styles.img} {...rest} />
                }
            }}
            >
                {props.md}
            </Markdown>
        </div>
    );
}

function getReactNodeText(node) {
    if (!node) return '';
    if (typeof node === 'string' || typeof node === 'number') {
        return String(node);
    }
    if (Array.isArray(node)) {
        return node.map(getReactNodeText).join('');
    }
    if (React.isValidElement(node)) {
        return getReactNodeText(node.props.children);
    }
    return '';
}

export default WriteUp;