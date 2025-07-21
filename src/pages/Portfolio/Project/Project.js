import React from 'react';
import styles from "./Project.module.scss";
import ProjectBlogCard from '../../../components/common/ProjectBlogCard/ProjectBlogCard';
import Images from '../../../assets/images/index';
import { FaCode, FaIndustry, FaCoffee, FaLaptopCode } from 'react-icons/fa';
import { MdFastfood } from "react-icons/md";
import { FiUploadCloud } from "react-icons/fi";

const projects = [
    {
        id: "nymbleup",
        image: Images.AppProject1,
        category: "Food App",
        title: "NymbleUp",
        CategoryIcon: MdFastfood,
        description: "One app from which anyone from the on office can track and raise a tickets to resolve the issues which arrives. Admin can assign that  to user. with photos and videos uploaded in the same app.",
        date: "30",
        month: "May"
    },
    {
        id: "coffeechat",
        image: Images.AppProject2,
        category: "Coffee App",
        title: "CoffeeChat",
        CategoryIcon: FaCoffee,
        description: "We built app features in parallel with the client’s website, syncing updates via version control for live changes.",
        date: "05",
        month: "June"
    },
    {
        id: "asite-field",
        image: Images.AppProject3,
        category: "Field Data",
        title: "Asite Field",
        CategoryIcon: FiUploadCloud,
        description: "Empowering users to manage in-field data and site operations effortlessly through an integrated web and mobile app—everything at their fingertips.",
        date: "21",
        month: "July"
    },
    {
        id: "varn-alluminium",
        image: Images.WebProject1,
        category: "Industry",
        title: "Varn Alluminium",
        CategoryIcon: FaIndustry,
        description: "Varn delivers precision-engineered aluminum solutions that power the future of modern infrastructure.",
        date: "21",
        month: "June"
    },
    {
        id: "teamflow",
        image: Images.TeamFlow,
        category: "Development",
        title: "TeamFlow Application",
        CategoryIcon: FaCode,
        description: "TeamFlow is a versatile platform built to empower teams of any size with tools to streamline collaboration.",
        date: "20",
        month: "April"
    },
    {
        id: "addscale",
        image: Images.AddScale2,
        category: "Marketing",
        title: "AddScale",
        CategoryIcon: FaLaptopCode,
        description: "Adscale revolutionizes digital marketing with AI precision. Create, manage, and optimize campaigns effortlessly across top platforms  like Facebook, TikTok, and more.",
        date: "14",
        month: "March"
    }
];

const Project = () => {


    return (
        <section className={styles.projectSection}>
            <div className={styles.heading}>
                <h1> Innovative IT Solutions for <span>Evolving Business Needs</span> </h1>
                <p>See how our expert team crafts custom technologies to streamline operations and support long-term growth.</p>
            </div>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {projects.map((item) => (
                        <ProjectBlogCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;