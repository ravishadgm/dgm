import React, { useState } from 'react';
import axios from 'axios';
import styles from './ApplyTable.module.scss';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FiUploadCloud } from 'react-icons/fi';
import { FaBehance, FaDribbble, FaFacebook, FaInstagram, FaGithub, FaFlickr, FaLinkedin, FaWhatsapp, FaSkype } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplyTable = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        position: 'Application Developer',
        message: '',
    });

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedServices, setSelectedServices] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
            setFileName(e.target.files[0].name);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;

        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email");
            return;
        }

        if (!phoneRegex.test(formData.phone)) {
            toast.error("Phone number must be 10 digits");
            return;
        }

        setLoading(true);

        try {
            const payload = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                payload.append(key, value);
            });

            selectedServices.forEach(service => {
                payload.append("services", service);
            });

            if (file) payload.append('file', file);

            await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/project`, payload);

            toast.success('Application submitted successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
                services: ''
            });
            setSelectedServices([]);
            setFile(null);
            setFileName('');
        } catch (err) {
            console.error('Submission error:', err);
            toast.error('Something went wrong. Please try again!');
        } finally {
            setLoading(false);
        }
    };



    const services = [
        "Frontend", "Backend", "Fullstack", "Design",
        "Mobile", "Cloud", "Consulting", "Maintenance"
    ];

    const handleServiceClick = (service) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter(item => item !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };


    return (
        <section className={styles.openingSection}>
            <ToastContainer />
            <div className={styles.contactSection}>
                <h2>
                    Have a project idea?<span> Let’s collaborate!</span>
                </h2>

                <div className={styles.container}>
                    <form className={styles.formBox} onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <div className={styles.inputGroup}>
                                <label>Name<span>*</span></label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter Your Name" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Email<span>*</span></label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter Your Email" />
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.inputGroup}>
                                <label>Phone<span>*</span></label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 123 456 7890" />
                            </div>
                        </div>

                        <div className={styles.inputArea}>
                            <label>Pitch your project</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us what you’re building and how we can help..."
                                rows="4"
                            ></textarea>
                        </div>

                        <div className={styles.servicesWrapper}>
                            <label>Services</label>
                            <div className={styles.serviceTags}>
                                {services.map((service) => (
                                    <button
                                        key={service}
                                        type="button"
                                        onClick={() => handleServiceClick(service)}
                                        className={`${styles.serviceButton} ${selectedServices.includes(service) ? styles.active : ''}`}
                                    >
                                        {service}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.uploadBox}>
                            <label htmlFor="file">
                                <FiUploadCloud size={20} /> {fileName || 'Attached File'}
                            </label>
                            <input type="file" id="file" accept=".jpg,.png,.pdf,.csv,.xlsx,.doc,.docx" onChange={handleFileChange} />
                            <p className={styles.fileHint}>Upload: .jpg, .png, .pdf, .doc, .docx file as document.</p>
                        </div>

                        <button type="submit" className={styles.submitButton} disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit Application'}
                        </button>
                    </form>

                    <div className={styles.contactInfo}>
                        <h3>Reach Out</h3>
                        <div className={styles.contactCard}>
                            <FaEnvelope />
                            <div>
                                <strong>Chat to Sales</strong>
                                <p className={styles.miniContent}>Interested in switching? Speak to our friendly team.</p>
                                <p>resilient.tech001@gmail.com</p>
                            </div>
                        </div>
                        <div className={styles.contactCard}>
                            <FaPhoneAlt />
                            <div>
                                <strong>Call Us</strong>
                                <p className={styles.miniContent}>Mon - Sat, 9:00 AM - 7:00 PM.</p>
                                <p>+91 98258 05271</p>
                            </div>
                        </div>
                        <div className={styles.contactCard}>
                            <FaEnvelope />
                            <div>
                                <strong>Email Support</strong>
                                <p className={styles.miniContent}>Email us and we’ll get back to you within 24 hours.</p>
                                <p>dgmtechsolution@gmail.com</p>
                            </div>
                        </div>

                        <h4>Innovate With Us</h4>
                        <div className={styles.socialIcons}>
                            <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer"><FaBehance /></a>
                            <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer"><FaDribbble /></a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href="https://www.flickr.com/" target="_blank" rel="noopener noreferrer"><FaFlickr /></a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                            <a href="https://www.skype.com/" target="_blank" rel="noopener noreferrer"><FaSkype /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApplyTable;
