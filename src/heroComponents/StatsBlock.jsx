import React, {useEffect, useState} from 'react';
import styles from '@/pages/index/FeaturedHero.module.css'
import {Flex} from "@radix-ui/themes/dist/esm/index.d.ts";
import TechIcon from "@components/TechIcon.jsx";
import CountUp from "@components/CountUp.jsx";
import {ImagesBlock} from "@/heroComponents/ImagesBlock.jsx";

function StatsBlock(props) {
    const [totalProjects, setTotalProjects] = useState(2523)

    useEffect(() => {
        fetch("https://portfolio-api.dillonjw.com/qcode_project_count")
            .then((data) => {
                data.json().then((dataJson) => {
                    setTotalProjects(dataJson)
                })
            })
    },[])

    return (
        <Flex className={styles.box} justify={"center"} align={"center"} py={"2"}>
            <div className={styles.metrics}>
                <div>
                    <div className={styles.metricLabel}>students</div>
                    <div className={styles.metricValue}>
                        <CountUp className={styles.metricValue}
                                 from={100}
                                 to={300}
                                 separator=","
                                 direction="up"
                                 duration={.5}
                                 delay={0}
                        />+
                    </div>
                </div>
                <div>
                    <div className={styles.metricLabel}>total projects</div>
                    <CountUp className={styles.metricValue}
                             from={1000}
                             to={totalProjects}
                             separator=","
                             direction="up"
                             duration={.5}
                             delay={0}
                    />
                </div>
            </div>
        </Flex>
    );
}

export default StatsBlock;