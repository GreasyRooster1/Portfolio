import React, {useEffect, useState} from 'react';
import styles from './carousel.module.css';

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
        resetClock();
        setCurrentImageIndex(
            currentImageIndex === 0 ? props.images.length - 1 : currentImageIndex - 1
        );
    };

    const handleNextClick = () => {
        resetClock();
        setCurrentImageIndex((currentImageIndex + 1) % props.images.length);
    };

    useEffect(() => {
        resetClock();
        return () => clearTimeout(timeoutId);
    }, [currentImageIndex]);

    return (
        <div className={styles.imageContainer}>
            <button className={`${styles.navButton} ${styles.left}`} onClick={handlePreviousClick}>&lt;</button>

            {props.images.map((image, index) => (
                <img
                    src={image}
                    alt="images"
                    className={ currentImageIndex === index ? styles.block : styles.hidden}
                    key={index}
                />
            ))}

            <button className={`${styles.navButton} ${styles.right}`} onClick={handleNextClick}>&gt;</button>

        </div>
    )
}

export default Carousel;