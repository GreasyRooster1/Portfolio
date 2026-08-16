import styles from "./brickList.module.css"
import React from "react";

export function BrickList() {
    return (
        <div className={styles.wall}>
            <div className={styles.row}>

            </div>
        </div>
    )
}

BrickList.Item = (props) => {
    return React.cloneElement(props.item, {className:`${props.className},${styles.item}`})
}