import styles from "./brickList.module.css"
import React from "react";

export function BrickList(props) {
    return (
        <div className={styles.wall} >
            <div className={styles.row}>
                {Array.from({ length: props.cols }).map((_, index) => (
                   <BrickList.Item key={index}/>
                ))}
            </div>
            <div className={`${styles.row} ${styles.offset}`}>
                {Array.from({ length: props.cols+1 }).map((_, index) => (
                    <BrickList.Item key={index}/>
                ))}
            </div>
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