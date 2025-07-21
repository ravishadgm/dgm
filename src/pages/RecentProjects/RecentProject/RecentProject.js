import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetailsLayout from '../../../components/common/ProjectDetailsLayout/ProjectDetailsLayout';
import AboutProject from '../../../components/common/AboutProject/AboutProject';
import FarmHouseHub from "./FarmHouseHub/FarmHouseHub"
import ProjectCarousel from '../../../components/common/ProjectCarousel/ProjectCarousel';
import EasyGym from './EasyGym/EasyGym';
import GenieDelivery from './GenieDelivery/GenieDelivery';
import OneVision from './OneVision/OneVision';
import Efone from './Efone/Efone';

const projectMap = {
    'farmhousehub': FarmHouseHub,
    'easygym': EasyGym,
    'geniedelivery': GenieDelivery,
    'onevision': OneVision,
    'efone': Efone,
};

const RecentProject = () => {
    const { projectId } = useParams();
    const project = projectMap[projectId];

    if (!project) return <h2>Project Not Found</h2>;

    return (
        <>
            <ProjectDetailsLayout {...project} />
            <AboutProject {...project.aboutProject} />
            {project.recentApplications && (
                <ProjectCarousel
                    title="Recent Applications"
                    data={project.recentApplications}
                    visibleCount={3}
                />
            )}
        </>
    );
};

export default RecentProject;
