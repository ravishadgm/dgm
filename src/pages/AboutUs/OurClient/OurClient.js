import React from 'react';
import styles from './OurClient.module.scss';
import images from '@assets/images';
import { motion } from 'framer-motion';

const logos = [
  images.client_1, images.client_2, images.client_3, images.client_4,
  images.client_1, images.client_2, images.client_3, images.client_4,
  images.client_1, images.client_2, images.client_3, images.client_4,
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Clients = () => {
  return (
    <section className={styles.clientSection}>
      <div className={styles.title}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Our <span>Clients</span>
        </motion.h2>
      </div>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className={styles.card}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <img src={logo} alt={`Client Logo ${index + 1}`} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Clients;
