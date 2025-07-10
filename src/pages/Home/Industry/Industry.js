import React from 'react';
import styles from "./Industry.module.scss";
import Images from "../../../assets/images";

const industries = [
    { name: 'Healthcare', icon: Images.industry1 },
    { name: 'Retail', icon: Images.industry2 },
    { name: 'Finance', icon: Images.industry3 },
    { name: 'Education', icon: Images.industry4 },
    { name: 'Real-Estate', icon: Images.industry5 },
    { name: 'Manufacturing', icon: Images.industry6 },
    { name: 'Transportation', icon: Images.industry7 },
    { name: 'Entertainment', icon: Images.industry8 },
    { name: 'Hospitality', icon: Images.industry9 },
    { name: 'Travel', icon: Images.industry10 },
    { name: 'Legal', icon: Images.industry11 },
    { name: 'Construction', icon: Images.industry12 },
];

const Industry = () => {
    return (
        <section className={styles.industriesSection}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2>
                        Industries <span>We Serve</span>
                    </h2>
                    <p>
                        As the leading digital marketing agency in Ahmedabad, we at IndyLogix partner with tech companies
                        in specialized industries to provide industry-specific digital marketing services and expertise.
                        Our innovative solutions are aimed at reducing the communication gap, fostering a customer-centric
                        relationship, and solving marketing challenges.
                    </p>
                    <button className={styles.contactBtn}>Contact Us</button>
                </div>

                <div className={styles.gridWrapper}>
                    <div className={styles.grid}>
                        {industries.map((item, index) => (
                            <div className={styles.card} key={index}>
                                <img src={item.icon} alt={item.name} />
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industry;
