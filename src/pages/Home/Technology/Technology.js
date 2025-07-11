import React, { useState } from "react";
import styles from "./Technology.module.scss";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiJquery,
  SiPhp,
  SiOpenjdk,
  SiGo,
  SiDotnet,
  SiApple,
  SiAndroid,
  SiFlutter,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiCodeigniter,
  SiLaravel,
  SiSpring,
  SiIonic,
  SiCoronaengine,
  SiGooglecloud,
  SiGodaddy,
  SiHostinger,
  SiCpanel,
  SiGoogleanalytics,
  SiPlausibleanalytics,
} from "react-icons/si";
import { FaShoePrints, FaGlobe, FaInternetExplorer } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Mobile",
  "Databases",
  "Framework",
  "Cloud",
  "Domain | Hosting",
  "Analytics",
];

const techIcons = [
  { icon: <SiHtml5 color="#e34f26" />, category: "Frontend" },
  { icon: <SiCss3 color="#1572b6" />, category: "Frontend" },
  { icon: <SiJavascript color="#f7df1e" />, category: "Frontend" },
  { icon: <SiBootstrap color="#7952b3" />, category: "Frontend" },
  { icon: <SiJquery color="#0769ad" />, category: "Frontend" },

  { icon: <SiPhp color="#8892be" />, category: "Backend" },
  { icon: <SiOpenjdk color="#007396" />, category: "Backend" },
  { icon: <SiGo color="#00add8" />, category: "Backend" },
  { icon: <SiDotnet color="#512bd4" />, category: "Backend" },

  { icon: <SiApple color="#000000" />, category: "Mobile" },
  { icon: <SiAndroid color="#3ddc84" />, category: "Mobile" },
  { icon: <SiFlutter color="#02569b" />, category: "Mobile" },

  { icon: <SiMysql color="#4479a1" />, category: "Databases" },
  { icon: <SiPostgresql color="#336791" />, category: "Databases" },
  { icon: <SiFirebase color="#ffca28" />, category: "Databases" },

  { icon: <SiCodeigniter color="#ee4623" />, category: "Framework" },
  { icon: <SiLaravel color="#ff2d20" />, category: "Framework" },
  { icon: <SiSpring color="#6db33f" />, category: "Framework" },
  { icon: <SiIonic color="#3880ff" />, category: "Framework" },
  { icon: <SiCoronaengine color="#f96f0b" />, category: "Framework" },

  { icon: <FaShoePrints color="#ff9900" />, category: "Cloud" },
  { icon: <SiGooglecloud color="#4285f4" />, category: "Cloud" },

  { icon: <SiGodaddy color="#7db701" />, category: "Domain | Hosting" },
  { icon: <SiHostinger color="#673de6" />, category: "Domain | Hosting" },
  { icon: <FaGlobe color="#4285f4" />, category: "Domain | Hosting" },
  { icon: <SiCpanel color="#ff6c2c" />, category: "Domain | Hosting" },

  { icon: <SiGoogleanalytics color="#f9ab00" />, category: "Analytics" },
  { icon: <SiPlausibleanalytics color="#5850ec" />, category: "Analytics" },
  { icon: <FaInternetExplorer color="#1ebbee" />, category: "Analytics" },
];

// Parent container stagger config
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12, // one-by-one delay
      delayChildren: 0.2,
    },
  },
};

// Zoom animation for each card
const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.175, 0.885, 0.32, 1.275], // elastic ease
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.3 },
  },
};

const Technology = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredIcons =
    selectedCategory === "All"
      ? techIcons
      : techIcons.filter((item) => item.category === selectedCategory);

  return (
    <section className={styles.technology}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          We Are A <span>Technology</span> Services Partner
        </motion.h2>

        <motion.div
          className={styles.tabs}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              className={selectedCategory === cat ? styles.active : ""}
              onClick={() => setSelectedCategory(cat)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {filteredIcons.map((item, index) => (
              <motion.div
                key={`${item.category}-${index}`}
                className={styles.card}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 12px 25px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div className={styles.icon}>{item.icon}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Technology;
