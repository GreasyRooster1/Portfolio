import React from 'react';
import styles from './pageSection.module.css';

function PageSection(props) {
    return (
        <section className={styles.section} {...props}>
            {props.children}
        </section>
    );
}

export default PageSection;