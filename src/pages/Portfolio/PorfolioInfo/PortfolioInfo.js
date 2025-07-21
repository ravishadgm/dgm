import React from 'react';
import styles from './PortfolioInfo.module.scss';
import { FaLightbulb, FaCode, FaHandshake } from 'react-icons/fa';
import Images from '../../../assets/images/index';

const PortfolioInfo = () => {
    const cards = [
        {
            id: 1,
            icon: <FaLightbulb />,
            title: 'Bring Ideas to Life',
            desc: 'Transform your vision into functional, scalable digital solutions with our custom web and mobile development.'
        },
        {
            id: 2,
            icon: <FaCode />,
            title: 'Code with Purpose',
            desc: 'We blend innovation and technical precision to turn complex requirements into seamless, real-world applications.'
        },
        {
            id: 3,
            icon: <FaHandshake />,
            title: 'Grow with Confidence',
            desc: 'Partner with a team that values collaboration, transparency, and long-term success—your goals drive our code.'
        }
    ];

    return (
        <section className={styles.portfolioSection}>
            <img src={Images.portfolioBg} alt="bg" className={styles.bgImage} />
            <div className={styles.container}>
                <p className={styles.subtitle}>Our Portfolio</p>
                <h2 className={styles.heading}>
                    Your Vision, Our Code — Building<br />  the <span> Future Together</span>
                </h2>

                <div className={styles.cardWrapper}>
                    {cards.map((card, index) => (
                        <div key={card.id} className={styles.cardBox}>
                            <div className={styles.iconArea}>
                                <div className={styles.iconCircle}>{card.icon}</div>
                                <span className={styles.step}>0{card.id}</span>
                            </div>
                            <div className={styles.card}>
                                <h4>{card.title}</h4>
                                <p>{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioInfo;
