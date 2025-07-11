import React from 'react';
import { motion } from 'framer-motion';
import styles from "./Certificates.module.scss";
import Images from "@assets/images";

const awards = [
  { id: 1, src: Images.certificate1, alt: 'Clutch' },
  { id: 2, src: Images.certificate2, alt: 'Top Digital Marketing' },
  { id: 3, src: Images.certificate3, alt: 'Top SEO Company' },
  { id: 4, src: Images.certificate4, alt: 'National Excellence' },
  { id: 5, src: Images.certificate5, alt: 'Top SEO Provider' },
  { id: 6, src: Images.certificate6, alt: 'Top 10 Agency' },
  { id: 7, src: Images.certificate7, alt: 'Forbes Agency' },
];

// Text animation for heading
const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

// Cards container animation
const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

// Individual card animation
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Certificates = ({ headingTitle, headingDescription }) => {
  const cleanTitle = headingTitle.replace(/<\/?[^>]+(>|$)/g, "");
  const titleWords = cleanTitle.split(" ");

  return (
    <section className={styles.certificateSection}>
      {/* Text Animation Section */}
      <div className={styles.heading}>
        <h2>
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={wordVariants}
              style={{
                display: 'inline-block',
                marginRight: '6px',
                whiteSpace: 'pre',
              }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
          dangerouslySetInnerHTML={{ __html: headingDescription }}
        />
      </div>

      {/* Certificates Grid with Staggered Card Animation */}
      <motion.div
        className={styles.awardsSection}
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className={styles.grid}>
          {awards.map((award) => (
            <motion.div
              key={award.id}
              className={styles.card}
              variants={cardVariants}
            >
              <img src={award.src} alt={award.alt} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certificates;
