import styles from "./brickList.module.css"
import React from "react";

export function BrickList(props) {
    return (
        <div className={styles.wall} style={{"--brick-list-scale":(props.scale??"50px")}}>
            <div className={styles.row}>
                {Array.from({ length: count }).map((_, index) => (
                   <BrickList.Item/>
                ))}
            </div>
        </div>
    )
}

BrickList.Item = (props) => {
    return React.cloneElement(props.item, {className:`${props.className},${styles.item}`})
}