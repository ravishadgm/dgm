import React from 'react';
import styles from './Portfolio.module.scss';

const Portfolio = ({
    sectionTitle,
    highlight,
    subtitle,
    description,
    result1,
    result2,
    image,
    order = 1,
}) => {
    const isReversed = order === 2;
    const sectionClass = `${styles.portfolioSection} ${styles[`order${order}`]}`;
    const layoutClass = `${styles.mainContainer} ${isReversed ? styles.reversed : ''}`;

    return (
        <section className={sectionClass}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>
                        {sectionTitle} <span>{highlight}</span>
                    </h2>
                </div>

                <div className={layoutClass}>

                    <div className={styles.left}>
                        <h3>{subtitle}</h3>
                        <p>{description}</p>
                        <div className={styles.result}>Results</div>

                        <div className={styles.resultBox}>
                            <div className={styles.resultItem}>
                                <h4>{result1.value}</h4>
                                <p>{result1.label}</p>
                            </div>
                            <div className={styles.resultItem}>
                                <h4>{result2.value}</h4>
                                <p>{result2.label}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <img src={image} alt="Portfolio Project" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
