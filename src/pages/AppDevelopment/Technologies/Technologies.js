import React from 'react';
import { motion } from 'framer-motion';
import styles from './Technologies.module.scss';

const tools = [
  {
    title: 'React Native',
    description: 'Build performant, cross-platform mobile apps for Android and iOS using JavaScript and React. It offers native-like experience and fast development cycles.',
    icon: '🛠️',
  },
  {
    title: 'Swift',
    description: 'A robust programming language created by Apple, designed to make iOS/macOS development safer, faster, and more expressive with excellent performance.',
    icon: '📱',
  },
  {
    title: 'Kotlin',
    description: 'A modern language by JetBrains designed for Android development. It enhances code readability, null safety, and reduces boilerplate significantly.',
    icon: '🤖',
  },
  {
    title: 'Flutter',
    description: 'A UI toolkit by Google for building natively compiled applications from a single Dart codebase for mobile, web, and desktop platforms.',
    icon: '🌐',
  },
  {
    title: 'Firebase',
    description: 'A backend-as-a-service platform by Google. Offers tools like Firestore DB, real-time syncing, authentication, and app performance monitoring.',
    icon: '🔥',
  },
  {
    title: 'FlutterFlow',
    description: 'A low-code platform for building Flutter apps visually. Enables seamless UI design, Firebase integration, and fast app deployment with minimal coding.',
    icon: '💠',
  },
];

const Technologies = () => {
  return (
    <section className={styles.toolsSection}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        App Development Technologies
      </motion.h2>

      <div className={styles.grid}>
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>{tool.icon}</span>
            </div>
            <h3>{tool.title}</h3>
            <p>{tool.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
