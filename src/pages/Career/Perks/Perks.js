import React from 'react';
import styles from './Perks.module.scss';
import Images from '../../../assets/images/index';
import { motion } from 'framer-motion';

const perks = [
  {
    icon: Images.icon1,
    title: '5 Days a Week Job',
    desc: 'Work Hard, Relax Harder – because doing only one would be bocoring!',
  },
  {
    icon: Images.icon2,
    title: 'Flexible Timing',
    desc: 'Empower your A-game with our flexible timing. It’s game on!',
  },
  {
    icon: Images.icon3,
    title: 'Employee Referral Program',
    desc: 'Help recruit the right ones, get more than just high-fives!',
  },
  {
    icon: Images.icon4,
    title: 'Training',
    desc: 'We train team members from day 1 to make them versatile team-players in multiple domains.',
  },
  {
    icon: Images.icon5,
    title: 'Rewards',
    desc: 'Get paid what you’re worth, and then some. A bit more, but no less!',
  },
  {
    icon: Images.icon6,
    title: 'Festival, Birthday & More Celebration',
    desc: 'Annual Trips, Festivals, and Events – we keep our social calendar buzzing with fun activities and events.',
  },
];

// Define different animation variants per card index
const cardVariants = [
  {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
  {
    hidden: { opacity: 0, rotateY: -90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  },
  {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'backOut' },
    },
  },
  {
    hidden: { opacity: 0, rotate: -10, y: 50 },
    visible: {
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
  {
    hidden: { opacity: 0, skewY: 10 },
    visible: {
      opacity: 1,
      skewY: 0,
      transition: { duration: 0.6 },
    },
  },
  {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  },
];

export default function Perks() {
  return (
    <section className={styles.perksSection}>
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Perks of working at <span>DGMtech Solutions</span>
        </motion.h2>

        <div className={styles.perksGrid}>
          {perks.map((item, index) => (
            <motion.div
              key={index}
              className={styles.perkCard}
              variants={cardVariants[index % cardVariants.length]}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                scale: 1.05,
                transition: { type: 'spring', stiffness: 200 },
              }}
            >
              <img src={item.icon} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
