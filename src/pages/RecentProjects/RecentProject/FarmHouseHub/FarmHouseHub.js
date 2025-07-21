import Images from '../../../../assets/images/index';
import { FaIndustry } from 'react-icons/fa';

const FarmHouseHub = {

    id: 'farmhoousehub',
    image: Images.FarmHouseHub,
    title: 'FarmHouseHub  - ',
    subtitle: 'Dual-module app for booking stays and managing farmhouse rentals.',
    description: 'FarmHouseHub is a business-customer-based mobile application aimed at simplifying the process of booking and managing farmhouse rentals. With two integrated modules — one for users and one for farmhouse owners (FHH Host) — the app allows partners to register and manage their listings while enabling customers to browse, book, and pay for properties seamlessly.',
    category: 'Hospitality, Rental, Booking',
    platform: 'Appstore & PlayStore',
    liveView: {
        label: 'App Store',
        url: 'https://apps.apple.com/in/app/farmhousehub/id1593004940?l=hi&platform=iphone'
    },

    services: 'UI/UX Design, App Development, Firebase Integration, Payment Gateway Integration',
    CategoryIcon: FaIndustry,

    aboutProject: {
        heading: 'About the Project',
        description: ['FarmHouseHub is a business-customer-based mobile application aimed at simplifying the process of booking and managing farmhouse rentals. With two integrated modules — one for users and one for farmhouse owners (FHH Host) — the app allows partners to register and manage their listings while enabling customers to browse, book, and pay for properties seamlessly.'
        ],
        imageLeft: Images.FarmHouseHub2,
        imageRight: Images.FarmHouseHub3,
        problems: ['The traditional process of finding and booking farmhouses for short vacations or family events is highly unorganized, with scattered data, unverified listings, and manual booking methods. Property owners also lack a structured system for showcasing and managing their properties.', ''],
        challenges: [
            {
                heading: 'Multi-Role System',
                description: `Building a dual-app experience (Owner + User) within a unified app environment while maintaining unique functionalities, permissions, and user flows.`,
            },
            {
                heading: 'Identity & Property Verification',
                description: `Ensuring authenticity through integration with Aadhar-based and third-party identity/document verification systems.`,
            }, {
                heading: 'Real-time Syncing',
                description: `Managing real-time data updates, availability syncing, and booking confirmations across both modules via shared APIs.`,
            }
        ],
        solutions: [
            {
                heading: 'Unified Backend, Split Logic',
                description: 'Single backend with role-based dynamic logic on the frontend.'
            },
            {
                heading: 'Verification System',
                description: 'Integrated Aadhaar-based and manual verification to ensure safety for hosts and guests.'
            },
            {
                heading: 'Smart AutoFlow',
                description: 'Role-based onboarding flows guide users and hosts based on their registration purpose.'
            }
        ]
    },

    recentApplications: [
        {
            title: 'EasyGym',
            description: 'Reach your fitness goals faster with resistance bands and a digital fitness app.',
            image: Images.EasyGym,
            link: '/recent-project/easygym'
        },
        {
            title: 'Genie Delivery',
            description: 'Genie helps you shop at your favourite brand stores, discover others, and help create the demand for new ones.',
            image: Images.GenieDelivery,
            link: "/recent-project/geniedelivery"
        },
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
    ]

};

export default FarmHouseHub;
