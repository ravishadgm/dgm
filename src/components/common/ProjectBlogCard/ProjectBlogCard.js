import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectBlogCard.module.scss';
import { useNavigate } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

const ProjectBlogCard = ({ id, image, category, title, CategoryIcon, description, date, month }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/portfolio/${id}`);
    };

    return (
        <div className={styles.card}>
            <motion.div className={styles.imageWrapper}>
                <motion.img
                    src={image}
                    alt={title}
                    initial={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                />

                <div className={styles.dateBadge}>
                    <span className={styles.day}>{date}</span>
                    <span className={styles.month}>{month}</span>
                </div>
            </motion.div>

            <div className={styles.content}>
                <div className={styles.categoryWrapper}>
                    {CategoryIcon && <CategoryIcon className={styles.categoryIcon} />}
                    <p className={styles.categoryText}>{category}</p>
                </div>
                <h3 className={styles.title} onClick={handleClick}>
                    <span className={styles.titleLink}>
                        {title} <FiArrowUpRight className={styles.arrowIcon} />
                    </span>
                </h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default ProjectBlogCard;
