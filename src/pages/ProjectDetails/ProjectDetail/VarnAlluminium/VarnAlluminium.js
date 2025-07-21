import Images from '../../../../assets/images/index';
import { FaIndustry } from 'react-icons/fa';

const VarnAlluminium = {
    id: 'varn-alluminium',
    image: Images.WebProject1,
    title: 'Varn Alluminium - ',
    subtitle: 'Corporate website for India’s leading aluminum extrusion manufacturer.',
    description: 'Varn delivers precision-engineered aluminum solutions that power the future of modern infrastructure.',
    category: 'Corporate Website, Manufacturing, Engineering',
    platform: 'Website',
    liveView: {
        label: 'Website',
        url: 'https://apps.apple.com/in/app/nymbleup/id1635361283'
    },
    services: 'Frontend, Backend,\nUI/UX Design',
    CategoryIcon: FaIndustry,

    aboutProject: {
        heading: 'About the Project',
        description: ['Varn Extrusion Pvt. Ltd. is India’s trailblazer in ultra-slim aluminum profile manufacturing, producing 0.3mm wall thickness profiles with world-class quality and precision. To reflect the sophistication of their brand and global clientele, we built a responsive and content-rich website using Create React App (CRA).'
        ],
        imageLeft: Images.Varn2,
        imageRight: Images.Varn3,
        problems: [
            'As a leader in engineering innovation, Varn Extrusion required a website that matched their technical expertise and premium brand image. They needed a platform that was easy to manage, SEO-friendly, and responsive across all devices.',
            'Their previous website fell short in several areas—lacking scalability for technical content, mobile responsiveness, modern UI/UX design, and essential SEO and performance optimizations.'
        ],
        challenges: [
            {
                heading: 'Content Density with Readability',
                description: `Presenting a large volume of highly technical content (machine specs, capacities, standards) without overwhelming the reader was a major challenge.`,
            },
            {
                heading: 'Component Modularity',
                description: `With dozens of sections (vision, values, infrastructure, ethics, machinery, locations), we needed a highly modular and reusable component system to ensure easy updates and scalability.`,
            }, {
                heading: 'Performance Optimization',
                description: `Despite being content-heavy, the site needed to load quickly for B2B clients globally. Achieving this via CRA required code splitting and performance tuning.`,
            }
        ],
        solutions: [
            {
                heading: 'Modular Component Architecture',
                description: 'Built reusable components for sectioned content (Vision, Mission, Ethics, Facilities), tabbed info cards (Furnace, Anodizing, Coating), and responsive grids showcasing Units, Team, Machines, and Approvals.'
            },
            {
                heading: 'Industrial-Themed Design System',
                description: 'Used flexible layout systems and media queries to ensure pixel-perfect rendering across all screen sizes, including mobile users in field locations.'
            },
            {
                heading: 'Modern Tech Stack with CRA',
                description: 'Set up using Create React App and SCSS for quick initialization, modular structure, and scalable deployment with built-in performance optimizations.'
            }
        ]
    }
};

export default VarnAlluminium;
