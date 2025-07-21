import React from 'react';
import { motion } from 'framer-motion';
import Images from "../../../assets/images";
import styles from './Work.module.scss';

const projectData = [
  {
    id: 1,
    image: Images.AppProject3,
    title: 'Asite Field - Offline-ready app for construction data and field work.',
  },
  {
    id: 2,

    image: Images.FarmHouseHub,
    title: 'FarmHouseHub - Dual-module app for booking stays and managing farmhouse rentals.',
  },
  {
    id: 3,
    image: Images.GenieDelivery,
    title: 'GenieDelivery  - A dynamic cross-platform delivery solution for modern Indian consumers.',
  },
  {
    id: 4,
    image: Images.AddScale2,
    title: 'AddScale - AI-Powered Digital Marketing Platform',
  },
  {
    id: 5,
    image: Images.WebProject1,
    title: 'Varn - Corporate website for India’s leading aluminum extrusion manufacturer.',
  },
  {
    id: 6,
    image: Images.TeamFlow,
    title: 'TeamFlow - Collaborative Team Workspace Platform',
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
