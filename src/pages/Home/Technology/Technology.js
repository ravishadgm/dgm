import React, { useState } from "react";
import styles from "./Technology.module.scss";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiJquery,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDart,
  SiCplusplus,
  SiFlutter,
  SiSwift,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiExpress,
  // SiCodeigniter,
  // SiLaravel,
  // SiSpring,
  // SiIonic,
  // SiCoronaengine,
  SiGooglecloud,
  SiVercel,
  SiNetlify,
  SiHostinger,
  SiGoogleanalytics,
} from "react-icons/si";
import { FaGlobe, FaInternetExplorer } from "react-icons/fa";
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
  { icon: <SiReact color="#0769ad" />, category: "Frontend" },

  { icon: <SiNodedotjs color="#68A063" />, category: "Backend" },
  { icon: <SiDart color="#0075BA" />, category: "Backend" },
  { icon: <SiCplusplus color="#0075BA" />, category: "Backend" },

  { icon: <SiFlutter color="#02569b" />, category: "Mobile" },
  { icon: <SiSwift color="#F05138" />, category: "Mobile" },

  { icon: <SiMysql color="#4479a1" />, category: "Databases" },
  { icon: <SiMongodb color="#3FA037" />, category: "Databases" },
  { icon: <SiFirebase color="#ffca28" />, category: "Databases" },

  { icon: <SiNextdotjs color="#00000" />, category: "Framework" },
  { icon: <SiExpress color="#00000" />, category: "Framework" },
  // { icon: <SiCodeigniter color="#ee4623" />, category: "Framework" },
  // { icon: <SiLaravel color="#ff2d20" />, category: "Framework" },
  // { icon: <SiSpring color="#6db33f" />, category: "Framework" },
  // { icon: <SiIonic color="#3880ff" />, category: "Framework" },
  // { icon: <SiCoronaengine color="#f96f0b" />, category: "Framework" },

  { icon: <SiGooglecloud color="#4285f4" />, category: "Cloud" },
  { icon: <SiVercel color="#000000" />, category: "Cloud" },
  { icon: <SiNetlify color="#2E51ED" />, category: "Cloud" },

  { icon: <SiHostinger color="#673de6" />, category: "Domain | Hosting" },
  { icon: <FaGlobe color="#4285f4" />, category: "Domain | Hosting" },

  { icon: <SiGoogleanalytics color="#f9ab00" />, category: "Analytics" },
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
