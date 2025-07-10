import React from 'react';
import styles from './Development.module.scss';

const Development = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <h2 className={styles.innerContainer}>Development</h2>
                <p className={styles.description}>
                    We offer a wide range of custom software, web, and mobile development services tailored to
                    meet your unique business needs. Whether you’re looking for frontend interfaces or backend
                    systems, our experts deliver reliable, scalable, and maintainable code.
                </p>
                <div className={styles.linksGrid}>
                    <a href="#">Web Development</a>
                    <a href="#">Shopify Development</a>
                    <a href="#">WordPress Developement</a>
                </div>
            </div>
        </>
    );
};

export default Development;
