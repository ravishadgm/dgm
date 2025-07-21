import Images from '../../../../assets/images/index';
import { FaIndustry } from 'react-icons/fa';

const EasyGym = {

    id: 'easygym',
    image: Images.EasyGym,
    title: 'EasyGym  - ',
    subtitle: 'A cross-platform fitness app for workouts, gym tracking, and 24/7 easyGym access.',
    description: 'easyGym is a digital fitness application that empowers users to stay fit through guided band exercises, track their workout routines, and explore all the facilities their gym offers — right from their smartphone, tablet, or desktop.',
    category: 'Fitness, Health, Lifestyle',
    platform: 'Android, iOS, Web (Fully responsive)',
    liveView: {
        label: 'Website',
        url: 'https://www.easygym.co.uk/'
    },

    services: 'UI/UX Design, Mobile Development, Responsive Design,WebView Integration',
    CategoryIcon: FaIndustry,

    aboutProject: {
        heading: 'About the Project',
        description: ['easyGym is a digital fitness application that empowers users to stay fit through guided band exercises, track their workout routines, and explore all the facilities their gym offers — right from their smartphone, tablet, or desktop.',
        ],
        imageLeft: Images.Varn2,
        imageRight: Images.Varn3,
        problems: [
            'Lack of guided fitness options for users at home, especially those using minimal equipment like resistance bands.',
            'Gyms struggle to digitally showcase their services and keep users engaged.'
        ],
        challenges: [
            {
                heading: 'Pixel-Perfect Responsive Design',
                description: 'Designing a layout that works flawlessly across mobile, tablet, and desktop screens required careful breakpoint planning, layout adjustments, and device-specific testing.',
            },
            {
                heading: 'WebView Integration Without Performance Loss',
                description: 'Embedding WebView components (especially for schedules and external services) without slowing down the app or breaking native experience was technically demanding.',
            },
            {
                heading: 'Data Consistency Across Platforms',
                description: 'Maintaining synchronized data across Android, iOS, and web platforms—without causing latency or inconsistency—was a critical backend challenge.',
            },
            {
                heading: 'Testing Across Devices & Orientations',
                description: 'Ensuring consistent visual experience across various screen sizes, pixel densities, and device orientations required extensive manual and automated testing.',
            },
            {
                heading: 'Modular User Flow Design',
                description: 'Structuring the app in a way that allows goal-based navigation (e.g., weight loss, muscle gain) without overwhelming the user with too many options was a UX challenge.',
            }
        ],
        solutions: [
            {
                heading: 'Responsive Cross-Platform Design System',
                description: 'Implemented flexible design using scalable units, fluid grids, and adaptive media queries to support all device types (mobile, tablet, desktop).',
            },
            {
                heading: 'Smart WebView Integration',
                description: 'Integrated WebView for selective features like workout schedules and diet plans, ensuring native feel with minimal load impact.',
            },
            {
                heading: 'Optimized Data Sync and Caching',
                description: 'Used efficient API structures and local caching techniques to ensure real-time data sync with reduced load times.',
            },
            {
                heading: 'User Segmentation & Navigation Simplification',
                description: 'Categorized users by fitness goals and role (e.g., new member, existing member), and tailored workflows to minimize navigation complexity.',
            },
            {
                heading: 'Feature-Rich but Lightweight Experience',
                description: 'Integrated push notifications, reminders, and dynamic components without bloating the app, using modular components and lazy loading techniques.',
            }
        ]

    },

    recentApplications: [
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
        {
            title: 'FarmHouseHub',
            description: 'A smart app for seamless farmhouse booking, serving both users and businesses.',
            image: Images.FarmHouseHub,
            link: "/recent-project/farmhousehub"
        },
    ]

};

export default EasyGym;
