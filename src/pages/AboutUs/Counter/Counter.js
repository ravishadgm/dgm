import React from "react";
import styles from "./Counter.module.scss";

const stats = [
  { id: 1, number: "53+", label: "Talented Brains" },
  { id: 2, number: "8480+", label: "Hours of Work a Month" },
  { id: 3, number: "2548+", label: "Projects Completed" },
  { id: 4, number: "445+", label: "Clients Trusted Us" },
];

const Counter = () => {
  return (
    <section className={styles.counterSection}>
      <div className={styles.innerCount}>
        {stats.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.counterItem} ${
              index !== stats.length - 1 ? styles.withBorder : ""
            }`}
          >
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counter;
