import React from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.scss';

const containerVariants = {
  hidden: { y: 10 },
  visible: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1],
      when: 'beforeChildren',
      staggerChildren: 0.12,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: 0.3,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const HeroSection = ({
  badgeText,
  title,
  highlight,
  subtitle,
  buttonLabel,
  image,
  onClick,
}) => {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className={styles.left}>
          {badgeText && (
            <motion.span className={styles.badge} variants={childVariants}>
              {badgeText}
            </motion.span>
          )}
          <motion.h1 variants={childVariants}>
            {title} {highlight && <span>{highlight}</span>}
          </motion.h1>
          <motion.p variants={childVariants}>{subtitle}</motion.p>
          {buttonLabel && (
            <motion.button
              className={styles.cta}
              onClick={onClick}
              variants={childVariants}
            >
              {buttonLabel}
            </motion.button>
          )}
        </div>
        <motion.div className={styles.right} variants={imageVariants}>
          <img src={image} alt="Hero" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
