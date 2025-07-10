import React, { useState } from 'react';
import styles from "./About.module.scss";
import Images from "../../../assets/images";
import DigitalMarketing from './DigitalMarketing/DigitalMarketing';
import Development from './Development/Development';
import Design from './Design/Design';

const About = () => {
    const [activeTab, setActiveTab] = useState('Digital Marketing');

    const renderContent = (tabName = activeTab) => {
        switch (tabName) {
            case 'Digital Marketing':
                return <DigitalMarketing />;
            case 'Development':
                return <Development />;
            case 'Design':
                return <Design />;
            default:
                return null;
        }
    };

    return (
        <section className={styles.aboutSection}>
            <div className={styles.heading}>
                <h2>White-Label Services for Results-Driven <br /> <span>Digital Marketing Solutions</span></h2>
                <p>Whether it’s building your brand or creating content that converts traffic into sales in the world of digital marketing, results are important. We are one of the Best Digital Marketing Agency In Ahmedabad and we create digital marketing strategies that translate to significant success and business growth.</p>
            </div>
            <div className={styles.container}>
                <div className={styles.mobileAccordion}>
                    {['Digital Marketing', 'Development', 'Design'].map((tab) => (
                        <div key={tab} className={styles.accordionItem}>
                            <div
                                className={styles.accordionHeader}
                                onClick={() => setActiveTab(activeTab === tab ? '' : tab)}
                            >
                                {tab}
                                <span>{activeTab === tab ? '▲' : '▼'}</span>
                            </div>
                            {activeTab === tab && (
                                <div className={styles.accordionContent}>
                                    {renderContent(tab)}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className={styles.desktopLayout}>
                    <div className={styles.sidebar}>
                        {['Digital Marketing', 'Development', 'Design'].map(tab => (
                            <div
                                key={tab}
                                className={`${styles.tabItem} ${activeTab === tab ? styles.active : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>
                    <div className={styles.content}>
                        {renderContent()}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About