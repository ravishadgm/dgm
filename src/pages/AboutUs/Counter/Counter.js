import React from "react";
import styles from "./Counter.module.scss";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { id: 1, number: 53, suffix: "+", label: "Talented Brains" },
  { id: 2, number: 8480, suffix: "+", label: "Hours of Work a Month" },
  { id: 3, number: 2548, suffix: "+", label: "Projects Completed" },
  { id: 4, number: 445, suffix: "+", label: "Clients Trusted Us" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Counter = () => {
  return (
    <section className={styles.counterSection}>
      <motion.div
        className={styles.innerCount}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {stats.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            variants={itemVariants}
            className={`${styles.counterItem} ${
              index !== stats.length - 1 ? styles.withBorder : ""
            }`}
          >
            <h3>
              <CountUp
                start={0}
                end={item.number}
                duration={2}
                suffix={item.suffix}
                enableScrollSpy
                scrollSpyOnce
              />
            </h3>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Counter;
