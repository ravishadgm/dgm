import React from 'react';
import styles from './Design.module.scss';

const Design = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <h2 className={styles.innerHeading}>Design</h2>
                <p className={styles.description}>
                    In the age of digital, don't let generative-AI capabilities overtake your enterprise-level efforts. Make IndyLogix, the client-featured digital design in Ahmedabad, turn your crude concept into a comprehensive solution. Our tech-enabled digital design team is experienced in keeping up with the evolving needs and pace of enterprise needs and delivering high-quality, results-driven design work at scale. Connect with our team to view the catalog of digital design services aimed at amplifying your brand identity.
                </p>
                <div className={styles.linksGrid}>
                    <a href="#">UI/UX Design</a>
                    <a href="#">Graphic Design</a>
                    <a href="#">Branding</a>
                </div>
            </div>
        </>
    );
};

export default Design;
