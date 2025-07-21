import Images from '../../../../assets/images/index';
import { FaIndustry } from 'react-icons/fa';

const GenieDelivery = {

    id: 'geniedelivery',
    image: Images.GenieDelivery,
    title: 'GenieDelivery  - ',
    subtitle: 'A dynamic cross-platform delivery solution for modern Indian consumers.',
    description: 'Genie simplifies shopping and delivery by connecting users to their favorite stores, offering fast doorstep service for groceries, food, electronics, and more.',
    category: 'Mobile App, Delivery, E-Commerce',
    platform: 'Mobile App (Android & iOS)',
    liveView: {
        label: 'Download App',
        //url: 'https://apps.apple.com/in/app/nymbleup/id1635361283'
    },

    services: 'UI/UX Design, Mobile Development,\nPayment Gateway',
    CategoryIcon: FaIndustry,

    aboutProject: {
        heading: 'About the Project',
        description: ['Genie is a mobile-first delivery application that empowers users to shop from their favorite brand stores, discover new ones, and receive fast home deliveries. From groceries and food to pet care and electronics, Genie offers a seamless user experience with built-in identity verification, real-time updates, and secure payment integrations. The project leverages Firebase, APIs, and local storage to deliver a smooth and scalable experience.'
        ],
        imageLeft: Images.GenieDelivery2,
        imageRight: Images.GenieDelivery3,
        problems: [
            'Users struggle to access multiple category products from one single platform with fast delivery, accurate verification, and responsive UI.',
            'The challenge was to provide secure identity verification (Aadhar, etc.), integrate multiple APIs, and ensure a seamless cross-platform user experience for both Android and iOS.',
            'Existing solutions lacked proper performance optimization, were not scalable, and didn’t provide intuitive workflows for order placement and tracking.'
        ],

        challenges: [
            {
                heading: 'Responsive & Pixel-Perfect Layout',
                description: `Designing a visually appealing and responsive interface that worked seamlessly across mobile devices with different screen sizes and orientations.`
            },
            {
                heading: 'WebView & Dynamic Content Handling',
                description: `Integrating WebView components for schedules and offers without compromising app performance or user experience.`
            },
            {
                heading: 'Cross-Platform Consistency',
                description: `Ensuring consistent data handling and experience across Android and iOS platforms while managing real-time updates.`
            },
            {
                heading: 'Secure Verification & Modular Workflow',
                description: `Incorporating Aadhar and identity verification while maintaining a simple and intuitive flow for users and admins alike.`
            }
        ],

        solutions: [
            {
                heading: 'Flexible Cross-Platform UI',
                description:
                    'Built a responsive mobile app with adaptive layouts using scalable design systems, optimized for Android and iOS.'
            },
            {
                heading: 'Smart WebView Integration',
                description:
                    'Implemented WebView for dynamic rendering of web-based content such as delivery schedules and partner store pages.'
            },
            {
                heading: 'Secure & Fast Delivery Logic',
                description:
                    'Used Firebase for real-time data handling, verification services, notifications, and identity management.'
            },
            {
                heading: 'Payment & Notification Systems',
                description:
                    'Integrated secure payment gateways along with push notifications to enhance order flow and customer retention.'
            }
        ]
    },

    recentApplications: [
        {
            title: 'One Vision',
            description: 'OneVision will streamline the store and location management process for business managers with the use of Scheduler, Feedback and eLearning.',
            image: Images.OneVision,
            link: "/recent-project/onevision"
        },
        {
            title: 'Efone',
            description: 'Efon app for global calls, chats, and managing multiple business numbers in one place.',
            image: Images.Efone,
            link: "/recent-project/efone"
        },
        {
            title: 'FarmHouseHub',
            description: 'A smart app for seamless farmhouse booking, serving both users and businesses.',
            image: Images.FarmHouseHub,
            link: "/recent-project/farmhousehub"
        },
        {
            title: 'EasyGym',
            description: 'Reach your fitness goals faster with resistance bands and a digital fitness app.',
            image: Images.EasyGym,
            link: "/recent-project/easygym"
        },
    ]

};

export default GenieDelivery;
