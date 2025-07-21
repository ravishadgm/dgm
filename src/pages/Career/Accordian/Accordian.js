import React, { useState } from "react";
import styles from "./Accordian.module.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const jobList = [
    {
        title: "Application Developer",
        experience: "1.5+ Years",
        openings: 1,
        location: "Surat,Gujarat",
        responsibilities: [
            "Proficient in Java/Kotlin (Android), Swift (iOS), or cross-platform frameworks like Flutter or React Native.",
            "Ability to debug, test, and optimize application performance.Understanding of push notifications and background tasks.",
            "Strong understanding of mobile UI/UX design principles.",
            "Familiar with app security best practices and data privacy.",
            "Rest-API, Socket API, Google Map Integration.",
            "FireBase, Local Database and Payment Gateways.",
            "Understanding of design principles and best practices and State Management with Bloc Pattern, Provider, GetX",
            "Experience in building, testing, and deploying native or cross-platform mobile/desktop applications.",
            "Basic understanding of CI/CD pipelines for mobile apps."
        ]
    },
    {
        title: "Web Developer",
        experience: "1+ years",
        openings: 2,
        location: "Surat, Gujarat",
        responsibilities: [
            "Proficient in HTML5, CSS3/SCSS, and JavaScript (ES6+).",
            "Strong experience with React.js, Next.js, or similar modern frameworks.",
            "Familiar with state management libraries (e.g., Redux, Context API).",
            "Good understanding of RESTful APIs and API integration.",
            "Experience with Node.js, Express.js & Knowledge of databases like MongoDB, MySQL, or PostgreSQL.",
            "Understanding of responsive design and cross-browser compatibility.",
            "Proficiency in using Git and working with repositories (GitHub/GitLab).",
            "Experience with form validation, authentication flows, and secure data handling.",
            "Ability to write clean, maintainable, and reusable code.",
            "Familiar with deployment workflows (e.g., Netlify, Vercel, or traditional hosting).",
            "Understanding of performance optimization and SEO basics.",
            "Strong debugging, problem-solving, and communication skills."
        ]
    }
];

const Accordian = ({ scrollToForm }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <section className={styles.openingsSection}>
            <div className={styles.container}>
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
                                <button className={styles.applyBtn} onClick={scrollToForm}>Apply Now</button>
                            </div>
                        </div>

                        {openIndex === index && (
                            <div className={styles.content}>
                                <hr />
                                <p className={styles.firstPara}><strong>Job Title:</strong> {job.title}</p>
                                <p><strong>Location:</strong> {job.location}</p>
                                <p><strong>Experience:</strong> {job.experience}</p>
                                <p className={styles.resHeading}>Key Responsibilities:</p>
                                <ul>
                                    {job.responsibilities.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                                <div className={styles.contact}>
                                    Apply now on <a
                                        href="https://mail.google.com/mail/?view=cm&to=dgmtechsolution@gmail.com<"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        dgmtechsolution@gmail.com
                                    </a> or <a href="tel:+919825805271">+91 982580-5271</a>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Accordian;
