import React from 'react';
import styles from './Contact.module.scss';
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiSend } from "react-icons/fi";

const Contact = () => {
    return (
        <section className={styles.contactSection}>
            <div className={styles.container}>
                <div className={styles.contactInfo}>
                    <p className={styles.subHeading}><span>//</span> Need any help?</p>
                    <h2>Get in touch with us</h2>
                    <p className={styles.description}>
                        Got questions? Simply fill out the form, and we'll respond soon.
                    </p>

                    <div className={styles.item}>
                        <div className={styles.icon}><FiPhoneCall /></div>
                        <div>
                            <h4>Have any question?</h4>
                            <p>+91 982580-5271</p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.icon}><FiMail /></div>
                        <div>
                            <h4>Write email</h4>
                            <p>dgmtechsolution@gmail.com</p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.icon}><FiSend /></div>
                        <div>
                            <h4>Visit anytime</h4>
                            <p>


                                119 Rise on plaza, Sarthana Jakatnaka, Surat,<br /> Gujarat 395008
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.118882490036!2d72.8993187!3d21.230151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0458ad5141465%3A0x9289d379d8ae4d4!2sRise%20On%20Plaza!5e0!3m2!1sen!2sin!4v1721041047864!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location Map"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
