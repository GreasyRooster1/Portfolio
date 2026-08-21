import {useEffect, useState} from "react";
import {Flex} from "@radix-ui/themes";
import CountUp from "@components/CountUp.jsx";
import styles from '@/FeaturedHero.module.css'


export function LineBlock() {

    const [totalLines, setTotalLines] = useState(527886)

    useEffect(() => {
        fetch("https://portfolio-api.dillonjw.com/qcode_line_count")
            .then((data) => {
                data.json().then((dataJson) => {
                    setTotalLines(dataJson)
                })
            })
    },[])

    return (
        <Flex className={styles.box} justify={"center"} align={"center"} py={"2"}>
            <div>
                <div className={styles.metricLabel}>total lines of code</div>
                <CountUp className={styles.linesValue}
                         from={100000}
                         to={totalLines}
                         separator=","
                         direction="up"
                         duration={.5}
                         delay={0}
                />
                <div className={styles.linesSub}>by <span style={{color:"var(--accent)"}}>real</span> students ages 6-16</div>
            </div>
        </Flex>
    )
}