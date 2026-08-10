import React, {Children, useEffect, useState} from 'react';
import styles from './carousel.module.css';
import { TbChevronCompactLeft } from "react-icons/tb";
import { TbChevronCompactRight } from "react-icons/tb";



function CarouselPrimitive(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeoutId, setTimeoutId] = useState();

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
            currentIndex === 0 ? props.images.length - 1 : currentIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % props.images.length);
    };

    const children = Children.toArray(props.children);

    useEffect(() => {
        resetClock();
        return () => clearTimeout(timeoutId);
    }, [currentIndex]);

    return (
        <div className={styles.imageContainer} style={props.style}>
            {!props.noArrows && <TbChevronCompactLeft className={`${styles.navButton} ${styles.left}`} onClick={handlePreviousClick}/>}

            {children[currentIndex]}

            {!props.noArrows && <TbChevronCompactRight className={`${styles.navButton} ${styles.right}`} onClick={handleNextClick}/>}

        </div>
    )
}

export default CarouselPrimitive;