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

const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Advantages of <span>Working With Us</span>
        </h2>
        <p className={styles.subheading}>
          Change is inevitable; growth is intentional. Our vision is to empower businesses to thrive in the digital arena and make a lasting impact.
        </p>

        <div className={styles.grid}>
          {advantages.map((item, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
