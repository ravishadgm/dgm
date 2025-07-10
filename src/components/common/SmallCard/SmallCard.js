import React from 'react';
import styles from './SmallCard.module.scss';
import { FaStar } from 'react-icons/fa';

const SmallCard = ({ logo, count }) => {
    return (
        <section className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.data}>
                <FaStar className={styles.starIcon} />
                <p>{count}</p>
            </div>
        </section>
    );
};

export default SmallCard;
