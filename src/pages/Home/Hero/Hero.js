import React from 'react';
import styles from './Hero.module.scss';
import HeroImage from '@assets/images/home/hero_image.webp';
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.badge}>Best Web Development Company In Ahmedabad, India</span>
          <h1>
            We Develop Website That <br />
            <span>Drives Your Online Business</span>
          </h1>
          <p>
            As a leading web development company in Ahmedabad, we build incredible websites that
            correctly match your requirements. Our experience and expertise in delivering web
            solutions for small businesses to enterprise businesses keeps the brand ahead of the
            competition, even when the competition evolves!
          </p>
          <button className={styles.cta}>Get A Quote</button>
        </div>
        <div className={styles.right}>
          <img src={HeroImage} alt="Web development" />
        </div>
      </div>
    </section>
  );
};

export default Hero;