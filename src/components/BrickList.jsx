import styles from "./brickList.module.css"
import React, {Children} from "react";

export function BrickList(props) {
    const childrenArray = Children.toArray(props.children);
    let rows = [new Array(props.cols).fill(-1),new Array(props.cols).fill(0),new Array(props.cols).fill(-1)];
    if(childrenArray.length <= props.cols-2){

    }else{

    }
    console.log(childrenArray);
    return (
        <div className={styles.wall} >
            {rows.map((row, i) => (
                <div className={styles.row} key={i+"row"}>
                    {row.map((index, k) => (
                        index===-1?<BrickList.Item/>:React.cloneElement(childrenArray[index],{key:k})
                    ))}
                </div>
            ))}
        </div>
    )
}

BrickList.Item = (props) => {
    return (
        <div className={styles.item}>

        </div>
    )
}