import React from 'react';
import styles from './DigitalMarketing.module.scss';

const DigitalMarketing = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <h2 className={styles.innerHeading}>App Development</h2>
                <p className={styles.description}>
                    Want to bring your app idea to life? Our team of expert developers builds secure, fast, and scalable mobile applications for Android and iOS. We provide end-to-end app development services — from UI/UX design and architecture to deployment and maintenance — tailored to your business needs.
                </p>
                <div className={styles.linksGrid}>
                    <a href="#">Flutter Services</a>
                    <a href="#">iOS App Development</a>
                    <a href="#">Android App Development</a>
                    <a href="#">Cross-Platform Apps</a>
                    <a href="#">Custom Mobile Solutions</a>
                </div>
            </div>
        </>
    );
};

export default DigitalMarketing;
