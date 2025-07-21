import React from 'react';
import styles from './AboutProject.module.scss';

const AboutProject = ({
    heading,
    description,
    imageLeft,
    imageRight,
    problems,
    challenges,
    solutions,
}) => {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.topSection}>
                <div className={styles.heading}>
                    <h1>
                        {heading}
                    </h1>
                    <p className={styles.label}>{description}</p>
                </div>

                <div className={styles.images}>
                    {imageLeft && <img src={imageLeft} alt="About left" />}
                    {imageRight && <img src={imageRight} alt="About right" />}
                </div>


                <div className={styles.bottomContent}>
                    {problems && (
                        <div className={styles.sectionBlock}>
                            <div className={styles.subTitle}>Problems</div>
                            <div className={styles.description}>{problems.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                            </div>
                        </div>
                    )}
                    {challenges && (
                        <div className={styles.sectionBlock}>

                            <div className={styles.subTitle}>Challenges</div>
                            <div className={styles.description}>
                                {challenges.map((item, i) => (
                                    <div key={i} className={styles.solutionItem}>
                                        <h4 className={styles.solutionHeading}>{item.heading}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {solutions && (
                        <div className={styles.sectionBlock}>
                            <div className={styles.subTitle}>Our Solutions</div>
                            <div className={styles.description}>
                                {solutions.map((item, i) => (
                                    <div key={i} className={styles.solutionItem}>
                                        <h4 className={styles.solutionHeading}>{item.heading}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutProject;
