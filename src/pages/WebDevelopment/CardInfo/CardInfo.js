import React from 'react';
import CardGrid from '../../../components/common/CardGrid/CardGrid';
import Images from '../../../assets/images/index';

const cardData = [
    {
        title: 'UI/UX Design',
        description: 'Create visually appealing and user-centric designs with our UI/UX services. We deliver intuitive, responsive, and accessible interfaces that enhance engagement and drive user satisfaction.',
        icon: Images.img1,
        hoverColor: '#fef7f1',
        borderColor: '#f2c49b',
    },
    {
        title: 'App Development',
        description: 'Accelerate your business with high-performance mobile and web applications. Our app development services focus on speed, scalability, and user experience for iOS, Android, and cross-platform apps.',
        icon: Images.img6,
        hoverColor: '#e6f7ff',
        borderColor: '#99d6ff',
    },
    {
        title: "Full-Stack Development",
        description:
            "Get complete web solutions with our full-stack development services. From front-end design to back-end functionality, we ensure seamless integration and maximum performance.",
        icon: Images.img2,
        hoverColor: '#fff7ed',
        borderColor: '#ffca87',
    },
    {
        title: 'Front-End Development',
        description: 'Website not staying consistent across different browsers? Choose our front-end web development services. Our team can build front-end that allows audience to interact with and have better user-experience.',
        icon: Images.img4,
        hoverColor: '#ffeded',
        borderColor: '#f1b9b9',
    },
    {
        title: 'Back-End Development',
        description: `Don't let back-end issues manifest as server errors or performance bottlenecks choose our back-end web development services and let our team monitor and maintain your website for optimal performance`,
        icon: Images.img5,
        hoverColor: '#f7ffee',
        borderColor: '#badc90',
    },
    {
        title: 'Custom Web Development',
        description: 'Stand out from your competitors and attract audience to your brand with our custom web development services. Our web solutions are feature-rich, scalable, and optimized for customer journey.',
        icon: Images.img3,
        hoverColor: '#EDFFFC',
        borderColor: '#5CC3DA',
    },


];

export default function CardInfo() {
    return <CardGrid data={cardData} />;
}
