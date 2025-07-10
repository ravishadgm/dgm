import React from 'react';
import styles from './Status.module.scss';

const stats = [
    { number: '53+', label: 'Talented Brains' },
    { number: '8480+', label: 'Hours of Work a Month' },
    { number: '2548+', label: 'Projects Completed' },
    { number: '445+', label: 'Clients Trusted Us' },
];

const Status = () => {
    return (
        <section className={styles.statsSection}>
            <div className={styles.mainContainer}>
                <h2 className={styles.heading}>
                    Numbers Speak For <span>Themselves</span>
                </h2>
                <p className={styles.subtext}>
                    It’s The Magic Of Our Best Digital Marketing Services
                </p>
                <div className={styles.statsRow}>
                    {stats.map((item, index) => (
                        <div key={index} className={styles.statCard}>
                            <h3>{item.number}</h3>
                            <p>{item.label}</p>
                            {index !== stats.length - 1 && <div className={styles.divider} />}
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Status;
