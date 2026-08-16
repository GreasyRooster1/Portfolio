import styles from "@/ProjectIndex.module.css";
import SectionHead from "@components/SectionHead.jsx";
import IndexRow from "@components/IndexRow.jsx";
import {BrickList, BrickListItem} from "@components/BrickList.jsx";

export function Experience(props) {
    return (
        <section className={styles.section} {...props}>
            <SectionHead title="Experience"/>
            <BrickList cols={12}>
                <BrickListItem>test</BrickListItem>
                <BrickListItem>test</BrickListItem>
                <BrickListItem>test</BrickListItem>
                <BrickListItem>test</BrickListItem>
                <BrickListItem>test</BrickListItem>
                <BrickListItem>test</BrickListItem>
                <BrickListItem>test</BrickListItem>
                <BrickListItem>test</BrickListItem>
                <BrickListItem>test</BrickListItem>
                <BrickListItem>test</BrickListItem>
                <BrickListItem>test</BrickListItem>
                <BrickListItem>test</BrickListItem>
                <BrickListItem>test</BrickListItem>
            </BrickList>
        </section>
    )
}