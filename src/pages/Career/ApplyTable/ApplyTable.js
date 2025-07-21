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


        // const { name, email, phone, location, position, message } = formData;
        // if (!name || !email || !phone || !location || !position || !message || !file) {
        //     toast.error("Please fill all fields and upload your resume.");
        //     return;
        // }

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
            if (file) payload.append('file', file);

            await axios.post('http://localhost:5000/api/career', payload);
            toast.success('Application submitted successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                location: '',
                position: 'Application Developer',
                message: ''
            });
            setFile(null);
            setFileName('');
        } catch (err) {
            console.error('Submission error:', err);
            toast.error('Something went wrong. Please try again!');
        } finally {
            setLoading(false);
        }
    };

    const statesOfIndia = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
        "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
        "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
        "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

    const fields = [
        "Application Developer", "Frontend Developer", "Backend Developer",
        "UI/UX Designer", "Full Stack Developer", "Software Engineer",
        "QA Tester", "DevOps Engineer"
    ];

    return (
        <section className={styles.openingSection}>
            <ToastContainer />
            <div className={styles.contactSection}>
                <h2>
                    Let’s Collaborate and<span> Build the Future Together!</span>
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
                            <div className={styles.inputGroup}>
                                <label>Location<span>*</span></label>
                                <select name="location" value={formData.location} onChange={handleChange} required>
                                    <option value="">Select Your State</option>
                                    {statesOfIndia.map((state) => (
                                        <option key={state} value={state}>{state}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Position<span>*</span></label>
                            <select name="position" value={formData.position} onChange={handleChange} required>
                                <option value="">Select Position</option>
                                {fields.map((field, index) => (
                                    <option key={index} value={field}>{field}</option>
                                ))}
                            </select>
                        </div>

                        <div className={styles.inputArea}>
                            <label>Why You’re a Great Fit</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us what makes you a strong candidate for this position..."
                                rows="4"
                            ></textarea>
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
