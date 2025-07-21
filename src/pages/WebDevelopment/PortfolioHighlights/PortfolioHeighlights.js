import React, { useEffect, useState } from 'react';
import Portfolio from '../../../components/common/Portfolio/Portfolio';
import Images from "../../../assets/images/index";

import styles from './PortfolioHighlights.module.scss';

const data = [
    {
        order: 1,
        sectionTitle: "Our",
        highlight: "Portfolio",
        subtitle: `Varn - Corporate website for India’s leading aluminum extrusion manufacturer`,
        description: "Varn delivers precision-engineered aluminum solutions that power the future of modern infrastructure.",
        result1: { value: '35%', label: 'Rise in Membership Sign-ups' },
        result2: { value: '55%', label: 'Increase in Organic Lead' },
        image: Images.WebProject1,
    },
    {
        order: 2,
        sectionTitle: "Our",
        highlight: "Portfolio",
        subtitle: "TeamFlow -Collaborative Team Workspace Platform",
        description: "TeamFlow is a versatile platform built to empower teams of any size with tools to streamline collaboration, boost productivity.",
        result1: { value: '#3', label: 'Rank in Google SERP for High-Competition Keyword' },
        result2: { value: '28%', label: 'Increase in Client Inquiries' },
        image: Images.TeamFlow,
    },
    {
        order: 3,
        sectionTitle: "Our",
        highlight: "Portfolio",
        subtitle: "AddScale - AI-Powered Digital Marketing Platform",
        description: "AdScale revolutionizes digital marketing by leveraging AI to automate and optimize ad campaigns across platforms like Facebook, TikTok, and more. It provides actionable insights that help businesses scale faster and smarter//.",
        result1: { value: '75%', label: 'Increase in Site Visits' },
        result2: { value: '54%', label: 'Improvement in ROI' },
        image: Images.AddScale2
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
