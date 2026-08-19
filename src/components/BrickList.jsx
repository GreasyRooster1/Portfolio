import styles from "./brickList.module.css"
import React, {Children} from "react";
import {Flex,Text} from "@radix-ui/themes";

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

function align(childrenArray,cols){
    let diff = cols-childrenArray.length;
    let offset = Math.floor(diff/2);
    let row = fillEmpty(offset);
    row.push(...childrenArray);
    if(diff%2===1){
        row.push(...fillEmpty(offset+1))
    }else{
        row.push(...fillEmpty(offset))
    }
    return row;
}

const splitIntoThree = (list) => {
    const size = Math.floor(list.length / 3);

    const part1 = list.slice(0, size);
    const part2 = list.slice(size, size * 2);
    const part3 = list.slice(size * 2);
    return [part1, part2, part3];

};

export function BrickList(props) {
    const childrenArray = Children.toArray(props.children);
    let rows = [fillEmpty(props.cols),fillEmpty(props.cols+1),fillEmpty(props.cols)];
    if(childrenArray.length <= props.cols/3){
        rows[1] = align(fillInc(childrenArray.length),props.cols+1);
    }else{
        let arrs = splitIntoThree(fillInc(childrenArray.length));
        let tmp = arrs[1];
        arrs[1] = arrs[2];
        arrs[2] = tmp;
        console.log(arrs)
        for(let i=0;i<arrs.length;i++){
            let cols = i%2===0?props.cols:props.cols+1;
            rows[i] = align(arrs[i],cols);
        }
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
        <div className={`${styles.item} ${props.img?styles.active:""}`} style={{"--brick-item-color":props.color}}>
            {props.img&&<img src={props.img} alt="icon"/>}
            <Flex className={`${styles.content}`} justify={"center"} align={"center"} direction={"column"}>
                {props.name && (<>
                    <Text weight="bold" size="4" mb="1" align="center" mx="1">{props.name}</Text>
                    {props.links.map((link, i) => (
                        <a className={styles.link} href={link.href} key={i}>{link.txt}</a>
                    ))}
                </>)}
                {props.children}
            </Flex>
        </div>
    )
}