import Images from '../../../../assets/images/index';
import { FiUploadCloud } from "react-icons/fi";

const AsiteField = {
    id: 'asite-field',
    image: Images.AppProject3,
    title: 'Asite Field - ',
    subtitle: 'Offline-ready app for construction data and field work.',
    description: `Asite Field is a mobile app for managing on-site construction tasks, built to sync with Asite's web platform.`,
    category: 'Construction Tech, Project Collaboration',
    platform: 'Appstore & Playstore',
    liveView: {
        label: 'App Store',
        url: 'https://apps.apple.com/gb/app/asite-field/id1670894000'
    },
    services: 'Cross-Platform Flutter Development',
    CategoryIcon: FiUploadCloud,

    aboutProject: {
        heading: 'About the Project',
        description: 'Asite Field is an enterprise-grade application developed for Asite, a global leader in construction project collaboration. The mobile app is built to seamlessly integrate with the Asite web platform, enabling field engineers, site managers, and construction teams to manage on-site activities directly from their mobile or tablet devices.',
        imageLeft: Images.AsitField2,
        imageRight: Images.AsitField3,
        problems: [
            'Large construction companies often struggle with limited real-time data access, reliance on laptops or paper-based methods, and poor connectivity in remote areas. These challenges make it difficult for on-site teams to work efficiently.',
            'Inconsistent user experiences across devices and trouble syncing updates lead to miscommunication, delays, and lost data—impacting overall project success.'
        ],
        challenges: [
            {
                heading: 'Feature Sync Between Web and Mobile',
                description: `Maintaining real-time feature parity with a frequently updated web platform required active communication and coordination with the client’s tech team.`,
            },
            {
                heading: 'Offline-First Capability',
                description: `Field engineers work in areas with unreliable internet. Ensuring a smooth offline experience with later synchronization was a top priority and a complex architectural task.`,
            }, {
                heading: 'Large File Uploads & Downloads',
                description: `Supporting document uploads/downloads (blueprints, contracts, reports) on limited bandwidth, especially on mobile and tablets, required efficient caching and compression techniques.`,
            }
        ],
        solutions: [
            {
                heading: 'Smart Sync & Offline Storage',
                description: 'Implemented local data storage using SQLite and secure file caching with automatic synchronization once internet is restored. This ensures no data is lost in offline mode.'
            },
            {
                heading: 'Tablet Optimization',
                description: 'Ensured larger screen layouts were handled using responsive design techniques, optimizing for multi-column views and quick navigation on larger devices.'
            },
            {
                heading: 'Modular Feature Integration',
                description: 'Closely integrated with the client’s version-controlled web platform, the app pulls in key modules such as document management, task updates, location tracking, and project details.',
            }
        ]
    }
};

export default AsiteField;
