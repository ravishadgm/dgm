import React from 'react';
import styles from './ProjectDetailsLayout.module.scss';
import { FiArrowUpRight } from 'react-icons/fi';

const ProjectDetailsLayout = ({
    label = 'Project',
    title,
    subtitle,
    image,
    platform,
    category,
    liveView,
    services
}) => {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <p className={styles.label}>{label}</p>
                    <h1>
                        {title} <span>{subtitle}</span>
                    </h1>
                </div>

                {/* Image */}
                <div className={styles.imageWrapper}>
                    <img src={image} alt="project preview" />
                </div>

                {/* Info Grid */}
                <div className={styles.infoGrid}>
                    <div>
                        <span className={styles.metaLabel}>PLATFORM</span>
                        <p>{platform}</p>
                    </div>
                    <div>
                        <span className={styles.metaLabel}>CATEGORY</span>
                        <p>{category}</p>
                    </div>
                    {liveView?.label && (
                        <div>
                            <span className={styles.metaLabel}>LIVE VIEW</span>
                            <a href={liveView.url} target="_blank" rel="noopener noreferrer">
                                {liveView.label} <FiArrowUpRight className={styles.inlineIcon} />
                            </a>
                        </div>
                    )}
                    <div>
                        <span className={styles.metaLabel}>SERVICE WE PROVIDED</span>
                        <p>{services}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailsLayout;
