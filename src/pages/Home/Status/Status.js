import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import styles from './Status.module.scss';

const stats = [
  { number: 53, suffix: '+', label: 'Talented Brains' },
  { number: 8480, suffix: '+', label: 'Hours of Work a Month' },
  { number: 2548, suffix: '+', label: 'Projects Completed' },
  { number: 445, suffix: '+', label: 'Clients Trusted Us' },
];

const Status = () => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const cardRefs = useRef([]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className={styles.statsSection}>
      <div className={styles.mainContainer}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Numbers Speak For <span>Themselves</span>
        </motion.h2>

        <motion.p
          className={styles.subtext}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          It’s The Magic Of Our Best Digital Marketing Services
        </motion.p>

        <div className={styles.statsRow}>
          {stats.map((item, index) => (
            <motion.div
              key={index}
              data-index={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`${styles.statCard} ${
                index !== stats.length - 1 ? styles.withBorder : ''
              }`}
              custom={index}
              initial="hidden"
              animate={visibleIndexes.includes(index) ? 'visible' : 'hidden'}
              variants={cardVariants}
            >
              <h3>
                {visibleIndexes.includes(index) ? (
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={2}
                    separator=","
                  />
                ) : (
                  '0'
                )}
                {item.suffix}
              </h3>
              <p>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Status;
