import React from 'react';
import styles from './ContactUs.module.scss';
import { motion } from 'framer-motion';

const ContactUs = ({
    heading = 'Connect',
    highlightedText = ' With Us!',
    description = `Whether it's a custom-coded website, an eCommerce platform, or a full-scale business portal — we've helped brands go digital the right way. Let’s build your next powerful web solution together. Schedule a call with our Web Development team today!`,
    buttonText = 'Take Me There',
    buttonLink = '/contact',
    onClick,
}) => {
    return (
        <section className={styles.mainContainer}>
            <motion.div className={styles.contactBrand}>
                <motion.div
                    className={styles.container}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            {heading} <span>{highlightedText}</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {description}
                        </motion.p>



                        <a href={buttonLink}>
                            <motion.button
                                className={styles.button}
                                onClick={onClick}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {buttonText}
                            </motion.button>
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactUs;
