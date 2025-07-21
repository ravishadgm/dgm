import React, { useState } from 'react';
import styles from './ContactForm.module.scss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setFormErrors({ ...formErrors, [e.target.name]: '' });
    };

    const validateForm = () => {
        const { name, email, subject, phone, message } = formData;
        const errors = {};

        if (!name || !email || !subject || !phone || !message) {
            toast.error('All fields are required.');
            return false;
        }


        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email.');
            return false;
        }


        if (!phoneRegex.test(phone)) {
            toast.error('Phone must be 10 digits.');
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        try {
            setLoading(true);
            const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/contact`, {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                phone: formData.phone,
                message: formData.message
            });

            if (res.status === 201) {
                // console.log("Message successfully sent----------------");
                toast.success('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
            } else {
                // console.log("Something went wrong---------------");
                toast.error('Something went wrong.Please try again!');
            }
        } catch (err) {
            // console.error(err);
            const msg = err.response?.data?.error || 'Network error.Please try again!';
            toast.error(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={styles.contactSection}>
            <p className={styles.subHeading}><span>//</span> Contact With Us Now</p>
            <h2>Feel Free to Reach Out <br />to <span>Our Tech Experts</span></h2>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.row}>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Enter Subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter Phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.content}>
                    <textarea
                        name="message"
                        placeholder="Enter Message"
                        autoComplete="off"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.buttonGroup}>
                    <button type="submit" className={styles.send}>{loading ? "Sending…" : "Send message"}</button>
                    <button type="reset" className={styles.reset} onClick={() => setFormData({ name: '', email: '', subject: '', phone: '', message: '' })}>
                        Reset
                    </button>
                </div>
            </form>

            <ToastContainer position="top-right" autoClose={3000} />
        </section>
    );
};

export default ContactForm;
