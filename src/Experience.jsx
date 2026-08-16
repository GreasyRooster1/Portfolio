import styles from "@/ProjectIndex.module.css";
import SectionHead from "@components/SectionHead.jsx";
import IndexRow from "@components/IndexRow.jsx";
import {BrickList} from "@components/BrickList.jsx";

export function Experience(props) {
    return (
        <section className={styles.section} {...props}>
            <SectionHead title="Experience"/>
            <BrickList cols={12}>
                <BrickList.Item>test</BrickList.Item>
            </BrickList>
        </section>
    )
}