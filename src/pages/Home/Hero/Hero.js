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
           
            <span>Digital Marketing Agency,</span>
          </h1>
          <p>
           Transforming Ideas into Digital Success
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