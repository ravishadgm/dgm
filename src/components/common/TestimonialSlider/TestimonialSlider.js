import React from 'react';
import styles from './TestimonialSlider.module.scss';
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function TestimonialSlider({ testimonials = [] }) {
    if (!testimonials.length) return null;

    return (

        <div className={styles.sliderWrapper}>
            <div className={styles.slider}>
                {testimonials.map((item, index) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.quoteIcon}><BiSolidQuoteAltLeft /></div>
                        <p className={styles.quote}>{item.quote}</p>
                        <div className={styles.author}>
                            <strong>{item.name}</strong>
                            {item.location && <div className={styles.location}>{item.location}</div>}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
