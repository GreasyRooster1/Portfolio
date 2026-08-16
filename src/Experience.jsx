import styles from "@/ProjectIndex.module.css";
import SectionHead from "@components/SectionHead.jsx";
import IndexRow from "@components/IndexRow.jsx";
import {BrickList, BrickListItem} from "@components/BrickList.jsx";
import rust from "@assets/langs/rustcrab.png"
import react from "@assets/langs/react.svg"
import ts from "@assets/langs/ts.jpg"
import js from "@assets/langs/js.png"
import html from "@assets/langs/html.png"
import java from "@assets/langs/java.png"
import c from "@assets/langs/c.png"

export function Experience(props) {
    return (
        <section className={styles.section} {...props}>
            <SectionHead title="Experience"/>
            <BrickList cols={12}>
                <BrickListItem img={rust} color={"#dd3516"}/>
                <BrickListItem img={react} color={"#00d8ff"}/>
                <BrickListItem img={js} color={"#f0dc4e"}/>
                <BrickListItem img={ts} color={"#3178c6"}/>
                <BrickListItem img={html} color={"#e44d26"}/>
                <BrickListItem img={java} color={"#f3931b"}/>
                <BrickListItem img={c} color={"#00599c"}/>
            </BrickList>
        </section>
    )
}