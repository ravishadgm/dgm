import React, { useState } from 'react';
import styles from './ProjectCarousel.module.scss';
import Images from '../../../assets/images/index';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ProjectCarousel({ title = "Projects", data = [], visibleCount = 3 }) {
    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % data.length);
    };

    const handlePrev = () => {
        setStartIndex((prev) => (prev - 1 + data.length) % data.length);
    };

    const visibleApps = Array.from({ length: visibleCount }, (_, i) =>
        data[(startIndex + i) % data.length]
    );

    return (
        <section className={styles.recentAppsSection}>
            <img
                src={Images.portfolioBackground}
                alt="Background"
                className={styles.bgImage}
            />

            <div className={styles.contentWrapper}>
                <div className={styles.header}>
                    <h2>
                        {title.split(' ').slice(0, -1).join(' ')}{' '}
                        <span>{title.split(' ').slice(-1)}</span>
                    </h2>

                    {data.length > visibleCount && (
                        <div className={styles.navButtons}>
                            <button onClick={handlePrev}><FaArrowLeft /></button>
                            <button onClick={handleNext}><FaArrowRight /></button>
                        </div>
                    )}
                </div>

                <div className={styles.cards}>
                    {visibleApps.map((app, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.imageSection}>
                                <motion.img
                                    src={app.image}
                                    alt={app.title}
                                    initial={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4, ease: 'easeOut' }}
                                />
                                <a href={app.link || '#'} className={styles.plusIcon}>
                                    <FiArrowUpRight />
                                </a>
                            </div>
                            <div className={styles.textSection}>
                                <h3>{app.title}</h3>
                                <p>{app.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
