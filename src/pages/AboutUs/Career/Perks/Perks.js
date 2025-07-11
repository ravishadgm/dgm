// Perks.jsx
import React from 'react';
import styles from './Perks.module.scss';
import Images from '../../../assets/images/index';

const perks = [
    {
        icon: Images.icon1,
        title: '5 Days a Week Job',
        desc: 'Work Hard, Relax Harder – because doing only one would be bocoring!',
    },
    {
        icon: Images.icon2,
        title: 'Flexible Timing',
        desc: 'Empower your A-game with our flexible timing. It’s game on!',
    },
    {
        icon: Images.icon3,
        title: 'Employee Referral Program',
        desc: 'Help recruit the right ones, get more than just high-fives!',
    },
    {
        icon: Images.icon4,
        title: 'Training',
        desc: 'We train team members from day 1 to make them versatile team-players in multiple domains.',
    },
    {
        icon: Images.icon5,
        title: 'Rewards',
        desc: 'Get paid what you’re worth, and then some. A bit more, but no less!',
    },
    {
        icon: Images.icon6,
        title: 'Festival, Birthday & More Celebration',
        desc: 'Annual Trips, Festivals, and Events – we keep our social calendar buzzing with fun activities and events.',
    },
];

export default function Perks() {
    return (
        <section className={styles.perksSection}>
            <div className={styles.container}>
                <h2>
                    Perks of working at <span>IndyLogix</span>
                </h2>
                <div className={styles.perksGrid}>
                    {perks.map((item, index) => (
                        <div
                            className={`${styles.perkCard} ${styles[`card${index}`]}`}
                            key={index}
                        >
                            <img src={item.icon} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}