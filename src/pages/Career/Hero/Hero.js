import React from 'react';
import styles from './Hero.module.scss';
import Images from '../../../assets/images/index';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className={styles.bannerSection}
      style={{ backgroundImage: `url(${Images.career})` }}
    >
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Take A Career Leap At <span>IndyLogix</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Breathe, take the leap of faith, leave your mark with us!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
