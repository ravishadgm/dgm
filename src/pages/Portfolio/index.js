import React from 'react';
import PortfolioInfo from './PorfolioInfo/PortfolioInfo'
import Project from "./Project/Project";
// import RecentApplications from './RecentApplications/RecentApplications';
// import ContactUs from "./ContactUs/ContactUs";
import RecentApplications from './RecentApplications/RecentApplications';
import ApplyTable from './ApplyTable/ApplyTable';

function index() {
    return (
        <>
            <PortfolioInfo />
            <Project />
            {/* <RecentApplications /> */}
            <RecentApplications />
            <ApplyTable />
            {/* <ContactUs /> */}
        </>
    )
}

export default index