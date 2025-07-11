// Certificates.jsx
import React from 'react';
import styles from "./Certificates.module.scss";
import Images from "@assets/images";

const awards = [
    { id: 1, src: Images.certificate1, alt: 'Clutch' },
    { id: 2, src: Images.certificate2, alt: 'Top Digital Marketing' },
    { id: 3, src: Images.certificate3, alt: 'Top SEO Company' },
    { id: 4, src: Images.certificate4, alt: 'National Excellence' },
    { id: 5, src: Images.certificate5, alt: 'Top SEO Provider' },
    { id: 6, src: Images.certificate6, alt: 'Top 10 Agency' },
    { id: 7, src: Images.certificate7, alt: 'Forbes Agency' },
];

const Certificates = ({ headingTitle, headingDescription }) => {
    return (
        <section className={styles.certificateSection}>
            <div className={styles.heading}>
                <h2 dangerouslySetInnerHTML={{ __html: headingTitle }} />
                <p dangerouslySetInnerHTML={{ __html: headingDescription }} />
            </div>

            <div className={styles.awardsSection}>
                <div className={styles.grid}>
                    {awards.map((award) => (
                        <div key={award.id} className={styles.card}>
                            <img src={award.src} alt={award.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
