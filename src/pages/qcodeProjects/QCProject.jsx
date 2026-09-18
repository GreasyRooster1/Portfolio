import React from 'react';
import styles from './qcProject.module.css';

function QcProject(props) {
    return (
        <iframe src={`https://codestaging.esporterz.com/sharedFrame.html?shareboardid=${props.id}`} className={styles.frame}>

        </iframe>
    );
}

export default QcProject;