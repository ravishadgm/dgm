import Images from '../../../../assets/images/index';
import { FaIndustry, FaTasks } from 'react-icons/fa';

const OneVision = {

    id: 'onevision',
    image: Images.OneVision,
    title: 'OneVision - ',
    subtitle: 'Workforce Management App for Admins and Employees',
    description: 'OneVision centralizes scheduling, feedback, training, and task management across multiple locations for improved team coordination and business performance.',
    category: 'Productivity, Workforce, Scheduling',
    platform: 'Mobile App (Android + iOS)',
    liveView: {
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/onevision/id1583380071'
    },
    services: 'UI/UX Design,\nFrontend Development,\nBackend Integration,\nFirebase & Notification Handling',
    CategoryIcon: FaTasks,

    aboutProject: {
        heading: 'About the Project',
        description: [
            'OneVision is a powerful workforce management platform designed for both business managers and employees. It brings together critical functionalities like Scheduling, Feedback, eLearning, and Task Management into one unified mobile app.',
            'Admins can manage employee schedules, assign training, analyze feedback, and delegate to-dos. Employees can view shifts, complete learning modules, and track their performance seamlessly.',
            'The project leverages Firebase services, background processes, real-time notifications, and cross-platform mobile support to ensure smooth user experience and real-time data sync.'
        ],
        imageLeft: Images.OneVision2,
        imageRight: Images.OneVision3,
        problems: [
            'Managing multi-location teams manually often leads to inconsistent scheduling, scattered training, and delayed feedback collection.',
            'Businesses lacked a centralized solution to oversee employee performance, task progress, and customer feedback all in one platform.',
            'Ensuring real-time updates and shift change tracking without complex infrastructure was a key concern for non-tech-savvy business users.'
        ],
        challenges: [
            {
                heading: 'Cross-Platform Module Complexity',
                description: 'Building and maintaining multiple modules (Scheduler, eLearning, Feedback, To-Do) for both Android and iOS without compromising performance and UX.'
            },
            {
                heading: 'Background Services and Real-Time Updates',
                description: 'Implementing reliable background sync and notification systems for schedule updates, training alerts, and task assignments.'
            },
            {
                heading: 'Role-Based Access and Permission Control',
                description: 'Designing dynamic UI/UX and backend flows for different user roles (Admins vs Employees) with specific data views and actions.'
            }
        ],
        solutions: [
            {
                heading: 'Modular Architecture for Maintainability',
                description: 'Separated modules for Scheduler, eLearning, To-Do, and Feedback, allowing scalable development and faster testing cycles.'
            },
            {
                heading: 'Firebase Integration with Notification Services',
                description: 'Used Firebase Cloud Messaging, Realtime Database, and Firestore to enable instant updates and role-specific alerts.'
            },
            {
                heading: 'Efficient UI Design with Role-Based Navigation',
                description: 'Designed intuitive user interfaces tailored for Admins and Employees, improving task flow, schedule visibility, and training experience.'
            }
        ]
    },

    recentApplications: [
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
        {
            title: 'Genie Delivery',
            description: 'Genie helps you shop at your favourite brand stores, discover others, and help create the demand for new ones.',
            image: Images.GenieDelivery,
            link: "/recent-project/geniedelivery"
        },
    ]

};

export default OneVision;
