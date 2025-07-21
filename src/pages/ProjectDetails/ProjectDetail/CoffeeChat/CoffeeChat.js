import Images from '../../../../assets/images/index';
import { FaCoffee } from 'react-icons/fa';

const CoffeeChat = {
    id: 'coffeechat',
    image: Images.AppProject2,
    title: 'CoffeeChat - ',
    subtitle: 'Anonymous mentor access for job seekers.',
    description: 'Coffeechat is a career mentorship mobile application built primarily for iOS users, targeting international audiences. It acts as a conversation-matching platform, where job seekers can anonymously connect with mentors working at companies they are interested in.',
    category: 'Career Tech, Mentorship, Networking, Communication',
    platform: 'Appstore & Playstore',
    liveView: {
        label: 'App Store',
        url: 'https://apps.apple.com/gb/app/coffeechat/id1641428797'
    },
    services: 'Mobile App Development (Flutter)',
    CategoryIcon: FaCoffee,


    aboutProject: {
        heading: 'About the Project',
        description: 'Coffeechat is a career mentorship mobile application built primarily for iOS users, targeting international audiences. It acts as a conversation-matching platform, where job seekers can anonymously connect with mentors working at companies they are interested in.',
        imageLeft: Images.NymbleUp2,
        imageRight: Images.AppProject2,
        problems: [
            'Job seekers often struggle to access real employees at their target companies, making it hard to gain trustworthy insights into company culture, interview processes, or role expectations. They also lack a safe, anonymous space to ask honest questions without fear of judgment.',
            'Without direct guidance, they rely on generic reviews and scattered information, leading to uncertainty and missed opportunities. This gap hinders confident decision-making and slows down career growth.'
        ],
        challenges: [
            {
                heading: 'Real-Time Feature Parity with Live Web Changes',
                description: `The client was actively updating their website. Matching those features in real-time in the mobile app via Git version control coordination required tight release management.`,
            },
            {
                heading: 'Anonymous Chat System',
                description: `Designing a secure and truly anonymous one-on-one chat without exposing user identities while still enabling meaningful conversation was a delicate UX and security balance.`,
            }, {
                heading: 'Data Privacy & Consent',
                description: `Ensuring user data remained confidential, while providing traceability for abuse prevention, required strategic use of encrypted communication and backend moderation protocols.`,
            }
        ],
        solutions: [
            {
                heading: 'Continuous Sync with Web Team',
                description: 'Maintained close coordination with the web development team through Git-based version control to align app features with website updates dynamically.'
            },
            {
                heading: 'Anonymous Chat Engine',
                description: 'Built an end-to-end encrypted, anonymous chat system allowing users to message mentors securely without sharing names, emails, or any personal identifiers.'
            },
            {
                heading: 'Smooth, Intuitive UI/UX',
                description: 'Designed a clean, responsive interface for mentor search, chat initiation, and session handling — optimized for modern mobile expectations.'
            }
        ]
    }

};

export default CoffeeChat;
