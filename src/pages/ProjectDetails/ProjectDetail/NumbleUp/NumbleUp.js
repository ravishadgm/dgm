import Images from '../../../../assets/images/index';
import { MdFastfood } from 'react-icons/md';

const NymbleUp = {
    id: 'nymbleup',
    image: Images.NymbleUp1,
    title: 'NYMBLEUP - ',
    subtitle: ' Unified ERP for managing workforce, shifts, tickets & vendors.',
    description: 'Track issues and raise tickets within office using photos/videos.',
    category: 'ERP System, Workforce Management',
    platform: 'Appstore & Playstore',
    liveView: {
        label: 'App Store',
        url: 'https://apps.apple.com/in/app/nymbleup/id1635361283'
    },
    services: 'Frontend, Backend,\nCloud notification and Application',
    CategoryIcon: MdFastfood,


    aboutProject: {
        heading: 'About the Project',
        description: ['NymbleUp is a smart, multi-functional ERP and operations management system designed for businesses with complex workforce structures. It provides an integrated platform for employees, vendors, and managers to collaborate and manage tasks, shifts, and operational tickets efficiently.'
        ],
        imageLeft: Images.NymbleUp2,
        imageRight: Images.NymbleUp3,
        problems: [
            'Large organizations with dispersed teams often struggle with manual shift tracking, scattered communication, and no centralized ticketing for operational issues. These challenges slow down coordination and problem-solving.',
            'Lack of real-time reporting, unclear task delegation, and poor scheduling lead to delays and inefficiencies, impacting overall productivity and management.'
        ],
        challenges: [
            {
                heading: 'Modular User Access in a Single App',
                description: `Developing a single app with three distinct roles (Vendor, Employee, Manager) while maintaining a smooth and intuitive user experience was complex.`,
            },
            {
                heading: ' Location-Based Shift Logging',
                description: `Implementing accurate geo-fencing to ensure users can only log shifts when they are within the workplace boundary required tight integration with GPS and privacy safeguards.`,
            }, {
                heading: 'Offline Issue Reporting with Media',
                description: `Allowing users to upload photos/videos with tickets — even in poor network areas — and syncing later without data loss was a technical hurdle.`,
            }
        ],
        solutions: [
            {
                heading: 'Unified App Structure',
                description: 'Used a role-based login system to dynamically change the UI and functionality based on the user type (vendor, employee, manager) within the same app shell.'
            },
            {
                heading: 'Ticket Management with Media Support',
                description: 'Enabled multi-media ticket logging with offline sync support. Users can raise issues, attach photos/videos, and receive notifications upon resolution or assignment.'
            },
            {
                heading: 'Shift Scheduling System',
                description: 'Mid managers can assign/reschedule shifts on the fly using calendar-based views. Employee dashboards show upcoming duties, and notifications ensure timely updates.'
            }
        ]
    }

};

export default NymbleUp;
