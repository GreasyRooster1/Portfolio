import styles from "@/ProjectIndex.module.css";
import SectionHead from "@components/SectionHead.jsx";
import IndexRow from "@components/IndexRow.jsx";

export function Experience(props) {
    return (
        <section className={styles.section} {...props}>
            <SectionHead title="Experience"/>
        </section>
    )
}