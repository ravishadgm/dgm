import React from 'react';
import styles from './ContactBrand.module.scss';

const ContactBrand = ({
  heading = 'Ready to Make Your Brand the',
  highlightedText = 'Next Big Thing?',
  description = 'Get in touch with our team and find out how our custom range of services can establish your brand’s digital presence and envision growth!',
  buttonText = 'Contact Us',
  onClick,
}) => {
  return (
    <section className={styles.contactBrand}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>
            {heading} <span>{highlightedText}</span>
          </h2>
          <p>{description}</p>
          <button className={styles.button} onClick={onClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactBrand;
