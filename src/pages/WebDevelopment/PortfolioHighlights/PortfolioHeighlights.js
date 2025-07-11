import React, { useEffect, useState } from 'react';
import Portfolio from '../../../components/common/Portfolio/Portfolio';
import Images from "../../../assets/images/index";

import styles from './PortfolioHighlights.module.scss';

const data = [
    {
        order: 1,
        sectionTitle: "Our",
        highlight: "Portfolio",
        subtitle: "Transformed Online Presence of Physical and Mental Well-Being Organizations From Ireland",
        description: "IndyLogix designed and developed a responsive, intuitive, and user-friendly website to establish its brand and enhance customer engagement.",
        result1: { value: '35%', label: 'Rise in Membership Sign-ups' },
        result2: { value: '55%', label: 'Increase in Organic Lead' },
        image: Images.webPortfolio,
    },
    {
        order: 2,
        sectionTitle: "Our",
        highlight: "Portfolio",
        subtitle: "Established Brand's Online Presence for the UK's Top IT Company",
        description: "As part of comprehensive web development, we redesigned the website with improved functionality, scalability, and user experience, leading to client satisfaction.",
        result1: { value: '#3', label: 'Rank in Google SERP for High-Competition Keyword' },
        result2: { value: '28%', label: 'Increase in Client Inquiries' },
        image: Images.webSecondPortfolio,
    },
    {
        order: 3,
        sectionTitle: "Our",
        highlight: "Portfolio",
        subtitle: "Designed and Developed Website for the UK's Best Music Group",
        description: "We helped create a simple yet elegant and functional website that entices the target audience to take the next step – hire them for a gig!",
        result1: { value: '75%', label: 'Increase in Site Visits' },
        result2: { value: '54%', label: 'Improvement in ROI' },
        image: Images.webThirdPortfolio,
    },
];

const PortfolioHighlights = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkWidth = () => setIsMobile(window.innerWidth < 768);
        checkWidth();
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    return (
        <section className={styles.portfolioHighlights}>
            <div className={styles.container}>
                {isMobile ? (
                    <div className={styles.mobileSlider}>
                        <div className={styles.scrollContainer}>
                            {data.map((item, index) => (
                                <div className={styles.scrollSlide} key={index}>
                                    <Portfolio {...item} />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    data.map((item, index) => <Portfolio key={index} {...item} />)
                )}
            </div>
        </section>
    );
};

export default PortfolioHighlights;
