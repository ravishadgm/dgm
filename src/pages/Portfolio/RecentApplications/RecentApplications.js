import React from 'react';
import ProjectCarousel from '../../../components/common/ProjectCarousel/ProjectCarousel';
import Images from '../../../assets/images';

const apps = [
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
    {
        title: 'Efone',
        description: 'Efon app for global calls, chats, and managing multiple business numbers in one place.',
        image: Images.Efone,
        link: "/recent-project/efone"
    },
];

export default function RecentApplications() {
    return <ProjectCarousel title="Recent Applications" data={apps} visibleCount={3} />;
}
