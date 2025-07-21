import React from 'react';
import styles from './Advantages.module.scss';
import {
  FaThumbsUp,
  FaSearch,
  FaHandshake,
  FaArrowsAlt,
  FaChartBar,
  FaClock,
  FaHeadset,
  FaLightbulb,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const advantages = [
  {
    icon: <FaThumbsUp />,
    title: 'Reliability',
    desc: 'We deliver quality services that consistently meet desired standards and performance.',
  },
  {
    icon: <FaSearch />,
    title: 'Transparency',
    desc: 'We build strong relationships based on transparency and open communication.',
  },
  {
    icon: <FaHandshake />,
    title: 'Honesty',
    desc: 'We prioritize integrity for a mutually successful and sustainable business.',
  },
  {
    icon: <FaArrowsAlt />,
    title: 'Flexibility',
    desc: 'We adapt seamlessly to changing needs, conditions, and technological advancements.',
  },
  {
    icon: <FaChartBar />,
    title: 'Stable Growth',
    desc: 'We focus on steady progress that ensures long-term success.',
  },
  {
    icon: <FaClock />,
    title: 'On-Time Delivery',
    desc: 'We meet deadlines to maximize customer satisfaction and trust.',
  },
  {
    icon: <FaHeadset />,
    title: 'Efficiency',
    desc: 'We optimize resources to attain business goals effectively and affordably.',
  },
  {
    icon: <FaLightbulb />,
    title: 'Unique Solutions',
    desc: 'We craft tailored solutions that deliver lasting impact and superior user experience.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Advantages of <span>Working With Us</span>
        </motion.h2>

        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Success isn’t accidental — it’s engineered. We bring a sharp focus on technology, creativity, and performance to help your business grow in the digital world and stand out with confidence.
        </motion.p>

        <motion.div className={styles.grid}>
          {advantages.map((item, i) => (
            <motion.div
              className={styles.card}
              key={i}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 12px 25px rgba(0, 0, 0, 0.1)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Advantages;
