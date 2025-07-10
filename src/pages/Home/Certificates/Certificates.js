import React from 'react';
import styles from "./Certificates.module.scss";
import Images from "../../../assets/images";

const awards = [
    { id: 1, src: Images.certificate1, alt: 'Clutch' },
    { id: 2, src: Images.certificate2, alt: 'Top Digital Marketing' },
    { id: 3, src: Images.certificate3, alt: 'Top SEO Company' },
    { id: 4, src: Images.certificate4, alt: 'National Excellence' },
    { id: 5, src: Images.certificate5, alt: 'Top SEO Provider' },
    { id: 6, src: Images.certificate6, alt: 'Top 10 Agency' },
    { id: 7, src: Images.certificate7, alt: 'Forbes Agency' },
];

const Certificates = () => {


    return (
        <section className={styles.certificateSection}>
            <div className={styles.heading}>
                <h2>Certified Best <span>Digital Marketing Company</span><br /> in Ahemdabad</h2>
                <p>It’s Not The Noise, But The Values We Add As Digital Marketing Agency In Ahmedabad, India</p>
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
    )
}

export default Certificates