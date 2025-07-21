import React from 'react';
import styles from './Design.module.scss';

const Design = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <h2 className={styles.innerHeading}>UI/UX & Web Design</h2>
                <p className={styles.description}>
                    Great design is more than aesthetics — it’s about experience. Our creative team crafts user-centered designs that are intuitive, functional, and visually compelling. Whether it's an app interface or a website layout, we ensure every interaction counts.
                </p>
                <div className={styles.linksGrid}>
                    <a href="#">UI/UX Design</a>
                    <a href="#">Website Redesign</a>
                    <a href="#">Mobile App UI</a>
                </div>
            </div>
        </>
    );
};

export default Design;
