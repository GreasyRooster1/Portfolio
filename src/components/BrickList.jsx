import styles from "./brickList.module.css"
import React from "react";

export function BrickList(props) {
    return (
        <div className={styles.wall} style={{"--brick-list-scale":(props.scale??"50px")}}>
            <div className={styles.row}>
                {Array.from({ length: props.cols }).map((_, index) => (
                   <BrickList.Item key={index}/>
                ))}
            </div>
        </div>
    )
}

BrickList.Item = (props) => {
    return (
        <div className={styles.item}>

        </div>
    )
}