import React from 'react';
import Images from "../../../assets/images";
import styles from "./TrustedByBrands.module.scss";
import SmallCard from '@components/common/SmallCard/SmallCard';

const TrustedByBrands = () => {
    const brandLogos = [
        { name: "Jindal Aluminium", src: Images.company1 },
        { name: "Hindalco", src: Images.company2 },
        { name: "Vedanta", src: Images.company3 },
        { name: "Tata Steel", src: Images.company4 },
        { name: "Jindal Aluminium", src: Images.company5 },
        { name: "Hindalco", src: Images.company6 },
        { name: "Vedanta", src: Images.company7 },
        { name: "Tata Steel", src: Images.company8 },
        { name: "L&T", src: Images.company9 },
        { name: "L&T", src: Images.company10 },
    ];

    const cardData = [
        { logo: Images.google, count: '4.8' },
        { logo: Images.clutch, count: '4.9' },
        { logo: Images.bark, count: '4.8' },
        { logo: Images.sortist, count: '5.0' },
        { logo: Images.GoodFirm, count: '4.9' },
    ];

    return (
        <>
            <section className={styles.trustedSection}>
                <div className={styles.marqueeWrapper}>
                    <div className={styles.marqueeContent}>
                        {[...brandLogos, ...brandLogos].map((brand, id) => (
                            <div key={id} className={styles.logoCard}>
                                <img src={brand.src} alt={brand.name} />
                            </div>
                        ))}
                    </div>
                    <div className={styles.cardRow}>
                        {cardData.map((card, index) => (
                            <SmallCard key={index} logo={card.logo} count={card.count} />
                        ))}
                    </div>
                </div>

            </section>

        </>
    )
}

export default TrustedByBrands