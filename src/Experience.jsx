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
import csharp from "@assets/langs/csharp.png"
import python from "@assets/langs/python.png"
import swift from "@assets/langs/swift.svg"
import ruby from "@assets/langs/ruby.svg"
import css from "@assets/langs/css.svg"
import arduino from "@assets/langs/arduino.svg"

export function Experience(props) {
    return (
        <section className={styles.section} {...props}>
            <SectionHead title="Experience"/>
            <BrickList cols={8}>
                <BrickListItem img={ruby} color={"#d92007"}/>
                <BrickListItem img={react} color={"#00d8ff"}/>
                <BrickListItem img={js} color={"#f0dc4e"}/>
                <BrickListItem img={ts} color={"#3178c6"}/>
                <BrickListItem img={html} color={"#e44d26"}/>
                <BrickListItem img={arduino} color={"#199aa0"}/>
                <BrickListItem img={c} color={"#00599c"}/>
                <BrickListItem img={csharp} color={"#953dac"}/>
                <BrickListItem img={python} color={"#ffcf42"}/>
                <BrickListItem img={java} color={"#f3931b"}/>
                <BrickListItem img={rust} color={"#dd3516"}/>
                <BrickListItem img={css} color={"#1c88c7"}/>
                <BrickListItem img={swift} color={"#fa5d2d"}/>
            </BrickList>
        </section>
    )
}