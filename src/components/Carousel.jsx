import React, {useEffect, useState} from 'react';
import styles from './carousel.module.css';
import { TbChevronCompactLeft } from "react-icons/tb";
import { TbChevronCompactRight } from "react-icons/tb";



function Carousel(props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [timeoutId, setTimeoutId] = useState();

    const resetClock = ()=>{
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        const timer = setTimeout(() => {
            handleNextClick();
        }, 5000);
        setTimeoutId(timer)
    }

    const handlePreviousClick = () => {
        setCurrentImageIndex(
            currentImageIndex === 0 ? props.images.length - 1 : currentImageIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % props.images.length);
    };

    useEffect(() => {
        resetClock();
        return () => clearTimeout(timeoutId);
    }, [currentImageIndex]);

    return (
        <div className={styles.imageContainer} style={props.style}>
            <TbChevronCompactLeft className={`${styles.navButton} ${styles.left}`} onClick={handlePreviousClick}/>

            {props.images.map((image, index) => (
                <img
                    src={image}
                    alt="images"
                    className={ currentImageIndex === index ? styles.block : styles.hidden}
                    key={index}
                />
            ))}

            <TbChevronCompactRight className={`${styles.navButton} ${styles.right}`} onClick={handleNextClick}/>

        </div>
    )
}

export default Carousel;