import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from "./About.module.scss";
import DigitalMarketing from './DigitalMarketing/DigitalMarketing';
import Development from './Development/Development';
import Design from './Design/Design';

const tabs = ['Digital Marketing', 'Development', 'Design'];

const About = () => {
  const [activeTab, setActiveTab] = useState('Digital Marketing');

  const renderContent = (tabName = activeTab) => {
    switch (tabName) {
      case 'Digital Marketing':
        return <DigitalMarketing />;
      case 'Development':
        return <Development />;
      case 'Design':
        return <Design />;
      default:
        return null;
    }
  };

const headingVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeInOut' },
  },
};

const tabVariant = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

const contentVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeInOut' },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};


  return (
    <section className={styles.aboutSection}>
      <motion.div
        className={styles.heading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={headingVariant}
      >
        <h2>
          White-Label Services for Results-Driven <br />
          <span>Digital Marketing Solutions</span>
        </h2>
        <p>
          Whether it’s building your brand or creating content that converts traffic into sales in the world of digital marketing, results are important. We are one of the Best Digital Marketing Agency In Ahmedabad and we create digital marketing strategies that translate to significant success and business growth.
        </p>
      </motion.div>

      <div className={styles.container}>
        {/* Mobile Accordion */}
        <motion.div className={styles.mobileAccordion}>
          {tabs.map((tab) => (
            <motion.div
              key={tab}
              className={styles.accordionItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={tabVariant}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => setActiveTab(activeTab === tab ? '' : tab)}
              >
                {tab}
                <span>{activeTab === tab ? '▲' : '▼'}</span>
              </div>
              <AnimatePresence mode="wait">
                {activeTab === tab && (
                  <motion.div
                    className={styles.accordionContent}
                    key={tab}
                    variants={contentVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {renderContent(tab)}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop Layout */}
        <motion.div
          className={styles.desktopLayout}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={tabVariant}
        >
          <div className={styles.sidebar}>
            {tabs.map(tab => (
              <motion.div
                key={tab}
                className={`${styles.tabItem} ${activeTab === tab ? styles.active : ''}`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {tab}
              </motion.div>
            ))}
          </div>

          <div className={styles.content}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={contentVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
