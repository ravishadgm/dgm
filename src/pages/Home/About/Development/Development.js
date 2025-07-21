import React from 'react';
import styles from './Development.module.scss';

const Development = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <h2 className={styles.innerContainer}>Web Development</h2>
                <p className={styles.description}>
                    We build modern, responsive, and SEO-friendly websites that elevate your online presence. From custom CMS to full-stack web applications, our Surat-based developers deliver reliable, scalable, and visually impressive solutions.
                </p>
                <div className={styles.linksGrid}>
                    <a>Frontend Development</a>
                    <a>Backend Development</a>
                    <a>E-commerce Development</a>
                    {/* <a href="#">Custom Web Applications</a> */}
                </div>
            </div>
        </>
    );
};

export default Development;
