import Images from '../../../../assets/images/index';
import { FaPhoneAlt } from 'react-icons/fa';

const Efone = {

    id: 'efone',
    image: Images.Efone,
    title: 'Efone  - ',
    subtitle: 'Global Business Calling & Chat Application.',
    description: 'VoIPConnect enables international business communication with multi-number support, real-time chat, and multimedia sharing—all from a single platform.',
    category: 'Communication, VoIP, Chat',
    platform: 'App Store',
    liveView: {
        label: 'App Store',
        url: 'https://apps.apple.com/in/app/efone/id1356974318'
    },

    services: 'VoIP Integration,\nChat & Media System,\nSIP Protocol Handling',
    CategoryIcon: FaPhoneAlt,

    aboutProject: {
        heading: 'About the Project',
        description: ['VoIPConnect is a powerful voice-over-IP communication app designed for businesses to make international calls and chats seamlessly using SIP-based infrastructure.'
        ],
        imageLeft: Images.Efone2,
        imageRight: Images.Efone3,
        problems: [
            'Lack of unified business communication platforms with support for multiple international numbers.',
            'Complexity in handling real-time multimedia messaging with secure delivery.'
        ],
        challenges: [
            {
                heading: 'Real-Time Media and Message Sync',
                description: 'Ensuring seamless transfer and receipt of voice messages, media files, and chats using WebSocket with consistent performance.'
            },
            {
                heading: 'SIP Integration for Voice Calls',
                description: 'Integrating Session Initiation Protocol (SIP) UA for voice calling with reliable connection and fallback handling.'
            },
            {
                heading: 'Background Services and Overlay Notifications',
                description: 'Maintaining active calls and chats in the background while showing in-app and overlay notifications across devices.'
            }
        ],
        solutions: [
            {
                heading: 'WebSocket-Powered Chat and Media Engine',
                description: 'Enabled efficient chat, media file sharing, and voice message sync using WebSocket connections backed by API and DB support.'
            },
            {
                heading: 'SIP UA Protocol Handling',
                description: 'Implemented SIP UA protocol to handle high-quality VoIP calling between country-based numbers with multi-device support.'
            },
            {
                heading: 'Robust Notification & Subscription System',
                description: 'Used foreground services, overlay alerts, and integrated payment gateways to manage notifications, renewals, and user subscriptions.'
            }
        ]
    },

    recentApplications: [
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
        {
            title: 'One Vision',
            description: 'OneVision will streamline the store and location management process for business managers with the use of Scheduler, Feedback and eLearning.',
            image: Images.OneVision,
            link: "/recent-project/onevision"
        },
    ]

};

export default Efone;
