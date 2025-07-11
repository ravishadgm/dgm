import React from 'react';
import CardGrid from '../../../components/common/CardGrid/CardGrid';
import Images from '../../../assets/images/index';

const cardData = [
    {
        title: 'WordPress Development',
        description: 'Want a website that is scalable, customizable, and SEO-friendly? Our WordPress web development services are here for you. Our team can build impeccable solutions assuring great outcomes.',
        icon: Images.img1,
        hoverColor: '#f9edff',
        borderColor: '#d5b1ff',
    },
    {
        title: 'Shopify Development',
        description: 'Get organic traffic and sales for your eCommerce business with our Shopify web development services. We can build effective and efficient eCommerce stores offering best user experience while shopping.',
        icon: Images.img2,
        hoverColor: '#fff7ed',
        borderColor: '#ffca87',
    },
    {
        title: 'Custom Web Development',
        description: 'Stand out from your competitors and attract audience to your brand with our custom web development services. Our web solutions are feature-rich, scalable, and optimized for customer journey.',
        icon: Images.img3,
        hoverColor: '#EDFFFC',
        borderColor: '#5CC3DA',
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
        title: 'CMS Development',
        description: 'Avail of a robust, easy-to-use, and responsive CMS platform with our CMS web development services. Our team can design results-driven platform that can integrate with existing/new management systems.',
        icon: Images.img6,
        hoverColor: '#edf3ff',
        borderColor: '#cddaf4',
    },
];

export default function CardInfo() {
    return <CardGrid data={cardData} />;
}
