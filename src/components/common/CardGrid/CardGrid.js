import React from 'react';
import styles from './CardGrid.module.scss';

export default function CardGrid({ data = [] }) {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.container}>
                <h1>
                    What<span> We Do</span>
                </h1>

                <div className={styles.cardGrid}>
                    {data.map((card, index) => (
                        <div
                            key={index}
                            className={styles.card}
                            style={{
                                "--hover-bg": card.hoverColor,
                                "--hover-border": card.borderColor,
                                "--icon-hover-bg": card.borderColor
                            }}
                        >
                            <div className={styles.iconWrapper}>
                                <img src={card.icon} alt={card.title} />
                            </div>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
