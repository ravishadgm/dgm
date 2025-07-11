import React from 'react';
import styles from './CommonIntro.module.scss';

const CommonIntro = ({
    title,
    highlightedTitle,
    secondTitle,
    buttonLabel,
    mobileButtonLabel,
    paragraphs = [],
}) => {
    return (
        <section className={styles.introSection}>
            <div className={styles.container}>

                <div className={styles.left}>
                    <h2>
                        {title}
                        <span> {highlightedTitle} </span>
                        {secondTitle}
                    </h2>
                    {buttonLabel && (
                        <button className={styles.cta} >
                            {buttonLabel}
                        </button>
                    )}
                </div>

                <div className={styles.right}>
                    {paragraphs.map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}

                    {mobileButtonLabel && (
                        <button className={`${styles.mobileOnly}`} >
                            {mobileButtonLabel}
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CommonIntro;

