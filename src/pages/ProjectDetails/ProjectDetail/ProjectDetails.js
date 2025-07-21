import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetailsLayout from '../../../components/common/ProjectDetailsLayout/ProjectDetailsLayout';
import AboutProject from '../../../components/common/AboutProject/AboutProject';
import NymbleUp from './NumbleUp/NumbleUp';
import CoffeeChat from './CoffeeChat/CoffeeChat';
import AsiteField from './AsiteField/AsiteField';
import VarnAlluminium from './VarnAlluminium/VarnAlluminium';
import TeamFlow from './TeamFlow/TeamFlow';
import AddScale from './AddScale/AddScale';
import RecentApplications from "./RecentApplications/RecentApplications";

const projectMap = {
    'nymbleup': NymbleUp,
    'coffeechat': CoffeeChat,
    'asite-field': AsiteField,
    'varn-alluminium': VarnAlluminium,
    'teamflow': TeamFlow,
    'addscale': AddScale,
};

const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = projectMap[projectId];

    if (!project) return <h2>Project Not Found</h2>;

    return (
        <>
            <ProjectDetailsLayout {...project} />
            <AboutProject {...project.aboutProject} />
            <RecentApplications {...project} />
        </>
    );
};

export default ProjectDetails;
