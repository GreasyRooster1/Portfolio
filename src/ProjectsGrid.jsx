import React from 'react';
import {Grid} from "@radix-ui/themes";
import Overlay from "@components/Overlay.jsx";
import styles from "./ProjectsGrid.module.css";
import kc1 from "@assets/kc1.jpg"


function ProjectsGrid(props) {
    return (
        <div style={{width:"100%",pointerEvents:"none"}}>
            <Overlay>sd</Overlay>
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
        </div>
    );
}

function ImageGrid(props) {
    return (
        <Grid columns="3" rows="3" width="100%" height="100%" style={{width:"100%",pointerEvents:"none"}}>
            <img src={kc1} alt="" className={styles.gridImage}/>
            <img src={kc1} alt="" className={styles.gridImage}/>
            <img src={kc1} alt="" className={styles.gridImage}/>
            <img src={kc1} alt="" className={styles.gridImage}/>
            <img src={kc1} alt="" className={styles.gridImage}/>
            <img src={kc1} alt="" className={styles.gridImage}/>
            <img src={kc1} alt="" className={styles.gridImage}/>
            <img src={kc1} alt="" className={styles.gridImage}/>
            <img src={kc1} alt="" className={styles.gridImage}/>
        </Grid>
    )
}

export default ProjectsGrid;