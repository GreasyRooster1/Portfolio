import styles from "./brickList.module.css"
import React, {Children} from "react";

function fillEmpty(c){
    return new Array(c).fill(-1)
}

function fillInc(c){
    let tmp = [];
    for (let i = 0; i < c; i++) {
        tmp.push(i)
    }
    return tmp;
}

export function BrickList(props) {
    const childrenArray = Children.toArray(props.children);
    let rows = [fillEmpty(props.cols),fillEmpty(props.cols),fillEmpty(props.cols)];
    if(childrenArray.length <= props.cols-2){
        let diff = (props.cols-childrenArray.length)
        let offset = Math.floor(diff/2);
        let row = fillEmpty(offset);
        row.push(...fillInc(childrenArray.length))
        if(diff%2===1){
            row.push(...fillEmpty(offset+1))
        }
        row.push(-1);
        rows[1] = row;
    }else{

    }
    console.log(childrenArray,rows);
    return (
        <div className={styles.wall} >
            {rows.map((row, i) => (
                <div className={`${styles.row} ${i%2===1?styles.offset:""}`} key={i+"row"}>
                    {row.map((index, k) => (
                        index===-1?<BrickListItem key={k}/>:React.cloneElement(childrenArray[index],{key:k})
                    ))}
                </div>
            ))}
        </div>
    )
}

export function BrickListItem(props){
    return (
        <div className={styles.item}>
            {props.children}
        </div>
    )
}