import React from 'react';
import { motion } from 'framer-motion';
import styles from "./Industry.module.scss";
import {
  MdOutlineHealthAndSafety,
  MdOutlineSchool,
  MdOutlineRealEstateAgent,
  MdOutlinePrecisionManufacturing,
  MdEmojiTransportation,
  MdCardTravel,
} from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { HiOutlineTicket } from "react-icons/hi2";
import { BiDish } from "react-icons/bi";
import { SlNote } from "react-icons/sl";
import { IoConstructOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const industries = [
  { name: 'Healthcare', icon: <MdOutlineHealthAndSafety /> },
  { name: 'Retail', icon: <FaShoppingBag /> },
  { name: 'Finance', icon: <BsBank /> },
  { name: 'Education', icon: <MdOutlineSchool /> },
  { name: 'Real-Estate', icon: <MdOutlineRealEstateAgent /> },
  { name: 'Manufacturing', icon: <MdOutlinePrecisionManufacturing /> },
  { name: 'Transportation', icon: <MdEmojiTransportation /> },
  { name: 'Entertainment', icon: <HiOutlineTicket /> },
  { name: 'Hospitality', icon: <BiDish /> },
  { name: 'Travel', icon: <MdCardTravel /> },
  { name: 'Legal', icon: <SlNote /> },
  { name: 'Construction', icon: <IoConstructOutline /> },
];

// Card animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

const Industry = () => {
  return (
    <section className={styles.industriesSection}>
      <div className={styles.container}>
        {/* Left Text Content */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Industries <span>We Serve</span>
          </h2>
          <p>
            At DGMTech Solutions, a Surat-based IT company, we partner with businesses across a wide range of industries to deliver tailored web, app, and design solutions. From tech startups to enterprise organizations, our mission is to bridge digital gaps, enhance user experiences, and drive growth through smart, industry-focused strategies. </p>
          <Link to="/contact">
            <button className={styles.contactBtn}>Contact Us</button>
          </Link>
        </motion.div>

        {/* Right Grid Cards */}
        <motion.div
          className={styles.gridWrapper}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className={styles.grid}>
            {industries.map((item, index) => (
              <motion.div
                className={styles.card}
                key={index}
                variants={cardVariants}
              >
                <div className={styles.icon}>{item.icon}</div>
                <p>{item.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industry;
