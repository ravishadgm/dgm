// Perks.jsx
import React from 'react';
import styles from './Perks.module.scss';

const perks = [
    {
        icon: '/icons/job.png',
        title: '5 Days a Week Job',
        desc: 'Work Hard, Relax Harder – because doing only one would be bocoring!',
    },
    {
        icon: '/icons/timing.png',
        title: 'Flexible Timing',
        desc: 'Empower your A-game with our flexible timing. It’s game on!',
    },
    {
        icon: '/icons/referral.png',
        title: 'Employee Referral Program',
        desc: 'Help recruit the right ones, get more than just high-fives!',
    },
    {
        icon: '/icons/training.png',
        title: 'Training',
        desc: 'We train team members from day 1 to make them versatile team-players in multiple domains.',
    },
    {
        icon: '/icons/reward.png',
        title: 'Rewards',
        desc: 'Get paid what you’re worth, and then some. A bit more, but no less!',
    },
    {
        icon: '/icons/festival.png',
        title: 'Festival, Birthday & More Celebration',
        desc: 'Annual Trips, Festivals, and Events – we keep our social calendar buzzing with fun activities and events.',
    },
];

export default function Perks() {
    return (
        <section className={styles.perksSection}>
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
        </section>
    );
}