import React from 'react';
import {Flex, Grid} from "@radix-ui/themes";
import Overlay from "@components/Overlay.jsx";
import styles from "./ProjectsGrid.module.css";
import sp1 from "@assets/StudentProjects/1.png"
import sp2 from "@assets/StudentProjects/2.png"
import sp3 from "@assets/StudentProjects/3.png"
import sp4 from "@assets/StudentProjects/4.png"
import sp5 from "@assets/StudentProjects/5.png"
import sp6 from "@assets/StudentProjects/6.png"
import sp7 from "@assets/StudentProjects/7.png"
import sp8 from "@assets/StudentProjects/8.png"
import sp9 from "@assets/StudentProjects/9.png"
import LinkRow from "@components/LinkRow.jsx";


function ProjectsGrid(props) {
    return (
        <Flex className={styles.box} justify={"center"} align={"center"} {...props} style={{position:"relative",overflow:"clip",...props.style}}>
            <a className={styles.main} style={{width:"100%"}} href={"https://google.com"}>
                <Grid columns="3" rows="3" width="100%" height="100%" className={styles.grid}>
                    <ImageGrid/>
                    <ImageGrid/>
                    <ImageGrid/>
                    <ImageGrid/>
                    <ImageGrid/>
                    <ImageGrid/>
                    <ImageGrid/>
                    <ImageGrid/>
                    <ImageGrid/>
                </Grid>
                <Overlay style={{height:"60%",padding:"5%"}}>
                    <Flex width={"100%"} direction={"column"} align={"left"}>
                        <div className={styles.title}>Student Projects</div>
                        <span className={styles.desc}>
                            <a className={styles.link}>Click here</a> to see real student projects
                        </span>
                    </Flex>
                </Overlay>
            </a>
        </Flex>
    );
}

function ImageGrid(props) {
    return (
        <Grid columns="3" rows="3" width="100%" height="100%" style={{width:"100%",pointerEvents:"none"}}>
            <img src={sp1} alt="" className={styles.gridImage}/>
            <img src={sp2} alt="" className={styles.gridImage}/>
            <img src={sp3} alt="" className={styles.gridImage}/>
            <img src={sp4} alt="" className={styles.gridImage}/>
            <img src={sp5} alt="" className={styles.gridImage}/>
            <img src={sp6} alt="" className={styles.gridImage}/>
            <img src={sp7} alt="" className={styles.gridImage}/>
            <img src={sp8} alt="" className={styles.gridImage}/>
            <img src={sp9} alt="" className={styles.gridImage}/>
        </Grid>
    )
}

export default ProjectsGrid;