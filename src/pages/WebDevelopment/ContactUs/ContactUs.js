import React from 'react';
import styles from './ContactUs.module.scss';
import { motion } from 'framer-motion';

const ContactUs = ({
    heading = 'Connect',
    highlightedText = ' With Us!',
    description = 'Be it a WordPress website, Shopify eStore, or custom web development, we have delivered results and growth to global businesses; make sure the next is yours. Schedule a call and contact our Website Development Services team to discuss your project!',
    buttonText = 'Take Me There',
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
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactUs;
