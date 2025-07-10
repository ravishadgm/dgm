import React from 'react';
import Images from "../../../assets/images";
import styles from './Work.module.scss';


const projectData = [
    {
        id: 1,
        image: Images.work1,
        title: 'Digital Marketing Agency Australia – Development, SEO & SMM',
    },
    {
        id: 2,
        image: Images.work2,
        title: 'Gym Equipment Showroom - eCommerce Development, SEO & Google Ads',
    },
    {
        id: 3,
        image: Images.work3,
        title: 'Home Improvement – Website Development, SEO & Google Ads',
    },
    {
        id: 4,
        image: Images.work4,
        title: 'Commuication Technologies & System Integration - Website Development & SEO',
    },
    {
        id: 5,
        image: Images.work5,
        title: 'Industrial & Commercial Power Generators - eCommerce Development & SEO',
    },
    {
        id: 6,
        image: Images.work6,
        title: 'Home Building Company - Website Development & SEO',
    },
];

const Work = () => {
    return (
        <section className={styles.container}>
            <div className={styles.mainContainer}>
                <div className={styles.heading}>
                    <h2> Our Recent <span>Work</span></h2>
                </div>
                <div className={styles.projectSection}>
                    <div className={styles.grid}>
                        {projectData.map((project) => (
                            <div key={project.id} className={styles.card}>
                                <img src={project.image} alt={project.title} />
                                <div className={styles.overlay}>
                                    <p>{project.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work