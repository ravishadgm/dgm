import React from 'react';
import styles from './OurClient.module.scss';
import images from '@assets/images';


const logos = [
  images.client_1, images.client_2, images.client_3, images.client_4,
 images.client_1, images.client_2, images.client_3, images.client_4,
images.client_1, images.client_2, images.client_3, images.client_4,
]; // Repeat as many as needed

const Clients = () => {
  return (
    <section className={styles.clientSection}>
      <div className={styles.title}>
        <h2>Our <span>Clients</span></h2>
      </div>
      <div className={styles.grid}>
        {logos.map((logo, index) => (
          <div key={index} className={styles.card}>
            <img src={logo} alt={`Client Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
