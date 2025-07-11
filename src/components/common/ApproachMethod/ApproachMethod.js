import React, { useState } from 'react';
import styles from './ApproachMethos.module.scss';
import { FaChevronDown } from 'react-icons/fa';

export default function CommonAccordion({ title, subtitle, description, accordionItems }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h2>
                    {title} <span>{subtitle}</span><br /> Approach
                </h2>
                <p>{description}</p>
            </div>

            <div className={styles.right}>
                {accordionItems.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
                    >
                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(index)}>
                            <h3>{item.title}</h3>
                            <FaChevronDown className={styles.icon} />
                        </div>
                        {activeIndex === index && (
                            <div className={styles.accordionContent}>
                                <p>{item.content}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
