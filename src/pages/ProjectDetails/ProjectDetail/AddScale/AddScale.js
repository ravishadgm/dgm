import Images from '../../../../assets/images/index';
import { FaUsers } from 'react-icons/fa';

const AddScale = {
    id: 'addscale',
    image: Images.AddScale2,
    title: 'AddScale - ',
    subtitle: 'AI-Powered Digital Marketing Platform',
    description: 'AdScale revolutionizes digital marketing by leveraging AI to automate and optimize ad campaigns across platforms like Facebook, TikTok, and more. It provides actionable insights that help businesses scale faster and smarter.',
    category: 'Marketing, AI, Automation',
    platform: 'Website',
    liveView: {
        label: 'Live App',
        url: 'https://www.adscale.ai/'
    },
    services: 'AI Campaign Optimization,\nCross-Platform Ads Management,\nReal-Time Insights,\nBudget Efficiency,\nPerformance Analytics,\nAutomation Tools',
    CategoryIcon: FaUsers,


    aboutProject: {
        heading: 'About the Project',
        description: [
            'AdScale is built to simplify and supercharge digital marketing efforts through automation and artificial intelligence.',
        ],
        imageLeft: Images.AddScale,
        imageRight: Images.AddScale3,

        problems: [
            'Manual campaign management across multiple ad platforms is time-consuming and inefficient.',
            'Lack of real-time insights prevents quick decision-making and performance adjustments.',
            'Difficulties in optimizing budgets and targeting for maximum ROI.'
        ],

        challenges: [
            {
                heading: 'Cross-Platform Campaign Sync',
                description: 'Integrating APIs from Facebook, TikTok, and other platforms while ensuring campaign consistency and centralized tracking.'
            },
            {
                heading: 'Real-Time Data Analytics',
                description: 'Implementing a responsive analytics engine that provides users with actionable metrics and improvement recommendations.'
            },
            {
                heading: 'Automated AI Recommendations',
                description: 'Designing an AI model that dynamically suggests bid adjustments, audience tweaks, and creative optimization.'
            }
        ],

        solutions: [
            {
                heading: 'Unified Campaign Dashboard',
                description: 'Built a single interface to create, launch, and manage campaigns across platforms, reducing the need to switch tools.'
            },
            {
                heading: 'AI-Driven Optimization Engine',
                description: 'Integrated machine learning algorithms to analyze campaign performance and automatically suggest improvements in real time.'
            },
            {
                heading: 'Insightful Visualization & Alerts',
                description: 'Delivered user-friendly charts, KPIs, and smart notifications to keep marketers informed and proactive.'
            }
        ]
    }

};

export default AddScale;
