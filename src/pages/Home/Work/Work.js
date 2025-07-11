import React from 'react';
import { motion } from 'framer-motion';
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
    title: 'Communication Tech & System Integration - Development & SEO',
  },
  {
    id: 5,
    image: Images.work5,
    title: 'Industrial Power Generators - eCommerce Development & SEO',
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
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Recent <span>Work</span>
          </motion.h2>
        </div>

        <div className={styles.projectSection}>
          <div className={styles.grid}>
            {projectData.map((project, index) => (
              <motion.div
                key={project.id}
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt={project.title} />
                  <div className={styles.overlay}>
                    <p>{project.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
