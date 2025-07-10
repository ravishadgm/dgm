import React from 'react';
import styles from "./Industry.module.scss";
import Images from "../../../assets/images";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { MdOutlineSchool } from "react-icons/md";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { MdEmojiTransportation } from "react-icons/md";
import { HiOutlineTicket } from "react-icons/hi2";
import { BiDish } from "react-icons/bi";
import { MdCardTravel } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { IoConstructOutline } from "react-icons/io5";

const industries = [
    { name: 'Healthcare', icon: <MdOutlineHealthAndSafety />, isComponent: true },
    { name: 'Retail', icon: <FaShoppingBag />, isComponent: true },
    { name: 'Finance', icon: <BsBank />, isComponent: true },
    { name: 'Education', icon: <MdOutlineSchool />, isComponent: true },
    { name: 'Real-Estate', icon: <MdOutlineRealEstateAgent />, isComponent: true },
    { name: 'Manufacturing', icon: <MdOutlinePrecisionManufacturing />, isComponent: true },
    { name: 'Transportation', icon: <MdEmojiTransportation />, isComponent: true },
    { name: 'Entertainment', icon: <HiOutlineTicket />, isComponent: true },
    { name: 'Hospitality', icon: <BiDish />, isComponent: true },
    { name: 'Travel', icon: <MdCardTravel />, isComponent: true },
    { name: 'Legal', icon: <SlNote />, isComponent: true },
    { name: 'Construction', icon: <IoConstructOutline />, isComponent: true },
];

const Industry = () => {
    return (
        <section className={styles.industriesSection}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2>
                        Industries <span>We Serve</span>
                    </h2>
                    <p>
                        As the leading digital marketing agency in Ahmedabad, we at IndyLogix partner with tech companies
                        in specialized industries to provide industry-specific digital marketing services and expertise.
                        Our innovative solutions are aimed at reducing the communication gap, fostering a customer-centric
                        relationship, and solving marketing challenges.
                    </p>
                    <button className={styles.contactBtn}>Contact Us</button>
                </div>

                <div className={styles.gridWrapper}>
                    <div className={styles.grid}>
                        {industries.map((item, index) => (
                            <div className={styles.card} key={index}>
                                {item.isComponent ? (
                                    <div className={styles.icon}>{item.icon}</div>
                                ) : (
                                    <img src={item.icon} alt={item.name} />
                                )}
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industry;
