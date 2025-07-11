import React, { useState } from "react";
import styles from "./Accordian.module.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const jobList = [
    {
        title: "Graphic Designer",
        experience: "1+ Years",
        openings: 1,
        location: "Ahmedabad",
        responsibilities: [
            "Collaborate with internal teams (marketing, product development) to understand project requirements and objectives.",
            "Develop creative concepts and design solutions for a variety of marketing materials, including Social media graphics, Print materials, and Website graphics.",
            "Utilize design software proficiently, such as Adobe Creative Suite (Photoshop, Illustrator, InDesign) and potentially others depending on your experience.",
            "May assist with maintaining and updating brand guidelines.",
            "Ability to work independently and meet deadlines effectively.",
            "A keen eye for detail and a passion for creating visually appealing designs.",
            "Understanding of design principles and best practices.",
            "Bonus points for experience in video and reel editing that matches up the current trends."
        ]
    },
    {
        title: "Social Media Manager",
        experience: "3+ years",
        openings: 1,
        location: "Ahmedabad",
        responsibilities: [
            "Manage all social media platforms and grow followers.",
            "Create and analyze performance metrics.",
            "Collaborate with creative and content teams."
        ]
    }
];

const Accordian = () => {
    const [openIndex, setOpenIndex] = useState(0); // Initially open first

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.openingsSection}>
            <h2>
                Current <span>Openings</span>
            </h2>
            {jobList.map((job, index) => (
                <div className={styles.card} key={index}>
                    <div className={styles.header}>
                        <div>
                            <h3>{job.title}</h3>
                            <div className={styles.details}>
                                <div>
                                    <strong>Experience</strong><br />
                                    {job.experience}
                                </div>
                                <div>
                                    <strong>No. of Openings</strong><br />
                                    {job.openings}
                                </div>
                            </div>
                        </div>
                        <div className={styles.actions}>
                            <button className={styles.toggleBtn} onClick={() => toggleAccordion(index)}>
                                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                            </button>
                            <button className={styles.applyBtn}>Apply Now</button>
                        </div>
                    </div>

                    {openIndex === index && (
                        <div className={styles.content}>
                            <hr />
                            <p><strong>Job Title:</strong> {job.title}</p>
                            <p><strong>Location:</strong> {job.location}</p>
                            <p><strong>Experience:</strong> {job.experience}</p>
                            <p className={styles.resHeading}>Key Responsibilities:</p>
                            <ul>
                                {job.responsibilities.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <div className={styles.contact}>
                                Apply now on <a href="mailto:hr@indylogix.com">hr@indylogix.com</a> or <strong>(+91) 9687716161</strong>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
};

export default Accordian;
