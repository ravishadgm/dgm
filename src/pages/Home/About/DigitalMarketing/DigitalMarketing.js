import React from 'react';
import styles from './DigitalMarketing.module.scss';

const DigitalMarketing = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <h2 className={styles.innerHeading}>Digital Marketing</h2>
                <p className={styles.description}>
                    Do you plan to expand your brand? Make IndyLogix Solutions your strategic partner.
                    As the leading digital marketing agency in Ahmedabad, we utilize industry trends
                    and marketing skills to provide white-label and class-best digital marketing services,
                    including SEO, content marketing, and social media services, to boost brand presence,
                    attract new audiences, and improve client wallet share.
                </p>
                <div className={styles.linksGrid}>
                    <a href="#">SEO Services</a>
                    <a href="#">Google Ads</a>
                    <a href="#">Instagram Ads</a>
                    <a href="#">Social Media Marketing</a>
                    <a href="#">Facebook Ads</a>
                    <a href="#">Content Marketing</a>
                </div>
            </div>
        </>
    );
};

export default DigitalMarketing;
