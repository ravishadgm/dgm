import React from "react";
import styles from "./Hero.module.scss";
import { Link } from "react-router-dom";
import Images from "@assets/images";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.2,
      duration: 0.6,
      ease: [0.175, 0.885, 0.32, 1.275], // strong easeOutBack
    },
  }),
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.h1
          className={styles.heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={0}
          variants={textVariants}
        >
          Results-Driven IT Experts Creating <br />
          <span className={styles.highlight}>Next-Gen Web & App Solutions</span> for Future
        </motion.h1>

        <motion.p
          className={styles.description}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={1}
          variants={textVariants}
        >
          At DGMTech Solutions, we combine strategy, design, and technology to build reliable, impactful digital products that drive business success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            to="/contact"
            className={styles.contactBtn}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      <div className={styles.imageSection}>
        {[Images.hero_1, Images.hero_2, Images.hero_3].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt="group profile"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={i}
            variants={imageVariants}
            className={styles.image}
          />
        ))}
      </div>
    </section>
  );
}
