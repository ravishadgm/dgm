import React from 'react';
import styles from './HeroSection.module.scss';

const HeroSection = ({
    badgeText,
    title,
    highlight,
    subtitle,
    buttonLabel,
    image,
    onClick,
}) => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.left}>
                    {badgeText && <span className={styles.badge}>{badgeText}</span>}
                    <h1>
                        {title} {highlight && <span>{highlight}</span>}
                    </h1>
                    <p>{subtitle}</p>
                    {buttonLabel && (
                        <button className={styles.cta} onClick={onClick}>
                            {buttonLabel}
                        </button>
                    )}
                </div>
                <div className={styles.right}>
                    <img src={image} alt="Hero" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
