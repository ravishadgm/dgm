import Images from '../../../../assets/images/index';
import { FaUsers } from 'react-icons/fa';

const TeamFlow = {
    id: 'teamflow',
    image: Images.TeamFlow,
    title: 'TeamFlow - ',
    subtitle: 'Collaborative Team Workspace Platform',
    description: 'TeamFlow is a versatile platform built to empower teams of any size with tools to streamline collaboration, boost productivity.',
    category: 'Collaboration, Productivity, Saas',
    platform: 'Website',
    liveView: {
        label: 'Website',
        url: 'https://team-flow-puce.vercel.app/'
    },
    services: 'Team Workspace,\nReal-time Collaboration,\nWorkflow Automation',
    CategoryIcon: FaUsers,


    aboutProject: {
        heading: 'About the Project',
        description: [
            'TeamFlow is designed to be the go-to collaboration hub for modern teams. It unifies task management, live collaboration, and cross-department workflows under a single interface.',
        ],
        imageLeft: Images.TeamFlow2,
        imageRight: Images.TeamFlow3,

        problems: [
            'Fragmented communication and task management across teams leading to workflow inefficiencies.',
            'Lack of centralized platform that supports dynamic team sizes and evolving collaboration needs.',
            'Difficulty in integrating live updates, notifications, and cross-functional modules into one interface.'
        ],

        challenges: [
            {
                heading: 'Building Scalable, Modular Architecture',
                description: 'Developing a system that adapts to different team sizes, permission roles, and project types while maintaining speed and performance.'
            },
            {
                heading: 'Live Collaboration and State Sync',
                description: 'Ensuring real-time updates and smooth interaction between users on shared tasks, boards, and workflows.'
            },
            {
                heading: 'Secure Multi-User Management',
                description: 'Creating an authentication and role-based access control system that ensures security and proper delegation of features.'
            }
        ],

        solutions: [
            {
                heading: 'Componentized Design System',
                description: 'Implemented modular React components with scoped logic to allow dynamic UI rendering and feature toggling based on roles and needs.'
            },
            {
                heading: 'WebSocket and REST Hybrid Sync',
                description: 'Used WebSocket for live updates and REST API for data sync to maintain optimal user experience and data consistency.'
            },
            {
                heading: 'Scalable Role-Based Infrastructure',
                description: 'Designed a permission-driven access system and data handling strategy for user groups, admins, and contributors.'
            }
        ]
    }

};

export default TeamFlow;
