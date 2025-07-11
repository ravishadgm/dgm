import React from "react";
import styles from "./Hero.module.scss";
import { Link } from "react-router-dom";
import Images from "@assets/images";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Impact-Driven Agency Shaping <br />
          <span className={styles.highlight}>Digital Landscape</span> for Future
        </h1>
        <p className={styles.description}>
          We are a digital-first, cutting-edge digital agency bridging the gap
          between brand and audience for a growth-driven and sustainable
          tomorrow!
        </p>
        <Link to="/contact" className={styles.contactBtn}>
          Contact Us
        </Link>
      </div>
      <div className={styles.imageSection}>
        <img src={Images.hero_1} alt="group profile" />
        <img src={Images.hero_2} alt="group profile" />

        <img src={Images.hero_3} alt="group profile" />
      </div>
    </section>
  );
}
