import React from "react";
import styles from "./BusinessGrowth.module.scss";

const features = [
  {
    title: "Communication",
    description: "Transparent updates through each stage of development.",
    icon: "📞",
  },
  {
    title: "Cost-effective",
    description: "High-quality, scalable apps without high costs.",
    icon: "💰",
  },
  {
    title: "Expertise",
    description: "Decades of industry experience and technical skill.",
    icon: "🧠",
  },
  {
    title: "Quality",
    description: "Performance, scalability, and delightful UX guaranteed.",
    icon: "✅",
  },
];

const stats = [
  { number: "5+", label: "Awards Won" },
  { number: "100+", label: "Team Members" },
];

const BusinessGrowth = () => {
  return (
    <section className={styles.businessGrowth}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subtitle}>// What Makes Us Unique?</p>
          <h2 className={styles.title}>
            Driving Business Growth Through Mobile App Innovation
          </h2>
          <div className={styles.stats}>
            {stats.map((stat, idx) => (
              <div key={idx} className={styles.stat}>
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cards}>
          {features.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessGrowth;
