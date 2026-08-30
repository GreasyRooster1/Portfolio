import React, {Children, useEffect, useRef, useState} from 'react';
import styles from './carousel.module.css';
import { TbChevronCompactLeft } from "react-icons/tb";
import { TbChevronCompactRight } from "react-icons/tb";



function CarouselPrimitive(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeoutId, setTimeoutId] = useState();

    const children = Children.toArray(props.children);

    const resetClock = ()=>{
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        const timer = setTimeout(() => {
            handleNextClick();
        }, props.autoTime??5000);
        setTimeoutId(timer)
    }

    const handlePreviousClick = () => {
        setCurrentIndex(
            currentIndex === 0 ? children.length - 1 : currentIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % children.length);
    };

    useEffect(() => {
        resetClock();
        return () => clearTimeout(timeoutId);
    }, [currentIndex]);

    return (
        <>
            {!props.noArrows && <TbChevronCompactLeft className={`${styles.navButton} ${styles.left} ${props.fadeArrows?styles.fade:""}`} onClick={handlePreviousClick}/>}

            {React.cloneElement(children[currentIndex],{className:`${children[currentIndex].props.className} ${styles.item}`})}

            {!props.noArrows && <TbChevronCompactRight className={`${styles.navButton} ${styles.right} ${props.fadeArrows?styles.fade:""}`} onClick={handleNextClick}/>}

        </>
    )
}

export default CarouselPrimitive;