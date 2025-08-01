import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';
import HeroImage from '@assets/images/home/hero_image.webp';
import { Link } from 'react-router-dom';

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
};

const leftItemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 60 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, delay: 0.4 },
  },
  whileHover: {
    scale: 1.07,
    transition: { type: 'spring', stiffness: 300 },
  },
  whileTap: { scale: 0.95 },
};

const Hero = () => {
  return (
    <motion.section
      className={styles.hero}
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <motion.span className={styles.badge} variants={leftItemVariants}>
            Best Web & App Development Company In Surat, India
          </motion.span>
          <motion.h1 variants={leftItemVariants}>
            <span>A Digital Agency </span>
          </motion.h1>
          <motion.p variants={leftItemVariants}>
            <span>of,</span> Inteligents & Creative People
          </motion.p>
          <Link to="/about-us">
            <motion.button
              className={styles.cta}
              variants={buttonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              Explore Now
            </motion.button>
          </Link>
        </div>

        <motion.div className={styles.right} variants={imageVariants}>
          <img src={HeroImage} alt="Web development" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
